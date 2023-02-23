import TopNav from "./components/TopNav";
import PromoBanner from "./components/OfferBanner";
import Home from "./pages/Home";
import Climate from "./pages/Climate";
import Continents from "./pages/Continents";
import Location from "./pages/Location";
import AllHolidayTable from "./components/AllHolidayTable";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav /> 
      <PromoBanner />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/allholidays" element={<AllHolidayTable />} />
      <Route exact path="/climate" element={<Climate />} />
      <Route exact path="/continents" element={<Continents />} />
      <Route exact path="/location" element={<Location />} />
      </Routes>
      <br/>
    </div>
    </Router>
  );
}

export default App;
