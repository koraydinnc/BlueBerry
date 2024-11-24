import React from 'react';
import Foto from '../assets/patika.png';

const StoryPage = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center">
      <img
        src={Foto}
        alt="Patika'nın Hikayesi Zaman Çizelgesi"
        className="max-w-full h-auto shadow-lg rounded-lg"
      />
    </div>
  );
};

export default StoryPage;
