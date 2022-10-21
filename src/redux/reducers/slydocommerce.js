// import {GET_ORDERS, GET_PRODUCTS,ADD_PRODUCT, GET_SERVICES, ORDER_MESSAGE, GET_SERVICE_CATEGORIES, GET_SLYDO_COMMERCE_LOADING, GET_CATEGORIES, GET_CONDITION, VIEW_ORDERS, UPDATE_ORDER_NOTES, UPDATE_ORDER_STATUS } from "../constants/index";
import {GET_ORDERS, GET_PRODUCTS,ADD_PRODUCT, GET_SERVICES, ORDER_MESSAGE, GET_SLYDO_COMMERCE_LOADING, GET_CATEGORIES, GET_SERVICE_CATEGORIES, GET_CONDITION, VIEW_ORDERS, UPDATE_ORDER_NOTES, UPDATE_ORDER_STATUS, UPDATE_PRODUCT, DELETE_PRODUCT, CREATE_SERVICES, UPDATE_SERVICE, DELETE_SERVICE } from "../constants/index"

const initialState = {
      slydocommerce: [],
      orders: {
        orders: [],
        count: 0
      },
      products: [],
      services: [],
      loading: true,
      error: false,
      categories: [],
      conditions: []
}

export default function paymentReducer(state = initialState, action) {
      switch (action.type) {
        case GET_ORDERS:{
          console.log(action.payload.count, "count from reducers>>>")
          return {
            ...state,
            orders: {orders:action.payload.orders, count: action.payload.count},
            loading: false
          };
        }
        case GET_PRODUCTS:
          return {
            ...state,
            products: action.payload,
            loading: false
          };
 
        case ADD_PRODUCT : {
          return {
            ...state,
            products: [action.payload, ...state.products]
          }
        }

        case UPDATE_PRODUCT: {
          const duplicateProduct = state.products
          const productIndex = duplicateProduct.findIndex(product => product.id === action.payload.id)
          duplicateProduct[productIndex] = action.payload
          return {
            ...state,
            products: [...duplicateProduct],
            loading: false
          }
        }
        
        case DELETE_PRODUCT: {
          const duplicateProduct = state.products
          const productIndex = duplicateProduct.findIndex(product => product.id === action.payload.id)
          duplicateProduct.splice(productIndex, 1)
          return {
            ...state,
            products: [...duplicateProduct],
            loading: false
          }
        }

        // case DELETE_SERVICE: {
        //   const duplicateService = state.products
        //   const serviceIndex = duplicateService.findIndex(product => product.id === action.payload.id)
        //   duplicateService.splice(serviceIndex, 1)
        //   return {
        //     ...state,
        //     products: [...duplicateService],
        //     loading: false
        //   }
        // }

        case VIEW_ORDERS: {
          return {
            ...state,
            orders: action.payload,
            loading: false
          }
        }

        case ORDER_MESSAGE:
          return {
            ...state,
            contacts: action.payload,
          };
          
        case UPDATE_ORDER_STATUS: {
          const duplicateOrder = state.orders
          const orderIndex = duplicateOrder.orders.findIndex(order => order.id === action.payload.id)
          duplicateOrder.orders[orderIndex].status = action.payload.status
          return {
            ...state,
            orders: [...duplicateOrder],
            loading: false
          }
        }

        case UPDATE_ORDER_NOTES: {
          const duplicateOrder = state.orders
          const orderIndex = duplicateOrder.orders.findIndex(order => order.id === action.payload.id)
          duplicateOrder.orders[orderIndex].notes = action.payload.status          
          return {
            ...state,
            orders: [...duplicateOrder],
            loading: false
          }
        }

        case GET_SERVICES:
          return {
            ...state,
            services: action.payload,
            loading: false
          };
          // case GET_BANK_ACCOUNTS:
          // return {
          //   ...state,
          //   bankAccounts: action.payload,
          //   loading: false
          // };
      
      //   case DELETE_CONTACT: {
      //     const indexOfDel = state.contacts.findIndex((ob) => ob.username ===action.payload.data)
      //     console.log(indexOfDel, "index of deleted ")
      //     const main = [...state.contacts]
      //     main.splice(indexOfDel, 1)
      //     console.log(main, "the filtered data")
      //     return {
      //       ...state,
      //       contacts: main,
      //       error: action.payload.error,
      //       loading: false
      // }};
        case GET_SLYDO_COMMERCE_LOADING: {
          return {
            ...state,
            loading: true
          }
        }

        case GET_CONDITION: {
          return{
            ...state,
            conditions: action.payload,
            loading: false
          }
        }

        case GET_CATEGORIES: {
          return{
            ...state,
            categories: action.payload,
            loading: false
          }
        }

        case CREATE_SERVICES : {
          return {
            ...state,
            services: [action.payload, ...state.services]
          }
        }

        case GET_SERVICE_CATEGORIES: {
          return{
            ...state,
            categories: action.payload,
            loading: false
          }
        }

        case UPDATE_SERVICE: {
          const duplicateService = state.services
          const serviceIndex = duplicateService.findIndex(item => item.id === action.payload.id)
          duplicateService[serviceIndex] = action.payload
          return {
            ...state,
            services: [...duplicateService],
            loading: false
          }
        }

        case DELETE_SERVICE: {
          const duplicateService = state.products
          const serviceIndex = duplicateService.findIndex(item => item.id === action.payload.id)
          duplicateService.splice(serviceIndex, 1)
          return {
            ...state,
            products: [...duplicateService],
            loading: false
          }
        }

    
        default:
          return state;
      }
    }
    