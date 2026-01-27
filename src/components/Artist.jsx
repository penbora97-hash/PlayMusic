import React from "react";
import { items } from "../data1";

const Artist = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-12 selection:bg-violet-500/30">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Gallery Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-75 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {item.name}
                </h3>
               

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
