import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mainlayout from "./components/Mainlayout";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Mainlayout />
    </div>
  );
}

export default App;
