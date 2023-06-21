//* function : seach for a task in in the list of tasks */
export function searchFilterFn(e) {
  const textForSearch = e.target.value.toLowerCase();
  const tasksToRemove = document.getElementsByClassName("li-country");
  Array.from(tasksToRemove).forEach((task) => {
    const taskItemChild = task.firstChild.textContent;
    if (taskItemChild.toLocaleLowerCase().indexOf(textForSearch) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

/* {/* <select className="list list-none py-4 px-8 text-2xl font-Philosopher">
          {clubsData?.map((club) => (
            <option key={nanoid()} className="option-club bg-cyan-600">
              {club.name}
            </option>
          ))}
        </select>  */

function searchFilterFn(e) {
  const textForSearch = inputref.current.value.toLowerCase();
  const re = new RegExp(textForSearch, "i");
  const filtered = clubsData.filter((entry) =>
    Object.values(entry).some((val) => typeof val === "string" && val.match(re))
  );
  return filtered;
}

<input
  type="search"
  name="seachClub"
  onChange={(e) => setSearchFied(e.target.value)}
  placeholder="Search the club"
  className="input-clubs py-3 px-12 text-2xl font-Philosopher ring ring-slate-400 mb-4 rounded-sm"
/>;

//* no duplicate
const uniqueItem = data.reduce((acc, curr) => {
  if (!acc.find((item) => item.id === curr.id)) {
    acc.push(curr);
  }
  return acc;
}, []);

const uniqIt = data.filter((item, id, array) => array.indexOf(item) == id);
//* get date
const day = new Date("given date").getDate();
const month = date.toLocalString("en-US", { month: "long" });
const year = new Date("year").getFullYear();

//* fetch all countries in the world
https://restcountries.eu/rest/v2/all

//* find the prime number in an array
 function isPrime(element, index, array) {
  let start = 2;
  while (start < Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

//* to get the date
  {
    //  <DatePicker
            selected={date}
            onChange={handleChange}
            minDate={new Date(new Date().getFullYear(), 10, 21)}
            maxDate={new Date(new Date().getFullYear(), 11, 18)}
          // /> */
  }
//*********************attempt to get particular item from the list******************* */
1.  <li
              key={index}
              className="option-club flex items-center gap-4 border border-red-700 bg-indigo-900 my-1 p-0   py-3 cursor-pointer hover:scale-95"
              data-value={[club.name, club.url]}
              onClick={(ev) => handleClick(ev)}
            ></li>

    const handleClicked = (ev) => {
      const club = ev.target.dataset.value;

      setName(club.split(",")[0]);
      setUrl(club.split(",")[1]);

      if (name && url) {
        teamCtx.addTeam({ name, url });
      }
    };

2.     <li
              key={index}
              className="option-club  flex items-center gap-4 border border-red-700 bg-indigo-900 my-1 px-2 py-3 cursor-pointer hover:scale-95 "
              onClick={() => handleClicked(index)}
            ></li>
    const handleClicked = (ind) => {
      const nameFromData = clubsData.find((club, index) => index === ind)?.name;
      const urlFromData = clubsData.find((club, index) => index === ind)?.url;
      // setTeam(teamFromData);
      setName(nameFromData);
      setUrl(urlFromData);

      if (name && url) {
        teamCtx.addTeam({ name, url });
      }
  //********************************  };
//* date picker lib

          {/* <DatePicker
            selected={date}
            onChange={handleChange}
            minDate={new Date(new Date().getFullYear(), 10, 21)}
            maxDate={new Date(new Date().getFullYear(), 11, 18)}
          /> */}

///* create an array of fixed number filled
 Array(N).fill().map((_, i) =>i) 
 [...Array(N).keys()] 

 //* create matches
     const match = {
      id: action.number + Date.now(),
      teams: [teamHome, teamAway],
    };
    setInterval(() => {}, 1000);
  }
//* in conetxt add
   const existingMatchIndex = state.matches?.findIndex(
      (match) => match.id === action.match.id
    );

    const existingMatch = state.matches[existingMatchIndex];

    if (existingMatch) {
      console.log("match already exists");
      return;
    }

    //* the crox to  close : "&times;"

    if(openModal){
    document.body.classList.add("modal-open");
}else {
    document.body.classList.remove("modal-open");
}


body.modal-open {
  @apply overflow-y-hidden;
}

  document.addEventListener("DOMContentLoaded", () => {
    if (matches.length === 0) {
      console.log(" no matches yet");
      btnRef.current.style.display = "none";
    } else {
      btnRef.current.style.display = "block";
    }
  });


   {modal/* <div className="text-center m-10">
        <button
          className="btn w-fit py-1 px-4 bg-red-500 text-white font-Philosopher font-bold rounded-lg text-md absolute top-1 right-1 text-2xl"
          onClick={props.onclose}
        >
          Close &times;
        </button>
      </div> */}