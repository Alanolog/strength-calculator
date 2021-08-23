import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <Container
      maxWidth="md"
      style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: "white" }}
    >
      <WelcomeScreen />
    </Container>
  );
}

export default App;
