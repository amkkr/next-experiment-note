import { useState, type FC } from "react";
import { Button, Modal } from "@mui/material";
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface ModalImageSwiperProps {
  imageUrls: string[];
}

const ModalImageSwiper: FC<ModalImageSwiperProps> = ({ imageUrls }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        o
      </Button>
      <Modal isOpen={isOpen}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {imageUrls.map((url, i) => (
            <SwiperSlide key="Swiper">
              <Image
                src={`${url}`}
                width={400}
                height={200}
                alt={`img(${i}).jpg`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
};

export default ModalImageSwiper;
