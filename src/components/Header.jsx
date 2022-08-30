import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";

export default function Header() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const { isAuth, handleAuth } = useContext(AuthContext);

  return (
    <header className={`header ${theme}`}>
      <nav className="header__nav">
        <ul className="header__nav__links">
          <li>
            <a href="#">Hello</a>
          </li>
          <li>
            <a href="#">Everyone</a>
          </li>
          <li>
            <a href="#">Here!</a>
          </li>
          <li>
            <button onClick={handleAuth}>{isAuth ? "Logout" : "Login"}</button>
          </li>
          <li>
            <button onClick={handleChangeTheme}>Theme : {theme}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
