export default function UpgradePorscheGT3RS(props) {
  return (
    <p className="porscheText">
      <button
        title="Porsche GT3 RS"
        tabIndex={0}
        className="porsche"
        onClick={props.buyPorscheGT3RS}
      ></button>
      Porsche GT3 RS Upgrade:
      <br />
      Cost: 30000 Cars
      <br />
      Cars Per Second: 600
    </p>
  );
}
