export default function Services() {
  return (
    <section className="services-section">
      <div className="services-content">
        <h1 className="fade-item delay-1">My Services</h1>
        <p className="fade-item delay-2">
          Here are some of the services I offer in software development and AI, 
          combining technical expertise with creative problem-solving.
        </p>

        <div className="services-list">
          <div className="service-card fade-item delay-3">
            <img src="/programming.png" alt="General Programming" />
            <h3>General Programming</h3>
            <p>
              Offering a solid foundation in multiple programming languages, including
              Java, Python, C#, and JavaScript.<br/> Skilled in writing clean, efficient, 
              and well-structured code while applying problem-solving techniques to design,<br/> 
              debug, and optimize solutions. Whether it’s building algorithms, automating 
              tasks, or creating applications,<br/> I bring flexibility and adaptability to a 
              wide range of programming challenges.
            </p>
          </div>

          <div className="service-card fade-item delay-4">
            <img src="/web.jpg" alt="Web Development" />
            <h3>Web Development</h3>
            <p>
              Designing and building responsive, user-friendly websites using HTML, CSS, 
              JavaScript, and React. I focus on <br/>creating modern layouts that adapt seamlessly 
              across devices while ensuring performance, accessibility, and clean <br/>design. 
              From simple landing pages to dynamic applications, I deliver web solutions that 
              combine functionality with a <br/>professional look.
            </p>
          </div>

          <div className="service-card fade-item delay-5">
            <img src="/testing.jpg" alt="QA & Testing" />
            <h3>QA & Testing</h3>
            <p>
                Ensuring software quality through thorough manual and automated testing practices. 
                Skilled in creating test cases, <br/>identifying bugs, and validating functionality to 
                guarantee reliability, performance, and security. Focused on delivering<br/> stable applications 
                by applying debugging, regression testing, and user acceptance testing (UAT), helping 
                projects<br/> meet both technical requirements and user expectations.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
