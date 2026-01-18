const tools = [
  {
    title: "PNG to JPG",
    desc: "Convert PNG images to JPG format",
    link: "/png-to-jpg",
  },
  {
    title: "JPG to PNG",
    desc: "Convert JPG images to PNG format",
    link: "/jpg-to-png",
  },
  {
    title: "PNG to WEBP",
    desc: "Convert PNG images to WEBP format",
    link: "/png-to-webp",
  },
  {
    title: "WEBP to JPG",
    desc: "Convert WEBP images to JPG format",
    link: "/webp-to-jpg",
  },
];

export default function ToolCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <a
          key={tool.title}
          href={tool.link}
          className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 hover:border-red-500 transition"
        >
          <h3 className="text-lg font-semibold">{tool.title}</h3>
          <p className="mt-2 text-sm text-gray-400">{tool.desc}</p>
        </a>
      ))}
    </div>
  );
}
