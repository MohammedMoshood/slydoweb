import React, {useState, useEffect} from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { Icon, Button, RSelect } from "../../slydo-components/Component";
import {useDispatch, useSelector} from "react-redux";
import AsyncSelect from "react-select/async";
import { createShippingOption, editTeamMember, deleteTeamMembers, editShippingOption, deleteShippingOption, createTeamMember } from "../../redux/actions/settings";
import { getContacts } from "../../redux/actions/contacts";
// import { defaultOptions } from "./SelectData";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

export const CreateTeamMemberModal = () => {
      const [modalEditTeamMember, setModalEditTeamMember] = useState(false);
      const [status, setStatus] = useState("");
      const [userName, setUserName] = useState("");
      const [inputValue, setInputValue] = useState("");
      const [role, setRole] = useState("");
      const toggleModalEditTeamMember = () => setModalEditTeamMember(!modalEditTeamMember);
      const dispatch = useDispatch();
      const {contacts} = useSelector(state => state.contacts)
      const [loading, setLoading] = useState(false);
      const history = useHistory();
      // console.log(contacts, 'contacts')
      const parseContacts = contacts?.contacts?.map(contact => ({
            value: contact.username,
            label: contact.name,
      }))

      useEffect(() => {
            dispatch(getContacts(1))
      }, [dispatch])

      const handleInputChange = (value) => {
            setInputValue(value);
      }

      const handleSetContact = (selectedOption) => {
            setUserName(selectedOption);
      }

      const loadOptions = (inputValue) => {
            return fetch(`https://api.slydo.com/api/v1/contacts?search=${inputValue}`, {
                  headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
                  }
            })
      }

      const refreshPage = () => {
            setTimeout(() => {
            window.location.reload();
            }, 1000);
      }

      const handleCreateTeamMember = (e) => {
            e.preventDefault();
            toast.success("Team member created successfully", {
                  type: toast.TYPE.PRIMARY,
                  style: {
                    backgroundColor: "#e4fbf5",
                    borderColor: "#aef4e1",
                    border: "1px solid #aef4e1",
                    borderRadius: "4px",
                    fontColor: '#19bc90',
                    marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })
            const user = userName.value;
            console.log(user, role, status);
            dispatch(createTeamMember({user, role, status}));
            setLoading(!loading)  
            refreshPage();
      }
      
      return (
            <>
            <Button color="primary" onClick={toggleModalEditTeamMember} className="" size="md">
                  {/* <Icon name="edit" /> */}
                  <span>Create Team Member</span>
            </Button>
            <Modal isOpen={modalEditTeamMember} toggle={toggleModalEditTeamMember}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalEditTeamMember}
                        close={ <button className="close" onClick={toggleModalEditTeamMember}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Create Team Member</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              {/* <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Username
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" className="form-control" id="email" />
                                    </div>
                              </FormGroup> */}
                              <FormGroup>
                                    <label className="form-label">Username</label>
                                    <RSelect value={userName} onChange={handleSetContact} options={parseContacts} />
                                    {/* <AsyncSelect 
                                    cacheOptions = {true}
                                    defaultOptions = {true}
                                    value= {userName}
                                    onChange={handleSetContact}
                                    onInputChange={handleInputChange}
                                    loadOptions={loadOptions}
                                    placeholder="Search for a contact"
                                    getOptionLable = {(option) => option.name}
                                    getOptionValue = {(option) => option.username}
                                    /> */}
                              </FormGroup>
                              
                              <FormGroup>
                                    <Label htmlFor="default-4" className="form-label">
                                          Role
                                    </Label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input type="select" value={role} onChange={(e) =>{setRole(e.target.value)}} name="select" id="default-4">
                                                      <option value="default_option">Choose role</option>
                                                      <option value="Support Specialist">Support Specialist</option>
                                                      <option value="Administrator">Administrator</option>
                                                      <option value="Developer">Developer</option>
                                                      <option value="Analyst">Analyst</option>
                                                      <option value="Tax Analyst">Tax Analyst</option>
                                                      <option value="View Only">View Only</option>
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <Label htmlFor="default-4" className="form-label">
                                          Status
                                    </Label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input value={status} onChange={(e)=>{setStatus(e.target.value)}} type="select" name="select" id="default-4">
                                                      <option value="default_option">Choose status</option>
                                                      <option value="Active">Active</option>
                                                      <option value="Inactive">Non Active</option>
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>
                              
                              
                              <FormGroup>
                                    {/* <Button color="danger" className="btn-dim" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                          Discard
                                    </Button> &nbsp; */}
                                    <Button onClick={handleCreateTeamMember} style={{float: 'right'}} color="primary" type="submit" size="lg">
                                          { loading ? "...loading" :  "Submit"}
                                    </Button>
                                    {/* <Row className="g-gs">
                                          <Col xxl="12">
                                                <Row className="g-gs text-center">
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{width: '100%', textAlign: 'center', alignItem: 'center', alignContent: 'center'}} color="danger" outline className="btn-dim text-center" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                                                  Discard
                                                            </Button>
                                                      </Col>
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{float: 'right', width: '100%', textAlign: 'center'}} color="primary" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                                                  Submit
                                                            </Button>
                                                      </Col>
                                                </Row>
                                          </Col>
                                    </Row> */}
                              </FormGroup>
                        </form>
                  </ModalBody>
                  {/* <ModalFooter className="bg-light">
                        <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter> */}
            </Modal>
            </>
      );
};

