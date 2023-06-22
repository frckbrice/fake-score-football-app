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
import Heading from "./Heading";

function Countries() {
  let { countriesData } = useFetchData();
  const [searchField, setSearchFied] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const btnRef = useRef();
  const inputRef = useRef();
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

  function handleChange(e) {
    setSearchFied(inputRef.current.value);
  }

  return (
    <div>
      <Heading
        onSubmit={getNumberOfMatchesFromInputField}
        onChange={handleChange}
        ref={inputRef}
      />

      <section className="match-container grid grid-cols-5 h-full">
        <div className="col-span-1 ">
          <SideBarLeft clubsData={newParttoDisplay} searchField={searchField} />
        </div>

        <main className=" mx-2 col-span-3 self-start h-700px">
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
      <footer className="footer h-44 w-full bg-indigo-950 text-white text-center text-5xl font-Satisfy  flex items-center justify-center">
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
