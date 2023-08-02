import React from "react";
import "./stakingUtilix.scss";
function StakingUtilix() {
  return (
    <div className="container">
      {/* <section className="staking-utilix">
        <div className="head">
          <h1>Staked utilix NFTs</h1>
          <button className="stake-btn">Stake</button>
        </div>
        <div className="cards">
          <div className="nft">
            <button className="tick-btn"></button>

            <div className="top">
              <h3>amount</h3>
              <button className="amount">2</button>
            </div>
            <div className="img-div">
              <img src="/Images/nft1.png" alt="..." />
            </div>
            <div className="bottom">
              <p>tier</p>
              <p>01</p>
            </div>
          </div>
          <div className="nft">
            <button className="tick-btn"></button>

            <div className="top">
              <h3>amount</h3>
              <button className="amount">2</button>
            </div>
            <div className="img-div">
              <img src="/Images/nft2.png" alt="..." />
            </div>
            <div className="bottom">
              <p>tier</p>
              <p>01</p>
            </div>
          </div>
          <div className="nft">
            <button className="tick-btn"></button>

            <div className="top">
              <h3>amount</h3>
              <button className="amount">2</button>
            </div>
            <div className="img-div">
              <img src="/Images/nft3.png" alt="..." />
            </div>
            <div className="bottom">
              <p>tier</p>
              <p>01</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="empty-staking">
        <h1 className="headi">Staked utilix NFTs</h1>
        <div className="content">
          <img src="/Images/emptystake.png" alt="..." />
          <p>No NFTs found</p>
          <span>Connect your wallet that has your utilix collection NFTs</span>
        </div>
      </section>
    </div>
  );
}

export default StakingUtilix;
