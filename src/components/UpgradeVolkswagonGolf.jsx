export default function UpgradeVolkswagonGolf(props) {
  return (
    <p className="golfText">
      <button
        title="Volkswagon Golf"
        tabIndex={0}
        className="golf"
        onClick={props.buyVolkswagonGolf}
      ></button>
      Volkswagon Golf Upgrade:
      <br />
      Cost: 150 Cars
      <br />
      Cars Per Second: 15
    </p>
  );
}
