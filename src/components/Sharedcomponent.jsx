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
import Heading from "./Heading";
import Footer from "./Layout/Footer";

export default function Sharedcomponent(props) {
  // let { clubsData } = useFetchData();
  const [searchField, setSearchFied] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const btnRef = useRef();
  const inputRef = useRef();
  // const navigate = useNavigate();

  // call contextes
  const { setTeams, matches, setMatches, setconfirmed } =
    useContext(MatchContextTeam);

    const clubsData = props.data;

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
      const updatedMateches = matches?.filter((match) => match.id !== id);
      setMatches(updatedMateches);
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
    // to make validata button appear after match creation
    btnRef.current.style.display = "block";
    // btnRef.current.classList.add("ml-96", "mt-10");
  }, [setMatches, setTeams]);

  function handleChange(e) {
    setSearchFied(inputRef.current.value);
  }
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
      <Heading
        onSubmit={getNumberOfMatchesFromInputField}
        onChange={handleChange}
        ref={inputRef}
        title={props.title}
      />

      <section className=" grid grid-cols-5 h-full  ">
        <div className="col-span-1 ">
          <SideBarLeft clubsData={newParttoDisplay} searchField={searchField} />
        </div>

        <main className=" mx-2 col-span-3 self-start h-700px ">
          <div className="w-full h-full mt-10 mb-10 ">
            <div className="clubs">
              <div className="matchbox">
                <h2 className="title text-center text-5xl font-Satisfy text-black font-thin my-4 mr-40 w-fit">
                   match(es)
                </h2>
                <h3 className="validate flex justify-center items-center ">
                  <span className="text-2xl font-Satisfy font-thin text-black mr-3">
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
              <div className="validate-div flex justify-center mr-16 mt-8">
                <button
                  className="btn-validate px-8 py-2 w-fit bg-slate-400 font-bold font-Philosopher rounded-lg text-2xl hidden"
                  onClick={toggleModal}
                  ref={btnRef}
                >
                  Validate
                </button>
              </div>
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
      <Footer />
    </div>
  );
}

Sharedcomponent.propTypes = {
  name: PropTypes.string,
  club: PropTypes.object,
  clubsData: PropTypes.arrayOf(Object),
  handleAdd: PropTypes.func,
  newPartToDisplayR: PropTypes.func,
  searchField: PropTypes.string,
  newParttoDisplay: PropTypes.func,
};

