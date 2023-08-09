const Header = () => {
  return (
    <header className="w-screen flex items-center px-10 pt-8">
      <img src="./logo.svg" alt="logo" className="cursor-pointer" />
      <div className="flex ml-16 gap-10">
        <div id="features">
          <a>
            Features <img src="./icon-arrow-down.svg" alt="icon arrow down" />
          </a>
          <div>
            <a>
              <img src="./icon-todo.svg" alt="icon todo" /> Todo List
            </a>
            <a>
              <img src="./icon-calendar.svg" alt="icon calendar" /> Calendar
            </a>
            <a>
              <img src="./icon-reminders.svg" alt="icon reminders" /> Reminders
            </a>
            <a>
              <img src="./icon-planning.svg" alt="icon planning" /> Planning
            </a>
          </div>
        </div>
        <div id="company">
          <a>
            Company <img src="./icon-arrow-down.svg" alt="icon arrow down" />
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
      <div className="ml-auto flex">
        <a>Login</a>
        <button className="px-6 py-3 border border-medium-gray text-medium-gray hover:border-almost-black hover:text-almost-black rounded-2xl ml-10 transition-colors duration-[0.25s] ease-in-out">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
