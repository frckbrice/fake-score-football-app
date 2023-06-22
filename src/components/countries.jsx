import { useCallback, useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import Match from "./score";
import { useFetchData } from "./Api";
import SideBarLeft from "./sideBarLeft";
// import SideBarRight from "./sidebarRight";
import Form from "./form";
import { MatchContextTeam } from "./MatchContextForTeams";
import Modal from "./Modal";
import SideBarRight from "./sidebarRight";
import { useNavigate } from "react-router-dom";

function Countries() {
  let { countriesData } = useFetchData();
  const [searchField, setSearchFied] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const btnRef = useRef();
    const navigate = useNavigate();

  // call contextes
  const { setTeams, matches, setMatches, setconfirmed } =
    useContext(MatchContextTeam);

  //* to divide the array of countries in two part
  const number = Math.ceil(countriesData.length / 2);
  const newParttoDisplay = countriesData.slice(0, number);
  const newPartToDisplayR = countriesData.splice(number, countriesData.length);

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
    [matches, setMatches, setconfirmed]
  );
  // to validate the match
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

  // to create empty matches and display validate btn
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
        <div className="w-2/3 ml-96 px-2 flex justify-right items-center mr-0 pt-12">
          <h4 className="text-white mx-6 text-3xl font-thin">
            Add number of match(es)
          </h4>
          <Form onSubmit={getNumberOfMatchesFromInputField} />
        </div>
        <h1
          className="text-white py-3 w-fit px-2 bg-black font-bold rounded-lg mx-5 text-2xl text-indigo-750 font-Philosopher cursor-pointer  ring-slate-500"
          onClick={() => navigate("/")}
        >
          Home
        </h1>
      </header>

      <section className="match-container grid grid-cols-5 h-full">
        <div className="col-span-1 ">
          <SideBarLeft clubsData={newParttoDisplay} searchField={searchField} />
        </div>

        <main className=" mx-2 col-span-3 self-start h-full ">
          <div className="w-full h-full bg-gradient-to-r from-violet-700 via-indigo to-fuchsia-800 my-10 ">
            <div className="clubs">
              <div className=" flex text-center gap-x-10 ml-72 items-center ">
                <h2 className="title text-center text-5xl font-Satisfy  my-4 w-fit text-white font-thin mr-40">
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
      <footer className="footer h-44 w-full bg-indigo-950 text-white text-center text-8xl font-Satisfy ">
        Footer
      </footer>
    </div>
  );
}

Countries.propTypes = {
  name: PropTypes.string,
  country: PropTypes.object,
  countriesData: PropTypes.arrayOf(Object),
  handleAdd: PropTypes.func,
  newPartToDisplayR: PropTypes.func,
  searchField: PropTypes.string,
  newParttoDisplay: PropTypes.func,
};

export default Countries;
