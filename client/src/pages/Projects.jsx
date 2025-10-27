export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="fade-item delay-1">My Projects</h1>

      {/* Project 1 */}
      <article className="project-card fade-item delay-2">
        <h2>Pokédex Search</h2>
        <p>
          The Pokémon Web Application combines interactive features with a clean user interface 
          to deliver a fun and functional experience. Building on this, I developed a dynamic 
          Pokédex application using JavaScript and the PokeAPI, where users can search for Pokémon 
          by name or ID with loading indicators and error handling. The results are displayed in 
          styled cards showing each Pokémon’s name, ID, image, types, and abilities. A modal system 
          was implemented to provide additional details such as height, weight, and base stats, 
          while a favourites feature was added using localStorage, allowing users to save up to six 
          Pokémon and easily switch between search results and favourites.
        </p>
        <div className="gallery-vertical">
          <img src="/Pokemon1.png" alt="Pokédex screenshot 1" />
          <img src="/Pokemon2.png" alt="Pokédex screenshot 2" />
          <img src="/Pokemon3.png" alt="Pokédex screenshot 3" />
        </div>
      </article>

      {/* Project 2 */}
      <article className="project-card fade-item delay-3">
        <h2>Real Estate Website</h2>
        <p>
          A Real Estate Agent Website developed using HTML and CSS to showcase property 
          listings with images and detailed descriptions. I designed a structured layout 
          that included a home page, property details section, and contact information, 
          while applying user-friendly design principles to ensure the site was visually 
          appealing, responsive, and easy to navigate.
        </p>
        <div className="gallery-vertical">
          <img src="/Project2.png" alt="Project 2 screenshot 1" />
          <img src="/Project2b.png" alt="Project 2 screenshot 2" />
          <img src="/Project2c.png" alt="Project 2 screenshot 3" />
        </div>
      </article>

      {/* Project 3 */}
      <article className="project-card fade-item delay-3">
        <h2>Oracle Bike Store Database</h2>
        <p>
          An E-Commerce Database System designed and implemented using SQL Developer. 
          I created(ERDs) to model entities, relationships, 
          and constraints, and built normalized database tables with primary keys, attributes, 
          and constraints to ensure data integrity. The system included features such as 
          product categories, pricing, shopping cart, customer information, and shipping details. 
          I also populated tables with sample data and executed SQL queries to simulate customer 
          transactions, providing a realistic demonstration of how the database supports e-commerce 
          operations.
        </p>
        <div className="gallery-vertical">
          <img src="/Project3.jpg" alt="Oracle Bike Store screenshot 1" />
          <img src="/Project3b.png" alt="Oracle Bike Store screenshot 2" />
          <img src="/Project3c.png" alt="Oracle Bike Store screenshot 3" />
        </div>
      </article>
    </section>
  );
}