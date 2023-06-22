// import Proptypes from "prop-types";
// import { useContext, useState, useCallback, memo } from "react";
// import { MatchContextTeam } from "./MatchContextForTeams";

// const SideBarLeft = ({ clubsData, searchField }) => {
//   const [name, setName] = useState("");
//   const [url, setUrl] = useState("");
//   const { addTeam } = useContext(MatchContextTeam);

//   const handleClick = (ev) => {
//     ev.stopPropagation();

//     const club = ev.target.dataset.value;
//     setName(club.split(",")[0]);
//     setUrl(club.split(",")[1]);
//     if (name && url) {
//       addTeam({ name, url });
//     }
//   };

//   return (
//     // <div className="sidebar h-screen w-96">
//     <>
//       <h1 className="text-center text-3xl font-Philosopher font-bold">
//         Clubs Part I
//       </h1>

//       <ul className="list list-none pl-1 text-xl font-Philosopher text-white overflow-y-scroll">
//         {clubsData
//           ?.filter((club) => {
//             return searchField.toLocaleLowerCase().trim() === ""
//               ? club
//               : club.name.toLocaleLowerCase().includes(searchField);
//           })
//           ?.map((club, index) => (
//             <li
//               key={index}
//               className="option-club flex items-center gap-4 border border-red-700 bg-indigo-900 my-1 p-0   py-3 cursor-pointer hover:scale-95"
//               data-value={[club.name, club.url]}
//               onClick={(ev) => handleClick(ev)}
//             >
//               {" "}
//               {/* <img src={club.url} alt={club.name} className="w-8 h-8" /> */}
//               {club.name}
//             </li>
//           ))}
//       </ul>
//     </>
//     // </div>
//   );
// };

// SideBarLeft.prototype = {
//   clubsData: Proptypes.array,
//   map: Proptypes.func,
//   filter: Proptypes.func,
//   toLocaleLowerCase: Proptypes.func,
//   handleClick: Proptypes.func,
//   searchField: Proptypes.string,
//   name: Proptypes.string,
//   url: Proptypes.string,
// };

// export default SideBarLeft;

import Proptypes from "prop-types";
import { useContext } from "react";
import { MatchContextTeam } from "./MatchContextForTeams";

const SideBarLeft = ({ clubsData, searchField }) => {
  const { addTeam } = useContext(MatchContextTeam);

  const handleClick = (club) => {
    addTeam("team1", club);
  };

  return (
    // <div className="sidebar h-screen w-96">
    <>
      <h1 className="text-center text-3xl font-Philosopher font-bold">
        Teams [ FC - A - K ]
      </h1>

      <div className="list list-none pl-1 text-xl font-Philosopher text-white">
        {clubsData
          ?.filter((club) => {
            return searchField.toLowerCase().trim() === ""
              ? club
              : club.name.toLowerCase().includes(searchField);
          })
          ?.map((club, index) => (
            <div
              key={index}
              className="option-club flex items-center gap-4 border border-white bg-indigo-900 my-1 py-3 cursor-pointer hover:scale-95  pl-8"
              onClick={() => handleClick(club)}
            >
              {" "}
              {/* <img src={club.url} alt={club.name} className="w-10 h-10" /> */}
              {club.name}
            </div>
          ))}
      </div>
    </>
    // </div>
  );
};

SideBarLeft.prototype = {
  clubsData: Proptypes.array,
  map: Proptypes.func,
  filter: Proptypes.func,
  toLocaleLowerCase: Proptypes.func,
  handleClick: Proptypes.func,
  searchField: Proptypes.string,
  length: Proptypes.number,
  toLowerCase: Proptypes.func,
};

export default SideBarLeft;
