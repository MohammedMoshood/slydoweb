import axios from "axios";
import {USER_LOADING, LOGIN, USER_ERROR} from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';

export const login = (dataToSubmit) => async  (dispatch) => {
      
   dispatch({
      type: USER_LOADING
   })
    // here we're sending request to the API
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/user/auth/get-token/`,
      // payload
      { 'phone_number': dataToSubmit?.name, 'password': dataToSubmit?.passcode },
    );
//     console.log(data);
    
    // we are trying to confirm if the logged in users credentials are correct, if not it should throw us an error
    if (data) {
      dispatch({
            type: LOGIN,
            payload: data?.user
      })

      return data
   
      // store the user in localStorage
      } else {
          
          dispatch({
            type: USER_ERROR,
            payload: "Cannot login with credentilas"
          })
        
    }
}