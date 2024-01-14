import React from "react";
import Backgroud from "./components/Backgroud";
import ForeGround from "./components/ForeGround";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800">
      <Backgroud />
      <ForeGround />
    </div>
  );
};

export default App;
