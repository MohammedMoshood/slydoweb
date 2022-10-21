import axios from "axios";
import { GET_CONTACTS, DELETE_CONTACT, BLOCK_CONTACT } from "../constants/index.js";
import { redirect } from "../../utils/Utils"

export const getBlockedContacts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/list-block-contact/

    `, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });
    console.log(response.data, "data from api");

    if(response.status === 401){
      redirect();    
      }

    if (response.data?.results.length) {
      const contacts = response.data.results.map((ob) => ({
        name: ob.full_name,
        username: ob.username,
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
      
    }

    console.log(response, "delete response");
    if (response.status === 200) {
      dispatch({
        type: DELETE_CONTACT,
        payload: { data: username, error: false },
      });
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
    
        console.log(response, "delete reponse");
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
