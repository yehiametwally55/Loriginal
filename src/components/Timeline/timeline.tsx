import "./timeline.css";
import image1 from "../../assets/Timeline-images/Screenshot 2025-07-21 144718.png";
import image2 from "../../assets/Timeline-images/Screenshot 2025-07-21 144739.png";
import image3 from "../../assets/Timeline-images/Screenshot 2025-07-21 144809.png";
import image4 from "../../assets/Timeline-images/Screenshot 2025-07-21 144837.png";
import image5 from "../../assets/Timeline-images/Screenshot 2025-07-21 144857.png";
import image6 from "../../assets/Timeline-images/Screenshot 2025-07-21 144920.png";
import image7 from "../../assets/Timeline-images/Screenshot 2025-07-21 144944.png";
import image8 from "../../assets/Timeline-images/Screenshot 2025-07-21 145018.png";
import image9 from "../../assets/Timeline-images/Screenshot 2025-07-21 145046.png";
import image10 from "../../assets/Timeline-images/Screenshot 2025-07-22 094436.png"
import image11 from "../../assets/images2/281768792_1881217942070193_3064998488503889028_n.png"
import image12 from "../../assets/images2/491538050_1213700084097564_9148726033026131045_n.jpg"
import image13 from "../../assets/images2/491753503_1213700094097563_5467536629815548368_n.jpg"
import image14 from "../../assets/images2/509072549_1268498388617733_561161729989470512_n.jpg"
import image15 from "../../assets/images2/491702343_1213700147430891_5266737971070244822_n.jpg"
import image16 from "../../assets/images2/492059749_1213700160764223_123485139490218126_n.jpg"
import image17 from "../../assets/images2/492146755_1213700890764150_1415901841003982594_n.jpg"
import image18 from "../../assets/images2/492489541_1220994306701475_5584531886465384020_n.jpg"
import image19 from "../../assets/images2/493835089_1220994160034823_4996041421274105826_n.jpg"
import image20 from "../../assets/images2/493248006_1220994080034831_5372316327407734880_n.jpg"
import useScrollAnimation from "../ScrollAnimation/scrollAnimation";
const timelineEvents = [
  {
    date: "Janvier 2025",
    title: "Exposition pop up de Timoh Garcia",
    location: "4455 St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image1,
  },
  {
    date: "Mai 2025",
    title: "Live painting & Cocktail, Festival de la BD",
    location: "4455 St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image2,
  },
  {
    date: "Juin 2025",
    title: "Exposition “Fiction Primaire” par Timoh Garcia",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image3,
  },
];
const Timeline2024 = [
  {
    date: "Fevrier 2024",
    title: "28 Fevrier 2024 - Indiana Brierley et Cedric Taillon live painting",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues Articles de presses",
    image: image4,
  },
  {
    date: "Mai 2024",
    title: "24-31 Mai: Exposition “Papier Print” - 13-20 Mai 2024:“Street Funk MTL” event",
    location: "4455 St-Denis, Astro - 163 Rue St-Paul, Stedan LeBlanc",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image5,
  },
  {
    date: "Juin 2024",
    title: "28 Juin 2024: Concours enigme prints, evenement en ligne - 6 Juin 2025 : Hommage aux 2 ans de l’ouverture de la galerie à St-Denis ",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image6,
  },
  {
    date: "Août 2024",
    title: "22 août 2024: Soiré de collection privée, 4455 St-Denis",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image7,
  },
  {
    date: "Octobre 2024",
    title: "18&25 Octobre 2024: Atelier de peinture avec le Regroupement Pour La Trisomie",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image8,
  },
  {
    date: "Decembre 2024",
    title: "9 decembre 2024: Evenement de Noël et vente de 150 prints - 28 Novembre- 4 decembre: Exposition “Anyo”, avec un vernissage le 28 Novembre",
    location: "4455 rue St-Denis - 163 rue St-Paul Ouest",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image9,
  },
];
const Timeline2023 = [
  {
    date: "Decembre 2023",
    title: "16 decembre: l’ouverture d’une troisième galerie",
    location: "384 rue Saint-Paul Ouest ",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues Articles de presses",
    image: image15,
  },
  {
    date: "Novembre 2023",
    title: "27 Novembre 2023: Regroupement pour la trisomie 21- R21 avec l’artiste Etienne Martin",
    location: "4455 St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image16,
  },
  {
    date: "Octobre 2023 ",
    title: "20 Octobre: exposition engagée est présentée par Etienne Martin",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image17,
  },
  {
    date: "Septembre 2023",
    title: "11 Septembre: Exposition “Jouer des symboles”, Lost claws, Mistake project Nicolas Greg, Verdier",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image18,
  },
  {
    date: "Aout 2023",
    title: `20-27 Aout: Exposition d’art visuel en métal "Drôles de têtes, têtes drôles",  Antonin Gauthier - 
    13 Aout: Soiré hommage à Zilon “Zilon is not dead” - 9-20 Aout:  "ASSEMBLAGE" exposition de Timoh Garcia`,
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image19,
  },
   {
    date: "Juillet 2023",
    title: `31 Juillet-6 Aout: LEBOARDSHOW 2eme edition, avec 80 artiste et 80 oeuvres - 
    3 Juillet: celebration des 2 ans - 29 juin - 6 juillet: DUOS toiles collaborations et mini expo, Cedric Taillon`,
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image11,
  },
   {
    date: "Juin 2023",
    title: `5-23 Juin 2023: exposition & Show exclusifs, Monk-e et Zoltan, avec un vernissage le 15 Juin - 
    10-17 Juin: “Cypric Nights” exposition surréaliste, Zoltan” - 2 Juin: “HOMECOMING” Exhbition, Nick Bodoin`,
    location: "4455 rue St-Denis - 163 Rue Saint-Paul",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image12,
  },
    {
    date: "Mai 2023",
    title: `24-31 Mai: Réinterprétation picturale de la B.D -
    24 Mai: L’original X Festival B.D,  15 artistes`,
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image10,
  },
  {
    date: "Avril 2023",
    title: "15-21 Avril 2023: “PANTOMIME PT.1” exposition, La Javanaise,  Melsa Montagne, Marie Ève Richard",
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image20,
  },
  {
    date: "Mars 2023",
    title: `29 Mars- 2 Avril: “Show Cases” exposition, Eric Villeneuse`,
    location: "4455 rue St-Denis",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image13,
  },
  {
    date: "Fevrier 2023",
    title: `17-25 fevrier: l'exposition solo de Mephisto Bates - 1 Fevrier: Historic Fest - street artists that have marked Montreal`,
    location: "4455 rue St-Denis - 163 Rue Saint-Paul",
    description:
      "Nombre de visiteurs - Nombre d’heures ouverts - Nombre d’oeuvres vendues - Articles de presses",
    image: image14,
  },
];

