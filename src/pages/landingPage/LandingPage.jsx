import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../assets/ban (2).jpg";
import "./LandingPageStyle.css";
// import { ToastContainer } from 'react-toastify';
import { Grid } from "@mui/material";
import AllProducts from "../../components/allProducts/AllProducts";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
export default function LandingPage() {
  return (
    <div>
      <br />
      <img src={Banner} alt="Banner" className="bannerimg" />
      <br />
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <h2>Fresh Recommended</h2>
            <br />
          </Grid>

          <AllProducts />
        </Grid>
      </Container>
      {/* <ToastContainer /> */}
    </div>
  );
}
