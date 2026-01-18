"use client";

import { useState } from "react";

export default function ImageUpload({
  title,
  apiEndpoint,
  accept,
  outputFileName,
}: any) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function convert() {
    if (!file) return setError("Please select a file");

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      setError("Something went wrong");
      setLoading(false);
      return;
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    // MOBILE SAFE DOWNLOAD
    window.location.href = url;

    setLoading(false);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>{title}</h1>

      <input
        type="file"
        accept={accept}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br /><br />

      <button onClick={convert} disabled={loading}>
        {loading ? "Converting..." : "Convert Image"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  );
}
