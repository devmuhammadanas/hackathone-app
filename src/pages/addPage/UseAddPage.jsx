import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { postProduct } from "../../store/actions/ProductAction";
import { useNavigate } from "react-router-dom";

export default function UseAddPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [number, setNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.AuthReducer.user);
  // console.log("user in use Add", user?.uid);

  useEffect(() => {
    setNumber(Math.random() * 100000000);
  }, []);

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name + number);
  };

  const ctaPostHandler = () => {
    if (
      title !== "" &&
      description !== "" &&
      price !== "" &&
      category !== "" &&
      location !== ""
    ) {
      let productData = {
        title: title,
        description: description,
        price: price,
        location: location,
        category: category,
        userId: user?.uid,
      };

      dispatch(
        postProduct(fileName, productData, image, setImage, file, setFile,navigate)
      );
      

    } else {
      alert("Please fill all fields");
    }
  };

  return [
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
      fileHandler,
      file,
      setFile,
      fileName,
      setFileName,
      ctaPostHandler,
    },
  ];
}
