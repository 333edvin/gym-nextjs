'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import preloader from '../../../public/images/preloader.svg'
import logo from '../../../public/images/logo.svg'
export default function Preloader() {
  useEffect(() => {
    gsap.fromTo(
      '.preloader',
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        delay: 2, 
        ease: 'power2.out',
        onComplete: () => {
          document.querySelector('.preloader').style.display = 'none';
        },
      }
    );
  }, []);

  return (
    <div className="preloader fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="loader relative">
        <Image src={preloader} alt='preloader' className="w-52 z-10"/>
        <Image src={logo} alt='logo' className="absolute top-14 w-52 z-20"/>
      </div>
    </div>
  );
}

