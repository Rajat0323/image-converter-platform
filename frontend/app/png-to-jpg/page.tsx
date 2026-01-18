"use client";

import { useState } from "react";

export default function ImageUploadBox() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/png-to-jpg", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Conversion failed");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "converted.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 text-center">
      <p className="text-lg mb-4">Upload your PNG image</p>

      <label className="block cursor-pointer">
        <div className="border-2 border-dashed border-zinc-600 rounded-lg py-12 hover:border-red-500 transition">
          <p className="text-gray-400">
            {file ? file.name : "Drag & drop your image here"}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            or click to select file
          </p>
        </div>

        <input
          type="file"
          accept="image/png"
          hidden
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </label>

      <button
        onClick={handleConvert}
        disabled={!file || loading}
        className="mt-6 bg-red-600 hover:bg-red-700 disabled:bg-zinc-600 px-6 py-3 rounded-lg font-semibold w-full"
      >
        {loading ? "Converting..." : "Convert to JPG"}
      </button>
    </div>
  );
}
