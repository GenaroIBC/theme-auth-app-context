export default function Footer({ isAuth, theme }) {
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
