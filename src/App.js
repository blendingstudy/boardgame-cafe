import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import GamePage from "./pages/GamePage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}
export default App;
