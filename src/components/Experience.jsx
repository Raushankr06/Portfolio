import React from "react";
import HTML from "../../public/HTML.jpeg";
import CSS from "../../public/CSS.jpeg";
import java from "../../public/java.jpeg";
import Javascript from "../../public/Javascript.jpeg";
import Oracle from "../../public/Oracle.jpeg";
import Spring from "../../public/Spring.jpeg";
import Springboot from "../../public/Springboot.jpeg";

function Experience() {
  const CardItem = [
    {
      id: 1,
      logo: HTML,
      name: "HTML",
    },

    {
      id: 2,
      logo: CSS,
      name: "CSS",
    },

    {
      id: 3,
      logo: java,
      name: "java",
    },

    {
      id: 4,
      logo: Javascript,
      name: "Javascript",
    },

    {
      id: 5,
      logo: Oracle,
      name: "Oracle",
    },

    {
      id: 6,
      logo: Spring,
      name: "Spring",
    },

    {
      id: 7,
      logo: Springboot,
      name: "Springboot",
    },
  ];
  return (
    <div
      name="Experience"
      className="container px-4 mx-auto my-16 max-w-screen-2xl md:px-20"
    >
      <div>
        <h1 className="mb-5 text-3xl font-bold">Experience</h1>
        <p>I've more than 1 years of experience in below technologies.</p>
        <div className="grid grid-cols-2 my-3 gap-7 md:grid-cols-5">
          {CardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full " alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
