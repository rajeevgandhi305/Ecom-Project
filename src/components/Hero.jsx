
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg',
  'https://images.pexels.com/photos/460402/pexels-photo-460402.jpeg',
  'https://cdn.pixabay.com/photo/2015/01/13/13/21/paradise-598201_640.jpg',
  'https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg',
  'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(`Current image index: ${currentImage}`);
  }, [currentImage]);

  return (
    <div className='w-full h-screen relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            src={image}
            alt={`slide-${index}`}
            onLoad={() => console.log(`Image ${index} loaded successfully`)}
            onError={() => console.error(`Image ${index} failed to load`)}
          />
        ))}
      </div>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-full' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Private Beaches & Getaways
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className='bg-white text-black'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

