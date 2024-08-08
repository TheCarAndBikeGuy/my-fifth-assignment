export default function UpgradeMazdaRX7(props) {
  return (
    <p className="mazdaText">
      <button
        title="Mazda RX7"
        tabIndex={0}
        className="mazda"
        onClick={props.buyMazdaRX7}
      ></button>
      Mazda RX7 Upgrade:
      <br />
      Cost: 5000 Cars
      <br />
      Cars Per Second: 150
    </p>
  );
}
