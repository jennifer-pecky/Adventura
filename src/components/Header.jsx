// import '../styles/Head.css';
import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import '../styles/Head.css';

export default function Header() {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState('');

  const openMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
  }, []);

  const stickyHeader = () => {
    const winScroll = window.scrollY;
    const stickHeader =
      winScroll >= 150
        ? 'fixed bg-[#000000] w-full transition duration-500'
        : 'absolute bg-[#e4d8b4] w-full';
    setSticky(stickHeader);
    console.log(winScroll);
  };

  return (
    <>
      <div
        className={`header flex bg-[#e4d8b4] justify-around items-center p-3 ${sticky}`}
      >
        <div className="w-[90vw] flex justify-around items-center">
          <a
            href="/"
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] via-[#3b2f0a] to-[#8B4513]"
          >
            Adventura
          </a>

          <nav>
            <div className="flex space-x-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/stories">Stories</NavLink>
            </div>
          </nav>

          <div className="flex space-x-5">
            <NavLink
              to="/signup"
              className="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 hover:bg-[#4f431f] hover:text-white"
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              className="py-3 px-7 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-900 hover:bg-[#4f431f] hover:text-white"
            >
              Login
            </NavLink>
          </div>

          <div className="md:hidden">
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
          </div>
        </div>
      </div>
    </>
  );
}
