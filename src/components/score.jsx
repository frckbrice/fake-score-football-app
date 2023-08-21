// import React from "react";
// import PropTypes from "prop-types";
// import { GiCrossedSabres } from "react-icons/gi";

// const Match = (props) => {
//   return (
//     <div>
//       <div className="maincontainer">
//         <div className="match">
//           <div className="match-content font-Satisfy">
//             <div className="column">
//               <div className="team">
//                 <h2 className="team-name">
//                   {props.teams?.map((team, i) => {
//                     if (i % 2 == 0) {
//                       return <p key={i}>{team.name}</p>;
//                     }
//                   })}
//                 </h2>
//               </div>
//             </div>
//             <div className="column">
//               <div className="match-details">
//                 <div className="match-score">
//                   <span
//                     className="match-score-number match-score-number--leading"
//                     contentEditable
//                   >
//                     0
//                   </span>
//                   <span className="match-score-divider">:</span>

//                   <span className="match-score-number" contentEditable>
//                     {" "}
//                     0
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="column">
//               <div className="team">
//                 <h2 className="team-name">
//                   {props.teams?.map((team, i) => {
//                     if (i % 2 == 1) {
//                       return <p key={i}>{team.name}</p>;
//                     }
//                   })}
//                 </h2>
//               </div>
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 defaultChecked={true}
//                 className="checb w-10 h-10 mt-6 ml-10 bg-green-600"
//                 onChange={() => props.toggleMatchconfirm(props.id)}
//               />
//               <button
//                 className="btn-icon mx-3"
//                 onClick={() => props.deleteMatch(props.id)}
//               >
//                 <GiCrossedSabres className="icon text-red-700 w-10 h-10 " />{" "}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Match.propTypes = {
//   matches: PropTypes.array,
//   numberofMatches: PropTypes.number,
//   toggleMatchconfirm: PropTypes.func,
//   deleteMatch: PropTypes.func,
//   teams: PropTypes.array,
//   id: PropTypes.number,
//   setMatches: PropTypes.func,
// };

// export default Match;

// NEW CODE;

// import React from "react";
import PropTypes from "prop-types";
import { GiCrossedSabres } from "react-icons/gi";

const Match = (props) => {
  return (
    <>
      <div className="maincontainer">
        <div className="match">
          <div className="match-content font-Satisfy">
            <div className="column">
              <div className="team">
                <h2 className="team-name flex gap-x-4 items-center mr-8">
                  <img
                    src={props.team1?.url}
                    alt={props.team1?.name}
                    className=" w-24 h-24 rounded-md "
                  />
                  <p>{props.team1?.name}</p>
                </h2>
              </div>
            </div>
            <div className="column">
              <div className="match-details">
                <div className="match-score">
                  <span
                    className="match-score-number match-score-number--leading"
                    contentEditable
                  >
                    0
                  </span>
                  <span className="match-score-divider">:</span>

                  <span className="match-score-number" contentEditable>
                    {" "}
                    0
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team">
                <h2 className="team-name flex gap-x-4 items-center">
                  <p>{props.team2?.name}</p>

                  <img
                    src={props.team2?.url}
                    alt={props.team2?.name}
                    className=" w-24 h-24 rounded-md "
                  />
                </h2>
              </div>
            </div>
            <div className="deleteboxfromscore">
              <input
                type="checkbox"
                checked={props.confirmed || false}
                className="checbfromscore"
                onChange={() => props.toggleMatchconfirm(props.id)}
              />
              <button
                className="btn-icon"
                onClick={() => props.deleteMatch(props.id)}
              >
                <GiCrossedSabres className="icon" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Match.propTypes = {
  matches: PropTypes.array,
  numberofMatches: PropTypes.number,
  toggleMatchconfirm: PropTypes.func,
  deleteMatch: PropTypes.func,
  team1: PropTypes.object,
  team2: PropTypes.object,
  id: PropTypes.number,
  setMatches: PropTypes.func,
  confirmed: PropTypes.bool,
};

export default Match;
