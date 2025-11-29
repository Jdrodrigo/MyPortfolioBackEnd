export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side photo */}
        <div className="about-photo">
          <img src="/profilephoto.jpg" alt="Jan Daniel Baldovino" />
        </div>

        {/* Right side text */}
        <div className="about-content">
          <h1 className="fade-item delay-1">My Journey</h1>
          <p className="fade-item delay-2">
            I’m Jan Daniel Baldovino, a Software Engineering Technology – Artificial 
            Intelligence student at Centennial College. My academic journey has given me 
            hands-on experience with programming languages such as Java, Python, C#, and SQL, 
            as well as front-end technologies like React, HTML, CSS, and JavaScript.
          </p>
          <p className="fade-item delay-3">
            I enjoy building practical, user-friendly applications and exploring how AI design 
            patterns can be applied to solve real-world problems. Beyond coding, I’m motivated 
            by continuous learning and a passion for technology that drives me to stay updated 
            with the latest trends in software engineering and intelligent systems.
          </p>

          {/* Resume Button */}
          <div className="fade-item delay-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
            </a>
            </div>
        </div>
        </div>
    </section>
    );
}




