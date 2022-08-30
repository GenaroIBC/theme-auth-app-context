import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Main({ isAuth }) {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`${theme}`}>
      <h2>Hello!!</h2>
      <h3>Welcome {isAuth ? "user" : "guest"}!</h3>
    </main>
  );
}
