//import React from "react";
import { Button } from "@mui/material"; // Importujemy Button z MUI

const MUIButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Hello
    </Button>
  );
};

export default MUIButton;
