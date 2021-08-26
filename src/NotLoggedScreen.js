import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
function NotLoggedScreen({ setLogin }) {
  return (
    <>
      <h2 style={{ color: "#3f51b5", textAlign: "center" }}>
        Zaloguj się, jeżeli nie masz konta zarejestruj się!
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <LoginForm setLogin={setLogin} />
        <SignUpForm setLogin={setLogin} />
      </div>
    </>
  );
}
export default NotLoggedScreen;
