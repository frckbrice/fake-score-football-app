import "./App.css";
import Clubs from "./components/clubs";
import Countries from "./components/countries";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="globlalcontainer">
      <div className="header app">
        <Header />
      </div>
      <div className="mainapp">
        <Content />
      </div>
      <div className="footerapp">
        <Footer />
      </div>{" "}
    </div>
  );
}

export default App;
