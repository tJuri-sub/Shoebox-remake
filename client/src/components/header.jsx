import { useState, useEffect } from "react";
import { CartIcon, HamburgerIcon, UserIcon } from "./icons/index";
import Navbar from "./dropdown/navbar";
import UserModal from "./dropdown/user";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setIsUserOpen(false);
  };

  const toggleUser = () => {
    setIsUserOpen((prev) => !prev);
    setIsNavOpen(false);
  };

  // Close navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsNavOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-secondary relative flex items-center justify-between p-4 z-10">
      <h1 className="text-xl font-bold">Shoebox</h1>

      {/* Navbar is hidden on mobile and centered on large screens */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
        <Navbar />
      </div>

      <div className="flex items-center gap-2">
        <button className="lg:cursor-pointer">
          <CartIcon />
        </button>

        <button className="lg:cursor-pointer" onClick={toggleUser}>
          <UserIcon />
          {isUserOpen && (
            <div className="bg-secondary absolute top-full right-0 w-[50%] p-4 shadow-md">
              <UserModal close={() => setIsUserOpen(false)} />
            </div>
          )}
        </button>

        <button className="lg:hidden" onClick={toggleNav}>
          <HamburgerIcon />
        </button>
      </div>

      {isNavOpen && (
        <div className="bg-secondary absolute top-full right-0 h-[calc(100dvh-1rem)] w-[50%] p-4 shadow-md lg:hidden">
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default Header;
