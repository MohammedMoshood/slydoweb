import axios from "axios";
import { GET_TEAM_MEMBERS, GET_SHIPPING_OPTIONS, GET_TERMS_AND_CONDITIONS, GET_BANK_ACCOUNTS, DELETE_CONTACT, BLOCK_CONTACT, DELETE_CONTACT_REQUEST, BLOCK_CONTACT_REQUEST, TRANSACTION_LOADING, TEAM_MEMBERS_LOADING, CONTACT_LOADING, PAYOUTS_LOADING, ACCEPT_CONTACT_REQUEST, SETTINGS_LOADING, CREATE_SHIPPING_OPTION, CREATE_TEAM_MEMBER, EDIT_TEAM_MEMBER, DELETE_TEAM_MEMBER, EDIT_SHIPPING_OPTION, DELETE_SHIPPING_OPTION, CREATE_TERMS_AND_CONDITIONS} from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';

export const getTeamMembers = (page) => async (dispatch) => {
  dispatch({type: TEAM_MEMBERS_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/?page=${page}&page_size=10`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from staff api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const teammembers = response.data.results.map((ob) => ({
        // employer_name: ob?.employer_username,
        id: ob?.id,
        name: ob?.user_username,
        status: ob?.status,
        image: ob?.user_avatar,
        // employer_image: ob?.to_employer_avatar,
        role: ob?.role,
      }));
      const teammembersData = {
        teammembers: teammembers,
        count: response.data.count,
      }
      dispatch({
        type: GET_TEAM_MEMBERS,
        payload: teammembersData,
      });
      
      // toast.success("Team members retrieved successfully", {
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
        type: GET_TEAM_MEMBERS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_TEAM_MEMBERS,
      payload: [],
    });
  }
};

export const getShippingOptions = (page) => async (dispatch) => {
  dispatch({type: SETTINGS_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/shipping-options/?page=${page}&page_size=10`, {  
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
      const shippingoptions = response.data.results.map((ob) => ({
        name: ob?.name,
        amount: ob?.price,
        id: ob?.id,
      }));
      const shippingoptionsData = {
        shippingoptions: shippingoptions,
        count: response.data.count,
      }
      dispatch({
        type: GET_SHIPPING_OPTIONS,
        payload: shippingoptionsData,
      });
      
   
    } else {
      dispatch({
        type: GET_SHIPPING_OPTIONS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SHIPPING_OPTIONS,
      payload: [],
    });
  }
};

export const editShippingOption = (data) => async (dispatch) => {
  dispatch({type: SETTINGS_LOADING})
  console.log(data, "data from api >>>>>>");
  try {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/shipping-options/${data.id}/`, {
      name: data.name,
      price: data.price,
      currency: data.currency,
    }, {
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
      const shippingoptions = response.data.results.map((ob) => ({
        name: ob?.name,
        price: ob?.price,
        currency: ob?.currency,
        id: ob?.id,
      }));
      dispatch({
        type: EDIT_SHIPPING_OPTION,
        payload: shippingoptions,
      });
      
      toast.success("Shipping option updated successfully", {
        type: toast.TYPE.PRIMARY,
        style: {
          backgroundColor: "#e4fbf5",
          borderColor: "#aef4e1",
          border: "1px solid #aef4e1",
          borderRadius: "4px",
          fontColor: '#19bc90',
          marginLeft: "-130px"
        },
        bodyClassName: "text-sm text-success",
      })
    } else {
      dispatch({
        type: EDIT_SHIPPING_OPTION,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SHIPPING_OPTIONS,
      payload: [],
    });
  }

};

export const deleteShippingOption = (data) => async (dispatch) => {
  dispatch({type: SETTINGS_LOADING})
  console.log(data, "data from api >>>>>>");
  try{
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/shipping-options/${data.id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    })

    console.log( response.data.results, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if( response.data ){
      const shippingoptions ={
        id: response.data.id
      }
      dispatch({
        type: DELETE_SHIPPING_OPTION,
        payload: shippingoptions,
      })
    } else {
      dispatch({
        type: DELETE_SHIPPING_OPTION,
        payload: [],
        loading: false,
      })
    }
  } catch(error){
    dispatch({
      type: DELETE_SHIPPING_OPTION
    })  
  }
}

export const getTermsAndConditions = () => async (dispatch) => {
  const getUserName = JSON.parse(localStorage.getItem("accessToken")).user.username;
  console.log(getUserName, "getUserName");
  dispatch({type: SETTINGS_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/customer/terms-and-conditions/${getUserName}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "get data from termsandconditions api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.status===200) {
      const termsResult = response?.data?.content; 
      console.log(termsResult, "termsResult")
      dispatch({
        type: GET_TERMS_AND_CONDITIONS,
        payload: termsResult,
      });
    } else {
      dispatch({
        type: GET_TERMS_AND_CONDITIONS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_TERMS_AND_CONDITIONS,
      payload: [],
    });
  }
};

//create shipping option
export const createShippingOption = (data) => async (dispatch) => {
    dispatch({type: SETTINGS_LOADING})
    try{
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/shipping-options/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        },
      });

      // dispatch({type: CONTACT_LOADING})
      console.log(response.data, "data from api >>>>>>");

      if(response.status === 401){
        redirect("/");    
      }

      if (response.data?.results.length) {
        const createshippingoptions = response.data.results.map((ob) => ({
          name: ob?.name,
          amount: ob?.price,
          currency: ob?.currency,
          id: ob?.id,   
        }));
        dispatch({
          type: CREATE_SHIPPING_OPTION,
          payload: createshippingoptions,
        });
      } else {
        dispatch({
          type: CREATE_SHIPPING_OPTION,
          payload: [],
        });
      }
    }catch(error){
      dispatch({type: CREATE_SHIPPING_OPTION})
    }
}

//create team member
export const createTeamMember = (data) => async (dispatch) => {
  dispatch({type: SETTINGS_LOADING})
  try{
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/`, data, {
    // const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/search/users/?search="+searchedText`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const teammembers = response.data.results.map((ob) => ({
        // employer_name: ob?.employer_username,
        name: ob?.user_username,
        status: ob?.status,
        image: ob?.user_avatar,
        // employer_image: ob?.to_employer_avatar,
        role: ob?.role,
        id: ob?.id,
      }));
      dispatch({
        type: CREATE_TEAM_MEMBER,
        payload: teammembers,
      });
    } else {
      dispatch({
        type: CREATE_TEAM_MEMBER,
        payload: [],
      });
    }
  }catch(error){
    dispatch({type: CREATE_TEAM_MEMBER})
    

  }

}

