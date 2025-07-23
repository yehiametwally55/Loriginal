import './history.css'
import StatsBanner from '../../components/stats-banner/stats-banner'
import { EyeIcon, FileTextIcon } from 'lucide-react'
import Timeline from '../../components/Timeline/timeline'
import useScrollAnimation from '../../components/ScrollAnimation/scrollAnimation'
function History() {
  useScrollAnimation();
  return (
  <>
  <link href="https://fonts.googleapis.com/css2?family=Intel+One+Mono:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet"/>

  <section className='partition fade-up'>
    <h1 className='partition-title'>Welcome to L'Original Art Gallery</h1>
    <div className='Partition-text fade-up'>
    <h3>Qui Sommes-nous ?</h3>
    <p>
        D’initiative citoyenne, L’Original est un organisme à but non lucratif reconnu par le Conseil des arts du Canada comme un mélange atypique entre galeries d’art publiques, 
        organisme de soutien a la création. Acteur majeur de la médiation culturelle locale, L’Original œuvre à faire reconnaitre Montréal comme une capitale internationale de l’art urbain et engagé. 
        Ainsi, depuis 2019, les galeries sont devenues une ambassade touristique et culturelle pour découvrir celles et ceux qui animent les rues et ruelles de la ville. 
        L’organisation organise des activités toute l’année en synergie avec le tissu événementiel montréalais comme MURAL, le festival de la BD, Le RT21 etc…
        </p>
        <br />
        <p>
        Situé dans le vieux Montréal et sur St-Denis, au cœur du Plateau Mont-Royal, les espaces de L’Original créent des projets ancrés dans la communauté,
        liant le public et les artistes pour valoriser les murales existant partout à travers la ville. Ce sont deux lieux vivants, 
        où tous les visiteurs sont accueillis gratuitement par des ambassadeurs culturels, dans lesquels l’on peut rencontrer les artistes, 
        visiter leurs ateliers, et voir leurs créations. 
    </p>
    </div>
  </section>

  <section className='Stats-banner fade-up'>
   <StatsBanner/>
  </section>

  <section className="vision-mission fade-up">
      <div className="vm-item fade-up">
        <div className="vm-icon">
          <EyeIcon className="vm-icon-drawn" />
        </div>
        <div className="vm-text">
          <h3>Vision</h3>
          <p>
            Promouvoir Montréal comme un pôle international de l’art urbain et
            des pratiques artistiques innovantes, en tissant des liens durables
            entre artistes, citoyens et territoire, dans une approche inclusive,
            intergénérationnelle et écoresponsable.
          </p>
        </div>
      </div>
      <div className="vm-item fade-up">
        <div className="vm-icon">
          <FileTextIcon className="vm-icon-drawn" />
        </div>
        <div className="vm-text">
          <h3>Mission</h3>
          <p>
            Soutenir la création, la diffusion et la reconnaissance des artistes
            professionnels et émergents, en garantissant des espaces physiques
            et numériques dédiés à la production, à la co-création et à la
            médiation culturelle. L’organisme favorise le partage d’outils et de
            savoir, la valorisation des pratiques émergentes et la mémoire des
            fresques montréalaises, tout en stimulant le dialogue entre art,
            communauté et milieu urbain.
          </p>
        </div>
      </div>
    </section>
    <section className='partition fade-up'>
    <div className='Partition-text fade-up'>
    <h3>Nos expositions</h3>
    <p>
       D’initiative citoyenne, L’Original est un organisme à but non lucratif reconnu par le Conseil des arts du Canada comme un mélange atypique entre galeries d’art publiques, 
       organisme de soutien a la création. Acteur majeur de la médiation culturelle locale, L’Original œuvre à faire reconnaitre Montréal comme une capitale 
       internationale de l’art urbain et engagé. Ainsi, depuis 2019, les galeries sont devenues une ambassade touristique et culturelle pour découvrir celles 
       et ceux qui animent les rues et ruelles de la ville. L’organisation organise des activités toute l’année en synergie avec le tissu événementiel montréalais 
       comme MURAL, le festival de la BD, Le RT21 etc…
        <br />
        <br />
        Situé dans le vieux Montréal et sur St-Denis, au cœur du Plateau Mont-Royal, les espaces de L’Original créent des projets ancrés dans la communauté, 
        liant le public et les artistes pour valoriser les murales existant partout à travers la ville. Ce sont deux lieux vivants, 
        où tous les visiteurs sont accueillis gratuitement par des ambassadeurs culturels, dans lesquels l’on peut rencontrer les artistes, 
        visiter leurs ateliers, et voir leurs créations. 
    </p>
    </div>
  </section>
  <section className='timeline'>
    <Timeline/>
  </section>
  </>
  )
}

export default History