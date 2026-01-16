"use client";

import React, { useState } from "react";

const ImageUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleConvert = async () => {
    if (!file) {
      setError("Please select a PNG file first");
      return;
    }

    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      // 🔥 BACKEND API URL (Netlify Function or backend URL)
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL ||
        "https://image-converter-platform.netlify.app/.netlify/functions/png-to-jpg";

      const response = await fetch(API_URL, {
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
    } catch (err) {
      setError("Failed to fetch");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/png"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <br />
      <br />

      <button onClick={handleConvert}>Convert to JPG</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ImageUpload;
