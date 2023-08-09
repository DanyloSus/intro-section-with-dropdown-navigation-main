import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isHover, setIsHover] = useState({ 1: false, 2: false });

  const handleOpen = () => {
    const shadow = document.getElementById("shadow");
    const mobileMenu = document.getElementById("mobileMenu");
    const menu = document.getElementById("menu");
    if (mobileMenu) mobileMenu.style.zIndex = "10";
    if (shadow) shadow.style.opacity = "0.5";
    if (menu) menu.style.right = "0px";

    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
  };

  return (
    <>
      <MobileMenu />
      <header className="w-screen flex items-center px-10 pt-8 lg:pt-6 lg:px-4 head-left">
        <img src="./logo.svg" alt="logo" className="cursor-pointer" />
        <div className="flex ml-16 gap-10 lg:hidden">
          <div
            id="features"
            onMouseEnter={() => {
              setIsHover({ 1: true, 2: false });
            }}
            onMouseLeave={() => {
              setIsHover({ 1: false, 2: false });
            }}
          >
            <a>
              Features{" "}
              <img
                src="./icon-arrow-down.svg"
                alt="icon arrow down"
                className="transition-all ease-in-out"
                style={isHover[1] ? { rotate: "180deg" } : {}}
              />
            </a>
            <div>
              <a>
                <img src="./icon-todo.svg" alt="icon todo" /> Todo List
              </a>
              <a>
                <img src="./icon-calendar.svg" alt="icon calendar" /> Calendar
              </a>
              <a>
                <img src="./icon-reminders.svg" alt="icon reminders" />{" "}
                Reminders
              </a>
              <a>
                <img src="./icon-planning.svg" alt="icon planning" /> Planning
              </a>
            </div>
          </div>
          <div
            id="company"
            onMouseEnter={() => {
              setIsHover({ 1: false, 2: true });
            }}
            onMouseLeave={() => {
              setIsHover({ 1: false, 2: false });
            }}
          >
            <a>
              Company{" "}
              <img
                src="./icon-arrow-down.svg"
                alt="icon arrow down"
                className="transition-all ease-in-out"
                style={isHover[2] ? { rotate: "180deg" } : {}}
              />
            </a>
            <div>
              <a>History</a>
              <a>Our Team</a>
              <a>Blog</a>
            </div>
          </div>
          <a>Careers</a>
          <a>About</a>
        </div>
        <div className="ml-auto flex lg:hidden">
          <a>Login</a>
          <button className="px-6 py-3 border border-medium-gray text-medium-gray hover:border-almost-black hover:text-almost-black rounded-2xl ml-10 transition-colors duration-[0.25s] ease-in-out">
            Register
          </button>
        </div>
        <img
          src="./icon-menu.svg"
          alt="icon menu"
          className="ml-auto cursor-pointer lg:block hidden"
          onClick={handleOpen}
        />
      </header>
    </>
  );
};

export default Header;
