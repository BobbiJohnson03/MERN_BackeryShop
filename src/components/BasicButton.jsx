import PropTypes from "prop-types";
import { Button } from "@mui/material";

const MUIButton = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

// Definiowanie typów propsów
MUIButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, // Dynamiczna treść przycisku
};

export default MUIButton;
