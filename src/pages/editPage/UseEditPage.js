import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/actions/ProductAction";

export default function UseEditPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [docId, setdocId] = useState("");
  const [number, setNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setNumber(Math.random() * 100000000);
  }, []);

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name + number);
  };

  const ctaUpdateHandler = () => {
    if(title!='' && description!='' && price!='' && category!='' && location!=''){
    let productData = {
      title,
      description,
      price,
      location,
      category,
      userId,
    };
    // console.log(productData);
    dispatch(updateProduct(fileName,productData,file,setFile,image,setImage,docId))
   
  }
  else{
alert("Please Fill all feilds")
  }
}

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
      file,
      setFile,
      fileName,
      setFileName,
      docId,
      setdocId,
      setUserId,
      userId,
      file,
      setFile,
      image,
      setImage,
      ctaUpdateHandler,
    },
  ];
}
