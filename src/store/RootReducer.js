import { combineReducers } from "redux";
import ProductReducers from "./reducers/ProductReducers";
import { AuthReducer } from "./reducers/AuthReducer";
import { FavProductReducer } from "./reducers/FavProductReducer";
const RootReducer=combineReducers({
 AuthReducer,
 ProductReducers,
 FavProductReducer

})

export default RootReducer;
