import "./TeamBuilding.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import image11 from "../../assets/images/11-3.png";
import image19 from "../../assets/images/19-2.png";
import image21 from "../../assets/images/21-1-qygmu10wg6015dbtuc8teljqxruxqmefchlj0k9dlc.png";
import image28 from "../../assets/images/284533645_1890170881174899_4687183235715934538_n-1536x1039.jpg";
import image12 from "../../assets/images/12.webp";
import image13 from "../../assets/images/13.webp";
import image112 from "../../assets/images/11.png";
import imageInter from "../../assets/images/inter-active-art-workshop-396x360.jpg";
import imageCar1 from "../../assets/images/429893507_895607842573458_5985357423929257149_n-1024x683.jpg";
import imageCar2 from "../../assets/images/430609430_895598509241058_1135317453770440161_n-1024x683.jpg";
import imageCar3 from "../../assets/images/430744993_895606122573630_6984005007097119147_n-1024x683.jpg";
import image56 from "../../assets/images/image56-1.png";
import image48 from "../../assets/images/image48-1.jpg";
import imageTeamBuiliding1 from "../../assets/images/Team-building-1-370x487.png";
import imageTeamBuiliding2 from "../../assets/images/Team-building-2-1.png";
import imageTeamBuiliding3 from "../../assets/images/Team-building-2-2.png";
import imageTeamBuiliding4 from "../../assets/images/Team-building-2-3.png";
import image43 from "../../assets/images/430007459_895599549240954_6632415976433589547_n-1536x1024.jpg";
import image431 from "../../assets/images/430464149_895606069240302_5848189906194933551_n-1536x1024.jpg";
import image432 from "../../assets/images/287499968_1900125693512751_2001862726997998204_n-1024x576.jpg";
import image433 from "../../assets/images/430470354_895596872574555_1978860230065548701_n-1024x576.jpg";
import image22 from "../../assets/images/22-1.png";
import imageNormand from "../../assets/images/normand-nv.jpg";
import imagePauline from "../../assets/images/Pauline-Rodrigues-scaled-1-1271x2048-1.jpg";
import image1122 from "../../assets/images/11-1-2.png";
import image430 from "../../assets/images/430482909_895596849241224_719694930022068149_n-1024x576.jpg";
import image429 from "../../assets/images/429898127_895598959241013_6903446439233379236_n-1024x683.jpg";
import image2876 from "../../assets/images/287629971_1900126733512647_2870353746668959064_n.jpg";
import image4918 from "../../assets/images/491832121_1213699894097583_8625129850209667519_n.jpg";
import monke from "../../assets/images/monke-300x219.webp";
import image6 from "../../assets/images/6-300x219.webp";
import image7 from "../../assets/images/7-300x219.webp";
import image8 from "../../assets/images/8-300x219.webp";
import image9 from "../../assets/images/12-1-1-1.png";
import image10 from "../../assets/images/13-1.png";
import image20 from "../../assets/images/14-1-qyexd2lr4zty1pjxf8p2zq9jppiwvz5nmygd94rnxg.png";
import image2 from "../../assets/images/15-1-2.png"
import { FaCheckSquare, FaMapMarkerAlt} from "react-icons/fa";
import Carousel from "../../components/Carousel/carousel"
import AtelierCard from "../../components/Atelier-Card/Atelier-card";
import useScrollAnimation from "../../components/ScrollAnimation/scrollAnimation";
const TeamBuilding = () => {
  useScrollAnimation();
    return(
        <>
  <section className="team-building-section">
    <h1>Meilleur Team Building<br />à Montréal</h1>
    <p className="headerParagraph">Pourquoi est-il important de faire du team building en petits<br />groupes pour le travail ?</p>

  <section className="activities-section fade-up">
     <h2>Capacité : de 10 à 90 personnes.</h2>
    <div className="cards">
      <div className="card">
        <img src={image11} alt="Location de salle" />
        <p>Location de salle</p>
        </div>
      <div className="card">
        <img src={image19} alt="Cocktails et imprimés ?" />
        <p>Cocktails et imprimés ?</p>
      </div>
      <div className="card">
        <img src={image21} alt="Photos et émissions ?" />
        <p>Photos et émissions ?</p>
      </div>
    </div>
  </section>
      
  <AtelierCard
  title="Atelier Artistique Pour Créer Du Lien Et De La Créativité"
  description={[
    <>
    Chez L’Original, nous transformons le team building en une expérience créative et engageante grâce à des ateliers artistiques pratiques et des activités interactives.<hr/>
  
    Conçus pour favoriser la collaboration, l’innovation et la communication, nos programmes uniques aident les équipes à renforcer leurs relations, à susciter de nouvelles idées et à s'amuser ensemble.<hr/>
  </>
  ]}
  image={image28}
  backgroundColor="white"
/>
      
  <section className="stats-section fade-up">
    <div className="stats-grid">
      <div className="stat-card fade-up">
        <h3>Productivité</h3>
        <img src="https://cdn-icons-png.flaticon.com/512/2811/2811364.png" style={{ filter: "brightness(0)" }} alt="Icône productivité" />
        <p><strong>19% :</strong> L’augmentation de la productivité et de la rentabilité des employés engagés.</p>
      </div>
      <div className="stat-card fade-up">
        <h3>Absentéisme</h3>
        <img src="https://cdn-icons-png.flaticon.com/512/8302/8302424.png" style={{ filter: "brightness(0)" }} alt="Icône absentéisme" />
        <p><strong>-39% :</strong> La diminution de l’absentéisme au travail des salariés mobilisés.</p>
      </div>
      <div className="stat-card fade-up">
        <h3>Prévention</h3>
        <img src="https://cdn-icons-png.flaticon.com/512/159/159469.png" style={{ filter: "brightness(0)" }} alt="Icône prévention" />
        <p><strong>– 50% :</strong> erreur dans l'espace de travail</p>
      </div>
      <div className="stat-card fade-up">
        <h3>Économie</h3>
        <img src="https://cdn-icons-png.flaticon.com/512/550/550713.png" style={{ filter: "brightness(0)" }} alt="Icône économie" />
        <p><strong>$28.000 :</strong> Le coût moyen pour une entreprise lors du départ d’un employé.</p>
      </div>
    </div>
  </section>
  
  <section className="galerie-section fade-up">
    <div className="galerie-header">
      <p>Au Coeur du Plateau</p>
      <h2>La Galerie LOCALE La Plus AIMÉE</h2>
    </div>
  
    <div className="galerie-cards">
      <div className="galerie-card">
        <img src={image112} alt="Prêt à recevoir" />
        <p>Prêt à Recevoir</p>
      </div>
      <div className="galerie-card">
        <img src={image13} alt="Deux étages vivants" />
        <p>Deux étages Vivants</p>
      </div>
      <div className="galerie-card">
        <img src={image12} alt="Quatre ateliers d'artistes" />
        <p>Quatre Ateliers D'artistes</p>
      </div>
    </div>
  </section>

  <section className="art-local-section fade-up">
   
    <h2 className="typewriter"style={{ ["--characters" as any]: 18 }}>ART LOCAL MONTRÉAL</h2>
    <div className="art-gallery">
      <div className="art-item">
        <img src={image4918} alt="MONK E." />
        <div className="overlay-text">MONK E.</div>
      </div>
      <div className="art-item">
        <img loading="lazy" src={image9} 
        alt="LOST CLAWS" />
        <div className="overlay-text">LOST CLAWS</div>
      </div>
      <div className="art-item">
        <img src={image10} alt="MAKENOIZE" />
        <div className="overlay-text">MAKENOIZE</div>
      </div>
      <div className="art-item">
        <img src={image20} alt="ASTRO" />
        <div className="overlay-text">ASTRO</div>
      </div>
      <div className="art-item">
        <img src={image2} alt="LABRONA" />
        <div className="overlay-text">LABRONA</div>
      </div>
    </div>
  </section>
 
  <AtelierCard
      title="Ateliers d’Art Interactifs"
      description={[
        <>
        Libérez votre créativité avec nos ateliers d’art interactifs, conçus pour les individus de tous niveaux.<hr/>
        Guidés par des artistes expérimentés et soutenus par des outils d’IA de pointe, les participants apprendront des techniques pour créer de superbes chefs-d’œuvre.<hr/>
        Que vous soyez artiste débutant ou chevronné, cette expérience immersive favorise l’expression de soi et le travail d’équipe dans un environnement détendu et inspirant.<hr/>
        </>
      ]}
      image={imageInter}
      backgroundColor="white"
    />
   
  
  <section className="peinture-section fade-up">
    <div className="peinture-content">
      <div className="peinture-carousel">
      <Carousel images={[imageCar1,imageCar2,imageCar3]} autoScroll={true} scrollSpeed={4000} />
      </div>
      <div className="peinture-text">
        <h2 className="peinture-title">Expériences De Peinture En Direct</h2>
        <p>
          Plongez dans l’histoire vibrante des peintures murales emblématiques de Montréal pendant que votre équipe collabore à un projet d’art en direct unique.
        </p>
        <hr/>
        <p>
          Nos experts vous guideront tout au long du processus créatif, favorisant le travail d’équipe et l’innovation tout en contribuant à un chef-d’œuvre unique en son genre.
        </p>
        <hr/>
        <p>
          Cette expérience pratique est parfaite pour découvrir le patrimoine artistique de la ville tout en renforçant les liens d’équipe.
        </p>
      </div>
    </div>
  </section>

  <section className="peinture-section fade-up">
    <div className="peinture-content">
      <div className="peinture-text">
        <h2 className="peinture-title">Impressions Personnalisables</h2>
        <p>
            Emportez un morceau de l’expérience chez vous !
        </p>
        <hr/>
        <p>
            Votre équipe peut choisir parmi une collection d’œuvres d’art qui correspondent aux valeurs de votre entreprise, garantissant que chaque impression est significative et personnalisée.
        </p>
        <hr/>
        <p>
            Ces impressions personnalisées rappellent durablement le parcours créatif que vous avez partagé, améliorant votre espace de travail avec des œuvres d'art qui inspirent la collaboration et l'innovation.
        </p>
      </div>
      <div className="peinture-carousel">
        <Carousel images={[image56,image48,image56]} autoScroll={true} scrollSpeed={4000} />
      </div>
      </div>
  </section>

  <div className="adc-wrapper fade-up">
    <section className="art-drink-collect-section">
        <img src={imageTeamBuiliding1} className="adc-cocktail-img" alt="Cocktail" />
      <div className="adc-header">
        <p className="adc-subtitle">PARTAGEZ UN MOMENT INOUBLIABLE.</p>
        <h2 className="adc-title">ART, COCKTAIL, COLLECTION</h2>
      </div>
  
      <div className="adc-info">
        <p><strong>$50/participant<br/>Illustrations included</strong></p>
        <p>1 tirage au choix parmi 3 illustrations proposées pour votre organisation<br/>
           2 cocktails par participant</p>
      </div>
  
      <div className="adc-gallery">
        <img src={imageTeamBuiliding2} alt="Art Drink Collect 1" />
        <img src={imageTeamBuiliding3} alt="Art Drink Collect 2" />
        <img src={imageTeamBuiliding4} alt="Art Drink Collect 3" />
      </div>
    </section>
  </div>

  <section>
    <div className="art-selection fade-up">
      <h1 className="typewriter"  style={{ ["--characters" as any]: 13 }}>ART SELECTION</h1>
    </div>
  </section>
 
  <section className="art-machine-section fade-up">
    <div className="art-machine-top">
      <div className="art-machine-image">
        <img src="https://artur.art/wp-content/uploads/2024/08/dorianverdier_feministe_-ar_34_-v_6.1_e820f763-d5e7-4b63-9c09-384b8091dd1d_1.png" alt="Portrait"/>
        <div className="art-machine-actions">
          <button className="btn dislike">
            <img data-src="https://web.archive.org/web/20250222110940/https://artur.art/wp-content/uploads/2024/08/dislike.png" alt="Dislike" src="https://web.archive.org/web/20250222110940im_/https://artur.art/wp-content/uploads/2024/08/dislike.png"/>
          </button>
          <button className="btn love">
            <img data-src="https://web.archive.org/web/20250222110940/https://artur.art/wp-content/uploads/2024/08/heart.png" alt="Favorite" src="https://web.archive.org/web/20250222110940im_/https://artur.art/wp-content/uploads/2024/08/heart.png"/>
          </button>
          <button className="btn like">
            <img data-src="https://web.archive.org/web/20250222110940/https://artur.art/wp-content/uploads/2024/08/like.png" alt="Like" src="https://web.archive.org/web/20250222110940im_/https://artur.art/wp-content/uploads/2024/08/like.png"/>
          </button>
        </div>
      </div>
      <div className="art-machine-text">
        <h2><strong>ARTUR</strong> - ARTISTIQUE INSTALLATION</h2>
        <h1 className="purple">ART <strong>MACHINE</strong></h1>
        <p><strong>Créativité valorisée :</strong> Offre une interprétation artistique unique, impliquant les employés dans les processus.</p>
        <p><strong>YOUR FIRST WORK</strong>, avec l'aide de Quiz, AI et Tinder.</p>
      </div>
    </div>
  
    <div className="art-gallery-grid">
      <div className="art-item"><img src={monke} alt="Monk.e"/></div>
      <div className="art-item"><img src={image7} alt="Labrona"/></div>
      <div className="art-item"><img src={image6} alt="Astro"/></div>
      <div className="art-item"><img src={image8} alt="Astro"/></div>
    </div>
  </section>

   <AtelierCard
        title="Des Brise-Glaces Avec Une Touche D'Originalité"
        description={[
          <>
          Commencez par des idées rapides et engageantes pour briser la glace et donner le ton à la collaboration.<hr/>
          Ces activités sont conçues pour dynamiser votre équipe et encourager la pensée créative dès le début.<hr/>
          En faisant tomber les barrières et en créant des liens, ils ouvrent la voie à une expérience plus dynamique et interactive tout au long de la session.<hr/>
       </>
        ]}
        image={image43}
        backgroundColor="white"
      />
    <AtelierCard
    title="Atelier Artistique Pour Créer Du Lien"
    description={[
      <>
      Combinez créativité et détente dans notre espace galerie dynamique.<hr/>
      Sirotez des cocktails artisanaux tout en libérant votre côté artistique dans un environnement amusant et solidaire.<hr/>
      Qu'il s'agisse de peindre, de dessiner ou d'expérimenter de nouveaux médiums, c'est le moyen idéal de créer des liens avec votre équipe dans une atmosphère décontractée mais inspirante.<hr/>
    </>
    ]}
    image={image28}
    backgroundColor="white"
    reverse={true}
  />

  <section className="infos-evenement-section fade-up">
    <div className="infos-columns">
      <div className="column">
        <div className="column-item">
        <h2>Informations sur l'événement</h2>
        <p><strong>Durée recommandée :</strong> 2h30 – 3h30</p>
        <p><strong>Capacité suggérée :</strong> 10 à 90 personnes (jusqu’à 120 personnes simultanément)</p>
  
        <h3><strong>Tarifs de base:</strong> </h3>
        <ul>
          <li><strong>Bar à volonté et participation aux activités :</strong> 35$/heure/personne</li>
          <li><strong>Animateur :</strong> Présentation des artistes et de leurs œuvres. <strong>INCLUS</strong></li>
          <li><strong>Machine à art :</strong> Création d’œuvres numériques personnalisées par chaque participant. <strong>INCLUS</strong></li>
          <li><strong>Frais de nettoyage et de permis d’alcool :</strong> 155 $ (comprend l’installation, le nettoyage et le permis de réunion)</li>
        </ul>
         </div>

        <div className="column-item2"> 
        <h2>Modules complémentaires</h2>
        <ol>
          <li><strong>Tirages Collectifs Personnalisés :</strong><br/>
            Chaque collaborateur repart avec une pièce incarnant les valeurs collectives, imprimée sur papier, avec 3 choix réalisés spécifiquement pour la soirée.<br/>
            <span className="tarif"><strong>○ Tarif:</strong> 25 $/participant (minimum 25 participants).</span>
          </li>
          <li><strong>Peinture en direct par des artistes professionnels :</strong><br/>
            Performance artistique en direct.<br/>
            <span className="tarif"><strong>○ Tarif:</strong> 70 $/heure par artiste</span>
          </li>
          <li><strong>Atelier participatif sur toile collective :</strong><br/>
            <span className="tarif"><strong>○ Tarif:</strong> 12 $/heure/participant supplémentaire</span>
          </li>
          <li><strong>Forfait Photo et Vidéo :</strong><br/>
            Séance photo + montage et livraison + mini highlights de l’événement.<br/>
            <span className="tarif"><strong>○ Tarif:</strong> 655 $</span>
          </li>
        </ol>
        </div>
      </div>
  
      <div className="column">
    <section className="carrousel-section">
    {/* <div className="carousel-container"> */}
      {/* <div className="carousel-track">
        <div className="carousel-slide">
          <img src={image432}/>
        </div>
        <div className="carousel-slide">
          <img src={image433}/>
        </div>
      </div>
      </div>  */}
      <Carousel images={[image432,image433]} autoScroll={true} scrollSpeed={4000} />
  </section>
      </div>
    </div>
  </section>

  <section className="team-virtuel-section fade-up">
    <h2>Activités De Team Building Virtuel Pour Les équipes Distantes</h2>
    <p>
      Pour les équipes distribuées, nous proposons <strong>activités de team building virtuelles </strong>
       qui comblent le fossé. Participez à des projets artistiques collaboratifs et connectez-vous lors de
      sessions créatives diffusées en direct et adaptées à votre groupe.
    </p>
    <p>
      Ces <strong>activités de team building pour équipes virtuelles</strong> veillent à ce que même les participants
      distants se sentent connectés et valorisés.
    </p>
  </section>

  <section className="section-team-exercice fade-up">
    <p className="team-exercice-quote">
      <em>
        Que vous vous concentriez <strong>sur des exercices de team building ou des idées innovantes de team building pour le travail</strong>, 
        notre approche garantit que chaque session a un impact.
      </em>
    </p>
    <div className="team-exercice-image">
      <img src={image22} alt="Exercice team building" />
    </div>
  </section>

  <section className="inclus-dark-section fade-up">
    <h2 className="inclus-dark-title">
      INCLUS GRATUITEMENT VERSION<br/>Numérique de votre œuvre.
    </h2>
  
    <div className="inclus-dark-grid">
      <div className="inclus-dark-card">
        <h3>COMMENT ÇA MARCHE ?</h3>
        <p>
          Parcourez les œuvres d'art et cliquez sur le cœur lorsque vous tombez amoureux.
          Parmi les œuvres que vous avez choisies, ajoutez vos couleurs et répondez à des quiz
          pour voir votre œuvre apparaître sur votre téléphone en 3 minutes.
        </p>
      </div>
  
      <div className="inclus-dark-card">
        <h3>FACULTATIF</h3>
        <p>
          Découvrez vos meilleurs artistes en fonction des styles que vous préférez.
          Vous pourrez ensuite entamer une conversation avec l'artiste de votre choix,
          en combinant ses œuvres de référence avec votre propre création pour donner vie à votre œuvre.
        </p>
      </div>
    </div>
  </section>

  <section className="team-creative-section fade-up">
    <h2>Activités De Team Building Dans Le Cadre Le Plus Créatif De Montréal</h2>
  
    <div className="gallery-grid">
      <img src={image43} alt="Location Plateau" />
      <img src={image431} alt="Location Vieux-Montréal" />
      <img src={image432} alt="Location Galerie" />
      <img src={image433} alt="Location Old Montreal" />
      <img src={image2876} alt="Shop Plateau" />
      <img src={image429} alt="Petit commercial Vieux-Montréal" />
    </div>
  
    <p className="description">
      Situé au cœur de Montréal, L’Original est le lieu incontournable pour <strong>activités de team building Montréal</strong> les professionnels font confiance.
      Depuis <strong>idées d’événements de team building d'entreprise</strong> aux <strong>exercices de team building au bureau</strong>,
      nous nous adressons à diverses tailles et préférences de groupes. Nos espaces de galeries historiques,
      l'un intime dans le Vieux-Port, l'autre vaste et moderne à Saint-Denis, offrent le cadre idéal pour des
      expériences transformatrices. Nos ateliers mettent l'accent <strong>citations de team building</strong> sur la
      créativité et la collaboration, laissant à votre équipe des souvenirs impérissables.
    </p>
  </section>

  <section className="why-original fade-up">
    <h2><b>Pourquoi Choisir L’Original Pour Vos Besoins En Team Building ?</b></h2>
    <p className="why-intro">
      Pour ceux qui recherchent des <strong><em>activités de team building pour adultes</em></strong>, notre galerie offre un mélange parfait de professionnalisme et de créativité. Ces <strong><em>activités de team building amusantes</em></strong> conviennent à tous les niveaux, favorisant l’inclusion et l’engagement.
    </p>
  
    <div className="why-cards">
      <div className="why-card">
        <h3>Activités variées</h3>
        <p>Des <strong>activités physiques de team building</strong> aux ateliers créatifs, nous répondons à tous les centres d’intérêt.</p>
      </div>
      <div className="why-card">
        <h3>Espaces inspirants</h3>
        <p>Nos lieux allient l’héritage du street art montréalais à des installations modernes.</p>
      </div>
      <div className="why-card">
        <h3>Expériences mémorables</h3>
        <p>Chaque session est conçue pour renforcer les liens et créer des souvenirs durables.</p>
      </div>
      <div className="why-card">
        <h3>Événements personnalisés</h3>
        <p>Nous collaborons étroitement avec vous pour concevoir des <strong>activités de team building en entreprise</strong> et des <strong>activités par département</strong> adaptées à vos objectifs.</p>
      </div>
    </div>
  </section>  

  <section className="team-section fade-up">
    <h2 className="team-title">UNE ORGANISATION DE PASSIONNÉS<span className="cursor">|</span></h2>
    <div className="team-members">
      <div className="member">
        <img src={image1122} alt="Amine Ndamama" />
        <h3>AMINE NDAMAMA<br/><span>Co-fondateur</span></h3>
        <p>
          Amine Ndamama est un leader expérimenté, ayant occupé des postes clés en philanthropie
          et en gestion stratégique chez Couche-Tard. Il allie expertise en affaires à un fort
          engagement social et artistique. Sa capacité à conjuguer succès financier et engagement
          social fait de lui un atout essentiel pour notre organisation.
        </p>
      </div>
  
      <div className="member">
        <img src={imageNormand} alt="Normand Giguère" />
        <h3>NORMAND GIGUÈRE<br/><span>Co-fondateur</span></h3>
        <p>
          Normand insuffle une énergie vibrante à notre programmation artistique.
          Curateur et gestionnaire brillant, il fait de notre galerie un lieu dynamique
          et innovant. Passionné par l’art urbain, il enrichit notre engagement communautaire.
        </p>
      </div>
  
      <div className="member">
        <img src={imagePauline} alt="Pauline Rodrique" />
        <h3>PAULINE RODRIQUE<br/><span>Membre du conseil</span></h3>
        <p>
          Membre émérite du conseil d’administration, Pauline est une artiste exceptionnelle.
          Son engagement et sa compréhension profonde du monde artistique inspirent notre
          communauté et façonnent la vision future de la galerie.
        </p>
      </div>
    </div>
  </section>  
  
  <section id="contact" className="contact-section fade-up">
    <h2>CONTACTEZ-NOUS</h2>
    <p className="contact-description">
      Si vous avez des questions ou des demandes spéciales, ou souhaitez organiser une visite, vous pouvez nous contacter
    </p>
    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label>Prénom</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" name="lastName" />
        </div>
      </div>
        <div className="form-row">
          <div className="form-group full">
        <label>Email</label>
        <input type="email" name="email" required />
      </div>
  
      <div className="form-group full">
        <label>Téléphone</label>
        <input type="tel" name="phone" />
      </div>
        </div>
      
      <div className="form-group full">
        <label>Jour souhaité</label>
        <input type="date" name="booking_day" />
      </div>
  
      <fieldset className="form-group full">
        <legend className="form-group-header">Choix</legend>
        <label><input type="checkbox" name="choice" value="art-machine" /> Art machine</label>
        <label><input type="checkbox" name="choice" value="prints" /> Impressions avec valeurs de votre organisation</label>
        <label><input type="checkbox" name="choice" value="photos" /> Photos / Vidéos</label>
        <label><input type="checkbox" name="choice" value="live-painting" /> Live painting</label>
        <label><input type="checkbox" name="choice" value="cocktails" /> Cocktails</label>
        <label><input type="checkbox" name="choice" value="catering" /> Catering</label>
        <label><input type="checkbox" name="choice" value="participative" /> Atelier participatif</label>
      </fieldset>
      <button type="submit" className="btn-submit">Envoyer</button>
    </form>
  </section>

 <AtelierCard
      title="Idées Originales De Travaux à La Galerie L'Original Art"
      description={[
        <>Chez L'Original, nous redéfinissons <strong>le team building</strong> en favorisant la créativité et la collaboration à travers des ateliers artistiques engageants et des expériences en direct. <hr/>
        Que vous recherchiez <strong>des activités de team building pour le travail</strong> ou que vous recherchiez <strong>des exercices de team building amusants</strong> , notre galerie offre une plate-forme distinctive pour transformer la dynamique de votre équipe. <hr/>
        Nos <strong>activités de team building pour équipes</strong> et <strong>nos jeux de team building pour petits groupes</strong> garantissent que chaque participant se sente inclus et inspiré. <hr/>
        </>
      ]}
      image={[image430,image429,image43]}
      backgroundColor="white"
    />

 <AtelierCard
    title="Activités De Team Building D'Entreprise Inspirantes"
    description={[
      <>Dans notre galerie dédiée au street art, nous proposons <strong>des activités de team building en entreprise</strong> qui stimulent l'innovation et s'alignent sur les valeurs de votre entreprise.
    <hr/>
    Lors de nos sessions, les employés participent à <strong>des exercices de team building, que ce soit en petits groupes</strong> ou lors d'événements d'entreprise de grande envergure, favorisant l'inclusion et un impact maximal. Qu'il s'agisse de choisir un imprimé à l'image de votre entreprise ou de créer des œuvres personnalisées, votre équipe repartira inspirée et soudée.
    <hr/>
    Nos <strong>idées d’événements de team building d’entreprise</strong> sont conçues pour aider votre organisation à constituer une main-d’œuvre cohésive et motivée.
      </>
    ]}
    image={image2876}
    reverse={true}
    backgroundColor="white"
  />
<section className="team-building-venues fade-up">
    <h2 className="section-title">
      Meilleures Idées De Team Building Pour La Créativité Au Travail
    </h2>
    <p className="section-subtitle">
      Les offres de L'Original comprennent 
      <strong> des activités de team building pour petits groupes </strong>  
       et<strong> des idées de team building d'entreprise</strong> adaptées à vos besoins :
    </p>
    <div className="venues-grid">
      <div className="venue-card fade-up">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!4v1656578390245!6m8!1m7!1sCAoSLEFGMVFpcFBpWWtzLTlzek1YaGc3aDlDT01CQ3hwY1NYVWt6cE1pWFI4MUZ0!2m2!1d45.52387270000001!2d-73.5821579!3f70.34!4f-9.989999999999995!5f0.7820865974627469" 
          allowFullScreen
          loading="lazy"
          title="4455 Saint Denis"
        ></iframe>
          <h3><FaMapMarkerAlt className="icon"/> <a className="link" href="https://web.archive.org/web/20240718163223/https://www.google.fr/maps/place/Loriginal+-+Galerie+et+boutique+d%27art,+bijoux+et+v%C3%AAtements/@45.523851,-73.6151143,14z/data=!4m9!1m2!2m1!1sLoriginal+-+Galerie+et+boutique+d%27art,+bijoux+et+v%C3%AAtements!3m5!1s0x4cc91bab5f1bf2bd:0xfb77aac643fcade4!8m2!3d45.5238524!4d-73.5821557!15sCjtMb3JpZ2luYWwgLSBHYWxlcmllIGV0IGJvdXRpcXVlIGQnYXJ0LCBiaWpvdXggZXQgdsOqdGVtZW50c1o6Ijhsb3JpZ2luYWwgZ2FsZXJpZSBldCBib3V0aXF1ZSBkIGFydCBiaWpvdXggZXQgdsOqdGVtZW50c5IBC2FydF9nYWxsZXJ5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF5YlVwbVIydDNSUkFC4AEA">
          4455 Saint Denis</a></h3>
          <p className="subtitle">Au coeur du Plateau</p>
          <h4>Comprend:</h4>
          <ul>
            <li><FaCheckSquare/> Système audio</li>
            <li><FaCheckSquare/> Articles d'alcool</li>
          </ul>
          <h4>Disponibilité:</h4>
          <ul>
            <li><FaCheckSquare/> de 3 heures à 10 jours</li>
            <li><FaCheckSquare/> Disponibilité via formulaire</li>
            <li><FaCheckSquare/> Obtenez un devis en ligne</li>
          </ul>
          <h3>Description</h3>
          <p>
            À l'intersection des rues Saint-Denis et Mont-Royal se trouve un magnifique espace à louer pour vos événements privés et vos réceptions d'entreprise. La galerie d'art dispose d'ateliers d'artistes en direct pouvant être aménagés pour vos événements. Ce bâtiment lumineux offre un charme rustique typique du Plateau avec ses moulures au plafond et ses murs de briques. L'escalier en bois au milieu des œuvres contemple la vieille cheminée. Le lieu forme un ensemble somptueux et chaleureux prêt à donner une âme dantesque pour des moments inoubliables. Le style des œuvres de la maison varie du street art figuratif à l'abstrait pour offrir un large éventail de contemplation.
          </p>
          </div>

          <div className="venue-card fade-up">
            <iframe 
        src="https://www.google.com/maps/embed?pb=!4v1656578420186!6m8!1m7!1sCAoSLEFGMVFpcE1OeUIxTVBGMVF5TWV6MEM3ZDFSR1M4WVVrYWRXZ2d6Q25acnJN!2m2!1d45.5033901!2d-73.5550885!3f149.31!4f-1.0499999999999972!5f0.7820865974627469" 
          allowFullScreen
          loading="lazy"
          title="163 Saint-Paul"
        ></iframe>
          <h3><FaMapMarkerAlt className="icon"/> <a className="link" href="https://web.archive.org/web/20240126110931/https://www.google.fr/maps/place/Loriginal+Art+Gallery+Old+Montr%C3%A9al+-+Street+Art/@45.503363,-73.5572017,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91b983fac9365:0xa331e1daae1f12e7!8m2!3d45.503363!4d-73.555013">
          163 Saint-Paul</a></h3>
          <p className="subtitle">Au coeur du Vieux-Montréal</p>
          <h4>Comprend:</h4>
          <ul>
            <li><FaCheckSquare/> Système audio</li>
            <li><FaCheckSquare/> Articles d'alcool</li>
          </ul>
          <h4>Disponibilité:</h4>
          <ul>
            <li><FaCheckSquare/> de 3 heures à 10 jours</li>
            <li><FaCheckSquare/> Disponibilité via formulaire</li>
            <li><FaCheckSquare/> Obtenez un devis en ligne</li>
          </ul>
          <h3>Description</h3>
          <p>
            Sur la première rue de la ville, face au Vieux-Port, entre le musée de la Pointe-à-Caillère, la basilique Notre-Dame, le délicieux Tommy Café et les boutiques les plus chics de la ville, se trouve le 163. Le cadre est calme, idyllique, presque aussi beau que celui que nous préférons, installé au mur de la galerie du Vieux-Montréal. Spécialisée dans les œuvres historiques d'artistes montréalais locaux, la salle regorge d'histoires à raconter. La poutre centrale et les deux colonnes de pierre sculptées des lieux en sont la preuve : nous sommes ici dans ce qu'il y a de plus chic et underground.
          </p>
        </div>
          </div>
         
    </section>  
  </section>
    </>
    ); 
};
export default TeamBuilding;