import React from "react";
import "./Mint.scss";
function Mint() {
  return (
    <section className="Mint">
      <div className="Mint-main">
        <div className="left">
          <img src="/Images/mint.png" alt="..." className="im-fluid" />
        </div>
        <div className="right">
          <h1>MINT nFT</h1>
          <div className="input-div">
            <button className="plus">
              <img src="/Images/plus.png" alt="..." />
            </button>
            <input type="number" min={0} max={20} />
            <button className="minus">
              <img src="/Images/minus.png" alt="..." />
            </button>
          </div>
          <div class="dropdown-div">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tier
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <p>Total price: 1eth</p>
          <button className="mint-btn">Mint</button>
        </div>
      </div>
    </section>
  );
}

export default Mint;
