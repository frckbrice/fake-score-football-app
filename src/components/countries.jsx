import { nanoid } from "nanoid";
import PropTypes from "prop-types";
// import { searchFilterFn } from "./modules";
const Countries = ({ countriesData }) => {
  function searchFilterFn(e) {
    const countryToSearch = e.target.value.toLowerCase();
    // countriesData.forEach((country) => {
    //   const countryItemChild = country.firstChild.textContent;
    //   if (countryItemChild.toLocaleLowerCase().indexOf(countryToSearch) != -1) {
    //     console.log("country", countryItemChild);
    //     country.style.display = "block";
    //   } else {
    //     country.style.display = "none";
    //   }
    // });
    const re = new RegExp(countryToSearch, "i");
    const filtered = countriesData.filter((entry) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.match(re)
      )
    );
    // console.log(filtered);
  }

  return (
    <>
      <input
        type="search"
        name="seachCountry"
        onKeyUp={(e) => searchFilterFn(e)}
        className="input-clubs py-4 px-8 text-2xl font-Philosopher"
      />{" "}
      <br />
      <select className="list list-none py-4 px-8 text-2xl font-Philosopher">
        {countriesData?.map((country) => (
          <option key={nanoid()} className="option-country bg-lime-600">
            {country.country}
          </option>
        ))}
      </select>
    </>
  );
};

Countries.propTypes = {
  name: PropTypes.string,
  nanoid: PropTypes.func,
  country: PropTypes.object,
  countriesData: PropTypes.array,
};

export default Countries;
