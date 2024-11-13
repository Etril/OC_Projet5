import active from "../assets/star-active.png";
import inactive from "../assets/star-inactive.png";
import "../styles/Rate.scss";

function Rate({ note }) {
  const red = [];
  for (let i = 0; i < note; i++) {
    red.push("red");
  };

  const grey = [];
  for (let i = 0; i < (5 - note); i ++) {
    grey.push("grey");
  };

  return (
    <div className="rate">
      {red.map((red, index) => (
        <div className="rate__star rate__star-red" key={`${red}-${index}`}> <img src={active} alt="Une étoile rouge"></img> </div>
      ))}

      {grey.map((grey, index) => (
        <div className="rate__star rate__star--grey" key={`${grey}-${index}`}> <img src={inactive} alt="Une étoile grise"></img> </div>
      ))}
    </div>
  );
}

export default Rate;
