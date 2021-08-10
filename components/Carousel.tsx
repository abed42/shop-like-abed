/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1622839065814-02ddfdb8996c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
];
// images must be an array of urls , if using Next JS this could something like

export const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      {/* <div className="px-4 py-5 sm:p-6">Content goes here</div> */}
      <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
        <div className="relative w-full">
          <div className="carousel">
            {images.map((img, i) => (
              <div className="w-full flex-shrink-0" key={img}>
                <img src={currentImage} className="w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
