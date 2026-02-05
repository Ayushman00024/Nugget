import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Upload from "./Upload";
import Profile from "./Profile";
import BottomNav from "./BottomNav"; // 👈 add this

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* 👇 Bottom bar appears on all pages */}
      <BottomNav />
    </>
  );
}

export default App;
