import React from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, UncontrolledDropdown, DropdownMenu, DropdownItem } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockBetween,
  Icon
} from "../../slydo-components/Component";

const BlogPost = () => {
  return (
    <React.Fragment>
      <Head title="Create Blog Post" />
      <Content page="component">
      <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle>Products</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                {/* <a
                  href="#more"
                  className="btn btn-icon btn-trigger toggle-expand mr-n1"
                  onClick={(ev) => {
                    ev.preventDefault();
                    updateSm(!sm);
                  }}
                >
                  <Icon name="more-v"></Icon>
                </a> */}
                <div className="toggle-expand-content" 
                  // style={{ display: sm ? "block" : "none" }}
                  >
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      <Button className="toggle d-none d-md-inline-flex" color="primary" 
                        // onClick={toggle}
                        >
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
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Products</BlockTitle>
            </BlockHeadContent>
          </BlockHead>

        </Block>
        <Block>
          <Row className="g-gs">
            <Col lg="12" xxl="12">
              <Row className="g-gs">
                <Col lg="4" xxl="12" >
                  <Card className="card-bordered">   
                    <CardImg top src="../../images/slides/slide-a.jpg" alt="" />
                    <CardBody className="card-inner">
                      <CardTitle tag="h5">Dinner Furniture</CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                      </CardText>
                      <Button color="primary" className="btn-dim">Edit</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg="4" xxl="12" >
                  <Card className="card-bordered">   
                    <CardImg top src="../../images/slides/slide-a.jpg" alt="" />
                    <CardBody className="card-inner">
                      <CardTitle tag="h5">Dinner Furniture</CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                      </CardText>
                      <Button color="primary" className="btn-dim">Edit</Button>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg="4" xxl="12" >
                  <Card className="card-bordered">   
                    <CardImg top src="../../images/slides/slide-a.jpg" alt="" />
                    <CardBody className="card-inner">
                      <CardTitle tag="h5">Dinner Table</CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                      </CardText>
                      <Button color="primary" className="btn-dim">Edit</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default BlogPost;
