import CardsProjects from "../CardProjects/CardsProjects";
import "./Projects.css";

export default () => {
  return (
    <div className="projects">
      <section className="projects-title">
        <h1>Projects</h1>
      </section>
      <section className="all-projects">
        <CardsProjects />
        <CardsProjects />
        <CardsProjects />
        <CardsProjects />
      </section>
    </div>
  );
};
