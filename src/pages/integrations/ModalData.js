import React, {useState} from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // ModalForm,
  FormGroup,
  Label,
  Input,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from "reactstrap";
import { UserAvatar, Icon, Button, Row, Col } from "../../slydo-components/Component";
import {useDispatch, useSelector} from "react-redux";
import {createWebhooks, editWebhook, deleteApiKey} from '../../redux/actions/integrations';

// export const AddWebhookModal = () => {
//       const [modalRemove, setModalRemove] = useState(false);
//       const toggleModalRemove = () => setModalRemove(!modalRemove);
      
//       return (
//             <>
//             <Button color="dark" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
//                   <Icon name="minus-c" />
//             </Button>
//             <Modal isOpen={modalRemove} toggle={toggleModalRemove}>
//                   <ModalBody className="modal-body-lg text-center">
//                         <div className="nk-modal">
//                               <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-minus-c bg-light"></Icon>
//                               <h4 className="nk-modal-title">Add Webhook Modal</h4>
//                               <div className="nk-modal-text">
//                                     <p className="lead">
//                                           Are you sure you want to remove this user from your connections?
//                                     </p>
                      
//                                     <div className="nk-modal-action mt-5">
//                                           <Button color="dark" size="lg" className="btn-mw" onClick={toggleModalRemove}>
//                                                 Remove
//                                           </Button>
//                                           &nbsp;
//                                           <Button color="light" size="lg" className="btn-mw" onClick={toggleModalRemove}>
//                                                 Cancel
//                                           </Button>
//                                     </div>
//                               </div>
//                         </div>
//                   </ModalBody>
//             </Modal>
//             </>
//       );
// };

export const AddWebhookModal = () => {
      const [modalEditTeamMember, setModalEditTeamMember] = useState(false);
      const toggleModalEditTeamMember = () => setModalEditTeamMember(!modalEditTeamMember);
      const [url, setUrl] = useState("");
      const [event, setEvent] = useState(""); 
      const dispatch = useDispatch();

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }

     const  handleCreateWebHook = (e) => {
            e.preventDefault();
            console.log("url: ", url);
            console.log("event: ", event);
            dispatch(createWebhooks({url, event}));
            refreshPage();
      }

      return (
            <>
            <Button color="primary" onClick={toggleModalEditTeamMember} className="" size="md">
                  {/* <Icon name="edit" /> */}
                  <span>Create Webhook</span>
            </Button>
            <Modal isOpen={modalEditTeamMember} toggle={toggleModalEditTeamMember}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalEditTeamMember}
                        close={ <button className="close" onClick={toggleModalEditTeamMember}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Create Webhook</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Event Name
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" className="form-control" id="email" value={event} onChange={(e)=>{setEvent(e.target.value)}} />
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Url
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" className="form-control" id="email" value={url} onChange={(e)=>{setUrl(e.target.value)}} />
                                    </div>
                              </FormGroup>
                              
                              
                              <FormGroup>
                                    <Button style={{float: 'right'}} color="primary" type="submit" onClick={handleCreateWebHook} size="lg">
                                          Submit
                                    </Button>
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

export const ViewWebhookModal = ({data}) => {
      const [modalViewWebhook, setModalViewWebhook] = useState(false);
      const toggleModalViewWebhook = () => setModalViewWebhook(!modalViewWebhook);
      // console.log(data, "data from RemoveWebhookModal")      
      // const dispatch = useDispatch();

      return (
            <>
            <Button color="primary" onClick={toggleModalViewWebhook} className="btn-dim btn-icon" size="md">
                  <Icon name="folder-list" />
            </Button>
            <Modal isOpen={modalViewWebhook} toggle={toggleModalViewWebhook}>
            <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalViewWebhook}
                        close={ <button className="close" onClick={toggleModalViewWebhook}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>View Webhook</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Event</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.event}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">URL</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.url}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const EditWebhookModal = ({data}) => {
      const [modalEditWebhook, setModalEditWebhook] = useState(false);
      const toggleModalEditWebhook = () => setModalEditWebhook(!modalEditWebhook);
      const [event, setEvent] = useState(data.event);
      const [url, setUrl] = useState(data.url);
      const dispatch = useDispatch();
      
      console.log(data, "edit data");
      

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }
    

      const handleEdit = (e) => {
            e.preventDefault()
            console.log(event, url);
            dispatch(editWebhook({event, url, id:data.id}));
            refreshPage();
      }
     

      return (
            <>
            <Button color="success" onClick={toggleModalEditWebhook} className="btn-dim btn-icon" size="md">
                  <Icon name="pen-fill" />
            </Button>
            <Modal isOpen={modalEditWebhook} toggle={toggleModalEditWebhook}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalEditWebhook}
                        close={ <button className="close" onClick={toggleModalEditWebhook}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Edit Webhook</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label className="form-label">Event</label>
                                    <input value={event} placeholder={event} type="text" className="form-control" onChange={(e)=>{setEvent(e.target.value)}} disabled />
                              </FormGroup>

                              <FormGroup>
                                    <label className="form-label">URL</label>
                                    <Input value={url} placeholder={url} type="text" className="form-control"  onChange={(e)=>{setUrl(e.target.value)}} />
                              </FormGroup>

                              <FormGroup>
                                    <Button style={{float: 'right'}} color="primary" type="submit" onClick={handleEdit} size="lg">
                                          Submit
                                    </Button>
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const RemoveWebhookModal = ({data}) => {
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);
      console.log(data, "data from RemoveWebhookModal")      
      const dispatch = useDispatch();

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }

      const handleRemove = (e) => {
            e.preventDefault();
            setModalRemove(!modalRemove);
            dispatch(deleteApiKey({id: data.id}));
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
                              <h4 className="nk-modal-title">Remove Webhook!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to remove this webhook?
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