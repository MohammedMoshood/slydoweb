import {GET_CONTACTS, DELETE_CONTACT, BLOCK_CONTACT, GET_CONTACT_REQUEST, CONTACT_LOADING, ACCEPT_CONTACT_REQUEST, GET_BLOCKED_CONTACTS} from "../constants/index"


const initialState = {
      contacts: [],
      blockedcontacts: [],
      contactRequest: [],
      loading: true,
      error: false
}

export default function contactReducer(state = initialState, action) {
      switch (action.type) {
        case GET_CONTACTS:{
          return {
            ...state,
            contacts: action.payload,
            loading: false
          };
        }
          case GET_CONTACT_REQUEST:
            return {
              ...state,
              contactRequest: action.payload,
              loading: false
            };
      
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
            blockedcontacts: action.payload,
            loading: false
          };
        default:
          return state;
      }
    }