const Timeline = () => {
  useScrollAnimation
  return (
    <>
    <div className="timeline-container">
      <h2 className="timeline-title">Timeline des Expositions</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <><div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"} fade-up`}
            >
                <div className="timeline-content">
                    <h3>{event.date}</h3>
                    <h4>{event.title}</h4>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                </div>
                <div
                    className="timeline-image"
                    style={{ backgroundImage: `url(${event.image})` }}
                ></div>
            </div></>
        ))}
      </div>
    </div>
    <div className="timeline-container">
      <h2 className="timeline-title">Rapport d’activités 2024 </h2>
      <div className="timeline">
        {Timeline2024.map((event, index) => (
          <><div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"} fade-up`}
            >
                <div className="timeline-content">
                    <h3>{event.date}</h3>
                    <h4>{event.title}</h4>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                </div>
                <div
                    className="timeline-image"
                    style={{ backgroundImage: `url(${event.image})` }}
                ></div>
            </div></>
        ))}
      </div>
      
    </div>
    <div className="timeline-container">
      <h2 className="timeline-title">Rapport d’activités 2023 </h2>
      <div className="timeline">
        {Timeline2023.map((event, index) => (
          <><div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"} fade-up`}
            >
                <div className="timeline-content">
                    <h3>{event.date}</h3>
                    <h4>{event.title}</h4>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                </div>
                <div
                    className="timeline-image"
                    style={{ backgroundImage: `url(${event.image})` }}
                ></div>
            </div></>
        ))}
      </div>
      
    </div>
    </>
  );
};

export default Timeline;
