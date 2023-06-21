// export async function getUser(string) {
//   const response = await fetch({
//     url: string,
//     method: "GET",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       "Access-Control-Allow-Headers": "content-type",
//"Access-Control-Allow-Credentials": "true";
//"Access-Control-Max-Age": "1800";
//     },
//     responseType: "blob", // important
//   });
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

import { useEffect, useState } from "react";
import axios from "axios";

//  to remove duplicates, not string, [F-A] from array
function filterFn(array) {
  return array.filter(
    (entry) =>
      typeof entry.name === "string" &&
      entry.name.includes(":") == 0 &&
      entry.name.match(/^[a-z]/i)
  );
}

export const useFetchData = () => {
  const [clubsData, setClubsData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("pronostikData.json", {
          // to show progess downloading
          onDownloadProgress: (progressEvent) => {
            console.log(
              "%cDownloading ...",
              "color:green",
              ((progressEvent.loaded / progressEvent.total) * 100).toFixed() +
                "%"
            );
          },
        });
        // setTemp(data.clubs);
        setClubsData(filterFn(data.clubs));
        setCountriesData(data.countries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // const clubsData = filterFn(temp);

  return {
    clubsData,
    setClubsData,
    countriesData,
    setCountriesData,
  };
};
