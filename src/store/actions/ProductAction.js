import { db, auth, storage } from "../../config/Firebase";
import { DELETE_PRODUCT, FETCH_PRODUCT, } from "../type/Type";

export const postProduct =
  (fileName, productData, image, setImage, file, setFile,navigate) =>
  async (dispatch) => {
    const ref = storage.ref(`/images/${fileName}`);
    const uploadTask = ref.put(file);

    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        db.collection("products").add({ ...productData, image: url });
      });
      
    });
  };

export const fetchProduct = () => async (dispatch) => {
  try {
    const data = [];
    const snapShot = await db.collection("products").get();
    snapShot.forEach((productItem) => {
      data.push({ ...productItem.data(), docId: productItem.id });
      // console.log(snapShot);
    });

    dispatch({
      type: FETCH_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const deleteproduct = (docId) => async (dispatch) => {
  try {
  console.log('docId in action',docId);
    
   await db.collection("products").doc(docId).delete();

    dispatch({
      type: DELETE_PRODUCT,
      payload: docId,
    });
  } catch (error) {
    console.log(error);
  }
};


export const updateProduct = (fileName,productData,file,setFile,image,setImage,docId)=> async (dispatch)=>{
  try {
    const ref = storage.ref(`/images/${fileName}`);
    const uploadTask = ref.put(file);

    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
       db.collection("products").doc(docId).update(({...productData,image:url}))
      });
      
    });
  } catch (error) {
    
  }
}
