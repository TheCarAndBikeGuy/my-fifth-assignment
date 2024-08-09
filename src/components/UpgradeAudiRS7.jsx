import audiImage from "../images/audi1.png";

export default function UpgradeAudiRS7(props) {
  return (
    <div
      onClick={props.buyAudiRS7}
      className="mainBtn"
      title="Audi RS7"
      tabIndex={0}
    >
      <img src={audiImage} alt="audiImg" width={90} height={75}></img>
      <p>
        Audi RS7 Upgrade:
        <br />
        Cost: 1000 Cars
        <br />
        Cars Per Second: 75
        <br />
        Owned: {props.audi}
      </p>
    </div>
  );
}
