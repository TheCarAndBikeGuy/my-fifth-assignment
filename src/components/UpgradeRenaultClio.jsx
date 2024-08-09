import renaultImage from "../images/clio.png";

export default function UpgradeRenaultClio(props) {
  return (
    <div
      onClick={props.buyRenaultClio}
      className="mainBtn"
      title="Renault Clio"
      tabIndex={0}
    >
      <img src={renaultImage} alt="clioImg" width={75} height={75}></img>
      <p>
        Renault Clio Upgrade:
        <br />
        Cost: 10 Cars
        <br />
        Cars Per Second: 1
        <br />
        Owned: {props.clio}
      </p>
    </div>
  );
}
