import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import TeamContextProvider from "./components/MatchContextForTeams.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <TeamContextProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </TeamContextProvider>
  </>
);
