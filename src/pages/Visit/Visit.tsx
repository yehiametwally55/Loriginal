import "./Visit.css";
import AtelierCard from "../../components/Atelier-Card/Atelier-card";
import image1 from "../../assets/images/287499968_1900125693512751_2001862726997998204_n-1024x576.jpg";
import {FaCamera, FaCoffee, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaMusic, FaRegArrowAltCircleRight, FaShoppingBag } from "react-icons/fa";
import image2 from "../../assets/images/429898127_895598959241013_6903446439233379236_n-1024x683.jpg";
import image3 from "../../assets/images/284533645_1890170881174899_4687183235715934538_n-1536x1039.jpg";
import image4 from "../../assets/images/430470354_895596872574555_1978860230065548701_n-1024x576.jpg";

const readArticle = () => {
    window.open("https://web.archive.org/web/20250419084306/https://spacemontreal.ca/");
}
const Visit = () => {
    return(
        <>
<section className="Visit-section">
    <AtelierCard
    title="Welcome To L'Original Visual Arts Organization"
    description={[
        <p className="information">
        Visual Arts Organization <br />
        163 Rue Saint-Paul O, Montréal, QC H2Y 1Z5 <br />
        <a className="anchor">+1 (514) 999 96 11</a>  <br />
        <a className="anchor" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=163+Rue+Saint-Paul+O,+Montréal,+QC+H2Y+1Z5">
        Find us with Google Maps <FaRegArrowAltCircleRight/></a><br /> <hr />
        </p>
        ]}
  image={image1}
  backgroundColor="#f7f6ec"
//   color = "white"
 />
 
  <section className="icons-section">
    <div className="icons-grid">
      <div className="icons-card">
        <div className="Icon">
            <FaMusic/>
        </div>
        <h3>Audio Ambiance</h3>
      </div>
      <div className="icons-card">
        <div className="Icon">
            <FaCamera/>
        </div>
        <h3>Photography</h3>
      </div>
      <div className="icons-card">
        <div className="Icon">
            <FaCoffee/>
        </div>
        <h3>Cafe</h3>
      </div>
      <div className="icons-card">
        <div className="Icon">
            <FaShoppingBag/>
        </div>
        <h3>Shop</h3>
      </div>
    </div>
  </section>

   <AtelierCard
  title="Welcome"
  description={[
    <>
      <p className="information">
        Discover the incredible world of artistic creation in the heart of our space dedicated to art. 
        We are proud to present our three vibrant artist studios, where inspiration never stops flowing and creative talents flourish.
      </p>
      <hr />
      <div className="locations">
        <div className="location-1">
          <p>Plateau Mont-Royal</p>
          <p>Old Montreal</p>
        </div>
        <div className="location-2">
          <p>
            <a href="https://maps.google.com/?q=4455 Saint Denis St, Montreal, QC H2J 2L2" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt/> 4455 Saint Denis St, Montreal, QC H2J 2L2, Canada
            </a>
          </p>
          <p>
            <a href="https://maps.google.com/?q=163 Saint-Paul St W, Montreal, QC H2Y 1Z5" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt/> 163 Saint-Paul St W, Montreal, QC H2Y 1Z5, Canada
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="opening-hours-container">
        <h4><strong>Opening Hours</strong></h4>
        <div className="opening-hours">
          <div className="days">
          <p>Monday – Sunday</p>
          </div>
        <div className="hours">
           <p>11h – 18h</p>
        </div>
        </div>
        
      </div>
    </>
  ]}
  image={image2}
  backgroundColor="#f7f6ec"
  reverse={true}
/>
  <section className="galerie-section">
    <div className="galerie-header">
      <h2>Visit our galleries</h2>
      <h4>Different venues, different vibes</h4>
    </div>
    <div className="galerie-cards">
      <div className="galerie-card">
        <img src={image3} alt="Prêt à recevoir" />
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
        <img src={image4} alt="Deux étages vivants" />
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

  <section className="video-section-s">
  <div className="video-section">
    <h2>Live Our Spaces</h2>
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/u25EA_sbWMk?controls=1&rel=0&playsinline=1&modestbranding=0&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="video-iframe"
      ></iframe>
    </div>
  </div>
</section>

 </section>
        </>
    );
};
export default Visit;