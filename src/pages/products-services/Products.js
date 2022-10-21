import React, { useState, useEffect, useContext } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable,
  Button, Icon, Row, Col, RSelect, BlockDes
} from "../../slydo-components/Component";
import Dropzone from "react-dropzone";
import { productsTable } from "./TableData";
// import { ProductContext } from "./products/ProductContext";
import { useSelector, useDispatch } from "react-redux"
import { getProducts, createProducts, getCategories, getConditions } from "../../redux/actions/slydocommerce"
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SimpleBar from "simplebar-react";
import { useForm } from "react-hook-form";
import { ProductsTable } from "./Table";

const Products = () => {
  const history = useHistory();
  // const { contextData } = useContext(ProductContext);
  // const [data, setData] = contextData;

  const [sm, updateSm] = useState(false);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [fileArray, setfileArray] = useState([]);
  
  const {user} = useSelector(state => state.user)

  const {products, categories, conditions, loading} = useSelector(state => state.slydocommerce)
  const dispatch = useDispatch()
  console.log(conditions, 'conditions')
  
  const parseCategories = categories.map(category => ({
    value: category,
    label: category
  }))

  const parseConditions = conditions.map(condition => ({
    value: condition,
    label: condition
  }))
  console.log(parseConditions, 'parseConditions')

  const handleSetCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  const handleSetCondition = (selectedCondition) => {
    setCondition(selectedCondition);
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
  
  useEffect(() => {
    dispatch(getProducts(user.username, 1))
    dispatch(getCategories())
    dispatch(getConditions())

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total_row = Math.round(products.count/ products?.products?.length)

  // useEffect(() => {
  //   dispatch(getProducts(user.username))
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [view, setView] = useState(false);
  const toggle = () => {
    setView(!view);
  };

  const onFormSubmit = () => {
    const formdata = new FormData();
    let imagefile_0 = fileArray[0];
    let imagefile_1 = fileArray[1];
    let imagefile_2 = fileArray[2];
    let imagefile_3 = fileArray[3];
    let imagefile_4 = fileArray[4];
    let imagefile_5 = fileArray[5];

    let image_count = fileArray.length 
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("short_description", short_description);
    formdata.append("price", price);
    formdata.append("category", category.value);
    formdata.append("condition", condition.value);
    formdata.append("image_count", image_count);
    formdata.append("imagefile_0", imagefile_0);
    formdata.append("imagefile_1", imagefile_1);
    formdata.append("imagefile_2", imagefile_2);
    formdata.append("imagefile_3", imagefile_3);
    formdata.append("imagefile_4", imagefile_4);
    formdata.append("imagefile_5", imagefile_5);
    dispatch(createProducts(formdata))
    // setData([formdata, ...products]);
    console.log(name, description, short_description, price, category, condition, imagefile_0)
    // setView(false);
    // setfileArray([]);
  };

    // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [pageOffset, setPageOffset] = useState(0);

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getProducts(event?.selected + 1))
  };

  const { handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Products" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h4">Products</BlockTitle>
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
                      <Button className="d-none d-md-inline-flex btn-dim" color="dark" onClick={() => history.push('/product-card') }>
                        <Icon size="xl" onClick={() => history.push('/product-card') } name="view-grid-sq"></Icon>
                        <span>View Grid</span>
                      </Button>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button className="toggle btn-icon d-md-none" color="primary" onClick={toggle}>
                        <Icon name="plus"></Icon>
                      </Button>
                      <Button className="toggle d-none d-md-inline-flex" color="primary" onClick={toggle}>
                        <Icon name="plus"></Icon>
                        <span>Add Product</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
          </BlockHead>

          <PreviewCard>
            <ProductsTable/>
          {/* { loading ? <p className="text-center">loading...</p> :
            <>
            <ReactDataTable
              data={products}
              columns={productsTable}
              // pagination
              className="nk-tb-list"
              selectableRows
            />
            <div>
              <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={total_row}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                forcePage={pageOffset}
              />
            </div>
            </>
            } */}
          </PreviewCard>

          <SimpleBar className={`nk-add-product toggle-slide toggle-slide-right toggle-screen-any ${view ? "content-active" : ""}`}>
            <BlockHead>
              <BlockHeadContent>
                <BlockTitle tag="h5">Add Product</BlockTitle>
                <BlockDes>
                  <p>Add new information for a product.</p>
                </BlockDes>
              </BlockHeadContent>
            </BlockHead>
            <Block>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <Row className="g-3">
                  <Col size="12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="product-title">
                        Product Name
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
                        Product Description
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
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="regular-price">
                        Condition
                      </label>
                      <div className="form-control-wrap">
                        <RSelect
                          name="condition"  
                          // className="form-control"
                          value={condition}
                          onChange={handleSetCondition}
                          options= {parseConditions}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="sale-price">
                        Short Description
                      </label>
                      <div className="form-control-wrap">
                        <input
                          type="text"
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
                    <Dropzone maxFiles={5} onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
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
                    <Button color="primary">
                      <Icon className="plus"></Icon>
                      <span>Add Product</span>
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
export default Products;
