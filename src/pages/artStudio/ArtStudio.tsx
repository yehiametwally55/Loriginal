import './ArtStudio.css'
import AtelierCard from '../../components/Atelier-Card/Atelier-card'
import image2 from "../../assets/images2/164267790_1584727908385866_2446087196405178210_n.jpg";
import image4 from "../../assets/images2/491753503_1213700094097563_5467536629815548368_n.jpg";
import image5 from "../../assets/images2/493248006_1220994080034831_5372316327407734880_n.jpg";
import image6 from "../../assets/images2/492489541_1220994306701475_5584531886465384020_n.jpg"
import image7 from "../../assets/images2/492417751_1220994320034807_117222813511809716_n.jpg"
import image8 from "../../assets/images2/493835089_1220994160034823_4996041421274105826_n.jpg"
import image9 from "../../assets/images2/509072549_1268498388617733_561161729989470512_n.jpg"
const ArtStudio = () => {
 
  // const gallery = [
  //   {
  //     image: image2
  //   },
  //   {
  //     image: image3
  //   },
  //   {
  //     image: image4
  //   },
  //   {
  //     image: image5
  //   },
  //   {
  //     image: image6
  //   }
  // ]
  return (
<>
  <section className='container-Art'>
  <section className="section-noire">
    <h1>Art Studios – Artist studios <br />for rent in Montreal</h1>
    <p>
      Are you an artist looking for an inspiring creative space in the heart of Plateau Mont-Royal ? 
      Art Studio offers you artist studios for rent, directly connected to our art gallery,
       <strong> <a href="https://maps.google.com/?q=4455 Saint Denis St, Montreal, QC H2J 2L2">
        located at 4455 Saint-Denis, Montreal.</a></strong>
    </p>
  </section>
  <section className="studio-photos">
    <h2>Artist studio rental for rent – ​​Montreal, Plateau Mont-Royal</h2>
    <div className="photo-row row-top">
      <img src={image2} alt="Art studio interior" />
      <img src={image4} alt="Artist working" />
    </div>
    <div className="photo-row row-bottom">
      <img src={image7} alt="Studio space" />
      <img src={image5} alt="Studio lighting" />
      <img src={image6} alt="Studio equipment" />
    </div>
    <p className="studio-description">
      Are you an artist looking for an inspiring creative space in Montreal ? Our artist studios for rent on the Plateau Mont-Royal offer much more than just a work space: they are directly connected to an art gallery, thus offering a unique opportunity for exhibition and representation.
    </p>
  </section>
 
    <AtelierCard
  title='Why rent a workshop at Art Studio'
  description={
    <>
    <ul>
          <li><strong>Bright and professional workshops :</strong> A space adapted to your creativity.</li>
          <li><strong>Ideal location :</strong> Located in the heart of Plateau Mont-Royal, Montreal's artistic district.</li>
          <li><strong>Visibility and sales :</strong> Possibility of exhibiting and selling your works in galleries.</li>
          <li><strong>Artistic representation :</strong> Opportunity to be represented by the art gallery.</li>
    </ul>
     <div className="bouton-centre">
      <a href="https://xn--sallelouer-l4a.ca/?fbclid=IwAR2iNeK82wtTbXLGK1QwmL_TkYPfvuwmGkH90n4aH1rA7qakav4CaD17wP4" className="btn-lire">Read More</a>
    </div>
    </>
  }
  image={image8}
  />
  
  <AtelierCard
  title='Why choose Art Studio?'
  description={
    <>
    <ul>
          <li><strong>Professional workspace:</strong> Bright and well-equipped workshops.</li>
          <li><strong>Privileged location :</strong> Located in the heart of Plateau Mont-Royal, a vibrant and artistic neighborhood.</li>
          <li><strong>Visibility and opportunities :</strong> Possibility to exhibit and sell your works in our gallery.</li>
          <li><strong>Artistic representation :</strong> Opportunity to be represented by our art gallery.</li>
    </ul>
    <div className="bouton-centre">
      <a href="https://xn--sallelouer-l4a.ca/?fbclid=IwAR2iNeK82wtTbXLGK1QwmL_TkYPfvuwmGkH90n4aH1rA7qakav4CaD17wP4" className="btn-lire">Read More</a>
    </div>
    </>
  }
  image={image9}
  reverse
  />

  <section className="section-contact">
    <div className="contact-wrapper">
      <form className="contact-form">
         <h2>Submit your portfolio</h2>
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-row">
          <input type="tel" placeholder="Phone" />
          <input type="url" placeholder="Link to your portfolio" />
        </div>
        <textarea placeholder="Message" required defaultValue={""} />
        <button type="submit" className="btn-envoyer">Send Message</button>
      </form>
      <div className="contact-info">
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="#555" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.82 8.63 
              12 2 9.18 8.63 2 9.24 7.46 13.97 5.82 21z" />
          </svg>
        </div>
          <p className="phone"><strong>(514) 999-9611</strong></p>
        <p><strong>Adresse:</strong> 4455 Saint-Denis, Montréal</p>
        <p><strong>Email:</strong> Dorian@loriginal.org</p>
      </div>
    </div>
  </section>
 </section>
  </>
  )
}

export default ArtStudio