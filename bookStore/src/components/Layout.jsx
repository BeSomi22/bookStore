import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Layout() {
  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <img src={logo} alt="logo" />
        <div className="container-footer">
          <p>
            &copy; 2024{" "}
            <a className="link" href="https://github.com/BeSomi22">
              BeSomi22
            </a>{" "}
            BookNook
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
