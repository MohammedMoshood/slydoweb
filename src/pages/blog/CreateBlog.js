import React from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { QuillComponent, QuillComponentMinimal } from "../../slydo-components/text-editor/TextEditor";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
} from "../../slydo-components/Component";


const CreateBlog = () => {
  return (
    <React.Fragment>
      <Head title="Create Blog Post" />
      <Content page="component">
        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Create Blog</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <QuillComponent />
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CreateBlog;
