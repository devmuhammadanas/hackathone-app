import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import LandingPage from "../pages/landingPage/LandingPage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { useSelector } from "react-redux/es/exports";
import AddPage from "../pages/addPage/AddPage";
import Footer from "../components/footer/Footer";
import PrivateRouting from "./PrivateRouting";
import PublicRouting from "./PublicRouting";
import DetailPage from "../pages/detailPage/DetailPage";
import Myads from "../pages/myads/Myads";
import Fvrt from "../pages/fvrt/Fvrt";
import Navbar from "../components/navbar/Navbar";
import Bike from "../components/categories/Bike";
import TvMedia from "../components/categories/TvMedia";
import Tablet from "../components/categories/Tablet";
import Vehicles from "../components/categories/Vehicles";
import Electronics from "../components/categories/Electronics";
import House from "../components/categories/House";
import Watch from "../components/categories/Watch";
import Phone from "../components/categories/Phone";
import Computer from "../components/categories/Computer";
import Animals from "../components/categories/Animals";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import EditPage from "../pages/editPage/EditPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
export default function Routing() {
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar style={{ minWidth: 500 }} />
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<PublicRouting isUserLoggedIn={isUserLoggedIn}><Login /></PublicRouting>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/singleproduct/:id" element={<DetailPage />} />
        
         
          <Route path="/bike" element={<Bike />} />
          <Route path="/tv-media" element={<TvMedia />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/house-plot" element={<House />} />
          <Route path="/Phone" element={<Phone />} />
          <Route path="/computer-accessories" element={<Computer />} />
          <Route path="/animals" element={<Animals />} />
          <Route
            path="/add"
            element={
              <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
                <AddPage />
              </PrivateRouting>
            }
          />
        
            <Route path="/myads" element={  <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
              <Myads />
            </PrivateRouting>} />



            <Route path="/myfvrt" element={<PrivateRouting isUserLoggedIn={isUserLoggedIn}>
              <Fvrt />
            </PrivateRouting>} />
          <Route path="/edit/:docId" element={<PrivateRouting isUserLoggedIn={isUserLoggedIn}>
            <EditPage />
          </PrivateRouting>} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
        <br />
        <br />
        <br />
        <Footer />
      </BrowserRouter>
    </>
  );
}
