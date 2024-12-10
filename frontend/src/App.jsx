//import React from "react";
import MUIButton from "./components/ui/Button";

const App = () => {
  const handleClick = () => {
    alert("Hello, world!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <MUIButton onClick={handleClick} />
    </div>
  );
};

export default App;
