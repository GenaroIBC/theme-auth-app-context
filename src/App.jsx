import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const [theme, setTheme] = useState("light");

  const handleAuth = () => {
    setIsAuth(prevVal => !prevVal);
  };

  const handleChangeTheme = () => {
    if (theme === "dark") setTheme("ligth");
    else setTheme("dark");
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <Header
        isAuth={isAuth}
        handleAuth={handleAuth}
        theme={theme}
        handleChangeTheme={handleChangeTheme}
      />
      <Main isAuth={isAuth} theme={theme} />
      <Footer isAuth={isAuth} theme={theme} />
    </div>
  );
}

export default App;
