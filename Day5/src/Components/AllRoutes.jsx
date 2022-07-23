import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Makeupproducts from "./Makeupproducts";
import Navbar from "./Navbar";
import MakeupPage from "./MakeupPage";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/makeup" element={<MakeupPage />} />
        <Route path="/skin" element={<Navbar />} />
        <Route path="/hair" element={<Navbar />} />
        <Route path="/personal-care" element={<Navbar />} />
        <Route path="/mom-&-baby-care" element={<Navbar />} />
      </Routes>
    </>
  );
}