export const ViewTeamMemberModal = ({data}) => {
      const [modalViewTeamMember, setModalViewTeamMember] = useState(false);
      const toggleModalViewTeamMember = () => setModalViewTeamMember(!modalViewTeamMember);
      console.log("viewingdata", data);
      return (
            <>
            <Button color="primary" onClick={toggleModalViewTeamMember} className="btn-dim btn-icon" size="md">
                  <Icon name="folder-list" />
            </Button>
            <Modal isOpen={modalViewTeamMember} toggle={toggleModalViewTeamMember}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalViewTeamMember}
                        close={ <button className="close" onClick={toggleModalViewTeamMember}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>View Team Member</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Username</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.name}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Role</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.role}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Role</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.status}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const EditTeamMemberModal = ({data}) => {
      const [modalEditTeamMember, setModalEditTeamMember] = useState(false);
      const toggleModalEditTeamMember = () => setModalEditTeamMember(!modalEditTeamMember);
      const [role, setRole] = useState(data.role);
      const [status, setStatus] = useState(data.status);
      const dispatch = useDispatch();
      
      console.log(data, "edit data");
      

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1500);
      }
    

      const handleEdit = (e) => {
            e.preventDefault()
            console.log(role, status);
            toast.success("Edit Team member successful", {
                  type: toast.TYPE.PRIMARY,
                  style: {
                    backgroundColor: "#e4fbf5",
                    borderColor: "#aef4e1",
                    border: "1px solid #aef4e1",
                    borderRadius: "4px",
                    fontColor: '#19bc90',
                    marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })
            dispatch(editTeamMember({role, status, id:data.id}));
            refreshPage();
      }
     

      return (
            <>
            <Button color="success" onClick={toggleModalEditTeamMember} className="btn-dim btn-icon" size="md">
                  <Icon name="pen-fill" />
            </Button>
            <Modal isOpen={modalEditTeamMember} toggle={toggleModalEditTeamMember}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalEditTeamMember}
                        close={ <button className="close" onClick={toggleModalEditTeamMember}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Edit Team Member</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              {/* <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Username
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" className="form-control" id="email" />
                                    </div>
                              </FormGroup> */}
                              
                              <FormGroup>
                                    <label className="form-label">Username</label>
                                    <Input value={data.name} disabled />
                              </FormGroup>
                              
                              <FormGroup>
                                    <Label htmlFor="default-4" className="form-label">
                                          Role
                                    </Label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input onChange={(e) => setRole(e.target.value)} value={role} type="select" name="select" id="default-4">
                                                      <option value={data.role}>{data.role}</option>
                                                      <option value="Support Specialist">Support Specialist</option>
                                                      <option value="Administrator">Administrator</option>
                                                      <option value="Developer">Developer</option>
                                                      <option value="Analyst">Analyst</option>
                                                      <option value="Tax Analyst">Tax Analyst</option>
                                                      <option value="View Only">View Only</option>
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <Label htmlFor="default-4" className="form-label">
                                          Status
                                    </Label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input onChange={(e)=> setStatus(e.target.value)} value={status} type="select" name="select" id="default-4">
                                                      <option value={data.status}>{data.status}</option>
                                                      <option value="Active">Active</option>
                                                      <option value="Inactive">Non Active</option>
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>
                              
                              
                              <FormGroup>
                                    {/* <Button color="danger" className="btn-dim" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                          Discard
                                    </Button> &nbsp; */}
                                    <Button style={{float: 'right'}} color="primary" type="submit" onClick={handleEdit} size="lg">
                                          Submit
                                    </Button>
                                    {/* <Row className="g-gs">
                                          <Col xxl="12">
                                                <Row className="g-gs text-center">
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{width: '100%', textAlign: 'center', alignItem: 'center', alignContent: 'center'}} color="danger" outline className="btn-dim text-center" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                                                  Discard
                                                            </Button>
                                                      </Col>
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{float: 'right', width: '100%', textAlign: 'center'}} color="primary" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                                                  Submit
                                                            </Button>
                                                      </Col>
                                                </Row>
                                          </Col>
                                    </Row> */}
                              </FormGroup>
                        </form>
                  </ModalBody>
                  {/* <ModalFooter className="bg-light">
                        <span className="sub-text">Modal Footer Text</span>
                  </ModalFooter> */}
            </Modal>
            </>
      );
};

