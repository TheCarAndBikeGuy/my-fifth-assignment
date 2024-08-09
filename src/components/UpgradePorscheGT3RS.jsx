import porscheImage from "../images/porsche2.png";

export default function UpgradePorscheGT3RS(props) {
  return (
    <div
      onClick={props.buyPorscheGT3RS}
      className="mainBtn"
      title="Porsche GT3 RS"
      tabIndex={0}
    >
      <img src={porscheImage} alt="porscheImg" width={75} height={90}></img>
      <p>
        Porsche GT3 RS Upgrade:
        <br />
        Cost: 30000 Cars
        <br />
        Cars Per Second: 600
        <br />
        Owned: {props.porsche}
      </p>
    </div>
  );
}
