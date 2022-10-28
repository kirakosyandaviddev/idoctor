import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

interface DoctorsCarouselProps {
  children: any
}

export const DoctorsCarousel: FC<DoctorsCarouselProps>  = (props) =>  {

  const { children } = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    
  return (
    <Container maxWidth="lg">
      <Slider {...settings}>
        {children}
      </Slider>
    </Container>
  );
}