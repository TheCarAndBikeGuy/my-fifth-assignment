export default function UpgradeChevBelAir(props) {
  return (
    <p className="chevText">
      <button
        title="Chevrolet Bel Air"
        tabIndex={0}
        className="chev"
        onClick={props.buyChevBelAir}
      ></button>
      Chevrolet Bel Air Upgrade:
      <br />
      Cost: 1500 Cars
      <br />
      Cars Per Second: 300
    </p>
  );
}
