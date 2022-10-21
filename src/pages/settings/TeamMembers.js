import React, {useState, useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockBetween,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
  Icon,
  Button, Row, Col
} from "../../slydo-components/Component";
import { Card, 
  // CardHeader, CardFooter, CardImg,
  // CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // CardLink,
  UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from "reactstrap";
import { teammembersTable, teammembersData } from "./TableData";
import { CreateTeamMemberModal } from "./ModalData";
import { useSelector, useDispatch } from "react-redux"
import { getTeamMembers } from "../../redux/actions/settings"
import { TeamMembersTable } from "./Table";

const TeamMembers = () => {
  const [sm, updateSm] = useState(false);

  const {teamMembers, loading} = useSelector(state => state.settings)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getTeamMembers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Head title="Team Members" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Team Members
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
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      {/* <Button color="primary">
                        <span>Create Team Member</span>
                      </Button> */}
                      <CreateTeamMemberModal/>
                    </li>
                  </ul>
                </div>
                
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard>
          <TeamMembersTable/>
          {/* {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={teamMembers}
              columns={teammembersTable}
              pagination
              className="nk-tb-list"
              selectableRows
            />
          } */}
          </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default TeamMembers;
