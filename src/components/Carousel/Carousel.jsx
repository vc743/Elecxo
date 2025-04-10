import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

export const Carousel = ({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
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
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <Button
          iconLeft={<TbChevronLeft size={30} />}
          variant="secondary"
          className="bg-white/80 p-1 shadow"
          onClick={prev}
        ></Button>
        <Button
          iconRight={<TbChevronRight size={30} />}
          variant="ghost"
          className="bg-white/80 p-1 shadow"
          onClick={next}
        ></Button>
      </div>
    </div>
  );
};
