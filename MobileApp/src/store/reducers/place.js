import { ADD_PLACE, DELETE_PLACE } from '../actions/actionType';
const initialState = {
    places: []
}



const reducer = (state=initialState, action) => {
    switch (action.type) {
        
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({ key: Math.random(), value: action.placeName })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(ele => {
                    return ele.key !== action.key
                })
            };
        default:
            return state
    }
}
export default reducer;