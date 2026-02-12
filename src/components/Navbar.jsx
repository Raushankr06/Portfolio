import React, { useState } from "react";
import pic from "../../public/photo.jpeg";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="container fixed top-0 left-0 right-0 z-50 h-16 px-4 mx-auto bg-white shadow-md max-w-screen-2x1 md:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-2">
            <img src="photo.jpeg" className="w-20 h-20 rounded-full" alt="" />
            <h1 className="text-xl font-semibold cursor-pointer">
              Rausha<span className="text-5xl text-green-500">n</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/*desktop navbar*/}
          <div>
            <ul className="hidden space-x-8 md:flex">
              {navItems.map(({ id, text }) => (
                <li
                  className="duration-200 cursor-pointer hover:scale-105"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setmenu(!menu)} className="md:hidden">
              {menu ? <IoCloseCircle size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>
      </div>
      {/* mobile navbar*/}
      {menu && (
        <div className="bg-white">
          <ul className="flex flex-col items-center justify-center h-screen space-y-3 text-xl md:hidden">
            {navItems.map(({ id, text }) => (
              <li
                className="font-semibold duration-200 cursor-pointer hover:scale-105"
                key={id}
              >
                <Link
                  onClick={() => setmenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
