"use client";

import { useState } from "react";

export default function PngToJpgPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  }

  async function handleConvert() {
    if (!file) return;

    setLoading(true);
    setProgress(0);

    // fake progress (UX)
    const interval = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 10 : p));
    }, 300);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/png-to-jpg", {
      method: "POST",
      body: formData,
    });

    clearInterval(interval);
    setProgress(100);

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.jpg";
    a.click();

    setLoading(false);
  }

  return (
    <main className="container fade-in">
      <div className="upload-wrapper">
        <div className="upload-box">
          <h2>PNG to JPG Converter</h2>

          {!preview && (
            <>
              <p>Drag & drop your PNG image here</p>
              <input
                type="file"
                accept="image/png"
                onChange={handleFileChange}
              />
            </>
          )}

          {preview && (
            <div style={{ marginTop: 20 }}>
              <img
                src={preview}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: 220,
                  borderRadius: 12,
                  marginBottom: 12,
                }}
              />
              <p style={{ fontSize: 14, color: "#6b7280" }}>
                {file?.name} · {(file!.size / 1024).toFixed(1)} KB
              </p>
            </div>
          )}

          {loading && (
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  height: 8,
                  background: "#e5e7eb",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "#e5322d",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <p style={{ fontSize: 13, marginTop: 6 }}>
                Converting… {progress}%
              </p>
            </div>
          )}

          <button
            onClick={handleConvert}
            disabled={!file || loading}
          >
            {loading ? "Converting…" : "Convert to JPG"}
          </button>
        </div>
      </div>
    </main>
  );
}
