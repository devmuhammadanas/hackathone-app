import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import UseEditPage from "./UseEditPage";
export default function EditPage() {
  const [
    {
      title,
      setTitle,
      description,
      setDescription,
      price,
      setPrice,
      location,
      setLocation,
      category,
      setCategory,
      setdocId,
      setUserId,
      userId,
      file,
      setFile,
      image,
      setImage,
      ctaUpdateHandler
    }
  ] = UseEditPage();
  const getProductsArray = useSelector(
    (state) => state.ProductReducers.fetchArray
  );

  const { docId } = useParams();
  console.log(docId);

  useEffect(() => {
    setdocId(docId);
    let editProduct = getProductsArray.filter((item) => {
      if (item.docId == docId) {
        return item;
      }
    });

    let product = editProduct.map((item) => {
      setTitle(item.title);
      setDescription(item.description);
      setPrice(item.price);
      setLocation(item.location);
      setCategory(item.category);
      setUserId(item.userId);
      setImage(item.image);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={2} align="center">
        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: "15px" }}>
          <TextField
            placeholder="Title"
            variant="standard"
            style={{ width: "1150px", padding: "5px", minWidth: "320px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            placeholder="Description"
            variant="standard"
            style={{ width: "1150px", padding: "5px", minWidth: "320px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: "15px" }}>
          <TextField
            placeholder="Price"
            variant="standard"
            style={{ width: "1150px", minWidth: "320px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, width: 500 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Categroy
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Vehicles">Vehicles</MenuItem>
              <MenuItem value="Animals">Animals</MenuItem>
              <MenuItem value="Bike">Bike</MenuItem>
              <MenuItem value="TV/Media">TV/Media</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="House/Plots">House/Plots</MenuItem>
              <MenuItem value="Computer/Accessories">
                Computer/Accessories
              </MenuItem>
              <MenuItem value="Mobile Phone">Mobile Phone </MenuItem>
              <MenuItem value="Watch">Watch </MenuItem>
              <MenuItem value="Tablets">Tablets</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, width: 500 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Faisalabad">Faisalabad</MenuItem>
              <MenuItem value="Lahore">Lahore</MenuItem>
              <MenuItem value="Karachi">Karachi</MenuItem>
              <MenuItem value="Islamabad">Islamabad</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid lg={6} md={6} sm={6} xs={12}>
          <div>
            <img src={image} alt="Photo" />
          </div>
          <br />
          <br />
        </Grid>
        <Grid item md={12} align="left" sx={{ marginLeft: "80px" }}>
          <p>Choose Picture</p>
          <input type="file" />
          <br />
          <br />
          <br />

          <Button variant="contained" color="inherit" className="postBtn" onClick={ctaUpdateHandler}>
            Post
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
