"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!file) {
      setError("Please select a PNG file");
      return;
    }

    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

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
      window.URL.revokeObjectURL(url);
    } catch (e) {
      setError("Failed to convert image");
    }
  };

  return (
    <div>
      <h1>Convert PNG to JPG Online</h1>
      <p>Upload a PNG image and convert it into JPG format instantly.</p>

      <input
        type="file"
        accept="image/png"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br /><br />

      <button onClick={handleConvert}>Convert to JPG</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
