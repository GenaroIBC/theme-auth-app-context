import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";
import { useContext, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  const { theme } = useContext(ThemeContext);

  const handleAuth = () => {
    setIsAuth(prevVal => !prevVal);
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <Header isAuth={isAuth} handleAuth={handleAuth} />
      <Main isAuth={isAuth} />
      <Footer isAuth={isAuth} />
    </div>
  );
}

export default App;
