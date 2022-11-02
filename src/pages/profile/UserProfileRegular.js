import React, { useEffect, useState } from "react";
import Head from "../../layout/head/Head";
import DatePicker from "react-datepicker";
import { Modal, ModalBody, FormGroup, Label, Input } from "reactstrap";
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
  RSelect, UserAvatar, PreviewCard
} from "../../slydo-components/Component";
import { countryOptions, profileData } from "./ProfileData";
import Dropzone from "react-dropzone";
import { getDateStructured } from "../../utils/Utils";
import slab from '../../images/slab.png';
import { DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { updateAddress, updateBio, updateOpeningHours, getProfile, getOpeningHours, updateWallpaper } from "../../redux/actions/profile";
import { useDispatch, useSelector } from "react-redux";
import {TimeValues} from './TimeValues';
import AspectRatio from 'react-aspect-ratio';

const UserProfileRegularPage = ({ sm, updateSm, setProfileName }) => {
  const {profile, openingHours } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const user = localStorage.getItem('accessToken');
  const slydouser = JSON.parse(user);
  
  const [address, setAddress] = useState(profile?.profile?.address.address_line_1);
  const [addressLine2, setAddressLine2] = useState(profile?.profile?.address.address_line_2);
  const [bio, setBio] = useState(profile?.profile?.bio);
  const [modalTab, setModalTab] = useState("1");
  const [profileInfo, setProfileInfo] = useState(profileData[0]);
  const [duration, setDuration] = useState([])
  const [wallpaperFile, setWallpaperFile] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(profile, "profile", openingHours, "openingHours")

  const [files2, setFiles2] = useState([]);

  const refreshPage = () => {
    setTimeout(() => {
    window.location.reload();
    }, 2000);
}
  
  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles, set) => {
    set(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
     );

    const setPreview =  acceptedFiles.map((file) =>
    Object.assign(file, {
      preview: URL.createObjectURL(file)
    })
    ) 
    setWallpaperFile(setPreview)
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
    setDuration(time);
  }

  console.log(duration[0]?.end, "duration")
  
  
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
    dispatch(getProfile())
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
     setLoading(!loading)
      e.preventDefault()
      dispatch(updateAddress(address));
      refreshPage()
  }

  const handleBioUpdate = (e) => {
    setLoading(!loading)
      e.preventDefault()
      dispatch(updateBio(bio));
      refreshPage()
  }

  // const UpdateAvatar = async () => {
  //     try {
  //       const {data} = await axios.patch("https://api.slydo.co/api/v1/user/update-avatar/:username/", {
  //         avatar: ""
  //       })
  //     } catch (error) {        
  //     }
  // }

 

  // const reload=()=>window.location.reload();

  const handleWallpaperUpdate = () => {
    setLoading(true)
    let wallpaper = wallpaperFile[0];
    const wallpaperForm = new FormData()
    wallpaperForm.append("wallpaper", wallpaper)
    dispatch(updateWallpaper(wallpaperForm))
    refreshPage()
  }

  // datetime picker
  const [startTime, setStartTime] = useState(new Date());
  const [endTimeMonday, setEndTimeMonday] = useState();
  const [startTimeMonday, setStartTimeMonday] = useState();
  const [endTimeTuesday, setEndTimeTuesday] = useState();
  const [startTimeTuesday, setStartTimeTuesday] = useState();
  const [endTimeWednesday, setEndTimeWednesday] = useState();
  const [startTimeWednesday, setStartTimeWednesday] = useState("");
  const [endTimeThursday, setEndTimeThursday] = useState("");
  const [startTimeThursday, setStartTimeThursday] = useState("");
  const [endTimeFriday, setEndTimeFriday] = useState("");
  const [startTimeFriday, setStartTimeFriday] = useState("");
  const [startTimeSaturday, setStartTimeSaturday] = useState("");
  const [endTimeSaturday, setEndTimeSaturday] = useState("");
  const [startTimeSunday, setStartTimeSunday] = useState("");
  const [endTimeSunday, setEndTimeSunday] = useState("");

    const handleOpeningHoursUpdate = (e) => {
        setLoading(!loading)
       
        const mondayOpenHours = `${startTimeMonday }-${endTimeMonday }`;
        const tuesdayOpenHours = `${startTimeTuesday }-${endTimeTuesday }`;
        const wednesdayOpenHours = `${startTimeWednesday}-${endTimeWednesday}`;
        const thursdayOpenHours = `${startTimeThursday}-${endTimeThursday}`;
        const fridayOpenHours = `${startTimeFriday}- ${endTimeFriday}`;
        const saturdayOpenHours = `${startTimeSaturday }-${endTimeSaturday}`;
        const sundayOpenHours = `${startTimeSunday}-${endTimeSunday}`;
        dispatch(updateOpeningHours([{day: "Monday", time: mondayOpenHours}, {day: "Tuesday", time: tuesdayOpenHours}, {day:"Wednesday", time: wednesdayOpenHours}, {day: "Thursday",time: thursdayOpenHours}, {day:"Friday", time:fridayOpenHours}, {day: "Saturday", time: saturdayOpenHours}, {day: "Sunday", time: sundayOpenHours}]));

        refreshPage()
    }

  

  return (
    <React.Fragment>
      <Head title="Profile"></Head>
      {/* <img style={{height: '150px', width: '100%'}} src={slab}  alt="" /> */}
      
      <BlockHead size="lg">
        <div stylexx={{width: '100%', height: '120px', }}>
          <img style={{border: "2px solid black", borderRadius: '5px',  width: '100%', height: '200px', backgroundSizexx: 'cover', objectFit: 'cover', positionxx: 'absolute', }} classNamexx="card-img-top" src={profile?.profile?.wallpaper} alt="" />
        </div>
        {/* <UserAvatar theme="primary"  > */}
        {/* <AspectRatio ratio={10.75} style={{width: "80%", position: 'relative', margin: '0 auto', backgroundSize: 'cover'}}> */}
                              
                            {/* </AspectRatio> */}
          {/* <img style={{height: '150px', width: '100%', borderRadius: '5px',}} className="mb-3" src={profile?.profile?.wallpaper}  alt="" /> */}
          <br/>
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
              <span className="data-value">{profile.full_name}</span>
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
              <span className="data-value">{profile?.profile?.nickname}</span>
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
          {/* <div className="data-item">
            <div className="data-col">
              <span className="data-label">Phone Number</span>
              <span className="data-value text-softxx">{profile.profile.contact}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="lock-alt"></Icon>
              </span>
            </div>
          </div> */}
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
                {profile?.profile?.address.address_line_1},&nbsp;{profile?.profile?.address.address_line_2}
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
                {profile?.profile?.bio}
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
                        <input
                          className="form-control"
                          disabled
                          value={duration[0]?.start}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label>Close Time</Label>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[0]?.end}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                {/* Monday */}
                <Row className="gy-4">
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value="Tuesday"
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[1]?.start}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[1]?.end}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
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
                          value="Wednesday"
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[2]?.start}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[2]?.end}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
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
                          value="Thursday"
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[3]?.start}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[3]?.end}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
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
                          value="Friday"
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[4]?.start}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[4]?.end}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
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
                          value="Saturday"
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[5]?.start}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[5]?.end}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
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
                          value="Sunday"
                          defaultValue="Tuesday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[6]?.start}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <div className="form-control-wrap has-timepicker focused">
                        <input
                          className="form-control"
                          disabled
                          value={duration[6]?.end}
                          // defaultValue="Monday"
                          placeholder="Input placeholder"
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
                        defaultValue={profile.full_name}
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
                        defaultValue={profile.nickname}
                        placeholder="Enter display name"
                        disabled
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col md="6">
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
                        // defaultValue={profile.profile.contact}
                        placeholder="Phone Number"
                        disable
                      />
                    </FormGroup>
                  </Col> */}
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        defaultValue={profile?.profile?.address.address_line_1}
                      
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>   
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label" htmlFor="address-l1">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        id="address-l1"
                        name="address"
                        value={addressLine2}
                        onChange={(e) => setAddressLine2(e.target.value)}
                        defaultValue={profile?.profile?.address.address_line_2}
                      
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>         
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="lg" 
                          onClick={handleAddressUpdate}
                        >
                          {
                            loading ? "Loading..." : "Address"
                          }
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
                        <Button color="primary" size="lg" 
                          onClick={handleBioUpdate}
                        >
                          {
                            loading ? "Loading..." : "Update Bio"
                          }
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
                  <Col sm="8">
                    <FormGroup>
                      <Label>Start Time - Close Time</Label>
                      <div className="input-group">
                      
                        <input type="time" defaultValue={duration[0]?.start} value={startTimeMonday} onChange={(e)=>setStartTimeMonday(e.target.value)} className="form-control" />
                        <input type="time" defaultValue={duration[0]?.end} value={endTimeMonday} onChange={(e)=>setEndTimeMonday(e.target.value)} className="form-control" />
                      
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
                  <Col sm="8">
                    <FormGroup>
                      <div className="input-group">
                        <input type="time" defaultValue={duration[1]?.start}  value={startTimeTuesday} onChange={(e)=>setStartTimeTuesday(e.target.value)} className="form-control" />
                        <input type="time" defaultValue={duration[1]?.end} value={endTimeTuesday} onChange={(e)=>setEndTimeTuesday(e.target.value)} className="form-control" />
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
                  <Col sm="8">
                    <FormGroup>
                      <div className="input-group">  
                        <input type="time" defaultValue={duration[2]?.start} value={startTimeWednesday} onChange={(e)=>setStartTimeWednesday(e.target.value)} className="form-control" required />
                        <input type="time" defaultValue={duration[2]?.end} value={endTimeWednesday} onChange={(e)=>setEndTimeWednesday(e.target.value)} className="form-control" required />
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
                  <Col sm="8">
                    <FormGroup>
                      <div className="input-group">
                        <input type="time" defaultValue={duration[3]?.start} value={startTimeThursday} onChange={(e)=>setStartTimeThursday(e.target.value)} className="form-control" />
                        <input type="time" defaultValue={duration[3]?.end} value={endTimeThursday} onChange={(e)=>setEndTimeThursday(e.target.value)} className="form-control" />
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
                  <Col sm="8">
                    <FormGroup>
                      <div className="input-group">
                        <input type="time" defaultValue={duration[4]?.start} value={startTimeFriday} onChange={(e)=>setStartTimeFriday(e.target.value)} className="form-control" />
                        <input type="time" defaultValue={duration[4]?.end} value={endTimeFriday} onChange={(e)=>setEndTimeFriday(e.target.value)} className="form-control" />         
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
                          defaultValue="Saturday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="8">
                    <FormGroup>
                      <div className="input-group">
                        <input type="time" defaultValue={duration[5]?.start} value={startTimeSaturday} onChange={(e)=>setStartTimeSaturday(e.target.value)} className="form-control" />
                        <input type="time" defaultValue={duration[5]?.end} value={endTimeSaturday} onChange={(e)=>setEndTimeSaturday(e.target.value)} className="form-control" />   
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
                          defaultValue="Sunday"
                          placeholder="Input placeholder"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="8">
                    <FormGroup>
                      <div className="input-group">
                  
                        <input type="time" defaultValue={duration[6]?.start} value={startTimeSunday} onChange={(e)=>setStartTimeSunday(e.target.value)} className="form-control" />
                        <input type="time" defaultValue={duration[6]?.end} value={endTimeSunday} onChange={(e)=>setEndTimeSunday(e.target.value)} className="form-control" />
                    
                      </div>
             
                    </FormGroup>
                  </Col>
                  
                  
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="lg" 
                          onClick={handleOpeningHoursUpdate}
                        >
                          {
                            loading ? "Loading..." : "Update Opening Hours"
                          }
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
                        {/* <div style={{width: '100%', backgroundColor: 'red', position: 'relative'}}> */}
                          {/* <div style={{positionx: "absolute", top: 0, left: 0, bottom: 0, right: 0, aspectRatio: '2/1' }}> */}
                            <AspectRatio ratio={10.75} style={{width: "80%", position: 'relative', margin: '0 auto', backgroundSize: 'cover'}}>
                              <img style={{width: '100%', height: '100%', positionxx: 'absolute', top: 0, left: 0}} classNamexx="card-img-top" src={profile?.profile?.wallpaper} alt="" />
                            </AspectRatio>
                            
                          {/* </div> */}
                        {/* </div> */}
                        
                      <ul className="product-actions" stylex={{marginBottom: 170}}>
                        <li>
                          {/* <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-light" size="md" onClick={() => submitForm()}>
                            <em class="icon ni ni-camera"></em>
                          </Button> */}
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
                                                <span> or </span>
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
                                    
                                      </div>
                                      
                                    </div>
                                  ))}
                                </div>
                              </section>
                            )}
                          </Dropzone>
                        </Col>

                        </li>
                        
                      </ul>
                    </div>
                    
                        </div>
                </Row>
                <Row className="gy-4">
                    <Col size="12">
                      <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                        <li>
                          <Button color="primary" size="lg" onClick={handleWallpaperUpdate}>
                          { 
                            loading ? "Loading..." : "Update Wallpaper"
                          }
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
