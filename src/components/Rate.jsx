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
      {red.map((red) => (
        <div className="rate__star rate__star-red"> Red </div>
      ))}

      {grey.map((grey) => (
        <div className="rate__star rate__star--grey"> Grey </div>
      ))}
    </div>
  );
}

export default Rate;
