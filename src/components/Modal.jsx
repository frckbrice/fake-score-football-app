import { Fragment, useContext} from "react";
import ReactDOM from "react-dom";
import { MatchContextTeam } from "./MatchContextForTeams";
import MatchCapture from "./match";
import "./Modal.css";
import ModalOverlay from "./Overlay";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const { matches } = useContext(MatchContextTeam);
  if (!props.open) {
    return;
  }

  const matchesList = matches.map((match) => {
    return (
      <MatchCapture
        key={match.id}
        id={match.id}
        confirmed={match.confirmed}
        team1={match.team1}
        team2={match.team2}
      />
    );
  });
  return (
    <Fragment>
      <div className="overlay"></div>
      
      {ReactDOM.createPortal(
        <ModalOverlay onclose={props.onclose}>{matchesList}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
