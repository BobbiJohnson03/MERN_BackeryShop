import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import "./styles.css"; 

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

       
        <Swiper
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{
            maxWidth: "800px", // Maksymalna szerokość Swipera
            maxHeight: "400px", // Maksymalna wysokość Swipera
            width: "100%", // Ustaw szerokość na 100% dla responsywności
            height: "100%", // Ustaw wysokość na 100% dla responsywności
            margin: "20px auto", // Wyśrodkuj Swiper
          }}
        >

          <SwiperSlide>
            <img src="/assets/bread1.png" alt="Bread" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            <div className="swiper-text">Chleby</div>
          </SwiperSlide>


          <SwiperSlide>
            <img src="/assets/roll1.png" alt="Bread" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            <div className="swiper-text">Bulki</div>
          </SwiperSlide>


          <SwiperSlide>
            <img src="/assets/everything1.png" alt="Bread" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            <div className="swiper-text">Wszystko</div>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/assets/bread1.png" alt="Bread" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            <div className="swiper-text">Bread</div>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/assets/bread1.png" alt="Bread" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            <div className="swiper-text">Bread</div>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/assets/bread1.png" alt="Bread" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            <div className="swiper-text">Bread</div>
          </SwiperSlide>

          
        </Swiper>
      </Box>
    </>
  );
};

export default HomePage;