//edit team member
export const editTeamMember = (data) => async (dispatch) => {
  dispatch({type: SETTINGS_LOADING})
  console.log(data, "calling api")
  try{
    // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/`, {
    // const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/`, {
    // const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/${data.id}`, {
    // const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/${data.id}`, {
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/${data.id}/` , {
      status: data.status,
      role: data.role 
    },{
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from api >>>>>>");

    if(response.status === 401){
    
    }

    if(response.data?.results.length) {
      const teammembers = response.data.results.map((ob) => ({
        // employer_name: ob?.employer_username,
        name: ob?.user_username,
        status: ob?.status,
        image: ob?.user_avatar,
        // employer_image: ob?.to_employer_avatar,
        role: ob?.role,
      }));
      dispatch({
        type: EDIT_TEAM_MEMBER,
        payload: teammembers,
      });
    } else {
      dispatch({
        type: EDIT_TEAM_MEMBER,
        payload: [],
      });
    }
  }catch(error){
    dispatch({type: EDIT_TEAM_MEMBER})
  }
}


export const deleteTeamMembers = (data) => async (dispatch) => {
  // dispatch({type: SETTINGS_LOADING})
  dispatch({type: TEAM_MEMBERS_LOADING})
  console.log(data, "data content")
  try{
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/user/staff/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    console.log(response.data, "data from delete api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if(response.data?.results.length) {
      const teammembers = {
        id: response.data.id
      }
      dispatch({
        type: DELETE_TEAM_MEMBER,
        payload: teammembers,
      });
      toast.success("Team member deleted successfully", {
        type: toast.TYPE.DANGER,
        style: {
          backgroundColor: "#fbecea",
          borderColor: "#e95b50",
          border: "1px solid #e95b50",
          borderRadius: "4px",
          fontColor: '#e95b50',
          marginLeft: "-130px"
        },
        bodyClassName: "text-sm text-danger"
      })
    } else {
      dispatch({
        type: DELETE_TEAM_MEMBER,
        payload: [],
      });
    }
  }catch(error){
    dispatch({type: DELETE_TEAM_MEMBER})
  }
};

export const createTermsAndConditions = (data) => async (dispatch) => {
  dispatch({type: SETTINGS_LOADING})
  
  const getUserName = JSON.parse(localStorage.getItem("accessToken")).user.username;
  try{
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/customer/terms-and-conditions/${getUserName}`, {content: data.content}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const terms = response.data.results.map((ob) => ({
       content : ob?.content 
      }));
      dispatch({
        type: CREATE_TERMS_AND_CONDITIONS,
        payload: terms,
      });
    } else {
      dispatch({
        type: CREATE_TERMS_AND_CONDITIONS,
        payload: [],
      });
    }
  }catch(error){
    dispatch({type: CREATE_TERMS_AND_CONDITIONS})
  }
}