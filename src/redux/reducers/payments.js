import {GET_TRANSACTIONS, GET_PAYOUTS, GET_INVOICE, GET_PAYMENT_CONTRACT, GET_BANK_ACCOUNTS, GET_BANK_ACCOUNTS_LOADING, TRANSACTION_LOADING, GET_PAYMENT_REQUEST } from "../constants/index"


const initialState = {
      payments: [],
      transactions: {
        transactions: [],
        count: 0
      },
      paymentRequest: [],
      payouts: [],
      invoice: [],
      paymentContract: [],
      bankAccounts: [],
      loading: true,
      error: false
}

export default function paymentReducer(state = initialState, action) {
      switch (action.type) {
        case GET_TRANSACTIONS:{
          return {
            ...state,
            // payments: action.payload,
            payments: {payments:action.payload.payments, count: action.payload.count},
            loading: false
          };
        }
        case TRANSACTION_LOADING: {
          return {
            ...state,
            loading: true
          }
        }
        case GET_PAYMENT_REQUEST:
          return {
            ...state,
            paymentRequest: action.payload,
            loading: false
          };
        case GET_PAYOUTS:
          return {
            ...state,
            payouts: action.payload,
            loading: false
          };
        case GET_INVOICE:
          return {
            ...state,
            invoice: action.payload,
            loading: false
          };
        case GET_PAYMENT_CONTRACT:
          return {
            ...state,
            paymentContract: action.payload,
            loading: false
          };
        case GET_BANK_ACCOUNTS:
          return {
            ...state,
            bankAccounts: action.payload,
            loading: false
          };
        case GET_BANK_ACCOUNTS_LOADING: {
          return {
            ...state,
            loading: true
          }
        }
        // case ACCEPT_CONTACT_REQUEST:
        //   const indexOfDel = state.contacts.findIndex((ob) => ob.username ===action.payload.data)
        //   console.log(indexOfDel, "index of deleted ")
        //   const main = [...state.contacts]
        //   main.splice(indexOfDel, 1)
        //   console.log(main, "the filtered data")
        //   return {
        //     ...state,
        //     contactRequest: main,
        //     error: action.payload.error,
        //     loading: false
        //   };
        // case REJECT_PAYMENT_REQUEST:
        //   const indexOfDel = state.payments.findIndex((ob) => ob.username ===action.payload.data)
        //   console.log(indexOfDel, "index of deleted ")
        //   const main = [...state.payments]
        //   main.splice(indexOfDel, 1)
        //   console.log(main, "the filtered data")
        //   return {
        //     ...state,
        //     payments: main,
        //     error: action.payload.error,
        //     loading: false
        //   };
        // case BLOCK_CONTACT:
        //   return {
        //     ...state,
        //     contacts: action.payload,
        //   };
    
        default:
          return state;
      }
    }