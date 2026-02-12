import React from "react";
import pic from "../../public/photo.jpeg";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { GrSnapchat } from "react-icons/gr";

import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="container px-4 mx-auto my-20 max-w-screen-2xl md:px-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="order-2 mt-12 space-y-2 md:w-1/2 md:mt-24 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span>Developer</span> */}
              <ReactTyped
                className="font-bold text-red-700"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm text-justify md:text-md">
              I am a passionate and self-motivated developer and coder with a
              strong interest in software and web development. I am currently a
              Computer Science diploma student and have hands-on experience in
              building small projects using modern programming tools and
              technologies. I enjoy solving real-world problems through clean
              and efficient code, and I am always eager to learn new frameworks,
              languages, and development practices. My goal is to start my
              career as a software / web developer where I can improve my
              technical skills, contribute to real projects, and grow as a
              professional developer.
            </p>
            <br />
            {/*social media icons */}
            <div className="flex flex-col items-center justify-between space-y-6 md:space-y-0 md:flex-row">
              <div className="space-y-2">
                <h1 className="font-bold">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/share/1SviwYdoXB/"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/raushan-kumar-6a0091321?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                    >
                      <BsLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/raushanxprjapati?igsh=MXRrenhpMGZ0bWxsbQ=="
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.snapchat.com/add/raushan_0812?share_id=oOeIazwq8iY&locale=en-US"
                      target="_blank"
                    >
                      <GrSnapchat className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <TfiHtml5 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoCss3 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 mt-8 md:mt-20 md:ml-48 md:w-1/2">
            <img
              src="photo.jpeg"
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
