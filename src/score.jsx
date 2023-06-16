// import React from "react";
// import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

const Score = () => {
  return (
    <div>
      <div className="container">
        <div className="match">
          <DatePicker
            // selected={date}
            // onChange={handleChange}
            minDate={new Date(new Date().getFullYear(), 10, 21)}
            maxDate={new Date(new Date().getFullYear(), 11, 18)}
          />

          {/* {data?.data?.matches?.map(({ Home, Away }) => */}

          <div className="match-content">
            <div className="column">
              <div className="team">
                <h2 className="team-name">Bangladesh</h2>
              </div>
            </div>
            <div className="column">
              <div className="match-details">
                <div className="match-score">
                  <span className="match-score-number match-score-number--leading">
                    3
                  </span>
                  <span className="match-score-divider">:</span>

                  <span className="match-score-number"> 0</span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team">
                <h2 className="team-name">Cameroon</h2>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

Score.propTypes = {};

export default Score;
