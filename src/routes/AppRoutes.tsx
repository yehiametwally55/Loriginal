import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingAnimation from "../components/loadingAnimation";
import SustainableFashion from "../pages/sustainableFashion/SustainableFashion";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import TeamBuilding from "../pages/TeamBuilding/TeamBuilding";
import Visit from "../pages/Visit/Visit";
import HomePage from "../pages/HomePage/homePage";
const History = lazy(() => import("../pages/history/history"));
const ArtStudio = lazy(() => import("../pages/artStudio/ArtStudio"));
const Volunteer = lazy(() => import("../pages/volunteer/volunteer"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingAnimation/>}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/history" element={<History />} />
        <Route path="/artstudio" element={<ArtStudio />} />
        <Route path="/sustainablefashion" element={<SustainableFashion />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/TeamBuilding" element={<TeamBuilding />} />
        <Route path="/Visit" element={<Visit />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}
