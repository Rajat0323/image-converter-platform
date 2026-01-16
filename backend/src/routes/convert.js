const express = require("express");
const upload = require("../middleware/upload");
const convertPngToJpg = require("../services/pngToJpg");

const router = express.Router();

router.post("/png-to-jpg", upload.single("image"), async (req, res) => {
  try {
    const outputFile = await convertPngToJpg(req.file.path);
    res.json({
      success: true,
      file: `/download/${outputFile}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
