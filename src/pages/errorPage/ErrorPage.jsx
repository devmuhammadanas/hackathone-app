import { Container, Grid } from "@mui/material";
import React from "react";
import Error from '../../assets/notfound.webp'
export default function ErrorPage() {
  return (
    <div style={{textAlign:'center', marginTop:'20px'}} >
      <h3>Oops... we didn't find anything that matches this search</h3>
      <p>
        Try to search for something more general, change the filters or check
        for spelling mistakes
      </p>
      <img src={Error} alt="Not Found" />
    </div>
  );
}
