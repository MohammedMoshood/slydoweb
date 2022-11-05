import axios,  {useState} from "axios";
// import { GET_ORDERS, GET_PRODUCTS, GET_SERVICES, GET_SLYDO_COMMERCE_LOADING, VIEW_ORDERS, GET_CONDITION, GET_CATEGORIES, GET_SERVICE_CATEGORIES, UPDATE_ORDER_NOTES, UPDATE_ORDER_STATUS} from "../constants/index.js";
import { GET_ORDERS, GET_PRODUCTS, GET_SERVICES, GET_SERVICE_CATEGORIES, GET_SLYDO_COMMERCE_LOADING, VIEW_ORDERS, GET_CONDITION, GET_CATEGORIES, UPDATE_ORDER_NOTES, UPDATE_ORDER_STATUS, ADD_PRODUCT, CREATE_SERVICES, UPDATE_SERVICE, DELETE_PRODUCT, DELETE_SERVICE} from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';

export const getOrders = (page, status, search, pageSize) => async (dispatch) => {
  console.log("calling order endpoint")
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/order/?page=${page}&status=${status}&search=${search}&page_size=${pageSize}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
      });
      
    // dispatch({type: CONTACT_LOADING})
    // console.log(response.data.results, "data from orders api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const orders = response.data.results.map((ob) => ({
        orderNumber: ob?.id,
        name: ob?.customer,
        amount: ob?.total_price,
        customer: ob?.customer,
        status: ob?.status,
        image: ob?.from_customer_avatar,
        dateAndTime: ob?.created_at,
        description: ob?.description,
        note: ob?.note,
        paid: ob?.is_paid
      }));

      // console.log(response.data.count, "the count froma api")

      const orderData = {
        count: response.data.count,
        orders: orders
      }
      
      dispatch({
        type: GET_ORDERS,
        payload: orderData,
      });
      
      // toast.success("Orders retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success "
      // })
    } else {
      dispatch({
        type: GET_ORDERS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ORDERS,
      payload: [],
    });
  }
};

export const updateOrderStatus = (data) => async (dispatch) => {
  dispatch({type:  GET_SLYDO_COMMERCE_LOADING})
  try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/order/${data.id}/update-status/`,{status: data.status}, {
          headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
  });
      console.log(response, "data from update order status api >>>>>>");
      if(response.status === 401){
        redirect("/");    
      }
      if (response.status === 200){
        dispatch({
          type: UPDATE_ORDER_STATUS,
          payload: response.data,
        });
        toast.success("Order status updated successfully", {
          type: toast.TYPE.PRIMARY,
          style: {
            backgroundColor: "#e4fbf5",
            borderColor: "#aef4e1",
            border: "1px solid #aef4e1",
            borderRadius: "4px",
            fontColor: '#19bc90',
            marginLeft: "-130px"
          },
          bodyClassName: "text-sm text-success "
        })
      } else {
        console.log("error updating order status", response)
        dispatch({
          type: UPDATE_ORDER_STATUS,
          payload: [],
        });
      }
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: [],
    });
  }
}

export const updateOrdersNotes = (data) => async (dispatch) => {
  dispatch({type:  GET_SLYDO_COMMERCE_LOADING})
  try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/order/${data.id}/add-note/`,{note: data.noteData}, {
          headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
  });
      console.log(response, "data from update order notes api >>>>>>");
      if(response.status === 401){
        redirect("/");    
      }
      if (response.status === 200){
        dispatch({
          type: UPDATE_ORDER_NOTES,
          payload: response.data,
        });
        toast.success("Order notes updated successfully", {
          type: toast.TYPE.PRIMARY,
          style: {
            backgroundColor: "#e4fbf5",
            borderColor: "#aef4e1",
            border: "1px solid #aef4e1",
            borderRadius: "4px",
            fontColor: '#19bc90',
            marginLeft: "-130px"
          },
          bodyClassName: "text-sm text-success "
        })
      } else {
        console.log("error updating order notes", response)
        dispatch({
          type: UPDATE_ORDER_NOTES,
          payload: [],
        });
      }
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_NOTES,
      payload: [],
    });
  }
}

