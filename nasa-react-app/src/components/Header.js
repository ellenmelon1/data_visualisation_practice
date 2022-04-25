import '../App.css';

const Header = () => {
  return (
    <div>
      <h1 className="header" style={{ fontFamily: 'Distant Galaxy' }}>
        NASA Meteorite Landings
      </h1>
      <h3 className="instructions" style={{ fontFamily: 'Distant Galaxy' }}>
        Filter the data to show the location of recorded meteorite landings on
        the map
      </h3>
      <p
        className="default_inputs_label"
        style={{ fontFamily: 'Distant Galaxy' }}
      >
        Default values are 2010 - 2012
      </p>
    </div>
  );
};

export default Header;
