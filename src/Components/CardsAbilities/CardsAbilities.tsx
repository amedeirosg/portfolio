import "./CardsAbilities.css";

export default (props: { abilitieName: string; abilitieImg: any }) => {
  return (
    <div className="cards-abilities">
      <span>{props.abilitieName}</span>
      {props.abilitieImg}
    </div>
  );
};
