const sharp = require("sharp");
const Busboy = require("busboy");

exports.handler = async (event) => {
  // ✅ Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: cors(),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: cors(),
      body: "Method Not Allowed",
    };
  }

  return new Promise((resolve) => {
    const busboy = new Busboy({
      headers: {
        "content-type":
          event.headers["content-type"] ||
          event.headers["Content-Type"],
      },
    });

    let buffer = Buffer.alloc(0);

    busboy.on("file", (fieldname, file) => {
      if (fieldname !== "image") {
        file.resume();
        return;
      }

      file.on("data", (data) => {
        buffer = Buffer.concat([buffer, data]);
      });
    });

    busboy.on("finish", async () => {
      if (!buffer.length) {
        resolve({
          statusCode: 400,
          headers: cors(),
          body: "No image uploaded",
        });
        return;
      }

      try {
        const jpg = await sharp(buffer).jpeg({ quality: 90 }).toBuffer();

        resolve({
          statusCode: 200,
          headers: {
            ...cors(),
            "Content-Type": "image/jpeg",
          },
          body: jpg.toString("base64"),
          isBase64Encoded: true,
        });
      } catch (err) {
        resolve({
          statusCode: 500,
          headers: cors(),
          body: err.message,
        });
      }
    });

    busboy.end(Buffer.from(event.body, "base64"));
  });
};

function cors() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}
