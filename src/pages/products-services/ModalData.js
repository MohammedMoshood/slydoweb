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
import { useHistory } from "react-router";
import { findUpper } from "../../utils/Utils";
import { toast } from "react-toastify";

export const AddNoteToOrderModal = ({data}) => {
      const [modalForm, setModalForm] = useState(false);
      const toggleForm = () => setModalForm(!modalForm);
      const [note, setNote] = useState('');
      const dispatch = useDispatch();
      console.log(data)
      const refreshPage = () => {
            setTimeout(() => {
                  
            window.location.reload();
            }, 1000);
      }

      const handleAddNotesToOrder = (e) => {
            e.preventDefault();
            toast.success("Notes created successfully", {
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
            const noteData = note ;

            dispatch(updateOrdersNotes({noteData, id:data.orderNumber}));
            // setLoading(!loading)  
             refreshPage();
      }
      
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
                        <span style={{color: '#ffffff'}}>Add Notes To Order</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              {/* <FormGroup>
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
                              </FormGroup> */}
                              <FormGroup>
                                    <label className="form-label" htmlFor="phone-no">
                                          Message
                                    </label>
                                    {/* <div className="form-control-wrap">
                                          <input type="number" className="form-control" id="phone-no" defaultValue="0880" />
                                    </div> */}
                                    <div className="input-group">
                                          <textarea value={note} onChange={(e)=>setNote(e.target.value)}   className="form-control">

                                          </textarea>
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
                                                            <Button style={{float: 'right', width: '100%', textAlign: 'center'}} color="primary" type="submit" onClick={handleAddNotesToOrder} size="lg">
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

export const ViewOrderModal = ({data}) => {
      const [modalViewOrder, setModalViewOrder] = useState(false);
      const toggleModalViewOrder = () => setModalViewOrder(!modalViewOrder);
      console.log(data)
      // console.log(data, 'viewing order');
      // const {orders} = useSelector(state => state.slydocommerce.orders);
      // const dispatch = useDispatch();   
      // const fetchDetails = async () => {
      //       await dispatch(viewOrders({id: data.orderNumber}));
      // }
      // console.log(data.orderNumber, 'viewing order');
      // console.log(orders, 'orders');

      // useEffect(() => {
      //       // dispatch(getOrders());
      //       fetchDetails();
      //       dispatch(viewOrders({id: data.orderNumber}));
      // }, [])
   
      return (
            <>
            <Button color="primary" onClick={toggleModalViewOrder} className="btn-dim btn-icon" size="md">
                  <Icon name="folder-list" />
            </Button>
            <Modal isOpen={modalViewOrder} toggle={toggleModalViewOrder}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalViewOrder}
                        close={ <button className="close" onClick={toggleModalViewOrder}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>View Order</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Order ID</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.orderNumber}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Customer</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.name}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              

                              {/* <PreviewCard> */}
                                    {/* <div className="project-meta mb-3">
                                          <ul className="project-users g-1">
                                                <li>
                                                <UserAvatar className="md" text={findUpper("Apple")} theme="primary" />
                                                </li>
                                                <li>
                                                <UserAvatar className="md" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="md" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="md" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="md" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="md" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar theme="light" className="md" text="+12" />
                                                </li>
                                          </ul>
                                    </div> */}
                              {/* </PreviewCard> */}

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Price</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={
                                          (data?.amount/100).toLocaleString("en-NG", {
                                            style: "currency",
                                            currency: "NGN",
                                          })
                                        }
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Status</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.status}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Note</label>
                                    <textarea
                                    className="form-control"
                                    disabled
                                    value={data.note}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const UpdateOrderStatusModal = ({data}) => {
      const [modalUpdateOrder, setModalUpdateOrder] = useState(false);
      const toggleModalUpdateOrder = () => setModalUpdateOrder(!modalUpdateOrder);
      const [role, setRole] = useState('');
      const [status, setStatus] = useState(data.status);
      const dispatch = useDispatch();
      
      // console.log(data, "edit data");
      

      const refreshPage = () => {
            setTimeout(() => {  
            window.location.reload();
            }, 1000);
      }
    

      const handleEdit = (e) => {
            e.preventDefault()
            console.log(role, status);
            toast.success("Order Updated successfully", {
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
            dispatch(updateOrderStatus({status, id:data.orderNumber}));
            refreshPage();
      }
     

      return (
            <>
            <Button color="primary" onClick={toggleModalUpdateOrder} className="btn-dim btn-icon" size="md">
                  <Icon name="pen-fill" />
            </Button>
            <Modal isOpen={modalUpdateOrder} toggle={toggleModalUpdateOrder}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalUpdateOrder}
                        close={ <button className="close" onClick={toggleModalUpdateOrder}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Update Order Status</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label className="form-label">Order ID</label>
                                    <Input 
                                    value={data.orderNumber} 
                                    disabled />
                              </FormGroup>

                              <FormGroup>
                                    <Label htmlFor="default-4" className="form-label">
                                          Status
                                    </Label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input onChange={(e)=> setStatus(e.target.value)} 
                                                value={status} 
                                                type="select" name="select" id="default-4">
                                                      <option value="Awaiting Payment">Awaiting Payment</option>
                                                      <option value="New Order">New Order</option>
                                                      <option value="Canceled">Canceled</option>
                                                      <option value="Completed">Completed</option>
                                                      <option value="On Hold">On Hold</option>
                                                      <option value="Pending">Pending</option>
                                                      <option value="Processing">Processing</option>
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>
                              
                              <FormGroup>
                                    <Button style={{float: 'right'}} color="primary" type="submit" onClick={handleEdit} size="lg">
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

// product action modal
export const ViewProductModal = ({data}) => {
      const [modalViewOrder, setModalViewOrder] = useState(false);
      const toggleModalViewOrder = () => setModalViewOrder(!modalViewOrder);
      // console.log(data, 'viewing order');
      const {orders} = useSelector(state => state.slydocommerce.orders);
      const dispatch = useDispatch();   
      const fetchDetails = async () => {
            // await dispatch(viewOrders({id: data.orderNumber}));
      }
      // console.log(data.orderNumber, 'viewing order');
      // console.log(orders, 'orders');

      useEffect(() => {
            // dispatch(getOrders());
            // fetchDetails();
            // dispatch(viewOrders({id: data.orderNumber}));
      }, [])
   
      return (
            <>
            <Button color="primary" onClick={toggleModalViewOrder} className="btn-dim btn-icon" size="md">
                  <Icon name="folder-list" />
            </Button>
            <Modal isOpen={modalViewOrder} toggle={toggleModalViewOrder}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalViewOrder}
                        close={ <button className="close" onClick={toggleModalViewOrder}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>View Product</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Product Name</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.name}
                                    // placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Short Description</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.short_description}
                                    // placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              {/* <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Order Description</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.description}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Order Type</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.type}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup> */}

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Product Category</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.category}
                                    // placeholder="Input placeholder"
                                    />
                              </FormGroup>

                             
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Price</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.amount/100}
                                    // value={data.amount.toLocaleString()}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Status</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.condition}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label className="form-label" htmlFor="full-name">
                                          Product Images
                                    </label>
                                    <div className="project-meta mb-3">
                                          {
                                                data.pictures === null ? 
                                                <ul className="project-users g-1">
                                                <li>
                                                <UserAvatar className="lg" value={data.filename} text={findUpper("Apple")} theme="primary" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                          </ul>
                                            : 
                                                <ul className="project-users g-1">
                                                      {
                                                            data.pictures.map((item, index)=>{
                                                                  return(
                                                                        <li key={index}>
                                                                              <UserAvatar className="lg" value={item} image={item?.file} theme="primary" />
                                                                        </li>
                                                                  )
                                                            })
                                                      }
                                                </ul>
                                          }
                                    </div>
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const UpdateProductModal = ({data}) => {
      const [modalForm, setModalForm] = useState(false);
      const toggleForm = () => setModalForm(!modalForm);
      const {categories} = useSelector(state => state.slydocommerce)
      console.log(categories)
      const [name, setName] = useState(data.name);
      const [getPrice, setPrice] = useState(data.amount);
      const [description, setDescription] = useState(data.description);
      // const [image, setImage] = useState("");
      const [short_description, setShortDescription] = useState(data.short_description);
      const [category, setCategory] = useState(data.category);
      const [condition, setCondition] = useState(data.condition);
      const dispatch = useDispatch();

      const [file, setFile] = useState("");

      // console.log(data, "data from update product modal");

      const refreshPage = () => {
            setTimeout(() => {         
            window.location.reload();
            }, 2000);
      }

      const handleUpdateProduct = async() => {
            let imagefile_0 = file[0];
            let imagefile_1 = file[1];
            let imagefile_2 = file[2];
            let imagefile_3 = file[3];
            let imagefile_4 = file[4];
            let imagefile_5 = file[5];
            
            let imageLength = file.length;
            let price = parseInt(getPrice)
            let updateProductForm = new FormData();
            updateProductForm.append("name", name);
            updateProductForm.append("price", price);
            updateProductForm.append("description", description);
            updateProductForm.append("short_description", short_description);
            updateProductForm.append("category", category);
            updateProductForm.append("condition", condition);
            updateProductForm.append("imagefile_0", imagefile_0);
            updateProductForm.append("imagefile_1", imagefile_1);
            updateProductForm.append("imagefile_2", imagefile_2);
            updateProductForm.append("imagefile_3", imagefile_3);
            updateProductForm.append("imagefile_4", imagefile_4);
            updateProductForm.append("imagefile_5", imagefile_5);
            updateProductForm.append("image_count", imageLength);
            console.log(name, price, description, short_description, category, condition);
            dispatch(updateProduct({updateProductForm, id: data.id}));
            refreshPage();
      }

      return (
            <>
            <Button color="primary" onClick={toggleForm} className="btn-dim btn-icon" size="md">
                  <Icon name="pen-fill" />
            </Button>
            <Modal isOpen={modalForm} toggle={toggleForm}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleForm}
                        close={ <button className="close" onClick={toggleForm}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Update Product</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Product Name
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="email" />
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="full-name">
                                          Product Short Description
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" value={short_description} onChange={(e)=>setShortDescription(e.target.value)} className="form-control" id="full-name" />
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="phone-no">
                                          Product Description
                                    </label>
                                    {/* <div className="form-control-wrap">
                                          <input type="text" value={data.description} className="form-control" id="phone-no" />
                                    </div> */}
                                    
                                    <div className="input-group">
                                          <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                                    </div>
                              </FormGroup>
                              
                              <FormGroup>
                                    <label className="form-label" htmlFor="full-name">
                                          Product Category
                                    </label>
                                    <div className="form-control-wrap">
                                          <div className="form-control-select">
                                                <Input type="select" name="select" id="default-4" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                                      {/* <option value="default_option">{data.category}</option> */}
                                                    {
                                                              categories.map((item, index)=>{
                                                                        return(
                                                                              <option key={index} value={item}>{item}</option>
                                                                        )
                                                              })
                                                    }
                                                </Input>
                                          </div>
                                    </div>
                              </FormGroup>

                              <Row className="gy-4 align-center">
                                    {/* <Col lg="12">
                                          
                                    </Col> */}
                                    <Col lg="6">
                                          <FormGroup>
                                                <label className="form-label" htmlFor="full-name">
                                                      Product Condition
                                                </label>
                                                <div className="form-control-wrap">
                                                      <div className="form-control-select">
                                                            <Input type="select" name="select" id="default-4" value={condition} onChange={(e)=>setCondition(e.target.value)}>
                                                                  <option value="default_option">{condition}</option>
                                                                  <option value="Fair">Fair</option>
                                                                  <option value="Good">Good</option>
                                                                  <option value="Like New">Like New</option>
                                                                  <option value="New">New</option>
                                                                  <option value="Poor">Poor</option>
                                                            </Input>
                                                      </div>
                                                </div>
                                          </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                          <FormGroup>
                                                <label className="form-label" htmlFor="full-name">
                                                      Amount
                                                </label>
                                                <div className="form-control-wrap">
                                                      <input type="text" className="form-control" id="full-name" value={getPrice} onChange={(e)=>setPrice(e.target.value)} />
                                                </div>
                                          </FormGroup>
                                    </Col>
                              </Row>
                              <FormGroup>
                                    <label className="form-label" htmlFor="full-name">
                                          Product Images
                                    </label>
                                    <div className="project-meta mb-3">
                                          {
                                                data.pictures === null ? 
                                                <ul className="project-users g-1">
                                                <li>
                                                <UserAvatar className="lg" value={data.filename} text={findUpper("Apple")} theme="primary" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                                <li>
                                                <UserAvatar className="lg" text={findUpper("Samsung")} theme="blue" />
                                                </li>
                                          </ul>
                                            : 
                                                <ul className="project-users g-1">
                                                      {
                                                            data.pictures.map((item, index)=>{
                                                                  return(
                                                                        <li key={index}>
                                                                              <UserAvatar className="lg" value={item} image={item?.file} theme="primary" />
                                                                        </li>
                                                                  )
                                                            })
                                                      }
                                                </ul>
                                          }
                                    </div>
                                    <div className="form-control-wrap">
                                          <div className="custom-file">
                                                <input
                                                      type="file"
                                                      multiple
                                                      className="custom-file-input form-control"
                                                      id="customFile"
                                                      onChange={(e) => setFile(e.target.files)}
                                                />
                                                <Label className="custom-file-label" htmlFor="customFile">
                                                      {file === "" ? "Choose file" : file[0].name}
                                                </Label>
                                          </div>
                                    </div>
                              </FormGroup>
                              
                              <hr style={{width: '100%'}}/>
                              
                              <FormGroup>
                                    <Row className="g-gs">
                                          <Col xxl="12">
                                                <Row className="g-gs text-center">
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{width: '100%', textAlign: 'center', alignItem: 'center', alignContent: 'center'}} color="danger" outline className="btn-dim text-center" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                                                  Discard
                                                            </Button>
                                                      </Col>
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{float: 'right', width: '100%', textAlign: 'center'}} color="primary" type="submit" onClick={handleUpdateProduct} size="lg">
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

export const DeleteProductModal = ({data}) => {
      const dispatch = useDispatch()
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);

      const refreshPage = () => {
            const timer =  setTimeout(() => {   
                  window.location.reload();
                  }, 5500);
           return () => clearTimeout(timer);
      }

      const handleDeleteProduct = () => {
            dispatch(deleteProduct({id: data.id}))             
            refreshPage()

      }
      
      return (
            <>
            <Button color="danger" onClick={toggleModalRemove} className="btn-dim btn-icon" size="md">
                  <Icon name="minus-c" />
            </Button>
            <Modal isOpen={modalRemove} toggle={toggleModalRemove}>
                  <ModalBody className="modal-body-lg text-center">
                        <div className="nk-modal">
                              <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-minus-c bg-danger"></Icon>
                              {/* <h4 className="nk-modal-title">Remove {user.username} from Connection!</h4> */}
                              <div className="nk-modal-text">
                                    <p className="lead">
                                          Are you sure you want to delete this product from your list? 
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button color="danger" size="lg" className="btn-mw" onClick={handleDeleteProduct}>
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

export const ViewServiceModal = ({data}) => {
      const [modalViewOrder, setModalViewOrder] = useState(false);
      const toggleModalViewOrder = () => setModalViewOrder(!modalViewOrder);
      // console.log(data, 'viewing order');
      // const {orders} = useSelector(state => state.slydocommerce.orders);
      // const dispatch = useDispatch();   
      // const fetchDetails = async () => {
      //       // await dispatch(viewOrders({id: data.orderNumber}));
      // }

      useEffect(() => {
            // dispatch(getOrders());
            // fetchDetails();
            // dispatch(viewOrders({id: data.orderNumber}));
      }, [])
   
      return (
            <>
            <Button color="primary" onClick={toggleModalViewOrder} className="btn-dim btn-icon" size="md">
                  <Icon name="folder-list" />
            </Button>
            <Modal isOpen={modalViewOrder} toggle={toggleModalViewOrder}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleModalViewOrder}
                        close={ <button className="close" onClick={toggleModalViewOrder}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>View Service</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Service Name</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.serviceName}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Service Type</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.serviceType}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Description</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.description}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Price</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.amount/100}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>

                              <FormGroup>
                                    <label htmlFor="default-5" className="form-label">Service Provider</label>
                                    <input
                                    className="form-control"
                                    disabled
                                    value={data.serviceProvider}
                                    placeholder="Input placeholder"
                                    />
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="full-name">
                                          Service Image
                                    </label>
                                    <div className="project-meta mb-3">
                                        {
                                          data.serviceImages === null ? 
                                          <ul className="project-users g-1">
                                          <li>
                                          <UserAvatar className="lg" image={data.image} text={findUpper("Apple")} theme="primary" />
                                          </li>
                                          </ul>
                                          :
                                          <ul className="project-users g-1">
                                                {
                                                      data.serviceImages.map((image, index) => {
                                                            return (
                                                                  <li key={index}>
                                                                        <UserAvatar className="lg" image={image.file} text={findUpper("Apple")} theme="primary" />
                                                                  </li>
                                                            )

                                                      })
                                                }
                                          </ul>   
                                        }
                                    </div>
                              </FormGroup>
                        </form>
                  </ModalBody>
            </Modal>
            </>
      );
};

export const UpdateServiceModal = ({data}) => {
      const [modalForm, setModalForm] = useState(false);
      const toggleForm = () => setModalForm(!modalForm);
      const [name, setServiceName] = useState(data.serviceName);
      const [type, setServiceType] = useState(data.serviceType);
      const [getPrice, setPrice] = useState(data.amount);
      const [description, setDescription] = useState(data.description);
      const {categories} = useSelector(state => state.slydocommerce)
      const [category, setCategory] = useState(data.category);
      const parseCategories = categories.map(category => ({
            value: category,
            label: category
          }))
          const handleSetCategory = (selectedCategory) => {
            setCategory(selectedCategory);
          }
      // const [image, setImage] = useState("");
      // const [short_description, setShortDescription] = useState("");
      // const [category, setCategory] = useState("");
      // const [condition, setCondition] = useState("");
      const dispatch = useDispatch();
      const [file, setFile] = useState("");

      // console.log(data, "data from update product modal");

      const refreshPage = () => {
            setTimeout(() => {         
            window.location.reload();
            }, 1000);
      }

      const handleUpdateService = async(e) => {
            e.preventDefault()
            let imagefile_0 = file[0];
            let imagefile_1 = file[1];
            let imagefile_2 = file[2];
            let imagefile_3 = file[3];
            let imagefile_4 = file[4];
            let imagefile_5 = file[5];
            let imageLength = file.length;
            let price = parseInt(getPrice)
            const updateForm = new FormData();
            updateForm.append("name", name);
            updateForm.append("type", type);
            updateForm.append("price", price);
            updateForm.append("description", description);
            updateForm.append("category", category.value)
            updateForm.append("imagefile_0", imagefile_0);
            updateForm.append("imagefile_1", imagefile_1);
            updateForm.append("imagefile_2", imagefile_2);
            updateForm.append("imagefile_3", imagefile_3);
            updateForm.append("imagefile_4", imagefile_4);
            updateForm.append("imagefile_5", imagefile_5);
            updateForm.append("image_count", imageLength);
            dispatch(updateService({updateForm, id: data.id}));
            toast.success(" Services Edited Successfully", {
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
       
            console.log(imagefile_0, imagefile_1, imagefile_2, imagefile_3, imagefile_4, imagefile_5, imageLength, price, category.value, "imagefile_0, imagefile_1, imagefile_2, imagefile_3, imagefile_4, imagefile_5, imageLength, price, category.value");
           
            refreshPage();
      }

      return (
            <>
            <Button color="primary" onClick={toggleForm} className="btn-dim btn-icon" size="md">
                  <Icon name="pen-fill" />
            </Button>
            <Modal isOpen={modalForm} toggle={toggleForm}>
                  <ModalHeader
                        // color="primary"
                        className="bg-primary"
                        toggle={toggleForm}
                        close={ <button className="close" onClick={toggleForm}> <Icon className="icon-light" color="light" name="cross" /> </button> }
                  >
                        <span style={{color: '#ffffff'}}>Update Service</span>
                  </ModalHeader>
                  <ModalBody>
                        <form>
                              
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Service Name
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" value={name} onChange={(e)=>setServiceName(e.target.value)} className="form-control" id="email" />
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Service Type
                                    </label>
                                    <div className="form-control-wrap">
                                          <input type="text" value={type} onChange={(e)=>setServiceType(e.target.value)} className="form-control" id="email" />
                                    </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="phone-no">
                                          Service Description
                                    </label>
                                    <div className="input-group">
                                          <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                                    </div>
                              </FormGroup>
                              <FormGroup>
                              <div className="form-group">
                              <label className="form-label" htmlFor="SKU">
                                    Category
                              </label>
                              <div className="form-control-wrap">
                                    <RSelect
                                    name="type"
                                    value={category}
                                    onChange={handleSetCategory}
                                    options= {parseCategories}
                                          
                                    />
                              </div>
                              </div>
                              </FormGroup>
                              <FormGroup>
                                    <label className="form-label" htmlFor="email">
                                          Price
                                    </label>
                                    <div className="form-control-wrap">
                                          <div className="form-icon form-icon-left">
                                                <Icon name="sign-kobo-alt" />
                                          </div>
                                          <input value={getPrice} onChange={(e)=> {setPrice(e.target.value)}} type="text" className="form-control" id="price" />
                                    </div>
                              </FormGroup>

                              <FormGroup>
                                    <label className="form-label" htmlFor="full-name">
                                          Service Image
                                    </label>
                                    <div className="project-meta mb-3">
                                        {
                                          data.serviceImages === null ? 
                                          <ul className="project-users g-1">
                                          <li>
                                          <UserAvatar className="lg" image={data.image} text={findUpper("Apple")} theme="primary" />
                                          </li>
                                          </ul>
                                          :
                                          <ul className="project-users g-1">
                                                {
                                                      data.serviceImages.map((image, index) => {
                                                            return (
                                                                  <li key={index}>
                                                                        <UserAvatar className="lg" image={image.file} text={findUpper("Apple")} theme="primary" />
                                                                  </li>
                                                            )

                                                      })
                                                }
                                          </ul>   
                                        }
                                    </div>
                                    <div className="form-control-wrap">
                                          <div className="custom-file">
                                                <input
                                                      type="file"
                                                      multiple
                                                      className="custom-file-input form-control"
                                                      id="customFile"
                                                      onChange={(e) => setFile(e.target.files)}
                                                />
                                                <Label className="custom-file-label" htmlFor="customFile">
                                                      {file === "" ? "Choose file" : file[0].name}
                                                </Label>
                                          </div>
                                    </div>
                              </FormGroup>
                              <hr style={{width: '100%'}}/>
                              <FormGroup>
                                    <Row className="g-gs">
                                          <Col xxl="12">
                                                <Row className="g-gs text-center">
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{width: '100%', textAlign: 'center', alignItem: 'center', alignContent: 'center'}} color="danger" outline className="btn-dim text-center" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                                                  Discard
                                                            </Button>
                                                      </Col>
                                                      <Col lg="12" xxl="6">
                                                            <Button style={{float: 'right', width: '100%', textAlign: 'center'}} color="primary" type="submit" onClick={handleUpdateService} size="lg">
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

export const DeleteServiceModal = ({data}) => {
      const [modalRemove, setModalRemove] = useState(false);
      const toggleModalRemove = () => setModalRemove(!modalRemove);
      const dispatch = useDispatch();

      const refreshPage = () => {
            const timer = setTimeout(() => {   
                  window.location.reload();
                  }, 50);
           return () => clearTimeout(timer);
      }

      const handleDeleteService = () => {
            toast.success("Service removed successfully", {
                  type: toast.TYPE.PRIMARY,
                  style: {
                    backgroundColor: "#e4fbf5",
                    borderColor: "#aef4e1",
                    border: "1px solid #aef4e1",
                    borderRadius: "4px",
                    fontColor: '#19bc90',
                  //   marginLeft: "-130px"
                  },
                  bodyClassName: "text-sm text-danger"
            })
            dispatch(deleteService({id: data.id}))  
            toggleModalRemove()           
            refreshPage()
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
                              <h4 className="nk-modal-title">Remove <span style={{}}>{data.serviceName}</span> from Services!</h4>
                              <div className="nk-modal-text">
                                    <p className="lead" style={{fontSize: 15}}>
                                          Are you sure you want to delete this service? 
                                    </p>
                      
                                    <div className="nk-modal-action mt-5">
                                          <Button onClick={handleDeleteService} color="danger" size="lg" className="btn-mw">
                                                Delete
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