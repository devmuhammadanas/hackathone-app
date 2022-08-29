import {ADD_FAVOURITE,DELETE_FAVOURITE,GET_FAVOURITE} from "../type/Type";
const initialState = {
    favProducts:[]
}

export const FavProductReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAVOURITE:
            let newData = state.favProducts;
            newData.push(action.payload)
            return {
                ...state,
                favProducts: newData,
            }
            case GET_FAVOURITE:
        //    console.log('get fvrt',action.payload);
            return {
                ...state,
                favProducts: action.payload,
            }
            case DELETE_FAVOURITE:
                let filterFvrtProducts = state.favProducts.filter((item)=> item.favDocId !== action.payload)
                    return {
                        ...state,
                        favProducts: filterFvrtProducts,
                    }
        default:
            return state;
    }
}

