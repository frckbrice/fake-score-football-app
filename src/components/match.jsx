import PropTypes from "prop-types";
import './match.css'

const MatchCapture = (props) => {
  return (
    <>
      <div className="maincontainer">
        <div className="match">
          <div
            className="match-content font-Philosopher border-b-slate-800"
            
          >
            <div className="column">
              <div className="team">
                <h2 className="team-name flex gap-x-4 items-center mr-8">
                  <img
                    src={props.team1?.url}
                    alt={props.team1?.name}
                    className=" w-24 h-24 rounded-md"
                  />
                  <p className="teamname">{props.team1?.name}</p>
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
                  <p className="teamname">{props.team2?.name}</p>

                  <img
                    src={props.team2?.url}
                    alt={props.team2?.name}
                    className=" w-24 h-24 rounded-md "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MatchCapture.propTypes = {
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

export default MatchCapture;
