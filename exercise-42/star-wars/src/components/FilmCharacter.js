import React, { useState, useEffect } from "react";

const FilmCharacter = (props) => {
  // In functional components seting state with useState equals to this.state.showAllInfo; this.setState({showAllInfo: false}); in the class Component;
  const [showAllInfo, setShowAllInfo] = useState(false);

  useEffect(() => {
    fetch(props.characterOfTheFilm.starships[0]);
  }, [props.characterOfTheFilm]);



  console.log(props.characterOfTheFilm);
  return (
    <div>
      Film Character
      {Object.values(props.characterOfTheFilm).map((prop, index) => (
        <p
          key={index}
          className={index > 5 && !showAllInfo ? "hidden" : "shown"}
        >
          {prop}
        </p>
      ))}
      <button onClick={() => setShowAllInfo(!showAllInfo)}>Click</button>
    </div>
  );
};

export default FilmCharacter;
