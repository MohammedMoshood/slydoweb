import User from "../../images/avatar/b-sm.jpg";
import UBA from "../../images/banks/uba.jpg";
import Fidelity from "../../images/banks/fidelity.jpg";
import GTBank from "../../images/banks/GTBank.png";
import Providus from "../../images/banks/providus.jpg";
import User2 from "../../images/avatar/c-sm.jpg";
import User3 from "../../images/avatar/a-sm.jpg";
import User4 from "../../images/avatar/d-sm.jpg";
import React from "react";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import { UpdateBlogPostModal, DeleteBlogPostModal } from "./ModalData";

// transaction table
export const blogPostTable = [
  {
    name: "Title",
    selector: (row) => row.title,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.title)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.title}{" "}
            {/* <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ml-1`}
            ></span> */}
          </span>
          {/* <span>{row.email}</span> */}
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Text",
    selector: (row) => row.text,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        {/* <UserAvatar theme={row.avatarBg} text={findUpper(row.to_name)} image={row.to_image}></UserAvatar> */}
        <div className="user-info">
          <span className="tb-lead">
            {row.text}{" "}
            <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ml-1`}
            ></span>
          </span>
          {/* <span>{row.email}</span> */}
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Author Name",
    selector: (row) => row.author_name,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount text-dark">
        {/* <span className="currency text-dark">&#8358;</span>  */}
        {row.author_name}
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Read Time",
    selector: (row) => row.readTime,
    sortable: true,
    hide: "sm",
    cell: (row) => (
      <span
        // className={`tb-status btn-dim ml-1 text-${
        //   row.status === "New Order" ? "success" : row.status === "Processing" ? "warning" : row.status === "Awaiting Payment" ? "primary" : row.status === "Canceled" ? "danger" : "Completed" ? "dark" : "Pending" ? "#0000FF" : "danger"
        // }`}
        className="btn-dim btn-primary rounded" style={{padding: "5px 10px 5px 10px"}}
      >
        {row.readTime}
      </span>
    ),
  },
  {
    name: "Published Date",
    selector: (row) => row.publishedDate,
    width: "220px",
    sortable: true,
    cell: (row) => <span>{row.publishedDate}</span>,
    hide: "lg",
  },  
  {
    name: "Category",
    selector: (row) => row.category,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.category} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.description} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    hide: "md",
    cell: (row) => (
      <>
      <UpdateBlogPostModal data={row} />
      &nbsp;
      <DeleteBlogPostModal data={row}/>
      </>
    ),
  },
];