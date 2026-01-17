"use client";

import { useState } from "react";

type Props = {
  title: string;
  apiEndpoint: string;
  accept: string;
  outputFileName: string;
};

export default function ImageUpload({
  title,
  apiEndpoint,
  accept,
  outputFileName,
}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setError("");
    setSuccess(false);
  };

  const handleConvert = async () => {
    if (!file) return setError("Please upload an image first.");

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);

      const res = await fetch(apiEndpoint, { method: "POST", body: fd });
      if (!res.ok) throw new Error("Conversion failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = outputFileName;
      a.click();
      URL.revokeObjectURL(url);

      setSuccess(true);
      setTimeout(() => {
        setFile(null);
        setPreview(null);
        setSuccess(false);
      }, 2500);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 max-w-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>

      <label
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
        }}
        className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition
          ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
        `}
      >
        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => e.target.files && handleFile(e.target.files[0])}
        />

        {!file ? (
          <>
            <p>Drag & drop image</p>
            <p className="text-sm text-gray-400">or tap to select</p>
          </>
        ) : (
          <>
            <img src={preview!} className="w-32 h-32 object-contain mb-3" />
            <p className="text-sm">{file.name}</p>
          </>
        )}
      </label>

      <button
        onClick={handleConvert}
        disabled={loading}
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold"
      >
        {loading ? "Converting..." : "Convert Image"}
      </button>

      {success && <p className="text-green-600 text-sm mt-3 text-center">✅ Downloaded successfully</p>}
      {error && <p className="text-red-600 text-sm mt-3 text-center">{error}</p>}
    </div>
  );
}
