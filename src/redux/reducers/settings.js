// import { teammembersData } from "../../pages/settings/TableData";
import {GET_SETTINGS, GET_TEAM_MEMBERS, TEAM_MEMBERS_LOADING, GET_SHIPPING_OPTIONS, GET_TERMS_AND_CONDITIONS, GET_BANK_ACCOUNTS, GET_BANK_ACCOUNTS_LOADING, DELETE_CONTACT, BLOCK_CONTACT, GET_PAYMENT_REQUEST, PAYMENT_REQUEST_LOADING, REJECT_PAYMENT_REQUEST, CREATE_SHIPPING_OPTION, SETTINGS_LOADING, CREATE_TEAM_MEMBER, EDIT_TEAM_MEMBER, DELETE_TEAM_MEMBER, EDIT_SHIPPING_OPTION, DELETE_SHIPPING_OPTION, CREATE_TERMS_AND_CONDITIONS} from "../constants/index"


const initialState = {
      settings: [],
      teamMembers: [],
      shippingOptions: [],
      createshippingoptions: [],
      termsAndConditions: [],
      loading: true,
      error: false
}

export default function settingReducer(state = initialState, action) {
      switch (action.type) {
        case GET_SETTINGS:{
          return {
            ...state,
            settings: action.payload,
            loading: false
          };
        }
        case GET_TEAM_MEMBERS:
          return {
            ...state,
            teamMembers: action.payload,
            loading: false
          };
        
        case CREATE_TEAM_MEMBER:
          return {
            ...state,
            teamMembers: [...state.teamMembers, action.payload],
            loading: true
          }
        case EDIT_TEAM_MEMBER:
          const duplicateTeamMem= state.teamMembers
          const index = duplicateTeamMem.findIndex(item => item.id === action.payload.id)
          duplicateTeamMem[index] = action.payload
          return {
            ...state,
            teamMembers: [ ...duplicateTeamMem ],
            loading: false
          }

        case DELETE_TEAM_MEMBER:
          const duplicateTeamDelete= state.teamMembers
          const deleteIndex = duplicateTeamMem.findIndex(item => item.id === action.payload.id)
          duplicateTeamMem.splice(deleteIndex, 1)
          return {
            ...state,
            teamMembers: [...duplicateTeamDelete],
            loading: false
          }

        case GET_SHIPPING_OPTIONS:
          return {
            ...state,
            shippingOptions: action.payload,
            loading: false
          };
        case CREATE_SHIPPING_OPTION:
          return {
            ...state,
            shippingOptions: [action.payload, ...state.shippingOptions],
            loading: true
          }
        
        case EDIT_SHIPPING_OPTION:
          const duplicateShipping= state.shippingOptions
          const shippingIndex = duplicateShipping.findIndex(item => item.id === action.payload.id)
          duplicateShipping[shippingIndex] = action.payload
        return{
          ...state,
          shippingOptions: [ ...duplicateShipping ],
          loading: false
          }
      
          case DELETE_SHIPPING_OPTION:
          const duplicateShippingDelete= state.shippingOptions
          const shippingDeleteIndex = duplicateShipping.findIndex(item => item.id === action.payload.id)    
          duplicateShipping.splice(shippingDeleteIndex, 1)
          return {
            ...state,
            shippingOptions: [...duplicateShippingDelete],
            loading: false  
          }

        case GET_TERMS_AND_CONDITIONS:{
          return {
            ...state,
            termsAndConditions: action.payload,
            loading: false
          };
        }

          case SETTINGS_LOADING:
          return {
            ...state,
            loading: true
          }

        case TEAM_MEMBERS_LOADING: {
          return {
            ...state,
            loading: true
          }
        }
        case BLOCK_CONTACT:
          return {
            ...state,
            contacts: action.payload,
          };
         
        case CREATE_TERMS_AND_CONDITIONS:{
          return {
            ...state,
            loading: false,
            termsAndConditions: action.payload 
          }
        }
        default:
          return state;
      }

    }