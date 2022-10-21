import React, {useState, useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { blogPostTable, payoutsData } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getBlogPosts } from "../../redux/actions/blog"

const BlogPost = () => {
  const [sm, updateSm] = useState(false);
  
  const {blogPosts, loading} = useSelector(state => state.blog)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogPosts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <Head title="Blog Post" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Blog Post
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard>
          { loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={blogPosts}
              columns={blogPostTable}
              pagination
              className="nk-tb-list"
              selectableRows
            />
          }
          </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default BlogPost;
