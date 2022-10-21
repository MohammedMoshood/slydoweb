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

const OrderModal = () => {
      // const [isOpen , setIsOpen] = useState(false);
      const [modalForm, setModalForm] = useState(false);
      const toggleForm = () => setModalForm(!modalForm);
    
      // const toggle = () => {setIsOpen(!isOpen)};
      
      return (
            <>
            <Button color="primary" onClick={toggleForm} className="btn-dim btn-icon" size="md">
                  <Icon name="mail-fill" />
            </Button>
            <Modal isOpen={modalForm} toggle={toggleForm}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleForm}
                        close={ <button className="close" onClick={toggleForm}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>New Message</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          To
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" className="form-control" id="email" />
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="full-name">
                                          Subject
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" className="form-control" id="full-name" />
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="phone-no">
                                          Message
                                    </label>
                                    {/* <div className="form-control-wrap">
                                          <input type="number" className="form-control" id="phone-no" defaultValue="0880" />
                                    </div> */}
                                    <div className="input-group">
                                          <textarea className="form-control"></textarea>
                                    </div>
                              </FormGroup>
                              
                              <FormGroup>
                                    {/* <Button color="danger" className="btn-dim" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                          Discard
                                    </Button> &nbsp;
                                    <Button style={{float: 'right'}} color="primary" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                          Submit
                                    </Button> */}
                                    <Row className="g-gs">
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
                                    </Row>
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

export default OrderModal;