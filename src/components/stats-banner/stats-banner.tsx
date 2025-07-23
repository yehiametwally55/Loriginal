import {
  BarChart3,
  Users,
  Store,
  Laptop,
  Handshake
} from "lucide-react";
import "./stats-banner.css";
import useScrollAnimation from "../ScrollAnimation/scrollAnimation";
const statsData = [
  {
    color: "teal",
    icon: <BarChart3 size={50} color="teal"/>,
    title: "Galerie N°1 au Canada",
    description: "Sur Tripadvisor, Google et selon le Cirque du Soleil"
  },
  {
    color: "white",
    icon: <Users size={50} color="black"/>,
    title: "+30",
    description: "Artistes locaux représentés en permanence"
  },
  {
    color: "dark",
    icon: <Store size={50} color="black"/>,
    title: "40.000",
    description: "Visiteurs toute l’année hors événements"
  },
  {
    color: "dark",
    icon: <Laptop size={50} color="black"/>,
    title: "800.000+",
    description: "Interactions en ligne avec les publiques"

  },
  {
    color: "yellow",
    icon: <Handshake size={50} color="orange"/>,
    title: "50+",
    description: "Contributrices et contributeurs annuels"
  }
];

export default function StatsBanner() {
  useScrollAnimation()
  return (
    <section className="stats-banner">
      <p className="stats-label">En quelques chiffres:</p>
      <div className="stats-cards" >
        {statsData.map((item, index) => (
          <div className={`stats-card ${item.color}`} key={index}>
            <div className="stats-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
