export default function UpgradeMiniCooper(props) {
  return (
    <p className="miniText">
      <button
        title="Mini Cooper"
        tabIndex={0}
        className="mini"
        onClick={props.buyMiniCooper}
      ></button>
      Mini Cooper Upgrade:
      <br />
      Cost: 50 Cars
      <br />
      Cars Per Second: 5
    </p>
  );
}
