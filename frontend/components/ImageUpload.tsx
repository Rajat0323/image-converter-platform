"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!file) {
      setError("Please select a PNG image");
      return;
    }

    try {
      setError("");

      const formData = new FormData();
      formData.append("image", file); // MUST be "image"

      const response = await fetch("/api/png-to-jpg", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Conversion failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "converted.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      setError("Failed to convert image");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/png"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleConvert}>Convert to JPG</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
