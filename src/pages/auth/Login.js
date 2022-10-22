import React, { useState } from "react";
import axios from "axios";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {LOGIN} from "../../redux/constants";
import {useDispatch} from "react-redux";
import PhoneInput from 'react-phone-number-input';
import OtpInput from "react-otp-input";
import { h } from "preact";
// import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
// import ReactPhoneInput from "react-phone-input-2";

const Login = () => {
  const [value, setValue] = useState();
  console.log(value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passCodeValue, setPassCodeValue] = useState(
    {
      passCode: "",
    });

  // const setValue = (fieldName) => (evt) =>
  //   setState({ [fieldName]: evt.target.value });

  const handlePassCodeChange = (otp) => setPassCodeValue({ 
    passCode: otp,
   });
   console.log(passCodeValue.passCode)

  // when the user clicks the submit button this function will be called
  const onFormSubmit = async (formData) => {
    // this activates the spinning icon
    setLoading(true);
    // here we're sending request to the API
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/user/auth/get-token/`,
      // payload
      { 'phone_number': value, 'password': passCodeValue.passCode},
    ).then(response => {
      console.log(response); 
      if (response.status === 200) {
        setLoading(false);
        dispatch({type: LOGIN, payload: response?.data?.user});
        localStorage.setItem("accessToken", JSON.stringify(response?.data));
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/dashboard"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/dashboard"}`
        );
        window.location.reload();
      }
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoginError("Invalid phone number or password, please try again");
      setLoading(false);
    })

    console.log("LOGIN")   
    // we are trying to confirm if the logged in users credentials are correct, if not it should throw us an error
    if (data.access) {
      dispatch({
        type: LOGIN,
        payload: data?.user
      })
      // store the user in localStorage
     
      localStorage.setItem("accessToken", JSON.stringify(data));
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/dashboard"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/dashboard"}`
        );
        window.location.reload();
      }else{
          setError("Cannot login with credentials");
          setLoading(false); 
          console.log(errorVal)
          }
  };

  const { errors, register, handleSubmit } = useForm();
  
  return (
    <React.Fragment>
      <Head title="Login" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>

          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Sign-In</BlockTitle>
                <BlockDes>
                  <p>Access Slydo using your phone number and password.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {/* {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {" "}
                  <Icon name="alert-circle" /> Unable to login with credentials{" "}
                </Alert>
              </div>
            )} */}
            {/* {errors.passcode && 
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {" "}
                  <Icon name="alert-circle" /> Unable to login with credentials{" "}
                </Alert>
              </div>
            } */}
            {loginError && 
              <div className="text-center mb-3" style={{backgroundColor: '#F2B2A1', border: '1px solid red', borderRadius: '5px', padding: '5px'}}>
                {loginError}
              </div>
            }
            
            <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Phone number
                  </label>
                </div>

                <PhoneInput
                    style={{display: 'flex', border: 'inline' }}
                    className="form-control form-control-lg"
                    international
                    defaultCountry="NG"
                    type="tel"
                    name="name"
                    ref={register({ required: "This field is required" })}
                    value={value}
                    placeholder="Enter your phone number"
                    onChange={setValue}
                    inputStyle={{backgroundColor: 'red'}}
                />
                {/* {errors.name && <span className="invalid">{errors.name.message}</span>} */}
                  
             
              </FormGroup>
              <FormGroup>
                <div className="form-control-wrap form-label-group" stylex={{display: 'inline'}}>
                  <OtpInput
                    value={passCodeValue.passCode}
                    className="form-control form-control-lg"
                    onChange={handlePassCodeChange}
                    numInputs={6}
                    type="password"
                    inputStyle={{border: 'none', width: '100%'}}
                    isInputSecure={true}
                    // name="passCode"
                    // separator={<span>-</span>}
                  />
                  {/* {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                  {loginError && <span className="invalid">{loginError}</span>} */}
                </div>
              </FormGroup>
              {/* <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Phone number
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    country="US"
                    type="tel"
                    id="default-01"
                    name="name"
                    numInputs={6}
                    ref={register({ required: "This field is required" })}
                    placeholder="Enter your phone number"
                    className="form-control-lg form-control"
                  />
                  {errors.name && <span className="invalid">{errors.name.message}</span>}
                </div>
              </FormGroup> */}
              {/* <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/auth-reset`}>
                    Forgot Password?
                  </Link>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPassState(!passState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input
                    type={passState ? "text" : "password"}
                    id="password"
                    name="passcode"
                    ref={register({ required: "This field is required" })}
                    placeholder="Enter your passcode"
                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                </div>
              </FormGroup> */}
                {/* <FormGroup>
                  <div className="form-control-wrap form-label-group">
                    <input
                      type={passState ? "text" : "password"}
                      id="password"
                      name="passcode"
                      ref={register({ required: "This field is required" })}
                      className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                    />
                    <input
                      type={passState ? "text" : "password"}
                      id="password"
                      name="passcode"
                      ref={register({ required: "This field is required" })}
                      className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                    />
                    <input
                      type={passState ? "text" : "password"}
                      id="password"
                      name="passcode"
                      ref={register({ required: "This field is required" })}
                      className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                    />
                    <input
                      type={passState ? "text" : "password"}
                      id="password"
                      name="passcode"
                      ref={register({ required: "This field is required" })}
                      className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                    />
                    <input
                      type={passState ? "text" : "password"}
                      id="password"
                      name="passcode"
                      ref={register({ required: "This field is required" })}
                      className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                    />
                    
                    {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                  </div>
                </FormGroup> */}
              
              <FormGroup>
                <Button size="lg" className="btn-block" type="submit" color="primary">
                  {loading ? <Spinner size="sm" color="light" /> : "Sign in"}
                </Button>
              </FormGroup>
            </Form>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Login;
