import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserId } from '../../store/actions/AuthAction';
import { deleteproduct } from '../../store/actions/ProductAction';
export default function UseMyds() {
const dispatch = useDispatch();


const ctaDeleteHandler=(docId)=>{
  console.log('docId in hooks', docId);
  window.confirm("Are you sure you want to delete your product?")
dispatch(deleteproduct(docId))
}


  return [{
   ctaDeleteHandler
  }]
}
