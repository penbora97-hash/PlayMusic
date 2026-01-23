import React from 'react'
import { items } from '../data1';
const Artist = () => {
  return (
    <div className='min-h-screen  bg-gray-900 selection:bg-violet-500/30'>
     <div className="min-h-screen scroll-smooth p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Gallery Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id}  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div  className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500 mt-1 font-bold text-lg">Songs: {item.song}</p>
      </div>
    </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Artist
