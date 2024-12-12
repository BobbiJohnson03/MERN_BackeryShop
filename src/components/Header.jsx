import { useState } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleProductsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProductsClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => navigate("/")}>
          Strona Główna
        </Button>
        <Button
          color="inherit"
          onClick={handleProductsClick}
        >
          Produkty
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProductsClose}
        >
          <MenuItem
            sx={{ "&:hover": { textDecoration: "underline" } }}
            onClick={() => navigate("/chleby")}
          >
            Chleby
          </MenuItem>
          <MenuItem
            sx={{ "&:hover": { textDecoration: "underline" } }}
            onClick={() => navigate("/bulki")}
          >
            Bułki
          </MenuItem>
          <MenuItem
            sx={{ "&:hover": { textDecoration: "underline" } }}
            onClick={() => navigate("/ciasta")}
          >
            Ciasta
          </MenuItem>
          <MenuItem
            sx={{ "&:hover": { textDecoration: "underline" } }}
            onClick={() => navigate("/inne")}
          >
            Inne
          </MenuItem>
        </Menu>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" onClick={() => navigate("/login")}>
          Zaloguj się
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
