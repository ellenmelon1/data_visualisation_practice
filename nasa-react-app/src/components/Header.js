import '../App.css';

const Header = () => {
  return (
    <div>
      <h1 className="tc pv4 pv4-ns header--main">NASA Meteorite Landings</h1>
      <h3 className="tc f5 f4-ns fw6 mid-gray header--subheading">
        Filter the data to show the location of recorded meteorite landings on
        the map:
      </h3>
    </div>
  );
};

export default Header;
