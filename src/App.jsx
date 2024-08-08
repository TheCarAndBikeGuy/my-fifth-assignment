// The Page And Added Components
import { useState, useEffect } from "react";
import UpgradeRenaultClio from "./components/UpgradeRenaultClio";
import UpgradeMiniCooper from "./components/UpgradeMiniCooper";
import UpgradeVolkswagonGolf from "./components/UpgradeVolkswagonGolf";
import UpgradeBMW3Series from "./components/UpgradeBMW3Series";
import UpgradeAudiRS7 from "./components/UpgradeAudiRS7";
import UpgradeMazdaRX7 from "./components/UpgradeMazdaRX7";
import UpgradeChevBelAir from "./components/UpgradeChevBelAir";
import UpgradePorscheGT3RS from "./components/UpgradePorscheGT3RS";


let clio = 0 

// The Clicker & CPS
export default function App() {
  const [cars, setCars] = useState(1);
  const [cps, setCps] = useState(1);
  localStorage.setItem("countInLS", cars);
  localStorage.setItem("countCPS", cps);

  useEffect(() => {
    const theInterval = setInterval(function () {
      setCars((curr) => curr + cps);
    }, 1000);

    return () => clearInterval(theInterval);
  }, [cps]);

  // Counts Up By One
  function incrementCars() {
    setCars(cars + 1);
  }

  // Upgrades
  function buyRenaultClio() {
    setCars(cars - 10);
    setCps(cps + 1);
  }

  function buyMiniCooper() {
    setCars(cars - 50);
    setCps(cps + 5);
  }

  function buyVolkswagonGolf() {
    setCars(cars - 150);
    setCps(cps + 15);
  }

  function buyBMW3Series() {
    setCars(cars - 300);
    setCps(cps + 30);
  }

  function buyAudiRS7() {
    setCars(cars - 1000);
    setCps(cps + 75);
  }

  function buyMazdaRX7() {
    setCars(cars - 5000);
    setCps(cps + 150);
  }

  function buyChevBelAir() {
    setCars(cars - 15000);
    setCps(cps + 300);
  }

  function buyPorscheGT3RS() {
    setCars(cars - 30000);
    setCps(cps + 600);
  }

  // HTML
  return (
    <div className="car">
      <h1 title="Title" tabIndex={0}>
        🏁 Car Clicker 🏎️
      </h1>

      <button
        class="carClicker"
        onClick={incrementCars}
        title="Car Clicker"
        tabIndex={0}
      ></button>

      <p title="Amount Of Cars" tabIndex={0}>
        Car: {cars}
      </p>
      <p title="Cars Per Second" tabIndex={0}>
        Cars Per Second: {cps}
      </p>
      <UpgradeRenaultClio buyRenaultClio={buyRenaultClio} />
      <p><UpgradeMiniCooper buyMiniCooper={buyMiniCooper} /></p>
      <UpgradeVolkswagonGolf buyVolkswagonGolf={buyVolkswagonGolf} />
      <UpgradeBMW3Series buyBMW3Series={buyBMW3Series} />
      <UpgradeAudiRS7 buyAudiRS7={buyAudiRS7} />
      <UpgradeMazdaRX7 buyMazdaRX7={buyMazdaRX7} />
      <UpgradeChevBelAir buyChevBelAir={buyChevBelAir} />
      <UpgradePorscheGT3RS buyPorscheGT3RS={buyPorscheGT3RS} />
    </div>
  );
}
