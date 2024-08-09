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

// The Clicker & CPS
// Local Storage
export default function App() {
  const storedCars = JSON.parse(localStorage.getItem("cars"));
  const storedcps = JSON.parse(localStorage.getItem("cps"));
  localStorage.setItem("cars", storedCars);
  localStorage.setItem("countCPS", storedcps);
  console.log("storedStats", storedCars, storedcps);

  const [cars, setCars] = useState(storedCars ? storedCars : 0);
  const [cps, setCps] = useState(storedcps ? storedcps : 1);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    localStorage.setItem("cps", JSON.stringify(cps));
    console.log(storedcps);
  }, [cps]);

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
    if (cars >= 10) {
      setCars(cars - 10);
      setCps(cps + 1);
    }
  }

  function buyMiniCooper() {
    if (cars >= 50) {
      setCars(cars - 50);
      setCps(cps + 5);
    }
  }

  function buyVolkswagonGolf() {
    if (cars >= 150) {
      setCars(cars - 150);
      setCps(cps + 15);
    }
  }

  function buyBMW3Series() {
    if (cars >= 300) {
      setCars(cars - 300);
      setCps(cps + 30);
    }
  }

  function buyAudiRS7() {
    if (cars >= 1000) {
      setCars(cars - 1000);
      setCps(cps + 75);
    }
  }

  function buyMazdaRX7() {
    if (cars >= 5000) {
      setCars(cars - 5000);
      setCps(cps + 150);
    }
  }

  function buyChevBelAir() {
    if (cars >= 1500) {
      setCars(cars - 15000);
      setCps(cps + 300);
    }
  }

  function buyPorscheGT3RS() {
    if (cars >= 30000) {
      setCars(cars - 30000);
      setCps(cps + 600);
    }
  }

  // HTML
  return (
    <div className="car">
      <h1 title="Title" tabIndex={0}>
        🏁 Car Clicker 🏎️
      </h1>

      <button
        className="carClicker"
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
      <UpgradeMiniCooper buyMiniCooper={buyMiniCooper} />
      <UpgradeVolkswagonGolf buyVolkswagonGolf={buyVolkswagonGolf} />
      <UpgradeBMW3Series buyBMW3Series={buyBMW3Series} />
      <UpgradeAudiRS7 buyAudiRS7={buyAudiRS7} />
      <UpgradeMazdaRX7 buyMazdaRX7={buyMazdaRX7} />
      <UpgradeChevBelAir buyChevBelAir={buyChevBelAir} />
      <UpgradePorscheGT3RS buyPorscheGT3RS={buyPorscheGT3RS} />
    </div>
  );
}
