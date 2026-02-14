"use client";

import Image from "next/image";

export default function Seating() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="/seats.jpeg"
          alt="Seating chart"
          width={600}
          height={400}
          className="rounded-lg object-contain max-w-full h-auto"
        />
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            boxShadow: "inset 0 0 60px 20px rgba(234, 179, 8, 0.15)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