// export const viewOrders = (id) => async (dispatch) => {
//     console.log(id, "calling order endpoint")
//     dispatch({type: GET_SLYDO_COMMERCE_LOADING})
//     try {
//         const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/order/${id}/`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
//           },
//         });
        
//       // dispatch({type: CONTACT_LOADING})
//       // console.log(response.data.results, "data from orders api >>>>>>");

//       if(response.status === 401){
//         redirect("/");    
//       }

//       if (response.data?.results.length) {
//         const orders = response.data.results.map((ob) => ({
//           orderNumber: ob?.item.id,
//           // name: ob?.merchant,
//           name: ob?.item.name,
//           amount: ob?.total_price,
//           type: ob?.item.type,
//           status: ob?.status,
//           image: ob?.from_customer_avatar,
//           price: ob?.item.price,
//           condition: ob?.item.condition,
//           seller: ob?.item.seller,
//           dateAndTime: ob?.date,
//           description: ob?.item.description
//         }));

//         // console.log(response.data.count, "the count froma api")

//         const orderData = {
//           count: response.data.count,
//           orders: orders
//         }
//         // const handlePageChange = page => {

//         // }
//         dispatch({
//           type: VIEW_ORDERS,
//           payload: orderData,
//         });
        
//         // toast.success("Orders retrieved successfully", {
//         //   type: toast.TYPE.PRIMARY,
//         //   style: {
//         //     backgroundColor: "#e4fbf5",
//         //     borderColor: "#aef4e1",
//         //     border: "1px solid #aef4e1",
//         //     borderRadius: "4px",
//         //     fontColor: '#19bc90',
//         //     marginLeft: "-130px"
//         //   },
//         //   bodyClassName: "text-sm text-success "
//         // })
//       } else {
//         dispatch({
//           type: VIEW_ORDERS,
//           payload: [],
//         });
//       }
//     }catch (error) {
//       dispatch({
//         type: GET_ORDERS,
//         payload: [],
//       });
//       } 
// }

export const getProducts = (username, page) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/products/by-seller/${username}/?page=${page}&page_size=10`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from products api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    console.log(response, "the product response")

    if (response.data?.results.length) {
      const products = response.data.results.map((ob) => ({
        id: ob?.id,
        name: ob?.name,
        image: ob?.cover,
        pictures: ob?.pictures,
        short_description: ob?.short_description,
        description: ob?.description,
        amount: ob?.price,
        category: ob?.category,
        condition: ob?.condition,
        dateAndTime: ob?.created_at
      }));
      const productsData = {
        count: response.data.count,
        products: products
      }
      dispatch({
        type: GET_PRODUCTS,
        payload: productsData,
      });
      
      // toast.success("Products retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success ",
      //   // progressStyle: {
      //   //   backgroundColor: "aquamarine",
      //   // }
      // })
    } else {
      dispatch({
        type: GET_PRODUCTS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS,
      payload: [],
    });
  }
};

export const getCategories = () => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/products/choices/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from categories api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const categories = response.data.results
      dispatch({
        type: GET_CATEGORIES,
        payload: categories,
      });
      
      // toast.success("product categories retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success ",
      //   // progressStyle: {
      //   //   backgroundColor: "aquamarine",
      //   // }
      // })
    } else {
      dispatch({
        type: GET_CATEGORIES,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES,
      payload: []
    });
  }
}

export const getConditions = () => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/products/conditions/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from conditions api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const conditions = response.data.results
      dispatch({
        type: GET_CONDITION,
        payload: conditions,
      });
      
      // toast.success("Product conditions retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success ",
      //   // progressStyle: {
      //   //   backgroundColor: "aquamarine",
      //   // }
      // })
    } else {
      dispatch({
        type: GET_CONDITION,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_CONDITION,
      payload: [],
    });
  }
}

export const createProducts = (product) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/products/`, product, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from create products api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    // if (response.status === 200) {
    if (response.data?.results.length === 200) {
      const products = response.data.results.map((ob) => ({
        id: ob?.id,
        name: ob?.name,
        filename: ob?.cover,
        short_description: ob?.short_description,
        description: ob?.description,
        amount: ob?.price,
        category: ob?.category,
        condition: ob?.condition,
        dateAndTime: ob?.created_at
      }));
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
      
      // toast.success("Product created successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success ",
      //   // progressStyle: {
      //   //   backgroundColor: "aquamarine",
      //   // }
      // })
    } else {
      dispatch({
        type: ADD_PRODUCT,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT,
      // payload: [],
    });
  }
}

