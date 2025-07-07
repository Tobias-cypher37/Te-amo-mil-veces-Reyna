import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-cyan-400 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-pulse mb-6">
          Mil te amo, Mariela 💜💙
        </h1>
        <p className="text-white text-lg md:text-xl mb-8">
          Esta página está hecha solo para ti.
        </p>
      </div>

      <div className="relative w-full h-32 overflow-hidden">
        <div className="absolute whitespace-nowrap animate-marquee text-white text-2xl">
          {Array.from({ length: 1000 }, (_, i) => (
            <span key={i} className="mx-4">Te amo</span>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full max-w-md">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-60 rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/pxxT7PzBfz8?autoplay=1&loop=1&playlist=pxxT7PzBfz8"
            title="Tus Vueltas - Milo J"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
