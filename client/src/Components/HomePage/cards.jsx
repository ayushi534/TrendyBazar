import React from "react";
import Image from "../../assets/Pottery.jpg";

const Cards = [
  {
    id: 1,
    title: "Art",
    image: Image,
    category: "Art",
    price: "₹499",
  },
  {
    id: 2,
    title: "Handmade Pottery Vase",
    image: Image,
    category: "Pottery",
    price: "₹899",
  },
  {
    id: 3,
    title: "Paintings",
    image: Image,
    category: "Painting",
    price: "₹699",
  },
  {
    id: 4,
    title: "Candles",
    image: Image,
    category: "Candles",
    price: "₹399",
  },
];

const ProductsCards = () => {
  return (
    <section className="bg-[#FAF3E0] py-16 px-6 font-sans">
      <h2 className="text-3xl font-bold text-center text-[#4E342E] mb-10">
        Explore Artworks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {Cards.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFF8E1] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#3E2723] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6D4C41] mb-2">{item.category}</p>
              <p className="text-lg font-bold text-[#4E342E]">{item.price}</p>
              <button className="mt-4 px-5 py-2 bg-[#4E342E] text-[#FAF3E0] rounded-full hover:bg-[#3E2723] transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCards;
