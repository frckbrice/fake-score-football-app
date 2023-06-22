import React from "react";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
  return (
    <div className="content  h-60vh flex flex-col items-center justify-center text-center bg-no-repeat bg-cover bg-top relative">
      <div className="absolute top-16 font-Satisfy text-3xl leading-10">
        <h1>Which Competition do you need ?</h1>
        <p>Make your choice below </p>
      </div>
      <div className="content-choice flex gap-x-20">
        <div
          className="national-team font-Philosopher text-4xl h-14 bg-gradient-to-r from-blue-500 via-red-950 to-indigo-950 py-2 px-8 rounded-lg text-white font-bold cursor-pointer"
          onClick={() => navigate("/countries")}
        >
          <h2> World National Teams</h2>
        </div>
        <div
          className="clubs-team font-Philosopher text-4xl h-14 bg-gradient-to-r from-blue-500 via-red-950 to-indigo-950 py-2 px-8 rounded-lg text-white font-bold cursor-pointer"
          onClick={() => navigate("/clubs")}
        >
          <h2> Wold Club Teams</h2>
        </div>
      </div>
    </div>
  );
}

export default Content;
