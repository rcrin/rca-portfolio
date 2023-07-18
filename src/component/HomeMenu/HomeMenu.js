import React from "react";
import image from "./pokemon_project.png";
import "./HomeMenu.css";

const HomeMenu = () => {
  return (
    <div className="home-content">
      <div className="image-wrapper">
        <img src={image} alt="game_image" />
        <div className="text-content">
          <p>
            <span className="title">WEIRD POKEMON GAME</span>
            <br />
            <br />
            This is currently my personal project. <br />
            Side-scrolling 2D game. <br />
            Stack: NodeJS, ExpressJS, Phaser3 and Parcel
          </p>
        </div>
      </div>
      <div className="home-text">
        <img
          className="avatar"
          src={image}
          alt="Avatar"
          width={250}
          height={250}
        />
        <p>
          Hi! I'm <span className="gold">Ramil Christian L. Atangan</span>
          <br />
          Fullstack Developer
        </p>
      </div>
    </div>
  );
};

export default HomeMenu;
