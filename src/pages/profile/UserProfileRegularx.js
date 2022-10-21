import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import DatePicker from "react-datepicker";
import { Modal, ModalBody, FormGroup, Label } from "reactstrap";
import axios from "axios"
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
  Button,
  RSelect, UserAvatar
} from "../../slydo-components/Component";
import { countryOptions, profileData } from "./ProfileData";
import Dropzone from "react-dropzone";
import { getDateStructured } from "../../utils/Utils";
import slab from '../../images/slab.png';
import { DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { updateAddress, updateBio, updateOpeningHours, getProfile, getOpeningHours } from "../../redux/actions/profile";
import { useDispatch, useSelector } from "react-redux";

const UserProfileRegularPage = ({ sm, updateSm, setProfileName }) => {
  const { profile, openingHours } = useSelector(state => state.profile);
  
  const dispatch = useDispatch();
  const user = localStorage.getItem('accessToken');
  const slydouser = JSON.parse(user);
  const [address, setAddress] = useState(profile.profile.address);
  const [bio, setBio] = useState(profile.profile.bio);
  const [modalTab, setModalTab] = useState("1");
  const [profileInfo, setProfileInfo] = useState(profileData[0]);

  console.log(profile, "profile", openingHours, "openingHours")

  const [files2, setFiles2] = useState([]);
 

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles, set) => {
    set(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  // end upload wallpaper function

  const handleTimeSplit = () => {
    const time = openingHours.map(item => {
      let duration =  item.time.split("-");
      return{
         start: duration[0],
        end: duration[1] 
      }
    })
    console.log(time, "time")
  }


  const [formData, setFormData] = useState({
    name: "Ayodeji Moshood",
    displayName: "amoshood",
    phone: "818474958",
    dob: "1980-08-10",
    address: "Magodo Trenches",
    address2: "",
    state: "Lagos",
    country: "Nigeria",
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setProfileName(formData.name);
    dispatch(getProfile());
    dispatch(getOpeningHours())
    handleTimeSplit();
  }, [formData, setProfileName]);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    let submitData = {
      ...formData,
    };
    setProfileInfo(submitData);
    setModal(false);
  };

  const handleAddressUpdate = (e) => {
      e.preventDefault()
      dispatch(updateAddress(address));
  }

  const handleBioUpdate = (e) => {
      e.preventDefault()
      dispatch(updateBio(bio));
  }

  // const UpdateAvatar = async () => {
  //     try {
  //       const {data} = await axios.patch("https://api.slydo.co/api/v1/user/update-avatar/:username/", {
  //         avatar: ""
  //       })
  //     } catch (error) {        
  //     }
  // }
  // datetime picker
  const [startTime, setStartTime] = useState(new Date());
  const [endTimeMonday, setEndTimeMonday] = useState();
  const [startTimeMonday, setStartTimeMonday] = useState();
  const [endTimeTuesday, setEndTimeTuesday] = useState();
  const [startTimeTuesday, setStartTimeTuesday] = useState();
  const [endTimeWednesday, setEndTimeWednesday] = useState();
  const [startTimeWednesday, setStartTimeWednesday] = useState();
  const [endTimeThursday, setEndTimeThursday] = useState(new Date());
  const [startTimeThursday, setStartTimeThursday] = useState(new Date());
  const [endTimeFriday, setEndTimeFriday] = useState(new Date());
  const [startTimeFriday, setStartTimeFriday] = useState(new Date());
  // const handleOpeningHoursUpdate = (e) => { 
  //   let mondayOpen = `${startTimeMonday.getHours()}` + ":" +  `${ startTimeMonday.getMinutes()}`+ `${startTimeMonday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let mondayEnd =`${endTimeMonday.getHours()}` + ":" +  `${ endTimeMonday.getMinutes()}`+ `${endTimeMonday.getHours() >= 12 ? "PM" : "AM"}`

  //   let tuesdayStart =`${startTimeTuesday.getHours()}` + ":" +  `${ startTimeTuesday.getMinutes()}`+ `${startTimeTuesday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let tuesdayEnd =`${endTimeTuesday.getHours()}` + ":" +  `${ endTimeTuesday.getMinutes()}`+ `${endTimeTuesday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let wednesdayStart =`${startTimeWednesday.getHours()}` + ":" +  `${ startTimeWednesday.getMinutes()}`+ `${startTimeWednesday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let wednesdayEnd =`${endTimeWednesday.getHours()}` + ":" +  `${ endTimeWednesday.getMinutes()}`+ `${endTimeWednesday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let thursdayStart =`${startTimeThursday.getHours()}` + ":" +  `${ startTimeThursday.getMinutes()}`+ `${startTimeThursday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let thursdayEnd =`${endTimeThursday.getHours()}` + ":" +  `${ endTimeThursday.getMinutes()}`+ `${endTimeThursday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let fridayStart =`${startTimeFriday.getHours()}` + ":" +  `${ startTimeFriday.getMinutes()}`+ `${startTimeFriday.getHours() >= 12 ? "PM" : "AM"}`;

  //   let fridayEnd =`${endTimeFriday.getHours()}` + ":" +  `${ endTimeFriday.getMinutes()}`+ `${endTimeFriday.getHours() >= 12 ? "PM" : "AM"}`;

  //   const mondayOpenHours = `${mondayOpen} - ${mondayEnd}`;
  //   const tuesdayOpenHours = `${tuesdayStart} - ${tuesdayEnd}`;
  //   const wednesdayOpenHours = `${wednesdayStart} - ${wednesdayEnd}`;
  //   const thursdayOpenHours = `${thursdayStart} - ${thursdayEnd}`;
  //   const fridayOpenHours = `${fridayStart} - ${fridayEnd}`;
    
  //   dispatch(updateOpeningHours([{day: "Monday", time: mondayOpenHours}, {day: "Tuesday", time: tuesdayOpenHours}, {day:"Wednesday", time: wednesdayOpenHours}, {day: "Thursday",time: thursdayOpenHours}, {day:"Friday", time:fridayOpenHours}]));

  // }

  return (
    <React.Fragment>
      <Head title="Profile"></Head>
      {/* <img style={{height: '150px', width: '100%'}} src={slab}  alt="" /> */}
      <BlockHead size="lg">
        {/* <UserAvatar theme="primary"  > */}
          <img style={{height: '150px', width: '100%', borderRadius: '5px',}} className="mb-3" src={slydouser.user.profile.wallpaper}  alt="" />
          {/* <br/> */}
        {/* </UserAvatar> */}
        <BlockBetween>
          
          <BlockHeadContent>
            <BlockTitle tag="h4">Personal Information</BlockTitle>
            <BlockDes>
              <p>Basic info, like your name and address, that you use on Slydo Platform.</p>
            </BlockDes>
          </BlockHeadContent>
          <BlockHeadContent className="align-self-start d-lg-none">
            <Button
              className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`}
              onClick={() => updateSm(!sm)}
            >
              <Icon name="menu-alt-r"></Icon>
            </Button>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <Block>
        <div className="nk-data data-list">
          <div className="data-head">
            <h6 className="overline-title">Basics</h6>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Full Name</span>
              <span className="data-value">{slydouser.user.full_name}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" 
            // onClick={() => setModal(true)}
          >
            <div className="data-col">
              <span className="data-label">Nick Name</span>
              <span className="data-value">{slydouser.user.nickname}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="lock-alt"></Icon>
              </span>
            </div>
          </div>
          {/* <div className="data-item">
            <div className="data-col">
              <span className="data-label">Email</span>
              <span className="data-value">{slydouser.user.email}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more disable">
                <Icon name="lock-alt"></Icon>
              </span>
            </div>
          </div> */}
          <div className="data-item" 
            // onClick={() => setModal(true)}
          >
            <div className="data-col">
              <span className="data-label">Phone Number</span>
              <span className="data-value text-softxx">{slydouser.user.phone_number}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="lock-alt"></Icon>
              </span>
            </div>
          </div>
          {/* <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Date of Birth</span>
              <span className="data-value">{profileInfo.dob}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div> */}
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Address</span>
              <span className="data-value">
                {slydouser.user.profile.address}
                {/* {profileInfo.address}, */}
                {/* <br />
                {profileInfo.state}, {profileInfo.country} */}
              </span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Bio</span>
              <span className="data-value">
                {slydouser.user.profile.bio}
                {/* {profileInfo.address}, */}
                {/* <br />
                {profileInfo.state}, {profileInfo.country} */}
              </span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Hours</span>
              <span className="data-value">
              <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      <Label>Days</Label>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label>Start Time</Label>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm a"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label>Close Time</Label>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Days</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Start Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Close Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Days</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Wednesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Start Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Close Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Days</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Thursday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Start Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Close Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Days</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Friday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Start Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      {/* <Label>Close Time</Label> */}
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTime}
                          onChange={(date) => setStartTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                {/* {slydouser.user.profile.opening_hours.day} • {slydouser.user.profile.opening_hours.time} */}
                {/* {profileInfo.address}, */}
                {/* <br />
                {profileInfo.state}, {profileInfo.country} */}
              </span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
        </div>
      </Block>

      <Modal isOpen={modal} className="modal-dialog-centered" size="lg" toggle={() => setModal(false)}>
        <ModalBody>
          <a
            href="#dropdownitem"
            onClick={(ev) => {
              ev.preventDefault();
              setModal(false);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">Update Profile</h5>
            <ul className="nk-nav nav nav-tabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${modalTab === "1" && "active"}`}
                  onClick={(ev) => {
                    ev.preventDefault();
                    setModalTab("1");
                  }}
                  href="#personal"
                >
                  Personal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${modalTab === "2" && "active"}`}
                  onClick={(ev) => {
                    ev.preventDefault();
                    setModalTab("2");
                  }}
                  href="#address"
                >
                  Address
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${modalTab === "3" && "active"}`}
                  onClick={(ev) => {
                    ev.preventDefault();
                    setModalTab("3");
                  }}
                  href="#bio"
                >
                  Bio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${modalTab === "4" && "active"}`}
                  onClick={(ev) => {
                    ev.preventDefault();
                    setModalTab("4");
                  }}
                  href="#openinghours"
                >
                  Opening Hours
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${modalTab === "5" && "active"}`}
                  onClick={(ev) => {
                    ev.preventDefault();
                    setModalTab("5");
                  }}
                  href="#wallpaper"
                >
                  Wallpaper
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className={`tab-pane ${modalTab === "1" ? "active" : ""}`} id="personal">
                <Row className="gy-4">
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label" htmlFor="full-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        className="form-control"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                        // defaultValue={formData.name}
                        defaultValue={slydouser.user.full_name}
                        placeholder="Enter Full name"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label" htmlFor="display-name">
                        Nick Name
                      </label>
                      <input
                        type="text"
                        id="display-name"
                        className="form-control"
                        name="displayName"
                        onChange={(e) => onInputChange(e)}
                        defaultValue={slydouser.user.nickname}
                        placeholder="Enter display name"
                        disable
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label" htmlFor="phone-no">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone-no"
                        className="form-control"
                        name="phone"
                        onChange={(e) => onInputChange(e)}
                        defaultValue={slydouser.user.phone_number}
                        placeholder="Phone Number"
                        disable
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col md="6">
                    <FormGroup>
                      <label className="form-label" htmlFor="birth-day">
                        Date of Birth
                      </label>
                      <DatePicker
                        selected={new Date(formData.dob)}
                        className="form-control"
                        onChange={(date) => setFormData({ ...formData, dob: getDateStructured(date) })}
                        maxDate={new Date()}
                      />
                    </FormGroup>
                  </Col> */}
                  {/* <Col size="12">
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input form-control" id="latest-sale" />
                      <label className="custom-control-label" htmlFor="latest-sale">
                        Use full name to display{" "}
                      </label>
                    </div>
                  </Col> */}
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button
                          color="primary"
                          size="lg"
                          onClick={(ev) => {
                            ev.preventDefault();
                            submitForm();
                          }}
                        >
                          Update Profile
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setModal(false);
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className={`tab-pane ${modalTab === "2" ? "active" : ""}`} id="address">
                <Row className="gy-4">
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label" htmlFor="address-l1">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        id="address-l1"
                        name="address"
                        value= {address}
                        onChange={(e) => setAddress(e.target.value)}
                        // defaultValue={formData.address}
                        defaultValue={slydouser.user.profile.address}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>         
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="lg" onClick={handleAddressUpdate}>
                          Update Address
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setModal(false);
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className={`tab-pane ${modalTab === "3" ? "active" : ""}`} id="bio">
                <Row className="gy-4">
                  <Col md="12">
                    <FormGroup>
                      <label className="form-label" htmlFor="address-l1">
                        Bio
                      </label>
                      <textarea
                        className="no-resize form-control"
                        type="text"
                        value={bio}
                        id="bio"
                        onChange={(e)=> setBio(e.target.value)}
                      />
                      
                    </FormGroup>
                  </Col>
                  
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="lg" onClick={handleBioUpdate}>
                          Update Bio
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setModal(false);
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className={`tab-pane ${modalTab === "4" ? "active" : ""}`} id="openinghours">
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      <Label>Days</Label>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label>Start Time</Label>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTimeMonday}
                          onChange={(date) => setStartTimeMonday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                          
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label>Close Time</Label>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={endTimeMonday}
                          onChange={(date) => setEndTimeMonday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTimeTuesday}
                          onChange={(date) => setStartTimeTuesday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={endTimeTuesday}
                          onChange={(date) => setStartTime(setEndTimeTuesday(date))}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Wednesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTimeWednesday}
                          onChange={(date) => setStartTimeWednesday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={endTimeWednesday}
                          onChange={(date) => setStartTime(setEndTimeWednesday(date))}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Thursday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTimeThursday}
                          onChange={(date) => setStartTimeThursday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={endTimeThursday}
                          onChange={(date) => setEndTimeThursday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          defaultValue="Friday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={startTimeFriday}
                          onChange={(date) => setStartTimeFriday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <DatePicker
                          selected={endTimeFriday}
                          onChange={(date) => setEndTimeFriday(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="lg" 
                          // onClick={handleOpeningHoursUpdate}
                        >
                          Update Opening Hours
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setModal(false);
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className={`tab-pane ${modalTab === "5" ? "active" : ""}`} id="wallpaper">
                {/* <Row className="gy-4">
                  <Col sm="12">
                  <img style={{height: '150px', width: '100%', borderRadius: '5px',}} className="mb-3" src={slydouser.user.profile.wallpaper}  alt="" />
                  </Col>
                </Row> */}
                <Row className="mb-5">
                  <div class="card product-card">
                    <div className="product-thumb">
                      {/* <Link to={`${process.env.PUBLIC_URL}/product-details/1`}> */}
                        <img className="card-img-top" src={slydouser.user.profile.wallpaper} alt="" />
                      <ul className="product-actions" style={{marginBottom: 170}}>
                        <li>
                          <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-light" size="md" onClick={() => submitForm()}>
                            <em class="icon ni ni-camera"></em>
                          </Button>
                          {/* <a href="#cart" onClick={(ev) => ev.preventDefault()}>
                            <Icon name="cart"></Icon>
                          </a> */}

                        <Col sm="12">
                          <Dropzone style={{backgroundOpacity: 0.5}} onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles2)} maxFiles={1}>
                            {({ getRootProps, getInputProps }) => (
                              <section>
                                <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                                  <input {...getInputProps()} />
                                  {files2.length === 0 && (
                                    <div className="dz-message">
                                      {/* <span className="dz-message-text">Drag and drop file</span>
                                      <span className="dz-message-or">or</span> */}
                                      {/* <ul classNamexx="product-actions">
                                        <li> */}
                                        <Row className="mb-5">
                                          <Col sm="12">
                                            <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                              <li>
                                              <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-light"><em class="icon ni ni-camera"></em></Button>
                                              </li>
                                              <li>
                                                <span> orr </span>
                                              </li>
                                              <li>
                                                <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-danger" color="danger"><em class="icon ni ni-trash"></em></Button>
                                              </li>
                                            </ul>
                                          </Col>
                                        </Row>
                                    </div>
                                  )}
                                  {files2.map((file) => (
                                    <div
                                      key={file.name}
                                      className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                                    >
                                      <div className="dz-image">
                                        
                                        <img src={file.preview} alt="preview" />
                                        <Col sm="12">
                                          <Row className="mb-5 mr-3">
                                            <Col sm="12">
                                              <ul className="align-center flex-wrap flex-sm-nowrap gx-4x gy-2x">
                                                <li>
                                                  <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-light"><em class="icon ni ni-camera"></em></Button>
                                                </li>
                                                {/* <li>
                                                  <span> or </span>
                                                </li> */}
                                                <li>
                                                  <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-danger" color="danger"><em class="icon ni ni-trash"></em></Button>
                                                </li>
                                              </ul>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </div>
                                      
                                    </div>
                                  ))}
                                </div>
                              </section>
                            )}
                          </Dropzone>
                        </Col>

                        </li>
                        <li>
                          <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-danger" size="md" onClick={() => submitForm()}>
                            <em class="icon ni ni-trash"></em>
                          </Button>
                          {/* <Button color="secondary" size="md" onClick={() => submitForm()}>
                            Remove wallpaper
                          </Button> */}
                          {/* <a href="#like" onClick={(ev) => ev.preventDefault()}>
                            <Icon name="heart"></Icon>
                          </a> */}
                        </li>
                      </ul>
                    </div>
                    
                    {/* <div class="card-inner text-center">
                      <ul class="product-tags">
                        <li><a href="#">Smart Watch</a></li>
                      </ul>
                      <h5 class="product-title"><a href="/demo2/product-details.html">Classy Modern Smart watch</a></h5>
                      <div class="product-price text-primary h5">
                        <small class="text-muted del fs-13px">$350</small> $324
                      </div>
                    </div> */}
                  </div>
                </Row>
                <Row className="gy-4">
                    <Col size="12">
                      <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                        <li>
                          <Button color="primary" size="lg" onClick={() => submitForm()}>
                            Update Wallpaper
                          </Button>
                        </li>
                        <li>
                          <a
                            href="#dropdownitem"
                            onClick={(ev) => {
                              ev.preventDefault();
                              setModal(false);
                            }}
                            className="link link-light"
                          >
                            Cancel
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                
                
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default UserProfileRegularPage;