export const updateProducts = (product) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/products/`, product, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from create products api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.status) {
      const products = response.data.results.map((ob) => ({
        id: ob?.id,
        name: ob?.name,
        filename: ob?.cover,
        short_description: ob?.short_description,
        amount: ob?.price,
        category: ob?.category,
        condition: ob?.condition,
        dateAndTime: ob?.created_at
      }));
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
      
      toast.success("Product created successfully", {
        type: toast.TYPE.PRIMARY,
        style: {
          backgroundColor: "#e4fbf5",
          borderColor: "#aef4e1",
          border: "1px solid #aef4e1",
          borderRadius: "4px",
          fontColor: '#19bc90',
          marginLeft: "-130px"
        },
        bodyClassName: "text-sm text-success ",
      })
    } else {
      dispatch({
        type: GET_PRODUCTS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS,
      payload: [],
    });
  }
}

export const deleteProduct = (data) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/products/${data.id}/`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from delete products api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.id === 200) {
      // const products = response.data.results.map((ob) => ({
      //   id: ob?.id,
      //   name: ob?.name,
      //   filename: ob?.cover,
      //   short_description: ob?.short_description,
      //   amount: ob?.price,
      //   category: ob?.category,
      //   condition: ob?.condition,
      //   dateAndTime: ob?.created_at
      // }));
      const products = {
        id: response.data.id,
        // name: ob?.name,
      };
      dispatch({
        type: DELETE_PRODUCT,
        payload: products,
      });
    } else {
      dispatch({
        type: DELETE_PRODUCT,
        payload: [],
        loading: false,
      });
    }
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT,
      // payload: [],
    });
  }
}

export const updateProduct = (product) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/products/${product.id}/`, 
      product.updateProductForm
    , {

      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from update products api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.status) {
      const products = response.data.results.map((ob) => ({
        id: ob?.id,
        name: ob?.name,
        filename: ob?.cover,
        short_description: ob?.short_description,
        amount: ob?.price,
        category: ob?.category,
        condition: ob?.condition,
        dateAndTime: ob?.created_at
      }));
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
      
      toast.success("Product updated successfully", {
        type: toast.TYPE.PRIMARY,
        style: {
          backgroundColor: "#e4fbf5",
          borderColor: "#aef4e1",
          border: "1px solid #aef4e1",
          borderRadius: "4px",
          fontColor: '#19bc90',
          marginLeft: "-130px"
        },
        bodyClassName: "text-sm text-success ",
      })
    } else {
      dispatch({
        type: GET_PRODUCTS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS,
      payload: [],
    });
  }
}

export const getServices = (page) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/services/by-provider/japa/?page=${page}&page_size=10`, {
    // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/services/?page=${page}&page_size=10`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from services api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const services = response.data.results.map((ob) => ({
        id: ob?.id,
        serviceName: ob?.name,
        serviceType: ob?.type,
        description: ob?.description,
        category: ob?.category,
        amount: ob?.price,
        image: ob?.cover,
        serviceImages: ob?.pictures,
        serviceProvider: ob?.provider
      }));

      const servicesData = {
        count: response.data.count,
        services: services
      }

      dispatch({
        type: GET_SERVICES,
        payload: servicesData,
      });
      // toast.success("All services retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success ",
      //   // progressStyle: {
      //   //   backgroundColor: "aquamarine",
      //   // }
      // })
    } else {
      dispatch({
        type: GET_SERVICES,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SERVICES,
      payload: [],
    });
  }
}

