import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to='/'>
        <div>CRYPTO PRICES</div>
        {/* Our logo in the navbar and will always take us to the homepage */}
      </Link>

      <Link to='/currencies'>
      <div>
        CURRENCIES
      </div>
      </Link>

    </nav>
  );
}

export default NavBar;
