import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

interface CarouselProps {
  children: any
}

export const Carousel: FC<CarouselProps>  = (props) =>  {

  const { children } = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
    
  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>
      <Slider {...settings}>
        {children}
      </Slider>
    </Container>
  );
}