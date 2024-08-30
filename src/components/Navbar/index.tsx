import { useSelector } from "react-redux";
import logo from "../../assets/img/argentBankLogo.png";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const user = useSelector((state) => state?.user);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div >
        {user.token == "" ? (
          <a className="main-nav-item" href="./signin">
            <i className="fa fa-user-circle icon-margin"></i>
            Sign In
          </a>
        ) : (
          <div className="name-log">
            <div>
              <i className="fa fa-user-circle icon-margin"></i>
              <span className="nav-firstname">{user.firstName}</span>
            </div>
            <a className="main-nav-item" href="./">
              <i className="fa fa-sign-out icon-margin"></i>
              Sign Out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
