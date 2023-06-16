import { useRef } from "react";
import "./App.css";
// import Score from "./score";
import { useFetchData } from "./components/Api";
// import Clubs from "./components/clubs";
import Countries from "./components/countries";
import Header from "./components/header";
import SideBarLeft from "./components/sideBarLeft";
import SideBarRight from "./components/sidebarRight";

function App() {
  let { clubsData, countriesData } = useFetchData();

  return (
    <div className="w-full">
      <section>
        <Header clubsData={clubsData} />
      </section>

      <section className=" grid lg:grid-cols-5 ">
        <div className="col-span-1">
          <SideBarLeft clubsData={clubsData} />
        </div>
        <main className="subcontainer mx-2 col-span-3 self-start">
          <div className="w-full h-full ">
            <div className="clubs">
              <h2>Clubs Data</h2>
              toatal enarg
            </div>
          </div>
        </main>
        <div className="col-span-1 ">
          <SideBarRight clubsData={clubsData} />{" "}
        </div>
      </section>

      {/* <section>
        <div>
          <div className="countries">
            <h2>Countries Data</h2>
            <Countries countriesData={countriesData} />
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
