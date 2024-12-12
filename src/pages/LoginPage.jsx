import { Box, Typography, TextField } from "@mui/material";
import MUIButton from "../components/BasicButton";
import Header from "../components/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Logowanie
        </Typography>
        <TextField label="Email" variant="outlined" sx={{ mb: 2, width: "300px" }} />
        <TextField label="Hasło" variant="outlined" type="password" sx={{ mb: 2, width: "300px" }} />
        <MUIButton onClick={() => console.log("Zalogowano!")}>Zaloguj się</MUIButton>
      </Box>
    </>
  );
};

export default LoginPage;
