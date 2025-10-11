import React from "react";
import Image from '../../assets/data'

const ArtAmour = () => {
  return (
    <div className="min-h-screen bg-[#4E342E] text-[#F5F5DC] font-sans flex flex-col">
      
      {/* 🔹 Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Background Image with Soft Brown Overlay */}
        <div className="absolute inset-0">
          <img
            src={Image.fornt} alt="Art Background" className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#4E342E]/60"></div>
        </div>

        {/* Text Section */}
        <div className="relative z-10 space-y-4">
          <h1 className="text-6xl font-extrabold text-[#FAF3E0] tracking-widest drop-shadow-lg">
            ArtAmour
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#FFFDD0] italic">
            The Soul of Art, Crafted with Love
          </h2>
          <p className="max-w-2xl mx-auto text-[#F5F5DC] text-lg leading-relaxed mt-6">
            ArtAmour brings you handpicked paintings, pottery, candles, and handmade art 
            that breathe warmth and emotion into your space — crafted by passionate 
            artists around the world.
          </p>
          <button className="bg-[#FAF3E0] text-[#4E342E] px-8 py-3 rounded-full font-semibold hover:bg-[#FFFDD0] transition">
            Explore Collections
          </button>
        </div>
      </section>

     
      {/*  */}
    </div>
  );
};

export default ArtAmour;
