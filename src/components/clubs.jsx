// import { useCallback, useState, useContext } from "react";
// import PropTypes from "prop-types";
// import Match from "./score";
// import { useFetchData } from "./Api";
// import SideBarLeft from "./sideBarLeft";
// import SideBarRight from "./sidebarRight";
// import Form from "./form";
// import { MatchContextTeam } from "./MatchContextForTeams";
// import MatchContext from "./MatchContext";
// import { nanoid } from "nanoid";

// const FILTER_MAP = {
//   All: () => true,
//   ConfirmedMatch: (match) => match.confirmed,
//   NotConfirmedMatch: (match) => !match.confirmed,
// };
// const FILTER_CONFIRMATION = Object.keys(FILTER_MAP);

// export default function Clubs() {
//   let { clubsData } = useFetchData();
//   const [searchField, setSearchFied] = useState("");
//   const [numberField, setNumberFied] = useState(0);
//   const [matches, setMatches] = useState([]);

//   const [filter, setFilter] = useState("All");

//   // call contextes
//   const { teams } = useContext(MatchContextTeam);

//   //* to get not dupllicates teams/clubs
//   const number = Math.ceil((clubsData.length / 2 + 3) / 2);
//   // 624 is the remainder part of the array of exact number of clubs from A to Z without duplicates
//   const number2 = number + 624;
//   const partToDisplayL = clubsData.slice(0, number2);
//   const newParttoDisplay = partToDisplayL.slice(0, number2 / 2);
//   const newPartToDisplayR = partToDisplayL.splice(-number2 / 2);

//   // setTeamA(teams[0]);
//   // setTeamB(teams[1]);

//   const togleMatchconfirm = useCallback(
//     (id) => {
//       // toggleMatchconfirm(id);
//       const updateMatches = matches?.map((match) =>
//         match.id === id ? { ...match, confirmed: !match.confirmed } : match
//       );
//       setMatches(updateMatches);
//     },
//     [matches]
//   );

//   const deleteMatch = useCallback(
//     (id) => {
//       // removeMatch(id);
//       const updateMateches = matches?.filter((match) => match.id !== id);
//       setMatches(updateMateches);
//     },
//     [matches]
//   );

//   const editMatch = useCallback(
//     (id, match) => {
//       // changeMatch(id);
//       const existingMatchIndex = matches?.findIndex((item) => item.id === id);
//       matches[existingMatchIndex] = match;
//       setMatches(matches);
//     },
//     [matches]
//   );

//   // console.log("%cmatches : ", "color:red", matches);
//   // create a new match every second according to the number from inputfield
//   const setNumberOfMatches = useCallback(
//     (numberMatches) => {
//       const updateMatches = [];
//       if (numberMatches === 0) {
//         numberMatches++;
//       }
//       for (let i = 0; i < numberMatches; i++) {
//         updateMatches[i] = {
//           id: `${i}`,
//           confirmed: false,
//           teams: teams,
//           date: new Date(),
//         };
//       }

//       setMatches(updateMatches);
//     },
//     [teams]
//   );

//   const matchesList = matches.map((match) => {
//     return <p>hello</p>;
//     // return (
//     //   <Match
//     //     key={match.id}
//     //     id={match.id}
//     //     confirmed={match.confirmed}
//     //     toggleMatchconfirm={togleMatchconfirm}
//     //     deleteMatch={deleteMatch}
//     //     editMatch={editMatch}
//     //     teams={teams}
//     //   />
//     // );
//   });

//   //take the value from form and send it to ctx to create empty matches
//   const getNumberOfMatchesFromInputField = useCallback(
//     (numberInput) => {
//       let match = {};
//       const updateMatches1 = [];
//       if (numberInput === 0) {
//         match = {
//           id: Math.random(),
//           confirmed: false,
//           teams: teams,
//           date: new Date(),
//         };
//       }
//       setMatches([...matches, match]);
//       // setNumberOfMatches(numberInput);
//     },
//     [matches, teams]
//   );

