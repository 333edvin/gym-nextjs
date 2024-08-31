'use client'
import gsap from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import testimonial from '../../../public/images/bg/bg-cta.jpg'
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { id: 1, quote: "A great Start to a healthy life", text: "Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem.", name: "John Donas", role: "Manager" },
  { id: 2, quote: "The workout worth attending!", text: "Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem.", name: "Donas Jack", role: "Manager" },
  { id: 3, quote: "Very Professional Club and coaches", text: "Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem.", name: "Mikel Hussy", role: "Manager" },
  { id: 4, quote: "Shape your body and healthy!", text: "Laboriosam molestias aperiam sit corporis sunt, hic veritatis possimus optio reprehenderit, laudantium excepturi, consequatur. Assumenda hic error veniam exercitationem.", name: "Hiker Jons", role: "Manager" },
];

const Testimonials = () => {
  const container = useRef(null);
  const title = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(title.current, { y: -300 },0);
    });
    return () => context.revert();
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative pt-10" >
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <div className="mb-3">
            <div className="w-16 h-1 mx-auto bg-yellow-400"></div>
          </div>
          <h2 className="text-white text-3xl font-semibold">What People Say</h2>
        </div>
<div className="relative " ref={container}>

        <Image src={testimonial} className="w-full h-lvh object-cover" alt="Background Image" />
        <div ref={title} className="absolute bottom-0 overflow-hidden bg-black/30 w-full  ">

          <div className="flex transition-transform ease-out duration-500 p-10" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full text-center p-6 rounded-lg">
                <i className="text-4xl text-yellow-400">&#8220;</i>
                <h3 className="mt-4 text-white text-xl font-semibold">{testimonial.quote}</h3>
                <p className="my-4 text-gray-300">{testimonial.text}</p>
                <div>
                  <h4 className="text-white font-normal">{testimonial.name}</h4>
                  <span className="text-gray-400">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 text-white p-2 rounded-full"
          >
            &#8249;
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 text-white p-2 rounded-full"
            >
            &#8250;
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
