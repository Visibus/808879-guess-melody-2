import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {number} from "prop-types";

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {gameTime: number, errorCount: number};

export default App;
