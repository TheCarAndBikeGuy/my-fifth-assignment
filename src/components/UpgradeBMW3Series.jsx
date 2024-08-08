export default function UpgradeBMW3Series(props) {
  return (
    <p className="bmwText">
    <button
      title="BMW 3 Series"
      tabIndex={0}
      className="bmw"
      onClick={props.buyBMW3Series}
    ></button>
       BMW 3 Series Upgrade:
      <br />
      Cost: 300 Cars
      <br/>
      Cars Per Second: 30
    </p>
  );
}
