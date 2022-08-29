import {FETCH_PRODUCT,DELETE_PRODUCT} from '../type/Type'

const initialState={
    fetchArray:[]
}

function ProductReducers (state=initialState,action ){
    switch(action.type){
        case FETCH_PRODUCT:
         return{
             ...state,
             fetchArray:action.payload,
         }
         case DELETE_PRODUCT:
            let productsAfterDel = state.fetchArray.filter((item)=>item.docId !== action.payload)
            console.log('data payload in reducer',productsAfterDel);
            return{
                ...state,
                fetchArray: productsAfterDel,
            }
         default:
            return state
        }
   
}

export default ProductReducers;