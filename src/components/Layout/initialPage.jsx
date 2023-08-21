import React from 'react'
import PropTypes from 'prop-types';
import "./initialpage.css";
import initialpage from "../../assets/uptimized.png";
import { Link } from 'react-router-dom';


const Initialpage = props => {
  return (
    <div className="initialpage">
      <div>
        <div className="divimage">
          <img src={initialpage} alt="" />
        </div>
        <div className='divlink'>
          <Link to="/app">continue</Link>
        </div>
      </div>
    </div>
  );
}

Initialpage.propTypes = {

}

export default Initialpage
