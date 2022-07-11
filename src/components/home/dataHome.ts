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
