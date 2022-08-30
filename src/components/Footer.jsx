import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Footer({ isAuth }) {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer ${theme}`}>
      <hr />
      <p>
        {isAuth ? (
          <a target="_blank" href="https://github.com/GenaroIBC/theme-auth-app">
            See this project's repo on GitHub
          </a>
        ) : (
          "Log in to see the repo"
        )}
      </p>
      <hr />
    </footer>
  );
}
