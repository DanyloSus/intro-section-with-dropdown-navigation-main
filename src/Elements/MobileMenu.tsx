import { useState } from "react";

const MobileMenu = () => {
  const [isHover, setIsHover] = useState({ 1: false, 2: false });

  const handleClose = () => {
    const shadow = document.getElementById("shadow");
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobileMenu");
    if (shadow) shadow.style.opacity = "0";
    if (menu) menu.style.right = "-240px";

    const scrollY = parseInt(document.body.style.top || "0", 10);
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";

    window.scrollTo(0, scrollY);

    setTimeout(() => {
      if (mobileMenu) {
        mobileMenu.style.zIndex = "-10";
      }
    }, 1000);
  };

  return (
    <div
      className="absolute overflow-hidden"
      id="mobileMenu"
      style={{ zIndex: "-10" }}
    >
      <div
        className="min-h-screen max-h-full w-screen bg-almost-black transition-opacity duration-1000"
        style={{ opacity: 0 }}
        id="shadow"
      ></div>
      <div
        className="bg-almost-white absolute top-0 w-[240px] h-screen pr-4 pt-6 pl-6 transition-all duration-1000"
        id="menu"
        style={{ right: "-240px" }}
      >
        <img
          src="./icon-close-menu.svg"
          alt="icon close menu"
          className="ml-auto"
          onClick={handleClose}
        />
        <div className="flex flex-col gap-[30px] mt-9">
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
                className="transition-all"
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
                className="transition-all"
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
        <div className="ml-auto flex flex-col items-center mt-[30px] gap-[15px]">
          <a>Login</a>
          <button className="px-6 border border-medium-gray text-medium-gray hover:border-almost-black hover:text-almost-black rounded-2xl transition-colors duration-[0.25s] ease-in-out w-full py-2">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
