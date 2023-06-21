// import { useState, createContext } from "react";
// import toast from "react-hot-toast";

// export const MatchContextTeam = createContext({
//   teams: [],
//   addTeam: () => {},
//   removeTeam: () => {},
//   editTeam: () => {},
// });

// export default function TeamContextProvider({ children }) {
//   const [teams, setTeams] = useState([]);
//   //*ADD team
//   function addTeam(team) {
//     console.log(typeof teams);
//     setTeams([...teams, team]);
//     console.log("%cbeginning: ", "color:purple", teams);
//     if (teams.length >= 2) {
//       const emptyArray = [];
//       setTeams(emptyArray);
//       console.log("%cin the if : ", "color:green", teams);
//       return;
//     }

//     toast.success(`Team added successfully`);
//   }

//   console.log("%cout of add teams is : ", "color:red", teams);

//   //*Remove teams
//   function removeTeam(flag) {
//     setTeams((teams) => teams.filter((team) => team.flag !== flag));
//     toast.success(`Team removed successfully`);
//   }
//   //*update teams
//   function editTeam(flag, team) {
//     setTeams(
//       teams.map((item) =>
//         item.flag == flag ? { ...item, flag: team.flag, name: team.name } : item
//       )
//     );
//     toast.success(`Team update successfully`);
//   }

//   const values = {
//     teams,
//     addTeam,
//     removeTeam,
//     editTeam,
//   };

//   return (
//     <MatchContextTeam.Provider value={values}>
//       {children}{" "}
//     </MatchContextTeam.Provider>
//   );
// }

import { useState, createContext } from "react";
import toast from "react-hot-toast";

export const MatchContextTeam = createContext({
  teams: [],
  addTeam: () => {},
  removeTeam: () => {},
  editTeam: () => {},
});

export default function TeamContextProvider({ children }) {
  const [matches, setMatches] = useState([]);
  const [confirmed, setconfirmed] = useState(false);

  const [teams, setTeams] = useState({
    team1: {},
    team2: {},
  });

  //*ADD team
  function addTeam(teamx, team) {
    const teamData = { ...teams, [`${teamx}`]: team };

    const match = {
      ...teamData,
      id: Math.random(),
      confirmed: confirmed,
      date: new Date(),
    };

    // console.log("%cout of add teams is : ", "color:red", confirmed);

    const matchHolder = matches;
    matchHolder[matchHolder.length - 1] = match;
    setMatches([...matchHolder]);

    setTeams({ ...teamData });
  }

  console.log("%cout of add teams is : ", "color:red", teams);

  //*Remove teams
  function removeTeam(url) {
    setTeams((teams) => Object.keys(teams).filter((team) => team.url !== url));
    toast.success(`Team removed successfully`);
  }
  //*update teams
  function editTeam(url, team) {
    setTeams(
      Object.keys(teams).map((item) =>
        item.url == url ? { ...item, url: team.url, name: team.name } : item
      )
    );
    toast.success(`Team update successfully`);
  }

  const values = {
    matches,
    setMatches,
    teams,
    setTeams,
    addTeam,
    removeTeam,
    editTeam,
    confirmed,
    setconfirmed,
  };

  return (
    <MatchContextTeam.Provider value={values}>
      {children}{" "}
    </MatchContextTeam.Provider>
  );
}
