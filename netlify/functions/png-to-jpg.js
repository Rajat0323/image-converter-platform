const sharp = require("sharp");
const Busboy = require("busboy");

exports.handler = async (event) => {
  // Handle CORS preflight
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
    const headers = event.headers;
    const contentType =
      headers["content-type"] || headers["Content-Type"];

    const busboy = new Busboy({ headers: { "content-type": contentType } });

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
        const jpgBuffer = await sharp(buffer)
          .jpeg({ quality: 90 })
          .toBuffer();

        resolve({
          statusCode: 200,
          headers: {
            ...cors(),
            "Content-Type": "image/jpeg",
          },
          body: jpgBuffer.toString("base64"),
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

    const bodyBuffer = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : Buffer.from(event.body);

    busboy.end(bodyBuffer);
  });
};

function cors() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}
