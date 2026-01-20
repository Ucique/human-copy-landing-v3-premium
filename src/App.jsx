import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingpageV3Preview from "./LandingpageV3Preview.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import Impressum from "./pages/Impressum.jsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LandingpageV3Preview />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  );
}
