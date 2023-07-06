import React from "react";
import "./Discover.scss";
import Navbar from "../Navbar/Navbar";
function Discover() {
  return (
    <div className="container">
      <section className="Discover">
        <Navbar />

        <div className="Discover-main">
          <div className="left">
            <h1>Discover Collect And Sell Extraordinary NFTs!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultrices quam eu facilisis molestie. Praesent commodo risus eros,
              non pharetra dolor laoreet id. Nunc maximus erat id magna
              porttitor, eget dignissim nisi gravida. Aenean venenatis odio sit
              amet lectus cursus eleifend. Sed libero justo, sollicitudin vitae
              facilisis ac, gravida eu tortor.
            </p>

            <a href="/#mint">BUY NFT</a>
          </div>
          <div className="right">
            <img src="/Images/IMG_6857 1.png" alt="..." className="img-fluid" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discover;
