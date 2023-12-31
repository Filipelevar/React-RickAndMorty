import React from "react";
import "./styles.css";

const CharacterCard = ({ character, onClick }) => {
  const isDead = character.status === "Dead";

  return (
    <div
      onClick={onClick}
      className="rounded-lg  border-2 border-solid border-gray-600 cursor-pointer shadow-outline hover:shadow-md"
      id="div-card"
    >
      <img
        src={character.image}
        alt={character.name}
        className={`w-full h-40 object-cover rounded-t-lg ${
          isDead && "black-and-white"
        }`}
      />

      <div className={`relative ${isDead ? "grayscale" : ""}`} id="div-card2">
        <img
          src={character.image}
          alt={character.name}
          className={`w-full h-full object-cover absolute top-0 left-0 filter blur backdrop-filter backdrop-blur-md brightness-50 ${
            isDead ? "grayscale" : ""
          }`}
          id="img-blur"
        />
        {isDead && (
          <div className="absolute top-0 left-0 w-full h-full grayscale opacity-50"></div>
        )}
        <h3
          className="ms-2 text-xl font-Nunito truncate relative z-5 text-white"
          id="h3-img"
        >
          {character.name}
        </h3>
        <p className="ms-2 relative z-5 text-white" id="p-img">
          {character.species}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
