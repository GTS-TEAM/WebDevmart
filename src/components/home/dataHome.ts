export const titleHome = [
  {
    title: "Uncategorized",
  },
  {
    title: "Decoration",
  },
  {
    title: "Dining & Kitchen",
  },
  {
    title: "Fashion",
  },
  {
    title: "Furniture",
  },
  {
    title: "Lighting",
  },
  {
    title: "Maketplace",
  },
  {
    title: "Medical",
  },
  {
    title: "Organic",
  },
  {
    title: "Outdoor & Gift",
  },
  {
    title: "Phone",
  },
  {
    title: "Sport",
  },
  {
    title: "Tables & Chairs",
  },
];

export const optionSort = [
  {
    title: "Default Sorting",
  },
  {
    title: "Sorting for name",
  },
];

export interface IPagination {
  postPerPage: number;
  totalPost?: number;
  currentPage: number;
  paginate: (number: number) => void;
}

export const featureMotion = {
  rest: {
    y: 50,
    opacity: 0,
    ease: "easeOut",
    duration: 1,
    type: "tween",
  },
  hover: {
    y: 20,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
