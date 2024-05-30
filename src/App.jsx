import HomePage from "./HomePage";
import OurTeam from "./components/OurTeam/OurTeam";

// Making the Routing Feature
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Team" element={<OurTeam />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
