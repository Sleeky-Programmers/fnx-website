"use client";

interface ValueCardProps {
  title: string;
  description: string;
  variant: "light" | "dark";
}

export function ValueCard({ title, description, variant }: ValueCardProps) {
  return (
    <div
      className={`p-8 rounded-lg ${
        variant === "light" ? "bg-gray-100" : "bg-[#9F836D] text-white" // bg-[#9F836D]
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg leading-relaxed">{description}</p>
    </div>
  );
}