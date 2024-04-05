import { useEffect, useRef } from "react";
import CardsAbilities from "../CardsAbilities/CardsAbilities";
import JSX from "../SVG/AbilitieJS/AbilitieJS";
import TSX from "../SVG/AbilitieTS/AbilitieTS";
import ReactJS from "../SVG/AbilitieReact/AbilitieReact";
import CSS3 from "../SVG/AbilitieCSS3/AbilitieCSS3";
import HTML5 from "../SVG/AbilitieHTML5/AbilitieHTML5";
import Python from "../SVG/AbilitiePython/AbilitiePython";
import "./Knowledges.css";

const RainComponent = () => {
  const rainsRef = useRef([]);
  console.log(rainsRef);
  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    rainsRef.current.forEach((rain) => {
      rain.style.setProperty(
        "animation-delay",
        `${getRandomNumber(0, 5000)}ms`
      );
    });
  }, []);

  return (
    <div className="main">
      <div className="rains-container">
        {[...Array(40)].map((_, index) => (
          <div
            key={index}
            className="rains"
            //@ts-ignore
            ref={(el) => (rainsRef.current[index] = el)}
          >
            👾
          </div>
        ))}
      </div>
      <div className="knowledges">
        <section className="knowledges-content">
          <div className="abilities-title">
            <h1>Abilities</h1>
          </div>
          <div className="cards">
            <div className="firstOne">
              <div className="abilities">
                <CardsAbilities
                  abilitieName="TypeScript"
                  abilitieImg={<TSX />}
                />
              </div>
              <div className="abilities">
                <CardsAbilities
                  abilitieName="JavaScript"
                  abilitieImg={<JSX />}
                />
              </div>
              <div className="abilities">
                <CardsAbilities
                  abilitieName="React"
                  abilitieImg={<ReactJS />}
                />
              </div>
            </div>
            <div className="secondOne">
              <div className="abilities">
                <CardsAbilities abilitieName="CSS3" abilitieImg={<CSS3 />} />
              </div>
              <div className="abilities">
                <CardsAbilities abilitieName="HTML5" abilitieImg={<HTML5 />} />
              </div>
              <div className="abilities">
                <CardsAbilities
                  abilitieName="Python"
                  abilitieImg={<Python />}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RainComponent;
