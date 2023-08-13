import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import GamePage from "./pages/GamePage.js";
import Sidebar from "./components/Sidebar.js";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}
export default App;
