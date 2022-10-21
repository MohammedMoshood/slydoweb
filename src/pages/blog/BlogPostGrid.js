import React from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
} from "../../slydo-components/Component";

const BlogPostGrid = () => {
  return (
    <React.Fragment>
      <Head title="Create Blog Post" />
      <Content page="component">

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Blog Posts</BlockTitle>
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

export default BlogPostGrid;
