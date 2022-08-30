export default function Main({ isAuth, theme }) {
  return (
    <main className={`${theme}`}>
      <h2>Hello!!</h2>
      <h3>Welcome {isAuth ? "user" : "guest"}!</h3>
    </main>
  );
}
