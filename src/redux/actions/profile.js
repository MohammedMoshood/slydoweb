import axios from 'axios';
import{UPDATE_PROFILE, UPDATE_ADRESS, UPDATE_BIO, PROFILE_LOADING, GET_PROFILE, UPDATE_OPENING_HOURS, GET_OPENING_HOURS, UPDATE_WALLPAPER} from '../constants/index';
import { redirect} from '../../utils/Utils'
import {toast} from 'react-toastify';

export const updateProfile = (profile) => async (dispatch) => {
    dispatch({type: PROFILE_LOADING});
    try {
        const response = axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/customer/profile/:userId`, profile, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
            }
        });
        if(response.status === 200){
            dispatch({type: UPDATE_PROFILE, payload: response.data});
            toast.success("Profile updated successfully");
            redirect('/profile');
        }else{
            toast.error("Error updating profile");
        }
    }catch(error){
        dispatch({
            type: UPDATE_PROFILE,
            payload: []
        })
        console.log(error);
    }
}

export const updateAddress = (address) => async (dispatch) => {
    dispatch({type: PROFILE_LOADING});
    try {
        const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/about/`, {
            address: address
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
            }
        });
        console.log(response)
        if(response.status === 200){
            console.log(response.data);
            dispatch({type: UPDATE_ADRESS, payload: response.data});
            toast.success("Address updated successfully");
            redirect('/profile');
        }else{
            console.log(response.data)
            toast.error("Error updating address");
        }
    }catch(error){
        dispatch({
            type: UPDATE_ADRESS,
            payload: []
        })
        console.log(error);
    }
}

export const updateBio = (bio) => async (dispatch) => {
    dispatch({type: PROFILE_LOADING});
    try {
        const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/about/`, {
            bio: bio
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
            }
        });
        if(response.status === 200){
            dispatch({type: UPDATE_BIO, payload: response.data});
            toast.success("Bio updated successfully");
            redirect('/profile');
        }else{
            toast.error("Error updating bio");
        }
    }catch(error){
        dispatch({
            type: UPDATE_BIO,
            payload: []
        })
        console.log(error);
    }
}


export const updateOpeningHours = (opening_hours) => async (dispatch) => {
    dispatch({type: PROFILE_LOADING});
    try {
        const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/about/`, {
            opening_hours: opening_hours
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
            }
        });
        if(response.status === 200){
            dispatch({type: UPDATE_OPENING_HOURS, payload: response.data});
            toast.success("Opening hours updated successfully");
            redirect('/profile');
        }else{
            toast.error("Error updating opening hours");
        }
    }catch(error){
        dispatch({
            type: UPDATE_OPENING_HOURS,
            payload: []
        })
        console.log(error);
    }
}

export const getProfile = () => async (dispatch) => {
    dispatch({type: PROFILE_LOADING});
    const getUserName = JSON.parse(localStorage.getItem("accessToken")).user.username;
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/customer/${getUserName}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
            }
        });
        console.log(response.data, "response from api>>>>");
        const profileData = response.data;
        if(response.status === 200){
            dispatch({type: GET_PROFILE, payload: profileData});
        }else{
            toast.error("Error getting profile");
        }
    }catch(error){
        dispatch({
            type: GET_PROFILE,
            payload: []
        })
        console.log(error);
    }
}

export const getOpeningHours = () => async (dispatch) => {
    dispatch({type: PROFILE_LOADING});
    const getUserName = JSON.parse(localStorage.getItem("accessToken")).user.username;
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/customer/${getUserName}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
            }
        });
        console.log(response.data, "response from api>>>>");
        if(response.status){
            const opening_hours = response.data.profile.opening_hours.map((opening_hour, index) => {
                return {
                    ...opening_hour,
                    id: index
                }
            })
            console.log(opening_hours, "opening_hours");
            dispatch({type: GET_OPENING_HOURS, payload: opening_hours});
        }else{
            toast.error("Error getting profile");
        }
    }catch(error){
        dispatch({
            type: GET_OPENING_HOURS,
            payload: []
        })
        console.log(error);
    }
}

 export  const updateWallpaper = (wallpaper) => async (dispatch) => {
    dispatch({type: PROFILE_LOADING});
    try {
        const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/about/`, wallpaper,{
        headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
        }})
        if(response.status === 200){
            dispatch({type: UPDATE_WALLPAPER, payload: response.data});
            toast.success("Wallpaper updated successfully");
            redirect('/profile');
        }
        else{
            toast.error("Error updating wallpaper");
        }
    }catch(error){
        dispatch({
            type: UPDATE_WALLPAPER,
            payload: []
        })
        console.log(error);
    }
 }