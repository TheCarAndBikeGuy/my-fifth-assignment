import miniCooperImage from "../images/mini2.png";

export default function UpgradeMiniCooper(props) {
  return (
    <div
      onClick={props.buyMiniCooper}
      className="mainBtn"
      title="Mini Cooper"
      tabIndex={0}
    >
      <img src={miniCooperImage} alt="miniImg" width={90} height={75}></img>
      <p>
        Mini Cooper Upgrade:
        <br />
        Cost: 50 Cars
        <br />
        Cars Per Second: 5
        <br />
        Owned: {props.mini}
      </p>
    </div>
  );
}
