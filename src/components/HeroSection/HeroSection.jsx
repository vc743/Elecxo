import { Carousel } from "../Carousel/Carousel";
import { TbChevronRight } from "react-icons/tb";

export const HeroSection = () => {
  const slides = [
    "https://img.freepik.com/free-vector/social-media-post-template-cyber-monday_23-2149707782.jpg?t=st=1741730274~exp=1741733874~hmac=d3bf3c6cbb9aab31d8999b208b01357a2a399793a917c14c2722a223ad5d88e5&w=1800",
    "https://img.freepik.com/free-vector/hand-drawn-electronics-store-facebook-template_23-2151138109.jpg?t=st=1741730324~exp=1741733924~hmac=637b5d5504720f8e45dc489b6caaa6b090bfbb9b0b07e4e0f9f7f59541f6768a&w=1800",
    "https://img.freepik.com/free-vector/realistic-cyber-monday-social-media-post-template_23-2149762134.jpg?t=st=1741730416~exp=1741734016~hmac=6ef75a2f7b08b6a507874fc76d399af6031580a6d58d0661923e959f1a47423c&w=1800",
    "https://img.freepik.com/free-psd/banner-cyber-monday-template_23-2148707046.jpg?t=st=1741730479~exp=1741734079~hmac=e39a243e91ac7d9f8657e6fdd1cec1ecf0999215dded353ffb116dfc650a1466&w=2000",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 bg-gray-100/50">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="basis-1/2 space-y-4">
          <span className="text-xs font-medium border rounded-full px-3 py-1">
            Special Offer
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">
            Discover Our Featured Products
          </h1>
          <p className="text-gray-500">
            Find everything you need at the best prices and guaranteed quality.
          </p>
          <button className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-black/90 hover:bg-black/80 px-8 py-3 rounded-md transition-colors duration-200">
            <span>See Offers</span>
            <TbChevronRight size={15}/>
          </button>
        </div>
        <div className="basis-1/2">
          <Carousel autoSlide>
            {slides.map((slide) => (
              <img key={slide} src={slide} className="rounded-md" alt="Sales banner" loading="lazy" />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
