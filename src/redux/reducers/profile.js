import { GET_PROFILE, PROFILE_LOADING, UPDATE_ADRESS, UPDATE_PROFILE, UPDATE_BIO, GET_OPENING_HOURS, UPDATE_PROFILE_IMAGE, UPDATE_WALLPAPER} from "../constants/index";
const initialState = {
    profile: [],
    openingHours: [],
    loading: true,
    error: false
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };

        case GET_OPENING_HOURS:
            return {
                ...state,
                openingHours: action.payload,
                loading: false
             };
            
        case UPDATE_WALLPAPER:{
            return {
                ...state,
                profile: [...state.profile, action.payload],
                loading: false
            }
        }

        case PROFILE_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case UPDATE_ADRESS: {
            return{
                profile: [...state.initialState, action.payload],
            }
        }
        case UPDATE_PROFILE: {
            return{
                ...state,
                profile: [...state.initialState, action.payload],
        }
        }
        case UPDATE_BIO: {
            return{
                ...state,
                profile: [...state.initialState, action.payload],
            }
        }

        default:
            return state;
    }
}