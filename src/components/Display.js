import React from 'react';
import image1 from '../assets/hand.png';
import image2 from '../assets/CGB08122RYRYAM.pdf.jpg';

const DisplayPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex rounded-lg overflow-hidden shadow-lg">
        <img src={image1} alt="Image 1" className="object-cover w-80 h-80" />
        <img src={image2} alt="Image 2" className="object-cover w-80 h-80" />
      </div>
    </div>
  );
};

export default DisplayPage;