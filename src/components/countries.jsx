import { useCallback, useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { useFetchData } from "./Api";
import Sharedcomponent from "./Sharedcomponent";

function Countries() {
  let { countriesData } = useFetchData();

  return (
    <div>
      <Sharedcomponent
        data={countriesData}
        title="National Teams Championship"
      />
    </div>
  );
}

Countries.propTypes = {
  useFetchData: PropTypes.func,
};

export default Countries;
