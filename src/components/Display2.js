import React from 'react';
import image1 from '../assets/normal.jpg';
import image2 from '../assets/report.png';

const DisplayPage1 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex rounded-lg overflow-hidden shadow-lg">
        <img src={image1} alt="Image 1" className="object-cover w-80 h-80" />
        <img src={image2} alt="Image 2" className="object-cover w-80 h-90" />
      </div>
    </div>
  );
};

export default DisplayPage1;