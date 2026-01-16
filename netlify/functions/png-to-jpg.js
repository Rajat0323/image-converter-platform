const sharp = require("sharp");
const Busboy = require("busboy");

exports.handler = async (event) => {
  // ✅ Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders(),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: "Method Not Allowed",
    };
  }

  return new Promise((resolve, reject) => {
    const headers = event.headers;

    const busboy = new Busboy({
      headers: {
        "content-type": headers["content-type"] || headers["Content-Type"],
      },
    });

    let imageBuffer = Buffer.alloc(0);

    busboy.on("file", (_, file) => {
      file.on("data", (data) => {
        imageBuffer = Buffer.concat([imageBuffer, data]);
      });
    });

    busboy.on("finish", async () => {
      try {
        const jpgBuffer = await sharp(imageBuffer)
          .jpeg({ quality: 90 })
          .toBuffer();

        resolve({
          statusCode: 200,
          headers: {
            ...corsHeaders(),
            "Content-Type": "image/jpeg",
            "Content-Disposition": "attachment; filename=converted.jpg",
          },
          body: jpgBuffer.toString("base64"),
          isBase64Encoded: true,
        });
      } catch (err) {
        resolve({
          statusCode: 500,
          headers: corsHeaders(),
          body: JSON.stringify({ error: err.message }),
        });
      }
    });

    busboy.end(Buffer.from(event.body, "base64"));
  });
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}
