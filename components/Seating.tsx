"use client";

import Image from "next/image";

export default function Seating() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-0 flex-1 w-full">
      <div className="relative flex items-center justify-center max-h-[65vh]">
        <Image
          src="/seats.jpeg"
          alt="Seating chart"
          width={600}
          height={400}
          className="max-h-[65vh] w-auto object-contain rounded-xl shadow-lg"
        />
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            boxShadow: "inset 0 0 60px 20px rgba(234, 179, 8, 0.15)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
