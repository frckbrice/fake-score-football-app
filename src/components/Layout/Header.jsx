import React from "react";
import burning from "../../assets/burningBall.jpg";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header text-white  h-20vh flex items-center justify-center text-center bg-slate-900 ">
      <div>
        <h1 className="text-8xl italic font-Philosopher">
          Fake Football App ⚽{" "}
        </h1>
        <Link style={{textDecoration:'underline', color: 'wheat'}} to = {'/'} > homepage</Link>
      </div>
    </header>
  );
};

export default Header;
