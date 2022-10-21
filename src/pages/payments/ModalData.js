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
import { UserAvatar, Icon, Button, Row, Col } from "../../slydo-components/Component";

export const RemoveContactModal = () => {
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);
      
      return (
            <>
            <Button color="dark" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
                  <Icon name="minus-c" />
            </Button>
            <Modal isOpen={modalRemove} toggle={toggleModalRemove}>
                  <ModalBody className="modal-body-lg text-center">
                        <div className="nk-modal">
                              <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-minus-c bg-light"></Icon>
                              <h4 className="nk-modal-title">Remove User from Connection!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to remove this user from your connections?
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button color="dark" size="lg" className="btn-mw" onClick={toggleModalRemove}>
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

export const AcceptConnectionRequestModal = () => {
      const [modalBlock, setModalBlock] = useState(false);
      const toggleModalBlock = () => setModalBlock(!modalBlock);
      
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
                        <Button color="success" size="lg" className="btn-mw" onClick={toggleModalBlock}>
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

export const BlockContactModal = () => {
      const [modalBlock, setModalBlock] = useState(false);
      const toggleModalBlock = () => setModalBlock(!modalBlock);
      
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
                        <Button color="danger" size="lg" className="btn-mw" onClick={toggleModalBlock}>
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

export const PaymentRequestsModal = () => {
      const [modalBlock, setModalBlock] = useState(false);
      const toggleModalBlock = () => setModalBlock(!modalBlock);
      
      return (
            <>
            <Button color="danger" onClick={toggleModalBlock} className="btn-dim btn-icon" size="md">
                  <Icon name="cross-fill-c" />
            </Button>
            <Modal isOpen={modalBlock} toggle={toggleModalBlock}>
                  <ModalBody className="modal-body-lg text-center">
                    <div className="nk-modal">
                      <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-cross-fill-c bg-danger-dim"></Icon>
                      <h4 className="nk-modal-title">Reject Request!</h4>
                      <div className="nk-modal-text">
                        <p className="lead">
                          Are you sure you want to reject payment request from <b>amoshood</b> for <b>&#8358;2.0</b> ?
                        </p>
                      </div>
                      <div className="nk-modal-action mt-5">
                        <Button color="danger" size="lg" className="btn-mw" onClick={toggleModalBlock}>
                          Reject
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