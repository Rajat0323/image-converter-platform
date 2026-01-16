"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleConvert = async () => {
    setError("");

    if (!file) {
      setError("Please select a PNG file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", file);

      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      if (!API_URL) {
        setError("API URL not configured");
        return;
      }

      const response = await fetch(`${API_URL}/png-to-jpg`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("API request failed");
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
      console.error(err);
      setError("Failed to convert image");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="file"
        accept="image/png"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br />
      <br />

      <button onClick={handleConvert}>
        Convert to JPG
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
