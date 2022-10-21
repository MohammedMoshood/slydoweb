import axios from "axios";
import { GET_INTEGRATIONS, GET_API_KEYS_INTEGRATIONS, GET_INTEGRATIONS_LOADING, CREATE_INTEGRATION, CREATE_API_KEY_INTEGRATIONS, EDIT_WEBHOOK, DELETE_API_KEY_INTEGRATIONS} from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';

export const getAPIKeys = () => async (dispatch) => {
  dispatch({type: GET_INTEGRATIONS_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/webhook/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    console.log(response.data.results, "data from api keys api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const apiKeys = response.data.results.map((ob) => ({
        id: ob?.id,
        // name: ob?.merchant,
        event: ob?.event,
        url: ob?.url,
        // status: ob?.status,
        // image: ob?.from_customer_avatar,
        // dateAndTime: ob?.created_at,
        // description: ob?.description
      }));
      dispatch({
        type: GET_API_KEYS_INTEGRATIONS,
        payload: apiKeys,
      });
      
      // toast.success("Api Keys retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success"
      // })
    } else {
      dispatch({
        type: CREATE_INTEGRATION,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_API_KEYS_INTEGRATIONS,
      payload: [],
    });
  }
};

export const createWebhooks = (data) => async (dispatch) => {
    dispatch({type: GET_INTEGRATIONS_LOADING})
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/webhook/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
      });

      console.log(response.data, "data from api keys api >>>>>>");

      if(response.status === 401){
        redirect("/");    
      }

      if (response.data?.results.length) {
        const createwebhooks = response.data.results.map((ob) => ({
          id: ob?.id,
          event: ob?.event,
          url: ob?.url,

        }));
        dispatch({
          type: CREATE_INTEGRATION,
          payload: createwebhooks,
        });
        
        // toast.success("Api Keys created successfully", {
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
          type: CREATE_INTEGRATION,
          payload: [],
        });
      }
    }catch{
      dispatch({type: CREATE_INTEGRATION})
    }
}

export const editWebhook = (data) => async (dispatch) => {
  dispatch({type: GET_INTEGRATIONS_LOADING})
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/webhook/${data.id}/`, {
      event: data.event,
      url: data.url,
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    console.log(response.data, "data from update webhooks api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const editwebhook = response.data.results.map((ob) => ({
        event: ob?.event,
        url: ob?.url,

      }));
      dispatch({
        type: EDIT_WEBHOOK,
        payload: editwebhook,
      });
      
      // toast.success("Api Keys updated successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success"
      // })
    } else {
      dispatch({
        type: EDIT_WEBHOOK,
        payload: [],
      });
    }
  }catch(error){
    dispatch({
      type: GET_API_KEYS_INTEGRATIONS,
      payload: [],
    })
  }
}

export const createApiKey = (token) => async (dispatch) => {
    dispatch({type: GET_INTEGRATIONS_LOADING})
    try { 
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/developer-auth-token`, {},  {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh
        },
      });

      console.log(response, "data from api keys api >>>>>>");

      if(response.status === 401){
        redirect("/");    
      }

      if (response.data) {
        const createapikeyintegration = response.data.token;
        dispatch({
          type: CREATE_API_KEY_INTEGRATIONS,
          payload: createapikeyintegration,
        });     
        toast.success("Api tokens generated successfully", {
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
          type: CREATE_API_KEY_INTEGRATIONS,
          payload: [],
        });
      }
    }catch{
      dispatch({type: CREATE_API_KEY_INTEGRATIONS})
    }
}

export const deleteApiKey = (data) => async (dispatch) => {
  dispatch({type: GET_INTEGRATIONS_LOADING})
  try {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/webhook/${data.id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    console.log(response.data, "data from api keys api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data) {
      const deleteapikeyintegration = {
        id: response.data.id,
      }
      dispatch({
        type: DELETE_API_KEY_INTEGRATIONS,
        payload: deleteapikeyintegration,
      }); 
      toast.success("Api Keys deleted successfully", {
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
        type: DELETE_API_KEY_INTEGRATIONS,
        payload: [],
      });
    }
  }catch{
    dispatch({type: DELETE_API_KEY_INTEGRATIONS})
  }
}