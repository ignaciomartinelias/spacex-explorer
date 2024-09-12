"use client";

import Image from "next/image";

import { useState } from "react";

export const ImageCarousel = ({
  images,
  name,
}: {
  images: string[];
  name: string;
}) => {
  const reducedImages = images.slice(0, 5);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === reducedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? reducedImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="mb-4 aspect-[3/2]">
        <Image
          src={reducedImages[currentImageIndex]}
          alt={name}
          width={800}
          height={300}
          objectFit="cover"
          className="rounded-lg h-full object-cover"
        />
      </div>
      <div className="flex justify-center space-x-2 mb-4">
        {reducedImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`aspect-[3/2] rounded-sm overflow-hidden ${
              index === currentImageIndex ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <Image
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              width={64}
              height={64}
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </>
  );
};
