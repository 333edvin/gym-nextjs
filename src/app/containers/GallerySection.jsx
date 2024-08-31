'use client'
import { useState } from "react";
import Image from "next/image";
import EZBAR from "../components/EZbar";

const galleryImages = [
  { id: "gallery-01", src: "/images/gallery/gallery-01.jpg" },
  { id: "gallery-02", src: "/images/gallery/gallery-02.jpg" },
  { id: "gallery-03", src: "/images/gallery/gallery-03.jpg" },
  { id: "gallery-04", src: "/images/gallery/gallery-04.jpg" },
  { id: "gallery-05", src: "/images/gallery/gallery-05.jpg" },
  { id: "gallery-06", src: "/images/gallery/gallery-06.jpg" },
  { id: "gallery-07", src: "/images/gallery/gallery-07.jpg" },
  { id: "gallery-08", src: "/images/gallery/gallery-08.jpg" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold  mb-4">Our Gallery</h2>
          <EZBAR/>
          <p className="">
            We offer more than 35 group exercise, aerobic classes each week.
          </p>
        </div>
      </div>
      <div className=" mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              id={image.id}
              className="relative group overflow-hidden  cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                src={image.src}
                width={350}
                height={250}
                alt={`Gallery Image ${image.id}`}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-3xl w-full ">
            <button
              className="absolute top-3 right-6 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-2xl"
              onClick={showPreviousImage}
            >
              &#10094;
            </button>
            <Image
              src={galleryImages[currentIndex].src}
              width={800}
              height={600}
              alt={`Gallery Image ${galleryImages[currentIndex].id}`}
              className="object-contain mx-auto"
            />
            <button
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-2xl"
              onClick={showNextImage}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
