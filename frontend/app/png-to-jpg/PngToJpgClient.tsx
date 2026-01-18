"use client";

import { useState } from "react";

export default function PngToJpgClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  async function convert() {
    if (!file) return;

    setLoading(true);
    setProgress(10);

    const fake = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 10 : p));
    }, 300);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/png-to-jpg", {
      method: "POST",
      body: formData,
    });

    clearInterval(fake);
    setProgress(100);

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.jpg";
    a.click();

    setLoading(false);
  }

  return (
    <main className="container">
      <div className="upload-wrapper">
        <div className="upload-box">
          <h1>PNG to JPG Converter</h1>
          <p>Convert PNG images to JPG instantly with high quality.</p>

          {!preview && (
            <>
              <div className="drop-area">
                Drag & drop image or click to select
              </div>
              <input type="file" accept="image/png" onChange={onFileChange} />
            </>
          )}

          {preview && (
            <div className="preview">
              <img src={preview} alt="Preview" />
              <p>
                {file?.name} • {(file!.size / 1024).toFixed(1)} KB
              </p>
            </div>
          )}

          {loading && (
            <div className="progress">
              <div style={{ width: `${progress}%` }} />
              <span>{progress}%</span>
            </div>
          )}

          <button disabled={!file || loading} onClick={convert}>
            {loading ? "Converting..." : "Convert to JPG"}
          </button>
        </div>
      </div>
    </main>
  );
}
