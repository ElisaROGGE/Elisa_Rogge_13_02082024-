import { useSelector } from "react-redux";
import logo from "../../assets/img/argentBankLogo.png"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const user = useSelector((state) => state?.user)
  console.log(user, "user navbar")

    return(
        <nav className="main-nav">
          <a className="main-nav-logo" href="/">
              <img
                  className="main-nav-logo-image"
                  src={logo}
                  alt="Argent Bank Logo" />
              <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
              {user.token == "" ?
              <a className="main-nav-item" href="./signin">
                  <i className="fa fa-user-circle"></i>
                  Sign In
              </a>
              :
                <button>
                    <a className="main-nav-item" href="./">
                    <i className="fa fa-user-circle"></i>
                    Sign Out
                    </a>
                </button>
              }
          </div>
      </nav>
    )
}

export default Navbar