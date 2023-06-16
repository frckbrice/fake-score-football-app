import React, { useRef } from "react";
import Proptypes from "prop-types";
import Input from "./Input";

const Header = ({ clubsData }) => {
  const inputref = useRef();

  function searchFilterFn(e) {
    const textForSearch = inputref.current.value.toLowerCase();
    const re = new RegExp(textForSearch, "i");
    const filtered = clubsData.filter((entry) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.match(re)
      )
    );

    return filtered;
  }

  return (
    <header className="header h-28 w-full bg-blue-600">
      <div className=" w-96 ml-96 px-2  pt-12">
        <Input
          type="text"
          ref={inputref}
          name="seachClub"
          onKeyUp={(e) => searchFilterFn(e)}
          placeholder="Search the club"
        />
      </div>
    </header>
  );
};

export default Header;
