import React, { useContext, useState, useEffect, useCallback } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Dropzone from "react-dropzone";
import ProductH from "../../../images/product/h.png";
import ProductLGB from "../../../images/product/lg-b.jpg";
import ProductLGC from "../../../images/product/lg-c.jpg";
import ProductLGD from "../../../images/product/lg-d.jpg";
import ProductLGE from "../../../images/product/lg-e.jpg";
import ProductLGF from "../../../images/product/lg-f.jpg";
import SimpleBar from "simplebar-react";
import { getCategories, getConditions } from "../../../redux/actions/slydocommerce";
import { Link } from "react-router-dom";
import { RSelect } from "../../../slydo-components/Component";
import {
  BlockHead,
  BlockDes,
  BlockTitle,
  BlockBetween,
  BlockHeadContent,
  Icon,
  Button,
  Block,
  Row,
  Col,
  PaginationComponent,
} from "../../../components/Component";
import { useForm } from "react-hook-form";
import { Card, CardSubtitle, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Badge } from "reactstrap";
import { ProductContext } from "./ProductContext";
import { productCardData } from "./ProductData";
import {useSelector, useDispatch} from "react-redux";
import { getProducts, createProducts} from "../../../redux/actions/slydocommerce";
import { useHistory } from 'react-router-dom';


const ProductCard = () => {
  const history = useHistory();
  const { contextData } = useContext(ProductContext);
  const [data, setData] = contextData;

  const [sm, updateSm] = useState(false);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [fileArray, setfileArray] = useState([]);

  const [view, setView] = useState(false);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);
  // const [files, setFiles] = useState([]);
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
    dispatch(getProducts(user.username))
    dispatch(getCategories())
    dispatch(getConditions())

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Changing state value when searching name

  const filteredObject = products?.products?.filter((item) => {
          return item.name.toLowerCase().includes(filter.toLowerCase());
        });
  // useEffect(() => {
  //   if (filter !== "") {
  //     const filteredObject = productCardData.filter((item) => {
  //       return item.name.toLowerCase().includes(filter.toLowerCase());
  //     });
  //     setData([...filteredObject]);
  //   } else {
  //     setData([...productCardData]);
  //   }
  // }, [filter, setData]);

  const toggle = () => {
    setView(!view);
  };

  const onFormSubmit = () => {
    const formdata = new FormData();
    let imagefile_0 =  fileArray[0]
    let image_count = fileArray.length 
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("short_description", short_description);
    formdata.append("price", price);
    formdata.append("category", category.value);
    formdata.append("condition", condition.value);
    formdata.append("image_count", image_count);
    formdata.append("imagefile_0", imagefile_0);
    dispatch(createProducts(formdata))
    setData([formdata, ...products]);
    console.log(name, description, short_description, price, category, condition, imagefile_0)
    setView(!view);

    // setfileArray([]);
  };

  // filter text
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  console.log(products, "the redux products")

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = filteredObject?.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Product Grid"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle>Products</BlockTitle>
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
                    <li>
                      <div className="form-control-wrap">
                        <div className="form-icon form-icon-right">
                          <Icon name="search"></Icon>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="default-04"
                          onChange={onFilterChange}
                          placeholder="Quick search by name"
                        />
                      </div>
                    </li>
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color="transparent"
                          className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                        >
                          Status
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>New Items</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>Featured</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>Out of Stock</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
                    <li className="nk-block-tools-opt">
                      <Button className="d-none d-md-inline-flex btn-dim" color="dark" onClick={() => history.push('/products') }>
                        <Icon size="xl" onClick={() => history.push('/products') } name="view-panel"></Icon>
                        <span>View Table</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            {currentItems?.length > 0 ? (
              currentItems.map((item) => {
                // console.log(item, "each item")
                return (
                  <Col xxl={3} xlg={4} xsm={3} xs={3} key={item.id}>
                    <Card className="product-card">
                      <div className="product-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/product-details/${item.id}`}>
                          <img height="200" className="card-img-top" src={item?.image} alt="" />
                        </Link>
                        <ul className="product-badges" style={{float: 'right'}}>
                          {/* {item.new && (
                            <li>
                              <Badge color="success">New</Badge>
                            </li>
                          )}
                          {item.hot && (
                            <li>
                              <Badge color="danger">New</Badge>
                            </li>
                          )} */}
                          <li>
                            {/* <Badge style={{padding: 5}} color="light"> */}
                              <Button className="d-none d-md-inline-flex btn-dim rounded" color="dark" onClick={() => history.push('/product-card') }>
                                <Icon size="xl" onClick={() => history.push('/product-card') } name="pen2"></Icon>
                              </Button>
                            {/* </Badge> */}
                          </li>
                        </ul>
                        {/* <ul className="product-actions">
                          <li>
                            <a href="#cart" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="cart"></Icon>
                            </a>
                          </li>
                          <li>
                            <a href="#like" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="heart"></Icon>
                            </a>
                          </li>
                        </ul> */}
                      </div>
                      <div className="card-inner text-left">
                        {/* <ul className="product-tags">
                          <li>
                            <Link to={`${process.env.PUBLIC_URL}/product-details/${item.id}`}>{item.short_description}</Link>
                          </li>
                        </ul> */}
                        <h5 className="product-title">
                          <Link to={`${process.env.PUBLIC_URL}/product-details/${item.id}`}>{item.name}</Link>
                        </h5>
                        <div className="product-price text-primary h5">
                          <small className="text-muted del fs-13px">{item.prevPrice}</small> &#8358;{item.amount}
                        </div>
                        <div className="product-price">
                          {item.short_description}
                        </div>
                        <div className="mb-2 ff-base">
                          {item.dateAndTime}
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div className="ml-2">No product found</div>
            )}
          </Row>
          {currentItems?.length > 0 && (
            <div className="mt-3">
              <PaginationComponent
                itemPerPage={itemPerPage}
                totalItems={filteredObject.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          )}
        </Block>

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
                  <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
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
export default ProductCard;
