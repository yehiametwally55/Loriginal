import './volunteer.css'
import image37 from '../../assets/images/Image37.jpg'
import image38 from '../../assets/images/Image38-1.jpg'
import image39 from '../../assets/images/Image39-1.jpg'
import image40 from '../../assets/images/Image40-1.png'
import image41 from '../../assets/images/Image41.png'
import image16 from '../../assets/images/Capture16-1.png'
import { FaXTwitter, FaFacebook, FaTumblr, FaPaperPlane } from 'react-icons/fa6';
import { useEffect, useState } from 'react'
import CommentSection from './CommentSection'
import AtelierCard from '../../components/Atelier-Card/Atelier-card'

const Volunteer = () => {
  const projects = [
    {
      title: "Past projects",
      date: "March 30, 2024",
    },
    {
      title: "Volontariat chez L'Original: Art Visuel, Écologie et Culture à Montréal",
      date: "April 5, 2024",
    },
    
  ];
  const recommendation = {
    title: "Art & Ecology",
    date: "March 9, 2024",
    image: image16,
    link: "https://web.archive.org/web/20250211210343/https://loriginal.org/artecology/"
  };

  return (
<>
<div className="volunteer-container">
      {/* Hero Section */}
      <section className="volunteer-section">
        <div className="volunteer-content">
          <div className="volunteer-header">
            <h1 className="volunteer-title">
              Volunteer program
            </h1>
            <h2 className="volunteer-subtitle">
              Join Our Artistic and Ecological Mission
            </h2>
            <p className="volunteer-description">
              Visual Art and Upcycling: L'Original offers a unique opportunity for volunteers with a passion for visual art and sustainable development. By participating in our mission, you help transform second-hand materials into unique works of art, while supporting talented Canadian artists.
            </p>
          </div>

          {/* Main Content Section */}
          <AtelierCard
          title="Participate in Montréal's cultural life"
          description=" Culture and Community: Get involved in Montréal's vibrant cultural life by helping to organize events, 
          vernissages and co-creation workshops. It's a chance to interact with local artists, visitors and community members,
           enriching your cultural and social experience."
          image={image37}
          imageAlt='Volunteer in art gallery surrounded by colorful artwork'
          />
        </div>
      </section>

      <section className="volunteer-section">
        <AtelierCard 
        title='Develop your skills and network'
        description="
        Learning and networking: As a volunteer, you will have the opportunity to acquire new skills and knowledge in the fields of art, 
        ecology and cultural management. You’ll also be able to expand your network by collaborating with industry professionals, 
        artists and academic partners."
        image={image38}
        imageAlt='Volunteer in art gallery surrounded by colorful artwork'
        />
      </section>
      <section className="volunteer-section">
        <AtelierCard 
        title='How to get involved?'
        description="Join L’Original: If you’re motivated by visual art, ecology and supporting local culture, 
        L’Original is the perfect place to invest your time and energy. Contact dorian@loriginal.org for more information on becoming a volunteer 
        and contributing to our mission."
        image={image39}
        imageAlt='Volunteer in art gallery surrounded by colorful artwork'
        />
            <div className='volunteer-texts'>
              <div className="volunteer-text">
              <h4 className="volunteer-heading">
                Our Partners and Collaborators
              </h4>
              <p className="volunteer-paragraph">
                An Ecosystem of Partnerships: When you join us, you become part of a dynamic ecosystem that includes partnerships with cultural institutions, universities and environmental organizations. Together, we work to make a meaningful difference in the community and beyond.
              </p>
            </div>
            <div className="volunteer-text">
              <h4 className="volunteer-heading">
                Testimonials from our Volunteers
              </h4>
              <p className="volunteer-paragraph">
                Enriching experiences: Discover the testimonials of our volunteers who share their enriching experiences, their learnings and the impact of their commitment to L’Original. Their passion and dedication are at the heart of our success.
              </p>
            </div>
            </div>
      </section>
      <div className="testimonial-container">
      <section className="testimonial-section">
        <div className="testimonial-content">
          {/* Image */}
          <div className="testimonial-image-container">
            <img 
              src={image40} 
              alt="Héloïse Merle portrait"
              className="testimonial-image"
            />
          </div>

          {/* Content */}
          <div className="testimonial-text">
            <blockquote className="testimonial-quote">
              "I crossed the ocean to come and learn at L'Original and it was as enriching humanly as it was intellectually, we have responsibilities.♦️"
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-name">Héloïse Merle</div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-content">
          {/* Image */}
          <div className="testimonial-image-container">
            <img 
              src={image41} 
              alt="Héloïse Merle portrait"
              className="testimonial-image"
            />
          </div>

          {/* Content */}
          <div className="testimonial-text">
            <blockquote className="testimonial-quote">
              "I came here looking for an internship, I found a family, it’s cool here, I make you feel a real difference while learning.♦️"
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-name">Lola Gaby</div>
            </div>
          </div>
          
        </div>
        
      </section>
      <div className='Email-CV'>
            <p>Send your CV to <a href="mailto:dorian@loriginal.org" style={{ color: "#c9a050" }}>dorian@loriginal.org</a>  to get involved!</p>
        </div>
    </div>

      <div className="Tags-container">
      <div className="tags-content">
        <div className="tags-links">
          <a href="https://web.archive.org/web/20250418125625/https://loriginal.org/tag/art/" className="tag-link" >Art</a>
          <a href="https://web.archive.org/web/20250418125625/https://loriginal.org/tag/exhibition/" className="tag-link">Exhibition</a>
          <a href="https://web.archive.org/web/20250118173020/https://loriginal.org/tag/museum/" className="tag-link">Museum</a>
        </div>
        <div className="social-links">
          <a href="https://twitter.com/intent/tweet?text=Volunteer+program&url=https%3A%2F%2Floriginal.org%2Fvolunteer-program-2%2F" className="social-link" aria-label="X (Twitter)">
            <FaXTwitter className="social-icon" />
          </a>
          <a href="https://www.tumblr.com/share?v=3&u=https%3A%2F%2Floriginal.org%2Fvolunteer-program-2%2F&t=Volunteer+program&s=Visual+Art+and+Upcycling%3A+L%E2%80%99Original+offers+a+unique+opportunity+for+volunteers+with+a+passion+for+visual+art+and+sustainable+development.+By+participating+in+our+mission%2C+you+help+transform+second-hand+materials+into+unique+works+of+art%2C+while+supporting+talented+Canadian+artists." className="social-link" aria-label="Tumblr">
            <FaTumblr className="social-icon" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}/>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Floriginal.org%2Fvolunteer-program-2%2F" className="social-link" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          </div>
        </div>
      </div>

     <section className="projects-section">
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-content">
                <div className="project-card-header">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                </div>
                <div className="project-card-footer">
                  <time className="project-date">
                    {project.date}
                  </time>
                </div>
              </div>
              <div className="project-card-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
        <section className="featured-section">
       <div className="featured-container">
        <h2 className="featured-section-title">You May Also Like</h2>
        <a href={recommendation.link} className="featured-card">
          <div className="featured-image-container">
            <img 
              src={recommendation.image} 
              alt={recommendation.title}
              className="featured-image"
            />
          </div>
          <div className="featured-content">
            <div className="featured-header">
              <h3 className="featured-title">
                {recommendation.title}
              </h3>
            </div>
            <div className="featured-footer">
              <time className="featured-date">
                {recommendation.date}
              </time>
            </div>
          </div>
          <div className="featured-overlay" />
        </a>
      </div>
    </section>
    <CommentSection/>
    </div>
  </>
  )
}
export default Volunteer