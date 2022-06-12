import styled from "styled-components";

export const BASE_URL = "https://api.devmart.software/ms-golang/api/";
export interface products {
  id: string;
  category: string;
  description: string;
  images: string[];
}

export interface productReview {
  products: products[];
  message: string;
}

export var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const WrapSlider = styled.div`
  .slick-dots .slick-active {
    border: 3px solid black;
    border-radius: 50%;
  }

  .slick-dots li.slick-active button:before {
    color: transparent;
  }

  .slick-prev {
    ::before {
      content: "❮";
      color: black;
    }
    background-color: white;
    height: 4rem;
    width: 4rem;
    z-index: 1;
    border-radius: 50%;
  }

  .slick-next {
    ::before {
      content: "❯";
      color: black;
    }
    background-color: white;
    height: 4rem;
    width: 4rem;
    z-index: 1;
    border-radius: 50%;
  }
`;