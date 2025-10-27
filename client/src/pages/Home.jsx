import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-content">
        <div className="home-intro">
          <h1 className="fade-item delay-1">
            Hi, I’m <span className="highlight">Jan Daniel Baldovino</span>,
          </h1>
          <p className="fade-item delay-2">
            a Software Engineering Technology – AI student at Centennial College,
            passionate about building intelligent, user-friendly applications. I enjoy 
            working with technologies like React, Java, Python, SQL, and exploring 
            AI design patterns.
          </p>
          <p className="fade-item delay-3">
            Beyond coding, I continuously explore the latest trends in software engineering, 
            AI practices, and modern development tools to deliver innovative solutions 
            that have real-world impact.
          </p>

          <div className="about-btn-container fade-item delay-4">
            <Link to="/about" className="btn-primary">About Me</Link>
          </div>


          {/* Technical Skills Section */}
          <div className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-card"><img src="/html.png" alt="HTML" /><p>HTML</p></div>
              <div className="skill-card"><img src="/css.png" alt="CSS" /><p>CSS</p></div>
              <div className="skill-card"><img src="/javascript.png" alt="JavaScript" /><p>JavaScript</p></div>
              <div className="skill-card"><img src="/react.png" alt="React" /><p>React</p></div>
              <div className="skill-card"><img src="/python.png" alt="Python" /><p>Python</p></div>
              <div className="skill-card"><img src="/java.png" alt="Java" /><p>Java</p></div>
              <div className="skill-card"><img src="/sql.png" alt="SQL" /><p>SQL</p></div>
              <div className="skill-card"><img src="/csharp.png" alt="C#" /><p>C#</p></div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <div className="featured-projects">
            <h2>Key Projects</h2>
            <div className="projects-grid">
              {/* Project 1 */}
              <div className="project-card">
                <img src="/Pokemon1.png" alt="Pokédex App" />
                <div className="project-body">
                  <h3>Pokédex Search</h3>
                  <p>
                    A responsive Pokédex web app built with JavaScript and the PokeAPI. 
                    Features include search by name/ID and modal details.
                  </p>
                  <Link to="/projects" className="btn-outline">View Project</Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <img src="/Project2.png" alt="Real estate website" />
                <div className="project-body">
                  <h3>Real Estate Website</h3>
                  <p>
                    Developed a website using HTML and CSS to showcase real estate listings.
                    Features include property listings, about section, and a contact form.
                  </p>
                  <Link to="/projects" className="btn-outline">View Project</Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card">
                <img src="/Project3.jpg" alt="E-Commerce Database Design" />
                <div className="project-body">
                  <h3>E-Commerce Database Design</h3>
                  <p>
                    Designed and implemented a relational database in Oracle SQL Developer for an e-commerce 
                    platform.
                  </p>
                  <Link to="/projects" className="btn-outline">View Project</Link>
                </div>
              </div>
            </div>

            {/* Button to full Projects page */}
            <div className="view-more">
              <Link to="/projects" className="btn-primary">
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


