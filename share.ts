import styled from "styled-components";

export const BASE_URL = "https://api.devmart.software/ms-golang/api/";

export interface User {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  role: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface ResLogin {
  user: User;
  token: Token;
  message: string;
}

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

export interface User {
  name: string;
  age: number;
}

export const ratingSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const settings = {
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
    right: -4rem;
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

export const SliderTop = styled.div`
  .slick-dots .slick-active {
    border: 3px solid black;
    border-radius: 5px;
    width: 2rem;
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

export const SliderRating = styled.div`
  .slick-dots {
    background-color: aliceblue;
    width: 100%;
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
    left: -4rem;
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
    right: -4rem;
  }
`;
