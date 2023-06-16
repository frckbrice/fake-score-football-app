// import React, { useRef } from "react";
// import Input from "./Input";
// import PropTypes from "prop-types";

// const Clubs = ({ clubsData }) => {
//   const inputref = useRef();

//   function searchFilterFn(e) {
//     const textForSearch = inputref.current.value.toLowerCase();
//     const re = new RegExp(textForSearch, "i");
//     const filtered = clubsData.filter((entry) =>
//       Object.values(entry).some(
//         (val) => typeof val === "string" && val.match(re)
//       )
//     );
//     clubsData = filtered;
//     console.log(clubsData);
//   }

//   return (
//     <>
//       <div>
//         <Input
//           type="text"
//           ref={inputref}
//           name="seachClub"
//           onKeyUp={(e) => searchFilterFn(e)}
//           placeholder="Search the club"
//         />
//       </div>
//     </>
//   );
// };

// Clubs.propTypes = {
//   name: PropTypes.string,
//   club: PropTypes.object,
//   clubsData: PropTypes.arrayOf(Object),
// };

// export default Clubs;
