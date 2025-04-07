import logo from '/logo.png';
import menu from '/menu.png';
import close from '/close.png';
import { useState, useEffect } from 'react';
import { navlinks } from '../constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setShow(true);
        setOpen(false);
      } else {
        setShow(false);
        setOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => {
    if (open && show) setOpen(false);
  };

  return (
    <div className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#2122237d] text-white">
      <div className="max-w-5xl w-full mx-auto px-4 py-2 flex justify-between items-center flex-wrap md:flex-nowrap">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          <div>
            <div className="text-base font-light">Franklin Rivera</div>
            <div className="text-xs font-extralight">Software Developer</div>
          </div>
        </div>

        {/* Hamburger button */}
        {show && (
          <img
            src={open ? close : menu}
            alt="menu"
            className="h-6 cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Nav links */}
        {open && (
          <ul
            className={`${
              show
                ? 'absolute top-[65px] right-[5%] flex flex-col items-start bg-[#202326] shadow-lg px-5 py-3 rounded-md gap-3'
                : 'flex gap-6 items-center ml-auto'
            } text-sm font-light`}
          >
            {navlinks.map((nav, i) => (
              <li key={i} className="border-b border-transparent hover:border-white" onClick={closeMenu}>
                <a href={nav.link} className="text-white hover:text-indigo-400 transition">
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
