import React, {useEffect} from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { QuillComponent, QuillComponentMinimal } from "../../slydo-components/text-editor/TextEditor";
import { connect } from "react-redux";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
} from "../../slydo-components/Component";
import { getTermsAndConditions } from "../../redux/actions/settings";

const TermsAndCondition = ({mapStateToProps, getTermsAndConditions  }) => {

  useEffect(() => {
    getTermsAndConditions();
  }, [ ])
  

   return (
    <React.Fragment>
      <Head title="Terms and Condition" />
      <Content page="component">
        <BlockHead size="sm">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Terms &amp; Condition</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <QuillComponentMinimal />
          </PreviewCard>
        </BlockHead>
      </Content>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    termsAndConditions: state.settings.termsAndConditions,
    
  };
}

export default connect(mapStateToProps, { getTermsAndConditions })(TermsAndCondition);
