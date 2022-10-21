import axios from "axios";
import { GET_CONTACTS, DELETE_CONTACT, BLOCK_CONTACT, GET_CONTACT_REQUEST, DELETE_CONTACT_REQUEST, BLOCK_CONTACT_REQUEST, CONTACT_LOADING , ACCEPT_CONTACT_REQUEST} from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';


export const getContacts = () => async (dispatch) => {
  dispatch({type: CONTACT_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/

    `, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const contacts = response.data.results.map((ob) => ({
        name: ob.full_name,
        username: ob.username,
        image: ob.avatar
      }));
      dispatch({
        type: GET_CONTACTS,
        payload: contacts,
      });
    } else {
      dispatch({
        type: GET_CONTACTS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_CONTACTS,
      payload: [],
    });
  }
};

export const removeContact = (username) => async (dispatch) => {
  dispatch({type: CONTACT_LOADING})
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/remove-from-contact/`,
      { user: username },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
      }
    );
    if(response.status === 401){
      redirect("/");    
    }

    console.log(response, "delete response");
    if (response.status === 200) {
     
      dispatch({
        type: DELETE_CONTACT,
        payload: { data: username, error: false },
      });
      const options = {
        onOpen: props => console.log(props.foo),
        onClose: props => console.log(props.foo),
        autoClose: 6000,
        // closeButton: FontAwesomeCloseButton,
        type: toast.TYPE.DANGER,
        hideProgressBar: false,
        // position: toast.POSITION.TOP_LEFT,
        pauseOnHover: true,
        // transition: MyCustomTransition,
        // progress: 0.2
        // and so on ...
      };
      toast.error("Contact Deleted", {
        // type: "danger",
          type: toast.TYPE.DANGER,
          style: {
            backgroundColor: "#fceae9",
            borderColor: "#f7c1bd",
            // color: 'red',
            // fontColor: "white"
          }
        }
      )
      // window.location.reload();
    }else{
      dispatch({
            type: DELETE_CONTACT,
            payload: {data: null, error: true}
      })
    }
  } catch (error) {
    console.log(error, "removing error");
  }
};

export const blockContact = (username) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/block-contact/`,
      { user: username },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
      }
    );
    if(response.status === 401){
      redirect("/");    
    }

    console.log(response, "delete response");
    if (response.status === 200) {
      dispatch({
        type: BLOCK_CONTACT,
        payload: { data: username, error: false },
      });
    }else{
      dispatch({
            type: BLOCK_CONTACT,
            payload: {data: null, error: true}
      })
    }
  } catch (error) {
    console.log(error, "removing error");
  }
};


export const getContactRequests = () => async (dispatch) => {
  dispatch({type: CONTACT_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/contact-request/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });
    console.log(response.data.results, "data from api na, contact request");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const contactrequest = response.data.results.map((ob) => ({
        from_user: {
          name:ob?.from_user?.full_name,
          username: ob?.from_user?.username,
          image: ob?.from_user?.avatar,
        },
        to_user: {
          name:ob?.to_user?.full_name,
          username: ob?.to_user?.username,
          image: ob?.to_user?.avatar,
        }
       
      }));
      dispatch({
        type: GET_CONTACT_REQUEST,
        payload: contactrequest,
      });
    } else {
      dispatch({
        type: GET_CONTACT_REQUEST,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_CONTACT_REQUEST,
      payload: [],
    });
  }
};

export const acceptContactRequest = (username) => async (dispatch) => {
  dispatch({type: CONTACT_LOADING})
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/user/contact-request/accept/`,
      { user: username },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
      }
    );

    if(response.status === 401){
      
    }

    console.log(response, "accept reponse");
    if (response.status === 200) {
      dispatch({
        type: ACCEPT_CONTACT_REQUEST,
        payload: { data: username, error: false },
      });
    }else{
      dispatch({
            type: ACCEPT_CONTACT_REQUEST,
            payload: {data: null, error: true}
      })
    }
  } catch (error) {
    console.log(error, "removing error");
  }
};

export const rejectContactRequest = (username) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/user/contact-request/cancel-or-reject/`,
      { user: username },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
      }
    );

    console.log(response, "delete reponse");
    if (response.status === 200) {
      dispatch({
        type: BLOCK_CONTACT_REQUEST,
        payload: { data: username, error: false },
      });
    }else{
      dispatch({
            type: BLOCK_CONTACT_REQUEST,
            payload: {data: null, error: true}
      })
    }
  } catch (error) {
    console.log(error, "removing error");
  }
};