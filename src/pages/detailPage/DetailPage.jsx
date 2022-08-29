import { Grid } from "@mui/material";
import React from "react";
import "./DetailpageStyle.css";
import DetailImg from "../../assets/banner.jpg";
import UseDetailPage from "./UseDetailPage";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function DetailPage() {
  const [{ productData }] = UseDetailPage();
  
   
  return (
    <div>
      <br />
      <Grid container spacing={2}>
        {productData.map((singleItem)=>{
          return(
            <>
            <Grid item xs={12} sm={12} md={8} lg={8}>
          <div className="detailImgDiv">
            <img src={singleItem.image} alt="" className="detailImg" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="detailImgDiv">
            <h1 className="detailPrice">Rs.{singleItem.price}</h1>
            <small className="detailText">{singleItem.title}</small>
            <br />
            <small className="detailText">{singleItem.location}</small>
            <div className="detailFvrtBtn">
              <button className="fvrtBtn">
                <FavoriteBorderIcon fontSize="30" /> &nbsp; Favourite
              </button>
            </div>
           
          </div>
          <br />
          <Grid item xs={12}>
              <div className="detailImgDiv">
                <p style={{paddingLeft:'10px'}}>{singleItem.description}</p>
              </div>
            </Grid>
        </Grid>
        </>
          )
        })}
        
      </Grid>
    </div>
  );
}
