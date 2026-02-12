import React from "react";
import java from "../../public/java.jpeg";
import python from "../../public/python.jpeg";
import mongoDB from "../../public/mongo.jpeg";
import express from "../../public/express.jpeg";
import Reactjs from "../../public/React.jpeg";
import nodejs from "../../public/node.jpeg";

function Portfolio() {
  const CardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },

    {
      id: 2,
      logo: express,
      name: "Express",
    },

    {
      id: 3,
      logo: Reactjs,
      name: "ReactJS",
    },

    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },

    {
      id: 5,
      logo: python,
      name: "python",
    },

    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="portfolio"
      className="container px-4 mx-auto mt-10 max-w-screen-2xl md:px-20"
    >
      <div>
        <h1 className="mb-5 text-3xl font-bold">Portfolio</h1>
        <span className="font-semibold underline">Featured Projects</span>
        <div className="grid grid-cols-1 gap-3 my-5 md:grid-cols-4">
          {CardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 mb-2 text-xl font-bold">{name}</div>
                <p className="px-2 text-gray-700">
                  Real-world based project with clean and efficient
                  implimentation.
                </p>
              </div>

              <div className="justify-around px-6 py-4 space-x-3">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                  Video
                </button>
                <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
                  {" "}
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
