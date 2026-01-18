"use client";

import { useState } from "react";

/* ============================
   Props Type Definition
   ============================ */
interface ImageUploadBoxProps {
  title: string;
  apiEndpoint: string;
  accept: string;
  outputFileName: string;
}

/* ============================
   Component
   ============================ */
export default function ImageUploadBox({
  title,
  apiEndpoint,
  accept,
  outputFileName,
}: ImageUploadBoxProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(apiEndpoint, {
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
      a.download = outputFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 text-center">
      <p className="text-lg mb-4">{title}</p>

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
          accept={accept}
          hidden
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </label>

      <button
        onClick={handleConvert}
        disabled={!file || loading}
        className="mt-6 bg-red-600 hover:bg-red-700 disabled:bg-zinc-600 px-6 py-3 rounded-lg font-semibold w-full"
      >
        {loading ? "Converting..." : "Convert"}
      </button>
    </div>
  );
}
