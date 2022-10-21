import {GET_MESSAGES, GET_ALL_MESSAGES, GET_ARCHIVED_MESSAGES, DELETE_MESSAGE, BLOCK_CONTACT, GET_SENT_MESSAGES, GET_STARRED_MESSAGES, MESSAGE_LOADING, ACCEPT_CONTACT_REQUEST, UPDATE_ARCHIVE_MESSAGE, UPDATE_STARRED_MESSAGE} from "../constants/index"


const initialState = {
  messages: [],
  allMessages: [],
  sentMessages: [],
  starredMessages: [],
  archivedMessages: [],
  loading: true,
  error: false
}

export default function messageReducer(state = initialState, action) {
      switch (action.type) {
        case GET_MESSAGES:{
          return {
            ...state,
            messages: action.payload,
            loading: false
          };
        }
        case GET_ALL_MESSAGES:
          return {
            ...state,
            allMessages: action.payload,
            loading: false
          };
        case GET_SENT_MESSAGES:
          return {
            ...state,
            sentMessages: action.payload,
            loading: false
          };
        case GET_STARRED_MESSAGES:
          return {
            ...state,
            starredMessages: action.payload,
            loading: false
          };

        case GET_ARCHIVED_MESSAGES:
          return {
            ...state,
            archivedMessages: action.payload,
            loading: false
          }
        
          case UPDATE_ARCHIVE_MESSAGE: 
          const selectedMessage = state.allMessages.find(message => message.id.toString() === action.payload.toString())
          console.log(action.payload, "payload from reducer")
          console.log(selectedMessage, "selected message")
          const unSelectedMessages = state.allMessages.filter(message => message.id !== action.payload)
          const updatedMessage = {...selectedMessage, is_archived_by_recipient: !selectedMessage.is_archived_by_recipient}
          return{
            ...state,
            allMessages: [updatedMessage, ...unSelectedMessages],
            loading: false
          }

          case UPDATE_STARRED_MESSAGE:
            const selectedStarredMessage = state.allMessages.find(message => message.id.toString() === action.payload.toString())
            console.log(action.payload, "payload from reducer")
            console.log(selectedStarredMessage, "selected message")
            const unSelectedStarredMessages = state.allMessages.filter(message => message.id !== action.payload)
            const updatedStarredMessage = {...selectedStarredMessage, is_starred_by_recipient: !selectedStarredMessage.is_starred_by_recipient}
            return{
              ...state,
              allMessages: [updatedStarredMessage, ...unSelectedStarredMessages],
              loading: false
            }
      
        case DELETE_MESSAGE: {
          const indexOfDel = state.messages.findIndex((ob) => ob.username ===action.payload.data)
          console.log(indexOfDel, "index of deleted ")
          const main = [...state.messages]
          main.splice(indexOfDel, 1)
          console.log(main, "the filtered data")
          return {
            ...state,
            messages: main,
            error: action.payload.error,
            loading: false
      }};
        case MESSAGE_LOADING: {
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