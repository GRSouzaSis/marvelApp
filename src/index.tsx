import React from "react";

import { StatusBar } from "react-native";
import Routes from "./routes";
import palette from "./theme/palette";

const App : React.FC = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={palette.primary}/>
      <Routes/>
    </>
  )
}

export default App;