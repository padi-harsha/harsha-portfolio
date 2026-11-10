import "./App.css";

function App() {
  return (
    <>
      <nav className="floating-nav">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="hero-tag">HELLO, I'M</p>
            <h1>Padi Harsha Vardhan</h1>
            <h2>Computer Science Student & Developer</h2>
            <p className="hero-intro">
              A Computer Science student exploring technology, solving problems,
              and building meaningful applications.
            </p>
            <a href="#about" className="hero-button">
              Explore my journey ↓
            </a>
          </div>

          <div className="hero-photo">
            <img src="/harsha.jpeg" alt="Padi Harsha Vardhan" />
          </div>
        </section>

        <section id="about" className="about-section">
  <p className="section-tag">01 / ABOUT ME</p>

  <h2>Curious about technology. Focused on building.</h2>

  <div className="about-content">
    <p>
      I'm a Computer Science student who enjoys understanding how technology
      works and turning ideas into practical applications. I explore different
      areas of software development, problem-solving, and modern technologies.
    </p>

    <p>
      I believe in learning by doing—building projects, solving coding
      problems, and continuously improving my skills along the way.
    </p>
  </div>
</section>

        <section id="skills">
          <h2>Skills</h2>

          <div className="skills-grid">
            {[
              "Java",
              "Python",
              "HTML",
              "JavaScript",
              "C",
              "MongoDB",
              "DBMS",
              "Power BI",
            ].map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section">
          <p className="section-tag">03 / EXPERIENCE</p>
          <h2>Where I've learned by doing.</h2>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <p className="duration">6 MONTHS</p>
                <h3>AI Engineering Intern</h3>
                <h4>Koderain Infotech</h4>
              </div>

              <span className="experience-arrow">↗</span>
            </div>

            <p className="experience-description">
              Worked across front-end development, back-end development, software
              testing, and content editing on multiple projects. Explored modern
              AI-powered application builders such as Lovable and Base44.
            </p>

            <div className="experience-tags">
              <span>Front-end</span>
              <span>Back-end</span>
              <span>Testing</span>
              <span>AI Tools</span>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
  <p className="section-tag">04 / PROJECTS</p>
  <h2>Things I've built.</h2>

  <p className="projects-intro">
    A selection of projects where I've explored technology and solved
    real-world problems.
  </p>

  <div className="projects-grid">
    {/* Project 1 */}
    <article className="project-card fraudlens-card">
      <div className="project-number">01</div>

      <div className="project-content">
        <p>AI / MACHINE LEARNING</p>
        <h3>FraudLens AI</h3>
        <span>
          An AI-powered project focused on detecting financial fraud and
          identifying suspicious activity.
        </span>
      </div>
    </article>

    {/* Project 2 */}
    <article className="project-card compiler-card">
      <div className="project-number">02</div>

      <div className="project-content">
        <p>JAVA / SPRING BOOT</p>
        <h3>Online Java Compiler</h3>
        <span>
          A web application that allows users to compile and run Java code
          through a simple interface.
        </span>
      </div>
    </article>

    {/* Project 3 */}
    <article className="project-card pickmate-card">
      <div className="project-number">03</div>

      <div className="project-content">
        <p>WEB APPLICATION</p>
        <h3>Pickmate</h3>
        <span>
          A workforce application concept designed for managing store picker
          workflows.
        </span>
      </div>
    </article>
  </div>
</section>

        <section id="contact" className="contact-section">
          <p className="section-tag">05 / CONTACT</p>

          <h2>Let's build something meaningful together.</h2>

          <p className="contact-text">
            Have an opportunity, idea, or just want to connect? Feel free to reach out.
          </p>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/harsha-vardhan-padi-162863340/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>

            <a
              href="https://github.com/padi-harsha"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            <a href="mailto:padiharsha@gmail.com">
              Email <span>↗</span>
            </a>
          </div>

          <p className="footer-text">
            © 2026 Padi Harsha Vardhan
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