//   return (
//     <div>
//       <header className="header h-28 w-full bg-black flex  ">
//         <div className=" w-96 ml-64 px-2  pt-12">
//           <input
//             type="search"
//             name="seachClub"
//             onChange={(e) => setSearchFied(e.target.value)}
//             placeholder="Search the clubs"
//             className="input-clubs py-3 px-4 text-2xl font-Philosopher ring ring-slate-400 mb-4 rounded-lg"
//           />
//         </div>
//         <div className="w-2/3 ml-58 px-2 flex justify-right items-center mr-0 pt-12">
//           <h4 className="text-white mx-6 text-3xl font-thin">
//             Add number of match(es)
//           </h4>
//           <Form onSubmit={getNumberOfMatchesFromInputField} />
//         </div>
//       </header>

//       <section className="match-container grid lg:grid-cols-5 ">
//         <div className="col-span-1">
//           <SideBarLeft clubsData={newParttoDisplay} searchField={searchField} />
//         </div>

//         <main className="score-container mx-2 col-span-3 self-start">
//           <div className="w-full h-full ">
//             <div className="clubs">
//               <div className="div-selectall flex text-center gap-x-10 ml-72 items-center ">
//                 <h2 className="title text-center text-5xl font-Satisfy text-indigo-950 my-4">
//                   Place the matchs
//                 </h2>
//                 <h3 className="validate flex justify-center items-center ">
//                   <span className="text-2xl font-Satisfy font-bold text-indigo-700 mr-3">
//                     Validate All{" "}
//                   </span>
//                   <input type="checkbox" className="selectAll w-10 h-10" />
//                 </h3>
//               </div>
//               {/* <Score
//                 numberofMatches={numberField}
//                 onClick={deleteMatch}
//               /> */}
//               {matchesList}
//             </div>
//           </div>
//         </main>

//         <div className="col-span-1">
//           <SideBarRight
//             clubsData={newPartToDisplayR}
//             searchField={searchField}
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// Clubs.propTypes = {
//   name: PropTypes.string,
//   club: PropTypes.object,
//   clubsData: PropTypes.arrayOf(Object),
//   handleAdd: PropTypes.func,
//   newPartToDisplayR: PropTypes.func,
//   searchField: PropTypes.string,
//   newParttoDisplay: PropTypes.func,
// };

// NEW CODE

