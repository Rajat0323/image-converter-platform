"use client";

import { useState } from "react";

export default function PngToJpgClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  async function convert() {
    if (!file) return;
    setLoading(true);

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/png-to-jpg", {
      method: "POST",
      body: form,
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.jpg";
    a.click();

    setLoading(false);
  }

  return (
    <section className="flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-6">
          PNG to JPG Converter
        </h1>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10">
          {!preview && (
            <>
              <p className="text-gray-600 mb-4">
                Drag & drop image or click to select
              </p>
              <input
                type="file"
                accept="image/png"
                onChange={onFileChange}
                className="mx-auto"
              />
            </>
          )}

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mx-auto rounded-lg max-h-56"
            />
          )}
        </div>

        <button
          onClick={convert}
          disabled={!file || loading}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Converting..." : "Convert to JPG"}
        </button>
      </div>
    </section>
  );
}
