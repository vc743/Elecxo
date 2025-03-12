import { useEffect, useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

export const Carousel = ({ children, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? children.length - 1 : currentSlide - 1
    );
  };

  const next = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === children.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    if(!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white shadow"
          onClick={prev}
        >
          <TbChevronLeft size={30} />
        </button>
        <button
          className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white shadow"
          onClick={next}
        >
          <TbChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};
