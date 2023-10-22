import React from "react";

export default function Pagination({
  postsPerPage,
  totalCount,
  totalPosts,
  paginate,
  currentPage,
  paginateFront,
  paginateBack,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts; i++) {
    pageNumbers.push(i);
  }

  let showPage = postsPerPage * currentPage;

  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">{showPage}</span>
          to
          {/* <span className="font-medium"> {currentPage * postsPerPage + 10} </span> */}
          <span className="font-medium"> {totalCount} </span>
          of
          <span className="font-medium"> {totalCount} </span>
          results
        </p>
      </div>
    
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <nav className="block">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              {currentPage > 1 && (
                <button
                  onClick={() => {
                    paginateBack();
                  }}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span>Previous</span>
                </button>
              )}
              <li>
                {pageNumbers.map((number, ind) => (
                  <button
                    key={ind}
                    onClick={() => {
                      paginate(number);
                    }}
                    className={
                      currentPage === number
                        ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    }
                  >
                    {number}
                  </button>
                ))}
              </li>
              {totalCount !== showPage && (
                <button
                  onClick={() => {
                    paginateFront();
                  }}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span>Next</span>
                </button>
              )}
            </ul>
          </nav>
        </nav>
    </div>
  );
}
