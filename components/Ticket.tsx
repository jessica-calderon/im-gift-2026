"use client";

import Image from "next/image";

export default function Ticket() {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl px-8 py-10 shadow-xl mb-10 w-[320px] text-center overflow-hidden">
      <div className="relative w-full max-h-[240px] flex justify-center mb-4">
        <Image
          src="/tix.png"
          alt="Iron Maiden concert ticket"
          width={280}
          height={360}
          className="w-auto max-h-[240px] object-contain rounded-lg"
        />
      </div>
      <p className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-2">
        Iron Maiden
      </p>
      <p className="text-zinc-100 text-lg">Concert Ticket</p>
      <p className="text-zinc-500 text-sm mt-2">Admit One</p>
    </div>
  );
}
