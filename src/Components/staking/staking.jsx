import React, { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./staking.scss";

const useStyles = makeStyles((theme) => ({
  indicator: {
    outline: `none`,
    borderBottom: `2px solid #FFF`,
  },
  content: {
    marginTop: "30px",
  },
}));

function Staking() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // const handleChange = (event, newValue) => {
  //   setActiveTab(newValue);
  // };

  return (
    <section className="staking">
      <div className="staking-main">
        <div className="top">
          <h2>Welcome To Staking</h2>
        </div>
        <div className="bottom">
          <div className="reward">
            <div className="line"></div>
            <div className="unclaimed-reward">
              <h6>Unclaimed Reward</h6>
              <p>0.0000</p>
            </div>
            <div className="line"></div>
            <div className="total-staking">
              <h6>Total Amount Staked</h6>
              <p>0.0000</p>
            </div>
            <div className="line"></div>
          </div>

          <div className="tab-section">
            <div className="tab-head">
              <h2>Deposit</h2>
            </div>
            <div className="tab-part">
              <Tabs
                value={activeTab}
                onChange={handleChange}
                classes={{ indicator: classes.indicator }}
                textColor="primary"
                variant="fullWidth"
              >
                <Tab className="tab" label="6 Months" />
                <Tab className="tab" label="1 Year" />
                <Tab className="tab" label="2 Year" />
              </Tabs>
              <div className={classes.content}>
                {activeTab === 0 && (
                  <Typography>
                    <div className="tab-content">
                      <div className="ist">
                        <h5>Deposit</h5>
                        <p>
                          Balance: <span> 0 bnb</span>
                        </p>
                      </div>{" "}
                      <div className="second">
                        <input
                          type="number"
                          min={0}
                          placeholder="Enter amount"
                        />
                        <button>MAX</button>
                      </div>
                      <div className="third">
                        <p>APY</p>
                        <span>15%</span>
                      </div>
                      <div className="forth">
                        <p>Total Returns</p>
                        <span>00</span>
                      </div>
                      <button className="approve">Approve</button>
                    </div>
                  </Typography>
                )}
                {activeTab === 1 && (
                  <Typography>
                    <div className="tab-content">
                      <div className="ist">
                        <h5>Deposit</h5>
                        <p>
                          Balance: <span> 0 bnb</span>
                        </p>
                      </div>{" "}
                      <div className="second">
                        <input
                          type="number"
                          min={0}
                          placeholder="Enter amount"
                        />
                        <button>MAX</button>
                      </div>
                      <div className="third">
                        <p>APY</p>
                        <span>15%</span>
                      </div>
                      <div className="forth">
                        <p>Total Returns</p>
                        <span>00</span>
                      </div>
                      <button className="approve">Approve</button>
                    </div>
                  </Typography>
                )}
                {activeTab === 2 && (
                  <Typography>
                    <div className="tab-content">
                      <div className="ist">
                        <h5>Deposit</h5>
                        <p>
                          Balance: <span> 0 bnb</span>
                        </p>
                      </div>{" "}
                      <div className="second">
                        <input
                          type="number"
                          min={0}
                          placeholder="Enter amount"
                        />
                        <button>MAX</button>
                      </div>
                      <div className="third">
                        <p>APY</p>
                        <span>15%</span>
                      </div>
                      <div className="forth">
                        <p>Total Returns</p>
                        <span>00</span>
                      </div>
                      <button className="approve">Approve</button>
                    </div>
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Staking;
