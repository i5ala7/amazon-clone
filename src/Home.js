import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="div__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51PG7WjcL7L._SX1500_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
