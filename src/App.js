import "./App.css";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/Footer/Footer";
import FutureCollection from "./Components/FutureCollection/FutureCollection";
import Main from "./Components/Main/Main";
import Mint from "./Components/Mint/Mint";
import Navbar from "./Components/Navbar/Navbar";
import NftStaking from "./Components/nftStaking/nftStaking";
import Staking from "./Components/staking/staking";
import StakingInfo from "./Components/stakingInfo/stakingInfo";
import StakingUtilix from "./Components/stakingUtilix/stakingUtilix";
import UnstakedUtilix from "./Components/unStakedUtilix/unstakedUtilix";

function App() {
  return (
    <>
      {/* <Discover />
      <Mint />
      <Main />
      <FutureCollection />
      <Footer /> */}
      {/* <Staking /> */}
      {/* <NftStaking />
      <StakingInfo /> */}
      <StakingUtilix />
      <UnstakedUtilix />
    </>
  );
}

export default App;
