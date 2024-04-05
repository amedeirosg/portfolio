import "./Presentation.css";
import AnimatedDesktop from "../SVG/AnimatedDesktop/AnimatedDesktop";
import Arrow from "../SVG/Arrow/Arrow";
export default () => {
  return (
    <main>
      <div className="presentation">
        <div className="presentation-title">
          <h1>Full-Stack Developer</h1>
          <h2>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </h2>
        </div>
        <div className="presentation-aboutme-btn">
          <h3>About me</h3>
          <Arrow className="arrow-svg" />
        </div>
      </div>
      <div className="presentation-sideimg">
        <AnimatedDesktop />
      </div>
    </main>
  );
};
