// import { get } from "react-hook-form";
import {GET_INTEGRATIONS, GET_API_KEYS_INTEGRATIONS, DELETE_CONTACT, BLOCK_CONTACT, GET_CONTACT_REQUEST, CONTACT_LOADING, ACCEPT_CONTACT_REQUEST, GET_API_INTEGRATION, CREATE_API_KEY_INTEGRATIONS, DELETE_API_KEY_INTEGRATIONS, CREATE_INTEGRATION, DELETE_INTEGRATION, EDIT_WEBHOOK} from "../constants/index"

const initialState = {
      integrations: [],
      apiKeys: [],
      loading: true,
      error: false
}

export default function contactReducer(state = initialState, action) {
      switch (action.type) {
        case GET_INTEGRATIONS:{
          return {
            ...state,
            integrations: action.payload,
            loading: false
          };
        }
          case GET_API_KEYS_INTEGRATIONS:{
            return {
              ...state,
              apiKeys: action.payload,
              loading: false
            };
          }

          case CREATE_INTEGRATION:{
            return {
              ...state,
              integrations: [...state.integrations, action.payload],
              loading: false
            }
          }
          case CREATE_API_KEY_INTEGRATIONS:{
            return {
              ...state,
              apiKeys: [...state.integrations, action.payload],
              loading: true
            }
          }  
        
           
            
         case DELETE_API_KEY_INTEGRATIONS:{
            const delIndex = state.apiKeys.findIndex((ob) => ob.id === action.payload);
            const delApiKey = state.apiKeys.splice(delIndex, 1);
            return{
              ...state,
              apiKeys: delApiKey,
              loading: true
            }
          }
        
          case EDIT_WEBHOOK:{
            const editIntegration = state.integrations
            const editIndex = editIntegration.findIndex((ob) => ob.id === action.payload.id)
            editIntegration[editIndex] = action.payload
            return{
              ...state,
              integrations: editIntegration,
              loading: false
            }
          }

        case DELETE_CONTACT: {
          const indexOfDel = state.contacts.findIndex((ob) => ob.username ===action.payload.data)
          console.log(indexOfDel, "index of deleted ")
          const main = [...state.contacts]
          main.splice(indexOfDel, 1)
          console.log(main, "the filtered data")
          return {
            ...state,
            contacts: main,
            error: action.payload.error,
            loading: false
      }};
        case CONTACT_LOADING: {
          return {
            ...state,
            loading: true
          }
        }
        case ACCEPT_CONTACT_REQUEST:
          const indexOfDel = state.contacts.findIndex((ob) => ob.username ===action.payload.data)
          console.log(indexOfDel, "index of deleted ")
          const main = [...state.contacts]
          main.splice(indexOfDel, 1)
          console.log(main, "the filtered data")
          return {
            ...state,
            contactRequest: main,
            error: action.payload.error,
            loading: false
          };
        case BLOCK_CONTACT:
          return {
            ...state,
            contacts: action.payload,
          };
    
        default:
          return state;
      }
    }