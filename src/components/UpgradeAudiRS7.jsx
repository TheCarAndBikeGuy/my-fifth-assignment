export default function UpgradeAudiRS7(props) {
  return (
    <p className="audiText">
      <button
        id="audiBtn"
        title="Audi RS7"
        tabIndex={0}
        className="audi"
        onClick={props.buyAudiRS7}
      ></button>
       Audi RS7 Upgrade:
      <br />
      Cost: 1000 Cars
      <br />
      Cars Per Second: 75
    </p>
  );
}
