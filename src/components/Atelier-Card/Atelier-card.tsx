import React from "react";
import "./Atelier-card.css";
import Carousel from "../Carousel/carousel";
import useScrollAnimation from "../ScrollAnimation/scrollAnimation";
interface AtelierSectionProps {
  title: string;
  description: React.ReactNode;
  image: string | string[];
  imageAlt?: string;
  reverse?: boolean;  // Controls image position either left or right
  backgroundColor?: string;
  // color?: string; 
}

const AtelierCard: React.FC<AtelierSectionProps> = ({
  title,
  description,
  image,
  imageAlt = "Atelier image",
  reverse = false,
  backgroundColor = "#f7f6ec",
  // color = "#6d6d65"
}) => {
  const hasMultipleImages = Array.isArray(image);
  useScrollAnimation();
  return (
    <section
      className="atelier-section"
      style={{ backgroundColor}}
    >
      <div
        className={`atelier-content ${reverse ? "reverse" : ""} fade-up`}
      >
        <div className="atelier-text">
          <h2 className="atelier-titre">{title}</h2>
          {Array.isArray(description) ? (
            description.map((para, idx) => (
              <>
              <p key={idx}>{para}</p> 
              </>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>
        {hasMultipleImages ? (
          <Carousel images={image} autoScroll={true} scrollSpeed={4000}/>
        ) : (
          <img className="atelier-img" src={image} alt={imageAlt} />
        )}
      </div>
    </section>
  );
};

export default AtelierCard;
