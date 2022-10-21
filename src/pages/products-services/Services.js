import React, {useEffect, useState} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead, BlockBetween,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable, Icon, Row, Col, RSelect, BlockDes, Button
} from "../../slydo-components/Component";
import { servicesTable } from "./TableData";
import Dropzone from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import { createServices, getServices, getServiceCategories } from "../../redux/actions/slydocommerce";
import SimpleBar from "simplebar-react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ServiceTable } from "./Table";

const Services = () => {
  const {services, categories, loading} = useSelector(state => state.slydocommerce)
  const dispatch = useDispatch()

  const [sm, updateSm] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  // const [condition, setCondition] = useState("");
  const [fileArray, setfileArray] = useState([]);

  const parseCategories = categories.map(category => ({
    value: category,
    label: category
  }))

  // const {user} = useSelector(state => state.user)

  useEffect(() => {
    // dispatch(getServices(user.username))
    dispatch(getServiceCategories())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshPage = () => {
    setTimeout(() => {  
    window.location.reload();
    }, 1000);
  }

  const handleSetCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  const [view, setView] = useState(false);
  const toggle = () => {
    setView(!view);
  };

  const onFormSubmit = () => {
    // dispatch(createShippingOption({name, short_description, description, category, price}))
    // setModalCreateShippingOption(!modalCreateShippingOption);
    const formdata = new FormData();
    let imagefile_0 =  fileArray[0]
    let imagefile_1 =  fileArray[1]
    let imagefile_2 =  fileArray[2]
    let imagefile_3 =  fileArray[3]
    let imagefile_4 =  fileArray[4]
    let imagefile_5 =  fileArray[5]
    let image_count = fileArray.length 
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("short_description", short_description);
    formdata.append("price", price);
    formdata.append("category", category.value);
    // formdata.append("condition", condition.value);
    formdata.append("image_count", image_count);
    formdata.append("imagefile_0", imagefile_0);
    formdata.append("imagefile_1", imagefile_1);
    formdata.append("imagefile_2", imagefile_2);
    formdata.append("imagefile_3", imagefile_3);
    formdata.append("imagefile_4", imagefile_4);
    formdata.append("imagefile_5", imagefile_5);

    dispatch(createServices(formdata))
    console.log(name, description, short_description, price, category, imagefile_0)
    setView(false);

    toast.success("Services created successfully", {
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
    // refreshPage();
}

// handles ondrop function of dropzone
const handleDropChange = (acceptedFiles, ) => {
  console.log(acceptedFiles)
  const setPreview =  acceptedFiles.map((file) =>
    Object.assign(file, {
      preview: URL.createObjectURL(file),
    })       
  )
  setfileArray(setPreview);
};

const { handleSubmit } = useForm();
  // const onFormSubmit = () => {
  //   setData([formdata, ...products]);
  //   console.log(name, description, short_description, price, category, condition, imagefile_0)
  //   setView(false);
  //   // setfileArray([]);
  // };

  return (
    <React.Fragment>
      <Head title="Services" />
      <Content>

        {/* <Block size="lg"> */}
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle tag="h4">Services</BlockTitle>
              </BlockHeadContent>
              <BlockHeadContent>
                <div className="toggle-wrap nk-block-tools-toggle">
                  <a
                    href="#more"
                    className="btn btn-icon btn-trigger toggle-expand mr-n1"
                    onClick={(ev) => {
                      ev.preventDefault();
                      updateSm(!sm);
                    }}
                  >
                    <Icon name="more-v"></Icon>
                  </a>
                  <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                    <ul className="nk-block-tools g-3">
                      <li className="nk-block-tools-opt">
                        <Button className="toggle btn-icon d-md-none" color="primary" onClick={toggle}>
                          <Icon name="plus"></Icon>
                        </Button>
                        <Button className="toggle d-none d-md-inline-flex" color="primary" onClick={toggle}>
                          <Icon name="plus"></Icon>
                          <span>Add Services</span>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <PreviewCard>
            <ServiceTable/>
          {/* { loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={services}
              columns={servicesTable}
              pagination
              className="nk-tb-list"
              selectableRows
            />
            } */}
          </PreviewCard>
        {/* </Block> */}
        <SimpleBar style={{width: '30%'}} className={`nk-add-product toggle-slide toggle-slide-right toggle-screen-any ${view ? "content-active" : ""}`}>
            <BlockHead>
              <BlockHeadContent>
                <BlockTitle tag="h5">Add Services</BlockTitle>
                <BlockDes>
                  <p>Add new information for a service.</p>
                </BlockDes>
              </BlockHeadContent>
            </BlockHead>
            <Block>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <Row className="g-3">
                  <Col size="12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="product-title">
                        Service Name
                      </label>
                      <div className="form-control-wrap">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col size="12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="product-description">
                        Service Description
                      </label>
                      <div className="form-control-wrap">
                        <textarea
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="form-control"
                          ></textarea>
                        </div>
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="sale-price">
                        Service Short Description
                      </label>
                      <div className="form-control-wrap">
                        <input
                          type="text"
                          value={short_description}
                          name="short_description"
                          className="form-control"
                          onChange={(e)=>setShortDescription(e.target.value)}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="stock">
                        Price
                      </label>
                      <div className="form-control-wrap">
                        <input
                          type="number"
                          name="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="SKU">
                        Category
                      </label>
                      <div className="form-control-wrap">
                        <RSelect
                          // className="form-control"
                          name="type"
                          value={category}
                          onChange={handleSetCategory}
                          options= {parseCategories}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col size="12">
                    <Dropzone  maxFiles={5} onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()} className="dropzone upload-zone small bg-lighter my-2 dz-clickable">
                            <input {...getInputProps()} multiple />
                            {fileArray.length === 0 && <p>Drag 'n' drop some files here, or click to select files</p>}
                            {fileArray.map((fileArray) => (
                              <div
                                key={fileArray.name}
                                className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                              >
                                <div className="dz-image">
                                  <img src={fileArray.preview} alt="preview" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </Col>
                  
                  <Col size="12">
                    <Button color="primary" 
                      // type="submit" onClick={() => handleCreateServiceSubmit}
                    >
                      <Icon className="plus"></Icon>
                      <span>Add Service</span>
                    </Button>
                  </Col>
                </Row>
              </form>
            </Block>
          </SimpleBar>
          {view && <div className="toggle-overlay" onClick={toggle}></div>}
      </Content>
    </React.Fragment>
  );
};
export default Services;
