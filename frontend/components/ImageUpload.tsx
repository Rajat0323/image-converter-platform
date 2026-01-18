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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleConvert() {
    if (!file) return;

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      const blob = await res.blob();

      // ✅ MOBILE SAFE DOWNLOAD
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = outputFileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white text-black rounded-2xl p-6 shadow">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {title}
      </h1>

      <input
        type="file"
        accept={accept}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 w-full"
      />

      <button
        onClick={handleConvert}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
      >
        {loading ? "Converting..." : "Convert Image"}
      </button>

      {error && (
        <p className="text-red-600 mt-3 text-center font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
