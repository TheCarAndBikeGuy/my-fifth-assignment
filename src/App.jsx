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
export default function App() {
  // Local Storage Const
  const storedCars = JSON.parse(localStorage.getItem("cars"));
  const storedcps = JSON.parse(localStorage.getItem("cps"));
  const storedClio = JSON.parse(localStorage.getItem("clio"));
  const storedMini = JSON.parse(localStorage.getItem("mini"));
  const storedGolf = JSON.parse(localStorage.getItem("golf"));
  const storedBMW = JSON.parse(localStorage.getItem("bmw"));
  const storedAudi = JSON.parse(localStorage.getItem("audi"));
  const storedMazda = JSON.parse(localStorage.getItem("mazda"));
  const storedChev = JSON.parse(localStorage.getItem("chev"));
  const storedPorsche = JSON.parse(localStorage.getItem("porsche"));

  localStorage.setItem("cars", storedCars);
  localStorage.setItem("countCPS", storedcps);
  localStorage.setItem("buyRenaultClio", storedClio);
  localStorage.setItem("buyMiniCooper", storedMini);
  localStorage.setItem("buyVolkswagonGolf", storedGolf);
  localStorage.setItem("buyBMW3Series", storedBMW);
  localStorage.setItem("buyAudiRS7", storedAudi);
  localStorage.setItem("buyMazdaRX7", storedMazda);
  localStorage.setItem("buyChevBelAir", storedChev);
  localStorage.setItem("buyPorscheGT3RS", storedPorsche);

  const [cars, setCars] = useState(storedCars ? storedCars : 0);
  const [cps, setCps] = useState(storedcps ? storedcps : 1);
  const [clio, setClio] = useState(storedClio ? storedClio : 0);
  const [mini, setMini] = useState(storedMini ? storedMini : 0);
  const [golf, setGolf] = useState(storedGolf ? storedGolf : 0);
  const [bmw, setBMW] = useState(storedBMW ? storedBMW : 0);
  const [audi, setAudi] = useState(storedAudi ? storedAudi : 0);
  const [mazda, setMazda] = useState(storedMazda ? storedMazda : 0);
  const [chev, setChev] = useState(storedChev ? storedChev : 0);
  const [porsche, setPorsche] = useState(storedPorsche ? storedPorsche : 0);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    localStorage.setItem("cps", JSON.stringify(cps));
  }, [cps]);

  useEffect(() => {
    localStorage.setItem("clio", JSON.stringify(clio));
  }, [clio]);

  useEffect(() => {
    localStorage.setItem("mini", JSON.stringify(mini));
  }, [mini]);

  useEffect(() => {
    localStorage.setItem("golf", JSON.stringify(golf));
  }, [golf]);

  useEffect(() => {
    localStorage.setItem("bmw", JSON.stringify(bmw));
  }, [bmw]);

  useEffect(() => {
    localStorage.setItem("audi", JSON.stringify(audi));
  }, [audi]);

  useEffect(() => {
    localStorage.setItem("mazda", JSON.stringify(mazda));
  }, [mazda]);

  useEffect(() => {
    localStorage.setItem("chev", JSON.stringify(chev));
  }, [chev]);

  useEffect(() => {
    localStorage.setItem("porsche", JSON.stringify(porsche));
  }, [porsche]);

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
      setClio(clio + 1);
    }
  }

  function buyMiniCooper() {
    if (cars >= 50) {
      setCars(cars - 50);
      setCps(cps + 5);
      setMini(mini + 1);
    }
  }

  function buyVolkswagonGolf() {
    if (cars >= 150) {
      setCars(cars - 150);
      setCps(cps + 15);
      setGolf(golf + 1);
    }
  }

  function buyBMW3Series() {
    if (cars >= 300) {
      setCars(cars - 300);
      setCps(cps + 30);
      setBMW(bmw + 1);
    }
  }

  function buyAudiRS7() {
    if (cars >= 1000) {
      setCars(cars - 1000);
      setCps(cps + 75);
      setAudi(audi + 1);
    }
  }

  function buyMazdaRX7() {
    if (cars >= 5000) {
      setCars(cars - 5000);
      setCps(cps + 150);
      setMazda(mazda + 1);
    }
  }

  function buyChevBelAir() {
    if (cars >= 15000) {
      setCars(cars - 15000);
      setCps(cps + 300);
      setChev(chev + 1);
    }
  }

  function buyPorscheGT3RS() {
    if (cars >= 30000) {
      setCars(cars - 30000);
      setCps(cps + 600);
      setPorsche(porsche + 1);
    }
  }

  // HTML
  return (
    <div className="carTitle">
      <h1 title="Title" tabIndex={0}>
        🏁 Car Clicker 🏎️
      </h1>

      <button
        className="carClicker"
        onClick={incrementCars}
        title="Car Clicker"
        tabIndex={0}
      ></button>
      <div className="carTitleCSS">
        <p title="Amount Of Cars" tabIndex={0}>
          Car: {cars}
        </p>
        <p title="Cars Per Second" tabIndex={0}>
          Cars Per Second: {cps}
        </p>
      </div>
      <UpgradeRenaultClio buyRenaultClio={buyRenaultClio} clio={clio} />
      <UpgradeMiniCooper buyMiniCooper={buyMiniCooper} mini={mini} />
      <UpgradeVolkswagonGolf
        buyVolkswagonGolf={buyVolkswagonGolf}
        golf={golf}
      />
      <UpgradeBMW3Series buyBMW3Series={buyBMW3Series} bmw={bmw} />
      <UpgradeAudiRS7 buyAudiRS7={buyAudiRS7} audi={audi} />
      <UpgradeMazdaRX7 buyMazdaRX7={buyMazdaRX7} mazda={mazda} />
      <UpgradeChevBelAir buyChevBelAir={buyChevBelAir} chev={chev} />
      <UpgradePorscheGT3RS
        buyPorscheGT3RS={buyPorscheGT3RS}
        porsche={porsche}
      />
    </div>
  );
}
