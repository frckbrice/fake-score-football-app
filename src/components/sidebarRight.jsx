import React from "react";

function SideBarRight({ clubsData }) {
  return (
    <>
      <ul className="list list-none pl-1 text-xl font-Philosopher mr-1">
        {clubsData?.map((club, index) => (
          <li key={index} className="option-club bg-cyan-600">
            <p>{club.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SideBarRight;
