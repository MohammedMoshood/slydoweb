import React, {useState} from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // ModalForm,
  FormGroup,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from "reactstrap";
import axios from "axios"
import { useDispatch } from "react-redux"
import { UserAvatar, Icon, Button, Row, Col } from "../../slydo-components/Component";
import {removeContact, blockContact, acceptContactRequest} from "../../redux/actions/contacts.js"


export const RemoveContactModal = ({user}) => {
      const dispatch = useDispatch()
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);

      const removeUser = async () => {
            dispatch(removeContact(user.username))
                  
                toggleModalRemove()
      }
      
      return (
            <>
            <Button color="dark" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
                  <Icon name="minus-c" />
            </Button>
            <Modal isOpen={modalRemove} toggle={toggleModalRemove}>
                  <ModalBody className="modal-body-lg text-center">
                        <div className="nk-modal">
                              <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-minus-c bg-light"></Icon>
                              <h4 className="nk-modal-title">Remove {user.username} from Connection!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to remove this user from your connections? 
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button color="dark" size="lg" className="btn-mw" onClick={removeUser}>
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

export const RejectConnectionRequestModal = () => {
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);
      
      return (
            <>
            <Button color="danger" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
                  <Icon name="user-cross-fill" />
            </Button>
            <Modal isOpen={modalRemove} toggle={toggleModalRemove}>
                  <ModalBody className="modal-body-lg text-center">
                        <div className="nk-modal">
                              <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-user-cross-fill bg-danger-dim"></Icon>
                              <h4 className="nk-modal-title">Reject Connection Request!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to reject this connection request?
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button color="danger" size="lg" className="btn-mw" onClick={toggleModalRemove}>
                                                Reject
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

export const AcceptConnectionRequestModal = ({user}) => {
      const dispatch = useDispatch()
      const [modalBlock, setModalBlock] = useState(false);
      const toggleModalBlock = () => setModalBlock(!modalBlock);

      const acceptRequest = async () => {
            dispatch(acceptContactRequest(user))
                toggleModalBlock()
      }
      
      return (
            <>
            <Button color="success" onClick={toggleModalBlock} className="btn-dim btn-icon" size="md">
                  <Icon name="user-add-fill" />
            </Button>
            <Modal isOpen={modalBlock} toggle={toggleModalBlock}>
                  <ModalBody className="modal-body-lg text-center">
                    <div className="nk-modal">
                      <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-user-add-fill bg-success-dim"></Icon>
                      <h4 className="nk-modal-title">Accept Connection Request!</h4>
                      <div className="nk-modal-text">
                        <p className="lead">
                          Are you sure you want to accept this connection request?
                        </p>
                      </div>
                      <div className="nk-modal-action mt-5">
                        <Button color="success" size="lg" className="btn-mw" onClick={acceptRequest}>
                          Accept
                        </Button>
                        &nbsp;
                        <Button color="light" size="lg" className="btn-mw" onClick={toggleModalBlock}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
            </>
      );
};

export const BlockContactModal = ({user}) => {
      const dispatch = useDispatch()
      const [modalBlock, setModalBlock] = useState(false);
      const toggleModalBlock = () => setModalBlock(!modalBlock);

      const block = () =>{
            dispatch(blockContact(user.username))
            window.location.reload();
            toggleModalBlock()
      }
      
      return (
            <>
            <Button color="danger" onClick={toggleModalBlock} className="btn-dim btn-icon" size="md">
                  <Icon name="na" />
            </Button>
            <Modal isOpen={modalBlock} toggle={toggleModalBlock}>
                  <ModalBody className="modal-body-lg text-center">
                    <div className="nk-modal">
                      <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-na bg-danger"></Icon>
                      <h4 className="nk-modal-title">Block Connection!</h4>
                      <div className="nk-modal-text">
                        <p className="lead">
                          Are you sure you want to block this user?
                        </p>
                      </div>
                      <div className="nk-modal-action mt-5">
                        <Button color="danger" size="lg" className="btn-mw" onClick={block}>
                          Block
                        </Button>
                        &nbsp;
                        <Button color="light" size="lg" className="btn-mw" onClick={toggleModalBlock}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const UnblockConnectionModal = () => {
      const [modalBlock, setModalBlock] = useState(false);
      const toggleModalBlock = () => setModalBlock(!modalBlock);
      
      

      return (
            <>
            <Button color="primary" onClick={toggleModalBlock} className="btn-dim btn-icon" size="md">
                  <Icon name="minus-fill-c" />
            </Button>
            <Modal isOpen={modalBlock} toggle={toggleModalBlock}>
                  <ModalBody className="modal-body-lg text-center">
                    <div className="nk-modal">
                      <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-minus-fill-c bg-primary-dim"></Icon>
                      <h4 className="nk-modal-title">Unblock Connection!</h4>
                      <div className="nk-modal-text">
                        <p className="lead">
                          Are you sure you want to unblock this connection?
                        </p>
                      </div>
                      <div className="nk-modal-action mt-5">
                        <Button color="primary" size="lg" className="btn-mw" onClick={toggleModalBlock}>
                          Unblock
                        </Button>
                        &nbsp;
                        <Button color="light" size="lg" className="btn-mw" onClick={toggleModalBlock}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
            </>
      );
};