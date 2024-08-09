import golfImage from "../images/golf2.png";

export default function UpgradeVolkswagonGolf(props) {
  return (
    <div
      onClick={props.buyVolkswagonGolf}
      className="mainBtn"
      title="Volkswagon Golf"
      tabIndex={0}
    >
      <img src={golfImage} alt="golfImg" width={75} height={75}></img>
      <p>
        Volkswagon Golf Upgrade:
        <br />
        Cost: 150 Cars
        <br />
        Cars Per Second: 15
        <br />
        Owned: {props.golf}
      </p>
    </div>
  );
}
