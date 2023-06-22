import "./App.css";
import Clubs from "./components/clubs";
import Countries from "./components/countries";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="grid grid-row-5">
      <div className="row-col-1">
        <Header />
      </div>
      <div className="row-col-3">
        <Content />
      </div>
      <div className="row-col-1">
        <Footer />
      </div>{" "}
      {/* <Clubs /> */}
      {/* <Countries /> */}
    </div>
  );
}

export default App;
