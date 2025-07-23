import{ useEffect, useRef, useState } from "react";
import './homePage.css';
import image1 from "../../assets/images/430744993_895606122573630_6984005007097119147_n-1024x683.jpg";
import image2 from "../../assets/images/429893507_895607842573458_5985357423929257149_n-1024x683.jpg";
import image3 from "../../assets/images/478892007_2616588745199772_4064677020525397183_n.jpg";
import image4 from "../../assets/images/164267790_1584727908385866_2446087196405178210_n.jpg";
import imageTeamBuiliding2 from "../../assets/images/Team-building-2-1.png";
import imageTeamBuiliding3 from "../../assets/images/Team-building-2-2.png";
import imageTeamBuiliding4 from "../../assets/images/Team-building-2-3.png";
import image5 from "../../assets/images/164267790_1584727908385866_2446087196405178210_n.jpg";
import { FaArrowDown, FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../components/Button/button";
import useScrollAnimation from "../../components/ScrollAnimation/scrollAnimation";
import image7 from "../../assets/images/284533645_1890170881174899_4687183235715934538_n-1536x1039.jpg";
import image8 from "../../assets/images/430470354_895596872574555_1978860230065548701_n-1024x576.jpg";
import Drawing1 from "../../assets/images/Drawing1.jpg";
import Drawing2 from "../../assets/images/Drawing2.jpg";  
import Drawing3 from "../../assets/images/Drawing3.jpg";
import Drawing4 from "../../assets/images/Drawing4.jpg";
import Drawing5 from "../../assets/images/Drawing5.jpg";
import Drawing6 from "../../assets/images/Drawing6.jpg";
import Drawing7 from "../../assets/images/Drawing7.jpg";
import Drawing8 from "../../assets/images/Drawing8.jpg";
import Drawing9 from "../../assets/images/Drawing9.jpg";
import Drawing10 from "../../assets/images/Drawing10.jpg"; 
import Drawing11 from "../../assets/images/Drawing11.jpg";
import Drawing12 from "../../assets/images/Drawing12.jpg";
import logo1 from "../../assets/images/logo.jpg";
import logo2 from "../../assets/images/qcl.png";
import logo3 from "../../assets/images/reflet.png";
import logo5 from "../../assets/images/canal.png";
import logo6 from "../../assets/images/2012_logo_for_La_Presse_newspaper.svg.png";
import image9 from "../../assets/images/GatherYourTeams.jpg";
import image10 from "../../assets/images/rentARoom.jpg";
import image11 from "../../assets/images/CustomArt.jpg"
    const slides = [
  {
    image: image3,
    title: "Street Art Montreal",
    buttonText: "Explore Gallery",
    buttonLink: "https://web.archive.org/web/20250212094622/https://loriginal.org/event/bernard-van-orley-at-saint-gery/",
  },
  {
    image: image1,
    title: "Custom-made painting and mural",
    buttonText: "Read More",
    buttonLink: "https://web.archive.org/web/20250222110628/https://artur.art/fr/accueil/",
  },
   {
    image: image9,
    title: "Gather Your Teams",
    buttonText: "Read More",
    buttonLink: "/TeamBuilding",
  },
  {
    image: image2,
    title: "Art and Philisophy",
    buttonText: "Join Us",
    buttonLink: "https://web.archive.org/web/20250222110628/https://artur.art/fr/accueil/",
  },
  {
    image: image4,
    title: "Join Our Community Events For Connection and Growth",
    buttonText: "Explore Gallery",
    buttonLink: "/Volunteer",
  },
  
];
const collection = [
  {
    image: Drawing1,
    title: "Location Plateau",
  },
  {
    image: Drawing2,
    title: "Location Vieux-Montréal",
  },
  {
    image: Drawing3,
    title: "Location Galerie",
  },
  {
    image: Drawing4,
    title: "Location Old Montreal",
  },
  {
    image: Drawing5,
    title: "Shop Plateau",
  },
  {
    image: Drawing6,
    title: "Petit commercial Vieux-Montréal",
  },
  {
    image: Drawing7,
    title: "Location Plateau",
  },
  {
    image: Drawing8,
    title: "Location Vieux-Montréal",
  },
  {
    image: Drawing9,
    title: "Location Galerie",
  },
  {
    image: Drawing10,
    title: "Location Old Montreal",
  },
  {
    image: Drawing11,
    title: "Shop Plateau",
  },
  {
    image: Drawing12,
    title: "Petit commercial Vieux-Montréal",
  }
]
const adcGallery = [
  {
    image: imageTeamBuiliding2,
    alt:"Art Drink Collect 1"
  },
  {
    image: imageTeamBuiliding3,
    alt:"Art Drink Collect 2"
  },
  {
    image: imageTeamBuiliding4,
    alt:"Art Drink Collect 3"
  }
]

const homePage = () => {
  useScrollAnimation();
  const [showMore, setShowMore] = useState(false);
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(true);
  const showMoreBtnRef = useRef<HTMLButtonElement | null>(null);
    const handleShowMore = () => {
      setShowMore(true);
      setShowMoreButtonVisible(false); 
    };

    const handleClose = () => {
      setShowMore(false);
    setTimeout(() => {
      setShowMoreButtonVisible(true);
      showMoreBtnRef.current?.scrollIntoView({ 
        behavior: "smooth", 
        block: "center" 
      });
    }, 600); 
};
  const readArticle = () => {
    window.open("https://web.archive.org/web/20250419084306/https://spacemontreal.ca/");
}
  const handleClick = (url: string) => {
    window.location.href = url;
  }

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);

const nextSlide = () => {
  setDirection(1);
  setPrev(current);
  setCurrent((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
};

const prevSlide = () => {
  setDirection(-1);
  setPrev(current);
  setCurrent((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
};

useEffect(() => {
  const interval = setInterval(nextSlide, 7000);
  return () => clearInterval(interval);
}, []);
    return (
        <>
    <div className="hero-carousel fade-up">
    {slides.map((slide, index) => {
      let slideClass = "";

      if (index === current) {
        slideClass = direction === 1 ? "slide enter-from-right" : "slide enter-from-left";
      } else if (index === prev) {
        slideClass = direction === 1 ? "slide leave-to-left" : "slide leave-to-right";
      } else {
        slideClass = "slide";
      }

      return (
        <div
          key={index}
          className={slideClass}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h2>{slide.title}</h2>
            <a href={slide.buttonLink} className="btn">
              {slide.buttonText}
            </a>
          </div>
        </div>
      );
    })}
    <button className="arrow left" onClick={prevSlide}>
      &#10094;
    </button>
    <button className="arrow right" onClick={nextSlide}>
      &#10095;
    </button>
  </div>
    <section className="art-drink-collect-section fade-up">
    <div className="adc-wrapper">
      <div className="adc-header">
        <p className="adc-subtitle">L'ORIGINAL.</p>
        <h2 className="adc-title">ART AT THE SERVICE OF THE COMMUNITY.</h2>
      </div>
      <div className="adc-gallery">
        {adcGallery.map((item) => (
          <img src={item.image} alt={item.alt} />
        ))}
      </div>
      <div className="adc-info">
        <p>We believe in art that is accessible to all and that brings social and environmental change. 
          L’Original is much more than a gallery: it is a space where creativity, 
          social engagement and ecology meet to shape a more inclusive world.</p>
          <Button text="Our Mission" url="/history"/>
      </div>

  </div>
  </section>

    <section className="Services-section fade-up">
  <h2 className="services-title">
    Our Services – Artistic and Collaborative Experiences
    <span className="cursor">|</span>
  </h2>
  <div className="Services-cards">
    <div className="service-card">
      <img src={image5} alt="Creative Team Building" />
      <div className="text-card">
        <h3>Creative Team Building</h3>
        <p>
          Strengthen your teams through art! Our artistic team building workshops offer an immersive experience 
          where your colleagues can create a collective work together, experiment with street art, or customize recycled objects.
        </p>
        <button className="button" onClick={() => handleClick("/TeamBuilding")}>Team Building <FaArrowRightLong /></button>
      </div>
    </div>

    <div className="service-card">
      <img src={image10} alt="Room for Rent" />
      <div className="text-card">
        <h3>Room for Rent – A Unique Place for Your Events</h3>
        <p>
          Looking for an original space for a private event, a vernissage, a product launch, a conference or even a wedding? 
          Our galleries welcome you in an inspiring artistic setting in the heart of Montreal.
        </p>
        <button className="button" onClick={() => handleClick("/RoomRent")}>Rent the Room <FaArrowRightLong /></button>
      </div>
    </div>

    <div className="service-card">
      <img src={image11} alt="Custom Art" />
      <div className="text-card">
        <h3>Custom Art – Bring Your Ideas to Life</h3>
        <p>
          Looking for a unique piece for your business, a mural project or a custom piece? 
          Our artists work with you to create custom murals, paintings and artworks that fit into your space and tell your story.
        </p>
        <button className="button" onClick={() => handleClick("/artstudio")}>Custom Art <FaArrowRightLong /></button>
      </div>
    </div>
  </div>
</section>

<section className="galerie-section fade-up">
    <div className="galerie-header">
      <h2>Visit our Rental Spaces</h2>
    </div>
    <div className="galerie-cards">
      <div className="galerie-card">
        <img src={image7} alt="Prêt à recevoir" />
        <p>Prêt à Recevoir</p>
        <div className="Address">
          <h2><FaMapMarkerAlt/></h2>
          <h3>
           <a href="https://maps.google.com/?q=4455 Saint Denis St, Montreal, QC H2J 2L2" target="_blank" rel="noopener noreferrer">
               4455 Saint Denis St, Montreal, QC H2J 2L2, Canada
            </a>
          </h3>
        </div>
      </div>
      <div className="galerie-card">
        <img src={image8} alt="Deux étages vivants" />
        <p>Deux étages Vivants</p>
        <div className="Address">
          <h2><FaMapMarkerAlt/></h2>
          <h3>
           <a href="https://maps.google.com/?q=163 Saint-Paul St W, Montreal, QC H2Y 1Z5" target="_blank" rel="noopener noreferrer">
               163 Saint-Paul St W, Montreal, QC H2Y 1Z5, Canada
            </a>
          </h3>
        </div>
      </div>
    </div>
   <button type="submit" className="btn-submit" onClick={readArticle}>Read More</button>
  </section>

      <section className="team-creative-section fade-up">
        <div className="team-creative-header">
          <h2>Collection</h2>
          <button className="team-creative-btn" onClick={() => handleClick("/history")}>
              Our History <FaArrowRightLong/>
            </button>
        </div>
    <div className="gallery-grid">
      {collection.map((item) => (
        <img src={item.image} alt={item.title} />
      ))}
    </div>
    <h2 className="description">
      AN ORIGINAL IS SOMEONE WHO TRIES TO DO LIKE THE OTHERS AND FAILS
    </h2>
    <div className="history-story">
  <div className={`history-content ${showMore ? 'open' : 'closed'}`}>
  
  <p className="quote">« IT ALL STARTED WITH HANGART. »</p>

  <p>
    HangArt was our project. We made this video with my friends to share our idea at the university and start making things happen. 
    Until the decisive moment when... we Googled the name and saw that a gallery already had the exact same name.
  </p>
  <p className="author">– Artist Yourself</p>

  <p>
    This pilot project was to allow us to join the cohort of the Rémi-Marcoux entrepreneurial course. We were refused, but we did not give up. 
    Artist Yourself’s passion during the incubator pitch was contagious. Robert Dutton, then a professor of management and former CEO of Rona, joined us. 
    With the help of Anthony Dion, who made the video, they registered the Quebec NPO <strong>Avang Artiste</strong>.
  </p>

  <p>
    It sounded promising: “AvangArtiste” – avant-garde artists, engaged with recycled materials and meaningful subjects. 
    But we soon realized no one knew how to read, spell, or pronounce it correctly. 
    We lost customers and it didn’t help our artists – even if the name was cool.
  </p>
  <p className="author">– Artist Yourself</p>

  <p>
    I used to carry hockey bags full of clothes to bars and cafés to paint with local artists. We started small, improved our processes, 
    and built a reputation. Weekly workshops, dozens of sales on Instagram, and poetry clubs followed – explaining the meaning of works, 
    democratizing their message, and adding a new artistic dimension. 
  </p>

  <p className="quote">« WE WENT BACK TO THE ROOTS OF WHAT WE WERE DOING. »</p>

  <p>
    We refocused on our mission: offering original works and making those who support local artists feel unique. 
    Staying alive during the pandemic was not easy. Artist Yourself slept on the gallery’s sofa bed for months and rented out his room on Airbnb 
    to cover expenses. Volunteers organized themselves, and we grew while keeping our original values intact.
  </p>

  <p>
    Thus was born the gallery <strong> L’Original</strong> – and it flourished.
  </p>

  <p className="quote">« ASSESS ONESELF »</p>

  <p>
    In the era of globalization, assertiveness is essential. We don’t want to be or carry a photocopy. 
    <strong> L’Original</strong> is the ethical distinction. 
  </p>

  <ul>
    <li>The Original is a personalized gift – accessible art with recycled materials or your own objects.</li>
    <li>A non-profit that creates a direct link between artist and collector.</li>
    <li>Your creativity in the hands of the artist you choose.</li>
    <li>A Quebec NPO that professionalizes emerging, committed artists with sustainable practices.</li>
  </ul>

  <p>
    We primarily collaborate with street artists, including early muralists from Montreal. 
    Our vision: <em>Use art as an ecological vector and help as many artists as possible make a living from their talent.</em>
  </p>

  <h4>We support recycled works production by:</h4>
  <ul>
    <li>Providing materials and tools for artistic upcycling in individual workshops.</li>
    <li>Organizing public, intergenerational recycling events to raise awareness.</li>
    <li>Explaining the works through poetry and highlighting them with professional photography.</li>
  </ul>

  <h4>The Original also supports product and service sales:</h4>
  <ul>
    <li>Animating our gallery workshop space at 163 Rue Saint Paul Ouest.</li>
    <li>Helping artists define their positioning and explain their work’s purpose.</li>
    <li>Setting up a busy online exhibition and sales venue.</li>
    <li>Presenting mural services to public and private organizations at fair prices.</li>
    <li>Organizing vernissages on strong social or environmental themes.</li>
  </ul>
    {showMore && (
  <button className="close-btn" onClick={handleClose}>
    Close <FaArrowUp />
  </button>
    )}
      </div>
          {showMoreButtonVisible && !showMore && (
      <button className="show-more-btn" onClick={handleShowMore} ref={showMoreBtnRef}>
        Show More <FaArrowDown />
      </button>
    )}
    </div>
  </section>

  <section className="newsletter-section fade-up">
  <h2 className="newsletter-title">Newsletter</h2>
  <p className="newsletter-subtitle">
    Keep in touch with us! You can unsubscribe anytime.
  </p>

  <div className="newsletter-form">
    <input
      type="email"
      placeholder="Email"
      className="newsletter-input"
    />
    <button className="newsletter-btn">Subscribe</button>
  </div>

  <div className="newsletter-logos">
    <a href="https://web.archive.org/web/20250222110551/https://www.mtlblog.com/montreal/a-montreal-art-gallery-is-opening-where-you-can-wear-the-art?fbclid=IwAR33nz7m8IbZBXEBpkfDVbQe60RI2tpg_hEIbPMhYWJ90GSSG1zXuaO-BNM">
      <img src={logo1} alt="MTL Blog"/>
    </a>
    <a href="https://web.archive.org/web/20250222182728/https://www.youtube.com/watch?v=T5Rf3C-iDjg">
      <img src={logo2} alt="QCL TUR" />
    </a>
    <a href="https://www.refletdesociete.com/original-art-engage-et-ecolo/">
      <img src={logo3} alt="Reflet de Société" />
    </a>
    <a href="https://web.archive.org/web/20250318103019/https://www.lapresse.ca/">
      <img src={logo6} alt="La Presse" />
    </a>
    <a href="https://web.archive.org/web/20250323013710/https://canalm.vuesetvoix.com/les-faramineux-15-decembre-2021/">
      <img src={logo5} alt="Canal M" />
    </a>
    
  </div>
</section>
    </>
  )
}
export default homePage;