import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <Container maxWidth="sm" style={{ padding: 10, backgroundColor: "white" }}>
      <WelcomeScreen />
    </Container>
  );
}

export default App;
