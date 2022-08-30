import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
