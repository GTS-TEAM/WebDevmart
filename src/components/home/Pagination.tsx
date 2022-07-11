import React from "react";
import { IPagination } from "./dataHome";

const Pagination: React.FC<IPagination> = ({
  postPerPage,
  totalPost = 0,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const NextPage = () => {
    if (pageNumbers.length > 1) {
      paginate(currentPage + 1);
    }
  };

  const PrevPage = () => {
    if (pageNumbers.length > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <nav>
      <ul className="flex items-center my-8 gap-2">
        <button
          className="ease-out duration-300 focus:outline-none outline-none border-[1px] border-gray-300 hover:border-black px-4 py-2 cursor-pointer"
          onClick={PrevPage}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${
              currentPage === number && "bg-black text-white"
            } ease-out duration-300 border-[1px] border-gray-300 hover:border-black px-4 py-2 cursor-pointer`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <button
          onClick={NextPage}
          className="ease-out duration-300 focus:outline-none outline-none border-[1px] border-gray-300 hover:border-black px-4 py-2 cursor-pointer"
          disabled={currentPage === Math.ceil(totalPost / postPerPage)}
        >
          &raquo;
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
