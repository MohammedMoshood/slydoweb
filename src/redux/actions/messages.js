import axios from "axios";
import { GET_ALL_MESSAGES, GET_STARRED_MESSAGES, GET_ARCHIVED_MESSAGES, GET_SENT_MESSAGES, DELETE_CONTACT_REQUEST, BLOCK_CONTACT_REQUEST, MESSAGE_LOADING , ACCEPT_CONTACT_REQUEST, UPDATE_ARCHIVE_MESSAGE, UPDATE_STARRED_MESSAGE} from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";

export const getAllMessages = () => async (dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/list/all/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from messages api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const allmessages = response.data.results.map((ob) => ({
        // name: ob.full_name,
        id: ob.id,
        archived: ob?.is_archived_by_recipient,
        sender: ob.sender,
        sender_image: ob.sender_avatar,
        sender_id: ob.sender_id,
        subtitle: ob?.subtitle,
        recipient: ob.recipient,
        recipient_image: ob.recipient_avatar, 
        is_active: ob.is_active,
        is_archived_by_recipient: ob.is_archived_by_recipient,
        is_archived_by_sender: ob.is_archived_by_sender,
        is_read: ob.is_read,
        is_starred_by_recipient: ob.is_starred_by_recipient,
        is_starred_by_sender: ob.is_starred_by_sender,
        timeSent: ob?.time_sent
      }));
      dispatch({
        type: GET_ALL_MESSAGES,
        payload: allmessages,
      });
      // toast.success("All messages retrieved successfully", {
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
        type: GET_ALL_MESSAGES,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ALL_MESSAGES,
      payload: [],
    });
  }
};

export const getStarredMessages = () => async(dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/list/starred/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from messages api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results?.length) {
      const starredmessages = response.data.results.map((ob) => ({
        id : ob?.id,
        archived: ob?.is_archived_by_recipient,
        username: ob.sender,
        image: ob.sender_avatar,
        subtitle: ob?.subtitle,
        timeSent: ob?.time_sent
      }));
      dispatch({
        type: GET_STARRED_MESSAGES,
        payload: starredmessages,
      });
   
    } else {
      dispatch({
        type: GET_STARRED_MESSAGES,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_STARRED_MESSAGES,
      payload: [],
    });
  }
};

export const getArchivedMessages = () => async (dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/list/archived/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response, "data from messages api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const archivedmessages = response.data.results.map((ob) => ({
        // name: ob.full_name,
        archived: ob?.is_archived_by_recipient,
        username: ob.sender,
        image: ob.sender_avatar,
        subtitle: ob?.subtitle,
        timeSent: ob?.time_sent
      }));
      dispatch({
        type: GET_ARCHIVED_MESSAGES,
        payload: archivedmessages,
      });
    } else {
      dispatch({
        type: GET_ARCHIVED_MESSAGES,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ALL_MESSAGES,
      payload: [],
    });
  }
};

export const getSentMessages = () => async (dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/list/sent/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from messages api >>>>>>");

    if(response.status === 401){    
      redirect("/");    
    }

    if (response.data?.results.length) {
      const sentmessages = response.data.results.map((ob) => ({
        // xname: ob.full_name,
        archived: ob?.is_archived_by_recipient,
        // recipient: ob?.recipient,
        username: ob.recipient,
        image: ob.recipient_avatar,
        subtitle: ob?.subtitle,
        timeSent: ob?.time_sent
      }));
      dispatch({
        type: GET_ALL_MESSAGES,
        payload: sentmessages,
      });
    
    } else {
      dispatch({
        type: GET_ALL_MESSAGES,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ALL_MESSAGES,
      payload: [],
    });
  }
};


export const archiveMessage = (id) => async (dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/update/${id}/archive/`, {}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    if (response.status === 200 ) {
      dispatch({
        type: UPDATE_ARCHIVE_MESSAGE,
        payload: id,
      });
    
    }else{
      dispatch({
        type: UPDATE_ARCHIVE_MESSAGE,
        payload: id,
      });

   
    }
  } catch (error) {
    dispatch({
      type: UPDATE_ARCHIVE_MESSAGE,
      payload: id,
    });
   
  }
} 

export const unArchiveMessage  = (id) => async (dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/update/${id}/unarchive/`, {}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    if (response.status === 200 ) {
      dispatch({
        type: UPDATE_ARCHIVE_MESSAGE,
        payload: id,
      });
      
    
    }else{
      dispatch({
        type: UPDATE_ARCHIVE_MESSAGE,
        payload: id,
      });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_ARCHIVE_MESSAGE,
      payload: id,
    });
  }
}

export const starMessage = (id) => async (dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/update/${id}/star/`, {}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });
    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from messages api >>>>>>");

    if (response.status === 200) {
      dispatch({
        type: UPDATE_STARRED_MESSAGE,
        payload: id,
      });
    
    } else {
      dispatch({
        type: UPDATE_STARRED_MESSAGE,
        payload: id,
      });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_STARRED_MESSAGE,
      payload: id,
    }
    )
}
}

export const unStarMessage = (id) => async (dispatch) => {
  dispatch({type: MESSAGE_LOADING})
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/messaging/update/${id}/unstar/`, {}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from messages api >>>>>>");

    if (response.status === 200) {
      dispatch({
        type:UPDATE_STARRED_MESSAGE,
        payload: id,
      });
    } else {
      dispatch({
        type:UPDATE_STARRED_MESSAGE,
        payload: id,
      });
    }
  } catch (error) {
    dispatch({
      type:UPDATE_STARRED_MESSAGE,
      payload: id,
    }
    )
}
}