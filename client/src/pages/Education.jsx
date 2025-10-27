export default function Education() {
  return (
    <section className="education-section">
      <div className="education-intro fade-item delay-1">
        <h1>My Education</h1>
        <p>
          Here’s a quick look at my academic journey and the knowledge I’ve gained along the way.
        </p>
      </div>

      <div className="timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item left fade-item delay-2">
          <div className="timeline-content">
            <h3>2019 – 2021</h3>
            <h4>Aircraft Maintenance Engineer - Technician</h4>
            <p>
              Gained hands-on training in aircraft maintenance across general, business, and transport aviation. 
              Worked on fixed and rotary wing aircraft in modern labs and hangars, focusing on airframes, engines, 
              electrical, hydraulic, and avionics systems. Learned both practical techniques and essential theory, 
              including the foundations required toward an Aircraft Maintenance Engineer (AME – “M” rating), 
              preparing to certify aircraft for flight after maintenance or repair.
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item right fade-item delay-3">
          <div className="timeline-content">
            <h3>2024 – Present</h3>
            <h4>Software Engineering Technology – Artificial Intelligence</h4>
            <p>
              Currently pursuing advanced studies in AI-driven software development, including machine learning, 
              natural language processing, data visualization, and recommender systems. Gaining hands-on 
              experience with modern frameworks and big data fundamentals while exploring digital ethics and 
              privacy in AI. Actively working toward a capstone project that applies technical and business skills 
              to build AI-enhanced solutions for automation, prediction, and intelligent decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