export const RemoveTeamMemberModal = ({data}) => {
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);
      const dispatch = useDispatch();
      
      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }
      
      const handleRemove = (e) => {
            e.preventDefault()
            setModalRemove(!modalRemove);
            toast.success("Teammate removed successfully", {
                  type: toast.TYPE.PRIMARY,
                  style: {
                    backgroundColor: "#e4fbf5",
                    borderColor: "#aef4e1",
                    border: "1px solid #aef4e1",
                    borderRadius: "4px",
                    fontColor: '#19bc90',
                    marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })
            dispatch(deleteTeamMembers({id: data.id}));
            refreshPage();
      }

      return (
            <>
            <Button color="danger" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
                  <Icon name="minus-c" />
            </Button>
            <Modal isOpen={modalRemove} toggle={toggleModalRemove}>
                  <ModalBody className="modal-body-lg text-center">
                        <div className="nk-modal">
                              <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-minus-c bg-danger-dim"></Icon>
                              <h4 className="nk-modal-title">Remove Team Member!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to remove this member?
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button color="danger" size="lg" className="btn-mw" onClick={handleRemove}>
                                                Remove
                                          </Button>
                                          &nbsp;
                                          <Button color="light" size="lg" className="btn-mw" onClick={toggleModalRemove}>
                                                Cancel
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const CreateShippingOptionModal = () => {
      const [modalCreateShippingOption, setModalCreateShippingOption] = useState(false);
      const toggleModalCreateShippingOption = () => setModalCreateShippingOption(!modalCreateShippingOption);
      const [currency, setCurrency] = useState('NGN');
      const [name, setName] = useState('');
      const [price, setPrice] = useState('');
      const dispatch = useDispatch();
      const {loading, setLoading} = useState(false);
      
      const refreshPage = () => {
            setTimeout(() => {  

            window.location.reload();
            }, 1000);
      }

      // useEffect(()=>{
      //       handleShippingSubmit()
      // }, []);
      
      const handleShippingSubmit = () => {
            // ev.preventDefault();
            // console.log(name, price, currency, '--------');
            // createShippingOption({name, price, currency})
            dispatch(createShippingOption({name, price, currency}))
            setModalCreateShippingOption(!modalCreateShippingOption);
            toast.success("Shipping created successfullu", {
                  type: toast.TYPE.PRIMARY,
                  style: {
                    backgroundColor: "#e4fbf5",
                    borderColor: "#aef4e1",
                    border: "1px solid #aef4e1",
                    borderRadius: "4px",
                    fontColor: '#19bc90',
                    marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })
            // setModalCreateShippingOption(!modalCreateShippingOption);
            refreshPage();
      }

      return (
            <>
            <Button color="primary" onClick={toggleModalCreateShippingOption} className="" size="md">
                  <span>Create Shipping Option</span>
            </Button>
            <Modal isOpen={modalCreateShippingOption} toggle={toggleModalCreateShippingOption}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalCreateShippingOption}
                        close={ <button className="close" onClick={toggleModalCreateShippingOption}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Create Shipping Option</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Location Name
                                    </label>
                                    <div className="form-control-wrap">
                                          <input value={name} type="text" className="form-control" id="email" onChange={(e)=>setName(e.target.value) } />
                                    </div>
                              </FormGroup>

                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Price
                                    </label>
                                    <div className="form-control-wrap">
                                          <input value={price} type="text" className="form-control" id="email" onChange={ (e) => setPrice(e.target.value) } />
                                    </div>
                              </FormGroup>
                              
                              <FormGroup>
                                    <Label htmlFor="default-4" className="form-label">
                                          Currency
                                    </Label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input type="select" name="select" id="default-4" value={currency}  onChange={(e) => setCurrency(e.target.value )}>
                                                      <option value="default_option">Choose currency</option>
                                                      <option value="NGN">NGN</option>
                                                      <option value="USD">USD</option>
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>
                              
                              
                              <FormGroup>
                                    <Button style={{float: 'right'}} color="primary" type="submit" onClick={() => handleShippingSubmit()} size="lg">
                                        { loading ? "Loading..." : "Create"}
                                    </Button>
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const ViewShippingOptionModal = ({data}) => {
      const [modalViewShippingOption, setModalViewShippingOption] = useState(false);
      const toggleModalViewShippingOption = () => setModalViewShippingOption(!modalViewShippingOption);
      console.log("viewingdata", data);
      return (
            <>
            <Button color="primary" onClick={toggleModalViewShippingOption} className="btn-dim btn-icon" size="md">
                  <Icon name="folder-list" />
            </Button>
            <Modal isOpen={modalViewShippingOption} toggle={toggleModalViewShippingOption}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalViewShippingOption}
                        close={ <button className="close" onClick={toggleModalViewShippingOption}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>View Shipping Options</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Location</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.name}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Price</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={`${data.amount}`}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const EditShippingOptionModal = ({data}) => {
      const [modalEditShippingOption, setModalEditShippingOption] = useState(false);
      const toggleModalEditShippingOption = () => setModalEditShippingOption(!modalEditShippingOption);
      const [name, setName] = useState(data.name);

      const [currency, setCurrency] = useState("");
      const [price, setPrice] = useState(data.amount);
      const dispatch = useDispatch();

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }

      const editShippingSubmit = (e) => {
            e.preventDefault();
            toast.success(" Shipping Edited Successfully", {
                  type: toast.TYPE.PRIMARY,
                  style: {
                    backgroundColor: "#e4fbf5",
                    borderColor: "#aef4e1",
                    border: "1px solid #aef4e1",
                    borderRadius: "4px",
                    fontColor: '#19bc90',
                    marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })   
            console.log(name, "name", price, "price", currency, "currency", data.id, "id");
            dispatch(editShippingOption({name, price, currency, id:data.id}));
            refreshPage();
      }      
      return (
            <>
            <Button color="dark" onClick={toggleModalEditShippingOption} className="btn-dim btn-icon" size="md">
                  <Icon name="pen-fill" />
            </Button>
            <Modal isOpen={modalEditShippingOption} toggle={toggleModalEditShippingOption}>
                  <ModalHeader
                        className="bg-primary"
                        toggle={toggleModalEditShippingOption}
                        close={ <button className="close" onClick={toggleModalEditShippingOption}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Edit Shipping Option</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Location Name
                                    </label>
                                    <div className="form-control-wrap">
                                          <input value={name} placeholder={name} type="text" className="form-control" id="email"  onChange={(e)=>{setName(e.target.value)}} />
                                    </div>
                              </FormGroup>

                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Price
                                    </label>
                                    {/* <div className="form-control-wrap">
                                          <input value="&#8358; 35,040.34" type="text" className="form-control" id="email" />
                                    </div> */}
                                    <div className="form-control-wrap">
                                          <div className="form-icon form-icon-left">
                                                <Icon name="sign-kobo-alt" />
                                          </div>
                                          <input value={price} onChange={(e)=> {setPrice(e.target.value)}} type="text" className="form-control" id="price" />
                                    </div>
                              </FormGroup>
                              
                              <FormGroup>
                                    <Label htmlFor="default-4" className="form-label">
                                          Currency
                                    </Label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input type="select" value={currency} onChange={(e)=>{setCurrency(e.target.value)}}  name="select" id="default-4">
                                                      <option value="">Select a currency</option>
                                                      <option value="NGN">NGN</option>
                                                      <option value="USD">USD</option>
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>
                              
                              
                              <FormGroup>
                                    <Button style={{float: 'right'}} color="primary" type="submit"  onClick={editShippingSubmit} size="lg">
                                        Submit
                                    </Button>
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const RemoveShippingOptionModal = ({data}) => {
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);
      const dispatch = useDispatch();
      
      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }

      const handleRejection = () => {           
            toast.success("Shipping option removed successfully", {
                  type: toast.TYPE.PRIMARY,
                  style: {
                    backgroundColor: "#e4fbf5",
                    borderColor: "#aef4e1",
                    border: "1px solid #aef4e1",
                    borderRadius: "4px",
                    fontColor: '#19bc90',
                  //   marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })
            dispatch(deleteShippingOption({id: data.id})); 
            toggleModalRemove();
            refreshPage();
      }

      return (
            <>
            <Button color="danger" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
                  <Icon name="trash" />
            </Button>
            <Modal isOpen={modalRemove} toggle={toggleModalRemove}>
                  <ModalBody className="modal-body-lg text-center">
                        <div className="nk-modal">
                              <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-trash bg-danger-dim"></Icon>
                              <h4 className="nk-modal-title">Remove Shipping Option!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to remove this shipping option?
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button onClick={handleRejection} color="danger" size="lg" className="btn-mw" >
                                                Reject
                                          </Button>
                                          &nbsp;
                                          <Button onClick={toggleModalRemove} color="light" size="lg" className="btn-mw">
                                                Cancel
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </ModalBody>
            </Modal>
            </>
      );
};