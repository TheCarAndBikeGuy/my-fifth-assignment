import bmwImage from "../images/bmw3.png";

export default function UpgradeBMW3Series(props) {
  return (
    <div
      onClick={props.buyBMW3Series}
      className="mainBtn"
      title="BMW 3 Series"
      tabIndex={0}
    >
      <img src={bmwImage} alt="bmwImg" width={90} height={75}></img>
      <p>
        BMW 3 Series Upgrade:
        <br />
        Cost: 300 Cars
        <br />
        Cars Per Second: 30
        <br />
        Owned: {props.bmw}
      </p>
    </div>
  );
}
