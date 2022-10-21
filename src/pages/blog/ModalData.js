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
import { UserAvatar, Icon, Button, Row, Col, PreviewCard } from "../../slydo-components/Component";
import { UpdateQuillComponent, QuillComponentMinimal } from "../../slydo-components/text-editor/TextEditor";
import { deleteBlogPost } from "../../redux/actions/blog"
import { toast } from "react-toastify";



export const UpdateBlogPostModal = ({data}) => {
      const dispatch = useDispatch()
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }

      const handleDeleteBlogPost = () => {           
            toast.success("Blog post deleted successfully", {
                  type: toast.TYPE.PRIMARY,
                  // position: "top-left",
                  // position: toast.POSITION.TOP_LEFT,
                  style: {
                        backgroundColor: "#e4fbf5",
                        borderColor: "#aef4e1",
                        border: "1px solid #aef4e1",
                        // backgroundColor: "#f5c5c1",
                        // borderColor: "#c2443a",
                        // border: "1px solid #f5c5c1",
                        borderRadius: "4px",
                        // fontColor: '#d11506',
                        fontColor: '#19bc90',
                        marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })
            dispatch(deleteBlogPost({id: data.id})); 
            toggleModalRemove();
            refreshPage();
      }
      
      return (
            <>
            <Button color="primary" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
                  <Icon name="pen-fill" />
            </Button>
            <Modal size="lg" isOpen={modalRemove} toggle={toggleModalRemove}>
                  <ModalBody className="modal-body-lg text-center">
                        <div className="nk-modal">
                              <h4 className="nk-modal-title">Update blog post!</h4>
                              <div className="nk-modal-text">
                                    <PreviewCard>
                                          <UpdateQuillComponent data={data}/>
                                    </PreviewCard>
                              </div>
                        </div>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const DeleteBlogPostModal = ({data}) => {
      const dispatch = useDispatch()
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }

      const handleDeleteBlogPost = () => {           
            toast.success("Blog post deleted successfully", {
                  type: toast.TYPE.PRIMARY,
                  // position: "top-left",
                  // position: toast.POSITION.TOP_LEFT,
                  style: {
                        backgroundColor: "#e4fbf5",
                        borderColor: "#aef4e1",
                        border: "1px solid #aef4e1",
                        // backgroundColor: "#f5c5c1",
                        // borderColor: "#c2443a",
                        // border: "1px solid #f5c5c1",
                        borderRadius: "4px",
                        // fontColor: '#d11506',
                        fontColor: '#19bc90',
                        marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-success"
            })
            dispatch(deleteBlogPost({id: data.id})); 
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
                              <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-trash bg-danger bg-dim"></Icon>
                              <h4 className="nk-modal-title">Delete blog post!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to remove this blog post? 
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button onClick={handleDeleteBlogPost} color="danger" size="lg" className="btn-mw">
                                                Delete
                                          </Button>
                                          &nbsp;
                                          <Button color="light" size="lg" className="btn-mw" onClick={handleDeleteBlogPost}>
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