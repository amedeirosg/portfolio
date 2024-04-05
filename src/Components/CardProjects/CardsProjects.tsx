import "./CardsProjects.css";
import Project1 from "../../assets/PNG/Project1.png";
export default () => {
  return (
    <div className="cards-projects">
      <div className="cards-projects-title">
        <h1>Project 1</h1>
      </div>

      <img src={Project1} alt="Projeto 1" />
    </div>
  );
};
