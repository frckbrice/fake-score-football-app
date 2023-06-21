import { useCallback, useState, useContext } from "react";
import PropTypes from "prop-types";
import Match from "./score";
import { useFetchData } from "./Api";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sidebarRight";
import Form from "./form";
import { MatchContextTeam } from "./MatchContextForTeams";

function Countries() {
  let { countriesData } = useFetchData();
  const [searchField, setSearchFied] = useState("");

  // const [checked, setChecked] = useState(false);
  // const [filter, setFilter] = useState("All");

  // call contextes
  const { setTeams, matches, setMatches, setconfirmed } =
    useContext(MatchContextTeam);

  //* to divide the array of countries in two part
  const number = Math.ceil(countriesData.length / 2);
  const newParttoDisplay = countriesData.slice(0, number);
  const newPartToDisplayR = countriesData.splice(number, countriesData.length);

  console.log("newParttoDisplay", newParttoDisplay);
  console.log("newPartToDisplayR", newPartToDisplayR);

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
    [matches, setMatches, setconfirmed]
  );

  console.log("searchField =", searchField);
  const togleMatchconfirm = useCallback(
    (id) => {
      const updateMatches = matches?.map((match) =>
        match.id === id ? { ...match, confirmed: !match.confirmed } : match
      );

      setMatches(updateMatches);
    },
    [matches, setMatches]
  );

  const deleteMatch = useCallback(
    (id) => {
      // removeMatch(id);
      const updateMateches = matches?.filter((match) => match.id !== id);
      setMatches(updateMateches);
    },
    [matches, setMatches]
  );

  const editMatch = useCallback(
    (id, match) => {
      // changeMatch(id);
      const existingMatchIndex = matches?.findIndex((item) => item.id === id);
      matches[existingMatchIndex] = match;
      setMatches(matches);
    },
    [matches, setMatches]
  );

  //take the value from form and send it to ctx to create empty matches
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
  }, [setMatches, setTeams]);

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
        <div className="w-2/3 ml-96 px-2 flex justify-right items-center mr-0 pt-12">
          <h4 className="text-white mx-6 text-3xl font-thin">
            Add number of match(es)
          </h4>
          <Form onSubmit={getNumberOfMatchesFromInputField} />
        </div>
      </header>

      <section className="match-container grid lg:grid-cols-5 h-full">
        <div className="col-span-1 ">
          <SideBarLeft clubsData={newParttoDisplay} searchField={searchField} />
        </div>

        <main className="score-container mx-2 col-span-3 self-start h-full ">
          <div className="w-full h-full bg-gradient-to-r from-violet-700 via-black to-fuchsia-800 my-10 ">
            <div className="clubs">
              <div className="div-selectall flex text-center gap-x-10 ml-72 items-center ">
                <h2 className="title text-center text-5xl font-Satisfy  my-4 w-fit text-white font-light mr-40">
                  Place the match(es)
                </h2>
                <h3 className="validate flex justify-center items-center ">
                  <span className="text-2xl font-Satisfy font-thin text-white mr-3">
                    Select All{" "}
                  </span>
                  <input
                    type="checkbox"
                    className="selectAll w-10 h-10"
                    onChange={(e) => selectAll(e)}
                    checked={!matches.some((user) => user?.confirmed !== true)}
                  />
                </h3>
              </div>

              {matchesList}
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
      <footer className="footer h-44 w-full bg-indigo-950 text-white text-center text-8xl">
        Footer
      </footer>
    </div>
  );
}

Countries.propTypes = {
  name: PropTypes.string,
  club: PropTypes.object,
  countriesData: PropTypes.arrayOf(Object),
  handleAdd: PropTypes.func,
  newPartToDisplayR: PropTypes.func,
  searchField: PropTypes.string,
  newParttoDisplay: PropTypes.func,
};

export default Countries;
