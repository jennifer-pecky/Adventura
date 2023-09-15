import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/Head.css';
import { AppContext } from '../App';
export default function Header() {
  const Navigate = useNavigate();
  const [menu, setMenu] = useState(true);
  // const [logout, setLogout] = useState(true)

  const openMenu = () => {
    setMenu((prevMenu) => !prevMenu);
    // console.log('click');
  };

  const [sticky, setSticky] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
  }, []);

  const stickyHeader = () => {
    const winScroll = window.scrollY;
    const stickHeader =
      winScroll >= 100
        ? 'fixed bg-white w-full transition duration-5000'
        : 'absolute bg-white w-full ';
    setSticky(stickHeader);
  };

  const { isLoggedIn, logout } = useContext(AppContext);

  const handleWritePage = () => {
    if (isLoggedIn) {
      Navigate('/stories');
    } else {
      Navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    Navigate('/');
  };

  return (
    <>
      <header
        className={` flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#F5F5F5]  text-sm py-3 sm:py-0 ${sticky}`}
      >
        <nav
          className="relative  w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 md:px-20"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] via-[#3b2f0a] to-[#8B4513] py-2"
            >
              Adventura
            </a>
            <div className="sm:hidden" onClick={openMenu}>
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-[#e4d8b4] text-gray-700 shadow-sm align-middle "
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <hr />
          <div
            id="navbar-collapse-with-animation"
            className={
              menu === false
                ? 'h-[20vh] transition duration-200'
                : 'header hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
            }
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <NavLink to="/">Home</NavLink>
              <button onClick={handleWritePage}>Write</button>
              {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-x-2 font-medium text-[#8B4513] hover:text-[#00003] sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Log in
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
