import mazdaImage from "../images/mazda.png";

export default function UpgradeMazdaRX7(props) {
  return (
    <div
      onClick={props.buyMazdaRX7}
      className="mainBtn"
      title="Mazda RX7"
      tabIndex={0}
    >
      <img src={mazdaImage} alt="mazdaImg" width={90} height={75}></img>
      <p>
        Mazda RX7 Upgrade:
        <br />
        Cost: 5000 Cars
        <br />
        Cars Per Second: 150
        <br />
        Owned: {props.mazda}
      </p>
    </div>
  );
}
