import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-medium-image-zoom";
import Head from "next/head";
import "react-medium-image-zoom/dist/styles.css";
import "swiper/css";

const Swipe = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Images</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
      >
        {[...Array(7)].map((_, i) => {
          return (
            <SwiperSlide>
              <Zoom>
                <img
                  src={`images/img%20(${String(i)}).jpg`}
                  alt={`img(${i}).jpg`}
                />
              </Zoom>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Swipe;
