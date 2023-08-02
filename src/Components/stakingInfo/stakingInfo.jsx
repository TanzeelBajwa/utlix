import React from "react";
import "./stakingInfo.scss";
function StakingInfo() {
  return (
    <div className="container">
      <section className="Staking-info">
        <div className="nft-card">
          <div className="heading">
            <h3>Staking info</h3>
          </div>
          <div className="content">
            <div className="ist">
              <p>Staked Utilix NFTs</p>
              <span>0</span>
            </div>
            <div className="second">
              <p>unstaked Utilix NFTs</p>
              <span>0</span>
            </div>
            <div className="third">
              <p>current Rewards</p>
              <span>0</span>
            </div>
            <div className="forth">
              <p>APY Rewards</p>
              <span>00.00</span>
            </div>
            <button>Start Staking</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StakingInfo;
