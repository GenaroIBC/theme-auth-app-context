export default function Header({
  isAuth,
  handleAuth,
  theme,
  handleChangeTheme,
}) {
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
