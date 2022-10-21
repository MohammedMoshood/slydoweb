import {LOGIN, USER_LOADING, USER_ERROR} from "../constants/index"


const initialState = {
      user: null,  
}

export default function userReducer(state = initialState, action) {
      switch (action.type) {
        case LOGIN:{
            console.log(action.payload, "the action type>>>>")
          return {
            ...state,
            user: action.payload
          };
        }
    
        default:
          return state;
      }
    }