// import React, { useContext, useState, useCallback } from "react";
// import Proptypes from "prop-types";
// import { MatchContextTeam } from "./MatchContextForTeams";

// function SideBarRight({ clubsData, searchField }) {
//   const [name, setName] = useState("");
//   const [url, setUrl] = useState("");
//   // const [team, setTeam] = useState({});
//   const teamCtx = useContext(MatchContextTeam);

//   const handleClicked = (ev, ind) => {
//     ev.stopPropagation();

//     const nameFromData = clubsData.find((club, index) => index === ind)?.name;
//     const urlFromData = clubsData.find((club, index) => index === ind)?.url;
//     // setTeam(teamFromData);
//     setName(nameFromData);
//     setUrl(urlFromData);

//     if (name && url) {
//       teamCtx.addTeam({ name, url });
//     }
//   };
//   return (
//     <>
//       <h1 className="text-center text-3xl font-Philosopher font-bold">
//         Clubs Part 2
//       </h1>
//       <ul className="list list-none pl-1 text-xl font-Philosopher text-white">
//         {clubsData
//           ?.filter((club) => {
//             return searchField.toLocaleLowerCase().trim() === ""
//               ? club
//               : club.name.toLocaleLowerCase().includes(searchField);
//           })
//           ?.map((club, index) => (
//             <li
//               key={index}
//               className="option-club  flex items-center gap-4 border border-red-700 bg-indigo-900 my-1 px-2 py-3 cursor-pointer hover:scale-95 "
//               onClick={(ev) => handleClicked(ev, index)}
//             >
//               {/* <img src={club.url} alt={club.name} className="w-6 h-6" /> */}
//               {club.name}
//             </li>
//           ))}
//       </ul>
//     </>
//   );
// }

// SideBarRight.prototype = {
//   clubsData: Proptypes.array,
//   map: Proptypes.func,
//   filter: Proptypes.func,
//   toLocaleLowerCase: Proptypes.func,
//   handleClick: Proptypes.func,
//   searchField: Proptypes.string,
//   name: Proptypes.string,
//   url: Proptypes.string,
// };

// export default SideBarRight;

import { useContext } from "react";
import Proptypes from "prop-types";
import { MatchContextTeam } from "./MatchContextForTeams";

function SideBarRight({ clubsData, searchField }) {
  const { addTeam } = useContext(MatchContextTeam);

  const handleClicked = (club) => {
    addTeam("team2", club);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-Philosopher font-bold">
        Teams [ K - Z ]
      </h1>
      <ul className="list list-none pr-1 text-xl font-Philosopher text-white overtflow-y-scroll">
        {clubsData
          ?.filter((club) => {
            return searchField.toLowerCase().trim() === ""
              ? club
              : club.name.toLowerCase().includes(searchField);
          })
          ?.map((club, index) => (
            <li
              key={index}
              className="option-club  flex items-center gap-4 border border-white bg-indigo-900 my-1 px-2 py-3 cursor-pointer hover:scale-95 pl-8"
              onClick={() => handleClicked(club)}
            >
              {/* <img src={club.url} alt={club.name} className="w-10 h-10 " /> */}
              {club.name}
            </li>
          ))}
      </ul>
    </>
  );
}

SideBarRight.prototype = {
  clubsData: Proptypes.array,
  map: Proptypes.func,
  filter: Proptypes.func,
  toLocaleLowerCase: Proptypes.func,
  handleClick: Proptypes.func,
  searchField: Proptypes.string,
  name: Proptypes.string,
  url: Proptypes.string,
  toLowerCase: Proptypes.func,
};

export default SideBarRight;
