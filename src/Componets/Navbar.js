import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scrol } from "react-scroll";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate("");
  return (
    <div className="">
        <div id="header-left-decor" className="absolute hidden md:block md:-top-32 md:-left-44 h-[378px] w-[396px] bg-[url('	https://jadoo-travel-agency.vercel.app/images/pink-circle.png')] bg-no-repeat bg-cover"></div>
    
    <div className=" flex flex-row  mx-auto- cursor-pointer mt-5 items-center font-thin  justify-around">
      <div className="logo">
        <img
          src="https://jadoo-travel-agency.vercel.app/images/logo.png"
          alt=""
        />
      </div>
      <div
        className=" 
      "
      >
        <ul className=" hidden md:flex flex-row gap-6 ">
          <li className="li">Destinations</li>
          <li className="li">Hotels</li>
          <li className="li">Flights</li>
          <li className="li">Bookings</li>
          <li className="li">Flights</li>
        </ul>
      </div>
      <div className="btn md:hidden hidden lg:flex   ">
        <button className="  px-3 py-2  mr-4 ">Log In</button>
        <button className=" border border-[#2871b1] rounded-lg px-3 py-2  hover:bg-inherit ">
          Sign Up
        </button>

      </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
        <ul
        className={
          !nav ? "hidden" : "absolute    w-full px-4 mx-4  mt-[449px] "
        }
      >
        <li className="          py-2">
          <Link
            onClick={() => navigate("/")}
            to="/"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="         py-2 w-full">
          <Link
            onClick={() => navigate("/about")}
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className=" py-2 w-full">
          <Link
            onClick={() => navigate("/service")}
            smooth={true}
            offset={-50}
            duration={500}
          >
            service
          </Link>
        </li>
        <li className="       py-2 w-full">
          <Link
            onClick={() => navigate("/project")}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li className="       py-2 w-full">
          <Link
            onClick={() => navigate("/blog")}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            blog
          </Link>
        </li>
        <li className="       py-2 w-full">
          <Link
            onClick={() => navigate("/contact")}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            contact
          </Link>
        </li>

        <div className="flex flex-col text-sm my-4">
          <button
            onClick={() => navigate("/login")}
            className="  border rounded border-[#2871b1]  px-8 py-2 mb-3"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className=" rounded py-2 bg-[#2871b1] "
          >
            Sign Up
          </button>
        </div>
      </ul>
    <div className="">

   
  
      </div>
      <div className="absolute -top-[16rem] 
       -right-[16.5rem] bg-[url('https://jadoo-travel-agency.vercel.app/images/decore.png')] -z-10 rotate-10 h-[872px] w-[786px] bg-hero bg-no-repeat bg-cover"></div>
    </div>
    </div>
  );
}
