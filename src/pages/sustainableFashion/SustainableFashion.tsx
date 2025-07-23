import "./SustainableFashion.css";
import image1 from "../../assets/images2/52638814_1002472249944771_7339277404310863872_n.jpg";
import image2 from "../../assets/images2/65385828_1083308828527779_3959344893494558720_n.jpg";
import image3 from "../../assets/images2/75580532_1181605092031485_5543616792636686336_n.jpg";
import image4 from "../../assets/images2/73524594_1176278612564133_4641968222218747904_n.jpg";
import image5 from "../../assets/images2/53221717_1009375422587787_958533234705039360_n.jpg"
import AtelierCard from "../../components/Atelier-Card/Atelier-card";
import useScrollAnimation from "../../components/ScrollAnimation/scrollAnimation";
const SustainableFashion = () => {
    useScrollAnimation();
    return (
        <>
    <div className="section-beige"></div>
    <h1 className="police-Texte">Transforming Fashion, Reinventing Reality</h1>
    <div className="fade-up">
    <AtelierCard
    title="Fashion is much more than just clothing. "
    description={
        <>
        <p>Fashion tells a story, expresses an identity and shapes our relationship with the world. But today, the textile industry is one of the most polluting and unfair on the planet. At L'Original, we believe in responsible, artistic and committed fashion.</p>
        <hr />
        <p>Sust & Fashion is an initiative that fuses art, upcycling and social criticism to offer a conscious and creative alternative to fast fashion.</p>
        </>
    }
    image={image1}
    />
    </div>
    
        <div className="fade-up"> 
            <AtelierCard
        title="Our vision for Art and Ecology"
        description={
            <>
            <p>Galerie L'Original in Montreal stands out for its commitment to street art and recycling, creating an environment where art meets ecology and social culture.</p>
            <hr />
            <p>This gallery not only offers exhibition spaces but also organizes workshops where second-hand materials are transformed into works of art, thus promoting sustainability and supporting local artists. In addition, L'Original offers a dynamic platform for the democratization of art, by introducing diverse artists and facilitating their direct interaction with the public</p>
            </>
        }
        image={image2}
        reverse
        />
        </div>
        

<section className="Original-offer-section fade-up">
    <h2>"The Original offers a dynamic platform for the democratization of art"</h2>
    <p>
      Real, the streetwear brand, shares these values of reuse and social commitment by rethinking and satirizing the logos of major fashion brands. 
      Each Réel piece is unique, 
      crafted by artists and tailors from recycled clothing.
    </p>
    <p>
      This approach aligns closely with the spirit of L'Original, 
      with its emphasis on committed street art and criticism of mass consumption.
    </p>
  </section>
    <section className="Commitments-section fade-up">
    <h2>OUR COMMITMENTS</h2>
    <p><strong>Fashion </strong> that transforms and engages <strong>At L'Original</strong>, we reinvent fashion through  
    <strong> upcycling</strong>, <strong>creativity and social commitment.</strong> Each piece tells a story, combining ethics, art and individual expression.</p>
  </section>
<section className="fashion-features-section fade-up">
  <h2 className="fashion-title">Our Sustainable Fashion Vision</h2>

  <div className="fashion-feature-card">
    <div className="fashion-feature-image" style={{ backgroundImage: `url(${image3})` }}></div>
    <div className="fashion-feature-content">
      <h3>Reality Reimagined</h3>
      <p><strong>La fast fashion standardise et efface l'individualité.</strong><br /> 
        Nous prônons une mode où chaque pièce raconte une histoire, une transformation, un message.</p>
      <p><strong>Recyclage et upcycling :</strong>  Transformer des vêtements oubliés en œuvres d'art.</p>
      <p><strong>Ateliers collaboratifs :</strong>  Permettre à chacun de participer à la réinvention de la mode.</p>
      <p><strong>Fusion de l'art et du vêtement :</strong> Travailler avec des artistes pour créer des pièces uniques et engagées.</p>
    </div>
  </div>

  <div className="fashion-feature-card reverse">
    <div className="fashion-feature-image" style={{ backgroundImage: `url(${image4})` }}></div>
    <div className="fashion-feature-content">
      <h3>Fashion As A Gesture Of Resistance</h3>
      <p><strong>L'Original ne suit pas les tendances, nous les défions.</strong></p>
      <p><strong>Subversion de l'industrie:</strong> Critique de la surproduction et de la consommation de masse à travers l'art textile.</p>
      <p><strong>Détournement des grandes marques : </strong> Remise en question des valeurs et pratiques des géants de la mode.</p>
      <p><strong>Réappropriation culturelle :</strong> célébrer l'individualité plutôt que l'identité de marque imposée.</p>
    </div>
  </div>

  <div className="fashion-feature-card">
    <div className="fashion-feature-image" style={{ backgroundImage: `url(${image5})` }}></div>
    <div className="fashion-feature-content">
      <h3>A Social And Ecological Impact</h3>
      <p><strong>Notre projet va au-delà du vêtement</strong> </p>
      <p><strong>Critique des pratiques de la fast fashion :</strong> Pollution, exploitation des travailleurs, greenwashing.</p>
      <p><strong>Ateliers et événements : </strong>Sensibiliser à la mode durable et à l'impact de nos choix de consommation.</p>
      <p><strong>Engagement collectif :</strong> Une mode participative qui invite chacun à créer, remettre en question et repenser son rapport au textile.</p>
    </div>
  </div>
</section>
    {/* <div className="pied-image">
        <img src="https://loriginal.org/wp-content/uploads/2024/02/cropped-cropped-cropped-cropped-loriginal-logo.png.webp" alt=""/>
    </div> */}
</>
    )
}

export default SustainableFashion;