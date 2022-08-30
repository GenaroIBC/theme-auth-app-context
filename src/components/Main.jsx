import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";

export default function Main() {
  const { isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`${theme}`}>
      <h2>Hello!!</h2>
      <h3>Welcome {isAuth ? "user" : "guest"}!</h3>
    </main>
  );
}
