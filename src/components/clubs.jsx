// import { useCallback, useState, useContext } from "react";
import PropTypes from "prop-types";
import { useFetchData } from "./Api";
import Sharedcomponent from "./Sharedcomponent";

export default function Clubs() {
  let { clubsData } = useFetchData();

  return (
    <>
      <Sharedcomponent
        data={clubsData}
        title="International teams ChampionShip"
      />
    </>
  );
}

Clubs.propTypes = {
  useFetchData: PropTypes.func,
};
