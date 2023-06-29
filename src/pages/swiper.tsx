import { Modal, Button } from "@mui/material";
import Head from "next/head";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-medium-image-zoom/dist/styles.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const images: string[] = [
  "/images/my-picture.jpg",
  `/images/img%20(0).jpg`,
  `/images/img%20(1).jpg`,
  `/images/img%20(2).jpg`,
  `/images/img%20(3).jpg`,
  `/images/img%20(4).jpg`,
  `/images/img%20(5).jpg`,
];

const Swipe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Button
        variant="text"
        onClick={() => setIsOpen(true)}
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          backgroundColor: "rgba(250, 250, 250, 0.2)",
          cursor: "pointer",
        }}
      >
        button
      </Button>
      <Modal
        open={isOpen}
        hideBackdrop
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          position: "fixed",
          margin: "auto 0",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(255, 255, 255, 0.5)",
          cursor: "zoom-out",
        }}
      >
        <>
          <Button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "5%",
              left: "5%",
              backgroundColor: "rgba(250, 250, 250, 0.2)",
              cursor: "pointer",
            }}
          >
            Close
          </Button>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoHeight
            style={{
              width: "100%",
              display: "flex",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            {images.map((image, i) => (
              <SwiperSlide
                key="Swiper"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={image}
                  alt={`img(${i}).jpg`}
                  style={{
                    maxWidth: "70%",
                    maxHeight: "80vh",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Modal>
    </>
  );
};

export default Swipe;
