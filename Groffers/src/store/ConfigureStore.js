import { createStore, combineReducers } from "redux"
import myReducer from "./reducer/myReducer"
const rootReducer = combineReducers({
    myPlace: myReducer
});
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;