export default function UpgradeRenaultClio(props) {
  return (
    <p className="clioText">
      <button
        title="Renault Clio"
        tabIndex={0}
        className="clio"
        onClick={props.buyRenaultClio}
      ></button>
      Renault Clio Upgrade:
      <br />
      Cost: 10 Cars
      <br/>
      Cars Per Second: 1
    </p>
  );
}
