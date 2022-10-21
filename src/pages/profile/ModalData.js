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
import Dropzone from "react-dropzone";
import UserAvatar from "../../slydo-components/user/UserAvatar";
import { Icon, Button, RSelect, Row, Col, PreviewCard } from "../../slydo-components/Component";
import {useDispatch, useSelector} from "react-redux";
import AsyncSelect from "react-select/async";
// import { createShippingOption, editTeamMember, deleteTeamMembers, editShippingOption, deleteShippingOption, createTeamMember } from "../../redux/actions/slydocommerce";
import { updateOrderStatus, updateOrdersNotes, deleteProduct, updateProduct, updateService, deleteService } from "../../redux/actions/slydocommerce";
// import { defaultOptions } from "./SelectData";
// import { useHistory } from "react-router";
// import { findUpper } from "../../utils/Utils";
// import { toast } from "react-toastify";

export const DeleteWallpaperModal = ({data}) => {
      const dispatch = useDispatch()
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);

      const refreshPage = () => {
            const timer =  setTimeout(() => {   
                  window.location.reload();
                  }, 5000);
           return () => clearTimeout(timer);
      }

      const handleDeleteProduct = () => {
            dispatch(deleteProduct({id: data.id}))    
            toggleModalRemove()           
            refreshPage()

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
                              {/* <h4 className="nk-modal-title">Remove {user.username} from Connection!</h4> */}
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to delete this product from your list? 
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button color="dark" size="lg" className="btn-mw" onClick={handleDeleteProduct}>
                                                Delete
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