"use client";

export default function Flowers() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <div className="w-48 h-48 rounded-2xl bg-zinc-800/80 flex items-center justify-center overflow-hidden">
        <img
          src="https://placehold.co/256x256/1f2937/9ca3af?text=🌸"
          alt="Flowers"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-zinc-100 text-lg">These are for you.</p>
        <p className="text-zinc-400">Because you deserve flowers too.</p>
      </div>
    </div>
  );
}