export const getServiceCategories = () => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/services/choices/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from service categories api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const categories = response.data.results
      dispatch({
        type: GET_CATEGORIES,
        payload: categories,
      });
      
      // toast.success("Service categories retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success ",
      //   // progressStyle: {
      //   //   backgroundColor: "aquamarine",
      //   // }
      // })
    } else {
      dispatch({
        type: GET_SERVICE_CATEGORIES,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SERVICE_CATEGORIES,
      payload: []
    });
  }
}

export const createServices = (service) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try{
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/services/`, service, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from create service api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      // const services = response.data.results.map((ob) => ({
      //   serviceName: ob?.serviceName,
      //   serviceType: ob?.serviceType,
      //   amount: ob?.price,
      //   currency: ob?.currency,
      //   id: ob?.id,   
      // }));

      const services = response.data.results.map((ob) => ({
        id: ob?.id,
        name: ob?.name,
        filename: ob?.pictures,
        coverImage: ob?.cover,
        description: ob?.description,
        short_description: ob?.short_description,
        amount: ob?.price,
        category: ob?.category,
        // condition: ob?.condition,
        // dateAndTime: ob?.created_at
      }));

      dispatch({
        type: CREATE_SERVICES,
        payload: services,
      });

      toast.success("Services created successfully", {
        type: toast.TYPE.PRIMARY,
        style: {
          backgroundColor: "#e4fbf5",
          borderColor: "#aef4e1",
          border: "1px solid #aef4e1",
          borderRadius: "4px",
          fontColor: '#19bc90',
          marginLeft: "-130px"
        },
        bodyClassName: "text-sm text-success "
      })

    } else {
      dispatch({
        type: CREATE_SERVICES,
        payload: [],
      });
    }
  }catch(error){
    dispatch({
      type: CREATE_SERVICES,
      payload: []
    })
  }
}

export const updateService = (service) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/services/${service.id}/`, 
      service.updateForm 
    , {

      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from update services api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.status) {
      const services = response.data.results.map((ob) => ({
        id: ob?.id,
        name: ob?.name,
        serviceName: ob?.serviceName,
        serviceType: ob?.serviceType,
        filename: ob?.cover,
        short_description: ob?.short_description,
        amount: ob?.price,
        // category: ob?.category,
        // condition: ob?.condition,
        dateAndTime: ob?.created_at
      }));
      dispatch({
        type: UPDATE_SERVICE,
        payload: services,
      });
      
      toast.success("Product updated successfully", {
        type: toast.TYPE.PRIMARY,
        style: {
          backgroundColor: "#e4fbf5",
          borderColor: "#aef4e1",
          border: "1px solid #aef4e1",
          borderRadius: "4px",
          fontColor: '#19bc90',
          marginLeft: "-130px"
        },
        bodyClassName: "text-sm text-success ",
      })
    } else {
      dispatch({
        type: UPDATE_SERVICE,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE,
      payload: [],
    });
  }
}

export const deleteService = (data) => async (dispatch) => {
  dispatch({type: GET_SLYDO_COMMERCE_LOADING})
  try {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/services/${data.id}/`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from delete service api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data === 200) {
      // const services = response.data.results.map((ob) => ({
      //   id: ob?.id,
      //   name: ob?.name,
      //   filename: ob?.cover,
      //   short_description: ob?.short_description,
      //   amount: ob?.price,
      //   serviceType: ob?.serviceType,
      //   category: ob?.category,
      //   condition: ob?.condition,
      //   dateAndTime: ob?.created_at
      // }));
      const services = {
        id: response.data.id
      }
      dispatch({
        type: DELETE_SERVICE,
        payload: services,
        
      });
    } else {
      dispatch({
        type: DELETE_SERVICE,
        payload: [],
        // loading: false,
      });
    }
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE,
      payload: [],
    });
  }
}