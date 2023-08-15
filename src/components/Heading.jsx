import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./form";

const Heading = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <header className="heading flex h-40 w-full bg-slate-900 pr-4">
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

      <div className="divaddhome">
        <div className="divform">
          <Form onSubmit={props.onSubmit} />
        </div>
        <h1
          className="homepage"
          onClick={() => navigate("/")}
        >
          Home 
        </h1>
      </div>
      <div className="titleheading">
        <h1>
          {props.title}
        </h1>
      </div>
    </header>
  );
});

export default Heading;
