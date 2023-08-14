import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./form";

const Heading = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <header className="header flex h-40 w-full bg-slate-900 pr-4">
      <div className="div-input w-96 mx-60 ml-5 px-2 pt-20">
        <input
          type="search"
          ref={ref}
          name="seachClub"
          onChange={props.onChange}
          placeholder="Search the clubs"
          className="input-clubs py-3 px-4 text-2xl font-Philosopher ring ring-slate-400 mb-4 rounded-lg"
        />
      </div>

      <div className="w-2/3 px-2 flex items-center mr-0 pt-16 gap-x-40">
        <div className="flex">
          <Form onSubmit={props.onSubmit} />
        </div>
        <h1
          className="text-black py-3 px-4 w-fit bg-white font-bold rounded-lg  text-2xl text-indigo-750 font-Philosopher cursor-pointer shadow-white ring-slate-500"
          onClick={() => navigate("/")}
        >
          Home
        </h1>
      </div>
      <div className="title text-white absolute top--5 right-2 pr-4">
        <h1 className="text-white font-bold rounded-lg  text-5xl font-Satisfy shadow-white ring-slate-500 z-10 mt-8 ">
          {props.title}
        </h1>
      </div>
    </header>
  );
});

export default Heading;
