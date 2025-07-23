import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

type CarouselProps = {
  images: string[];
  autoScroll?: boolean;
  scrollSpeed?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoScroll = true,
  scrollSpeed = 5000,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  let interval: number;
  if (!isMobile && autoScroll) {
    interval = window.setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const nextScrollLeft = scrollLeft + clientWidth;
        carouselRef.current.scrollTo({
          left: nextScrollLeft >= scrollWidth ? 0 : nextScrollLeft,
          behavior: "smooth",
        });
      }
    }, scrollSpeed);
  }
  return () => clearInterval(interval);
}, [isMobile, autoScroll, scrollSpeed]);
  return (
    <div
      className={`responsive-carousel ${isMobile ? "mobile" : "desktop"}`}
      ref={carouselRef}
    >
      {images.map((src, index) => (
        <div className="carousel-slide" key={index}>
          <img src={src} alt={`carousel-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
