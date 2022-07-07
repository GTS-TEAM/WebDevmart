import styled from "styled-components";

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
        dots: false,
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
    right: 0;
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

// export const dummyData = [
//   {
//     name: "Macbook Pro",
//     category: "Electrical",
//     description:
//       "The new MacBook Pro features a 1080p camera, the best audio system in a notebook, and the most advanced connectivity ever in a MacBook Pro",
//     color: ["white", "black"],
//     image:
//       "https://res.cloudinary.com/titus-nguyen/image/upload/v1656257015/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large-removebg-preview_sxbpvi.png",
//   },
//   {
//     name: "Apple Watch",
//     category: "Electrical",
//     description: "Over 50 percent more screen area than Series 3.",
//     color: ["white", "black", "pink"],
//     image:
//       "https://res.cloudinary.com/titus-nguyen/image/upload/v1656257136/og__n5qzveqr596m-removebg-preview_ybjnog.png",
//   },
//   {
//     name: "Nike Zion 1 PF Basketbal",
//     category: "Fashion",
//     description:
//       "This PF version uses an extra-durable outsole that's designed for outdoor courts.",
//     color: ["green", "white", "red"],
//     image:
//       "https://res.cloudinary.com/titus-nguyen/image/upload/v1656257256/zion-1-pf-basketball-shoes-bHGvxg-removebg-preview_wqou9i.png",
//   },
// ];

export const dummyData = [
  {
    name: "Macbook Pro",
    category: "Electrical",
    description:
      "The new MacBook Pro features a 1080p camera, the best audio system in a notebook, and the most advanced connectivity ever in a MacBook Pro",
    color: ["white", "black"],
    image: "https://blueskytechco.com/gosto/wp-content/uploads/2021/10/4-1.jpg",
  },
  {
    name: "Apple Watch",
    category: "Electrical",
    description: "Over 50 percent more screen area than Series 3.",
    color: ["white", "black", "pink"],
    image: "https://blueskytechco.com/gosto/wp-content/uploads/2021/10/6.jpg",
  },
  {
    name: "Nike Zion 1 PF Basketbal",
    category: "Fashion",
    description:
      "This PF version uses an extra-durable outsole that's designed for outdoor courts.",
    color: ["green", "white", "red"],
    image:
      "https://blueskytechco.com/gosto/wp-content/uploads/2021/10/25-1.jpg",
  },
];
