import "./App.css";
import ReactGA from "react-ga4";
import LoginButton from "./components/LoginButton";
import Item from "./components/Item";

function App() {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Boilerplate Frontend</h1>
      <LoginButton/>
      <Item/>
    </>
  );
}

export default App;