import { useCallback, useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import Match from "./score";
import { useFetchData } from "./Api";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sidebarRight";
import Form from "./form";
import { MatchContextTeam } from "./MatchContextForTeams";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export default function Clubs() {
  let { clubsData } = useFetchData();
  const [searchField, setSearchFied] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const btnRef = useRef();
  const navigate = useNavigate();

  // call contextes
  const { teams, setTeams, matches, setMatches, setconfirmed } =
    useContext(MatchContextTeam);

  //* to get not dupllicates teams/clubs
  const number = Math.ceil((clubsData.length / 2 + 3) / 2);
  // 624 is the remainder part of the array of exact number of clubs from A to Z without duplicates
  const number2 = number + 624;
  const partToDisplayL = clubsData.slice(0, number2);
  const newParttoDisplay = partToDisplayL.slice(0, number2 / 2);
  const newPartToDisplayR = partToDisplayL.splice(-number2 / 2);

  // to display modal
  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  // to select all matches once
  const selectAll = useCallback(
    (e) => {
      const { checked } = e.target;
      const listOfconfirmed = matches.map((match) => {
        if (match.confirmed !== checked) {
          return { ...match, confirmed: checked };
        } else {
          return match;
        }
      });
      setMatches(listOfconfirmed);
      setconfirmed(checked);
    },
    [matches, setconfirmed, setMatches]
  );

  // to set the the match validated
  const togleMatchconfirm = useCallback(
    (id) => {
      const updateMatches = matches?.map((match) =>
        match.id === id ? { ...match, confirmed: !match.confirmed } : match
      );
      setMatches(updateMatches);
    },
    [matches, setMatches]
  );

  // to delete the match
  const deleteMatch = useCallback(
    (id) => {
      // removeMatch(id);
      const updateMateches = matches?.filter((match) => match.id !== id);
      setMatches(updateMateches);
    },
    [matches, setMatches]
  );

  //to update edit the match
  const editMatch = useCallback(
    (id, match) => {
      // changeMatch(id);
      const existingMatchIndex = matches?.findIndex((item) => item.id === id);
      matches[existingMatchIndex] = match;
      setMatches(matches);
    },
    [matches, setMatches]
  );

  // to create empty match and display validate btn
  const getNumberOfMatchesFromInputField = useCallback(() => {
    setMatches((prev) => {
      if (
        (prev[prev.length - 1]?.team1?.name &&
          prev[prev.length - 1]?.team2?.name) ||
        prev.length < 1
      ) {
        setTeams({});
        return [
          ...prev,
          {
            team1: {},
            team2: {},
          },
        ];
      }
      return prev;
    });
    btnRef.current.style.display = "block";
    btnRef.current.classList.add("ml-96", "mt-10");
  }, [setMatches, setTeams]);

  // to hide button validate before adding the match

  const matchesList = matches.map((match) => {
    return (
      <Match
        key={match.id}
        id={match.id}
        confirmed={match.confirmed}
        toggleMatchconfirm={togleMatchconfirm}
        deleteMatch={deleteMatch}
        editMatch={editMatch}
        team1={match.team1}
        team2={match.team2}
      />
    );
  });

  // to avoid scrolling while in modal
  if (openModal) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return (
    <div>
      <header className="header h-40 w-full bg-black flex  ">
        <div className=" w-96 ml-64 px-2 pt-20">
          <input
            type="search"
            name="seachClub"
            onChange={(e) => setSearchFied(e.target.value)}
            placeholder="Search the clubs"
            className="input-clubs py-3 px-4 text-2xl font-Philosopher ring ring-slate-400 mb-4 rounded-lg"
          />
        </div>
        <div className="w-2/3 ml-96 px-2 flex justify-right items-center mr-0 pt-16">
          <h4 className="text-white mx-6 text-3xl font-thin w-fit">
            Add number of match(es)
          </h4>
          <Form onSubmit={getNumberOfMatchesFromInputField} />
          <h1
            className="text-white py-3 w-fit px-2 bg-black font-bold rounded-lg mx-5 text-2xl text-indigo-750 font-Philosopher cursor-pointer shadow-white ring-slate-500"
            onClick={() => navigate("/")}
          >
            Home
          </h1>
        </div>
      </header>

      <section className=" grid grid-cols-5 h-full">
        <div className="col-span-1 ">
          <SideBarLeft clubsData={newParttoDisplay} searchField={searchField} />
        </div>

        <main className=" mx-2 col-span-3 self-start h-full">
          <div className="w-full h-full bg-gradient-to-r from-violet-700 via-black to-fuchsia-800 mt-10 mb-10 ">
            <div className="clubs">
              <div className=" flex text-center justify-between px-10  items-center ">
                <h2 className="title text-center text-5xl font-Satisfy text-indigo-300 font-thin my-4 mr-40 w-fit">
                  Place the match(es)
                </h2>
                <h3 className="validate flex justify-center items-center ">
                  <span className="text-2xl font-Satisfy font-thin text-indigo-300 mr-3">
                    Select All{" "}
                  </span>

                  <input
                    type="checkbox"
                    className="selectAll w-10 h-10"
                    onChange={(e) => selectAll(e)}
                    checked={
                      !matches.some((match) => match?.confirmed !== true)
                    }
                  />
                </h3>
              </div>

              {openModal ? (
                <Modal
                  open={() => setOpenModal(true)}
                  onclose={() => setOpenModal(false)}
                />
              ) : null}

              {matchesList}

              <button
                className="btn-validate px-8 py-2 w-fit text-white bg-indigo-500 font-bold font-Philosopher rounded-lg text-2xl hidden"
                onClick={toggleModal}
                ref={btnRef}
              >
                Validate
              </button>
            </div>
          </div>
        </main>

        <div className="col-span-1 ">
          <SideBarRight
            clubsData={newPartToDisplayR}
            searchField={searchField}
          />
        </div>
      </section>
      <footer className="footer h-44 w-full bg-indigo-950 text-white text-center text-8xl font-Satisfy m-5">
        Footer
      </footer>
    </div>
  );
}

Clubs.propTypes = {
  name: PropTypes.string,
  club: PropTypes.object,
  clubsData: PropTypes.arrayOf(Object),
  handleAdd: PropTypes.func,
  newPartToDisplayR: PropTypes.func,
  searchField: PropTypes.string,
  newParttoDisplay: PropTypes.func,
};
