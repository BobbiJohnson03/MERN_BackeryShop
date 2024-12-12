import { Box, Typography, Button } from "@mui/material";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#f0f0f0",
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: 3, mt: 5 }}>
          Witamy w naszej piekarni!
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Najlepsze pieczywo prosto z pieca
        </Typography>
        <img src="path/to/your/image.jpg" alt="Bakery" style={{ maxWidth: "100%", marginBottom: "2rem" }} />
        <Button variant="contained" color="primary" onClick={() => console.log("Przejdź do logowania!")}>
          Zaloguj się
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
