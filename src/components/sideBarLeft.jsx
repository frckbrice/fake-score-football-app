import React, { useRef } from "react";
import { nanoid } from "nanoid";
import Proptypes from "prop-types";
import Input from "./Input";

const SideBarLeft = ({ clubsData }) => {
  return (
    // <div className="sidebar h-screen w-96">
    <>
      <ul className="list list-none pl-1 text-xl font-Philosopher">
        {clubsData?.map((club) => (
          <li key={nanoid()} className="option-club bg-cyan-600">
            <p>{club.name}</p>
          </li>
        ))}
      </ul>
    </>
    // </div>
  );
};

SideBarLeft.prototype = {
  clubsData: Proptypes.array,
  map: Proptypes.func,
  filter: Proptypes.func,
};

export default SideBarLeft;
