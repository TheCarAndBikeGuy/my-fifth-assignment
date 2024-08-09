import chevImage from "../images/chev.png";

export default function UpgradeChevBelAir(props) {
  return (
    <div
      onClick={props.buyChevBelAir}
      className="mainBtn"
      title="Chevrolet Bel Air"
      tabIndex={0}
    >
      <img src={chevImage} alt="chevImg" width={90} height={75}></img>
      <p>
        Chevrolet Bel Air Upgrade:
        <br />
        Cost: 1500 Cars
        <br />
        Cars Per Second: 300
        <br />
        Owned: {props.chev}
      </p>
    </div>
  );
}
