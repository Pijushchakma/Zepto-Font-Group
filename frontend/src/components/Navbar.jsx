import { useState } from "react";

const pageList = [
  "Font Upload",
  "Font List",
  "Create Font Group",
  "Font Group List",
];
function Navbar({ currentPage, handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-slate-100 h-[100px] ">
      <nav className="container mx-auto flex items-center justify-between p-4 gap-2  ">
        {/* Brand Logo */}
        <div className="text-lg font-semibold flex flex-col items-center justify-center">
          <p>Zepto </p>
          <p>Front Group</p>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-4">
          {pageList.map((page, index) => (
            <p
              key={page + index}
              onClick={() => {
                handlePageChange(page);
              }}
              className={` tracking-tighter noto-sans text-lg lg:text-lg font-semibold cursor-pointer ${
                currentPage === page ? "text-blue-800" : ""
              } `}
            >
              {page}
            </p>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-100 p-4`}
      >
        {pageList.map((page, index) => (
          <p
            key={page + index}
            onClick={() => {
              handlePageChange(page);
              setIsMenuOpen(false);
            }}
            className={` tracking-tighter noto-sans text-lg lg:text-lg font-semibold cursor-pointer ${
              currentPage === page ? "text-blue-800" : ""
            } `}
          >
            {page}
          </p>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
