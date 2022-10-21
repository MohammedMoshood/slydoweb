import User from "../../images/avatar/b-sm.jpg";
import User2 from "../../images/avatar/c-sm.jpg";
import User3 from "../../images/avatar/a-sm.jpg";
import User4 from "../../images/avatar/d-sm.jpg";
import React from "react";
import { UserAvatar, Icon } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";

// export const basicData = {
//   header: ["#", "First", "Last"],
//   data: [
//     {
//       id: "1",
//       first: "Mark",
//       last: "Otto",
//     },
//     {
//       id: "2",
//       first: "Jacob",
//       last: "Thornton",
//     },
//     {
//       id: "3",
//       first: "Larry",
//       last: "the bird",
//     },
//   ],
// };

// export const dataTableColumns = [
//   {
//     name: "Name",
//     selector: (row) => row.name,
//     sortable: true,
//   },
//   {
//     name: "Age",
//     selector: (row) => row.age,
//     sortable: true,
//     hide: 370,
//   },
//   {
//     name: "Gender",
//     selector: (row) => row.gender,
//     sortable: true,
//     hide: "sm",
//   },
//   {
//     name: "Company",
//     selector: (row) => row.company,
//     sortable: true,
//     hide: "sm",
//   },
//   {
//     name: "Start Date",
//     selector: (row) => row.startDate,
//     sortable: true,
//     hide: "md",
//   },
//   {
//     name: "Salary",
//     selector: (row) => row.salary,
//     sortable: true,
//     hide: "md",
//   },
// ];

export const AllMessagesTableColumns = [
  {
    name: "Archive",
    selector: (row) => row.archived,
    sortable: true,
    minWidth: "170px",
    hide: "md",
    cell: (row) => (
      <ul className="list-status d-flex">
        <li>
          <Icon
            classNamex={`text-dark`} 
            name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "archive" }`}
          ></Icon>{" "}
        </li>
        <li>
          <Icon
            className={`text-dark`}
            name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "star" }`}
          ></Icon>{" "}
        </li>
      </ul>
    //   <ul className="list-status d-flex">
    //   <li>
    //     <Icon
    //       className={`text-${
    //         row.emailStatus === "success" ? "success" : row.emailStatus === "pending" ? "info" : "secondary"
    //       }`}
    //       name={`${
    //         row.emailStatus === "success"
    //           ? "star-fill"
    //           : row.emailStatus === "alert"
    //           ? "archive"
    //           : "alarm-alt"
    //       }`}
    //     ></Icon>{" "}
    //     {/* <span>Email</span> */}
    //   </li>
    //   <li>
    //     <Icon
    //       className={`text-${
    //         row.kycStatus === "success"
    //           ? "success"
    //           : row.kycStatus === "pending"
    //           ? "info"
    //           : row.kycStatus === "warning"
    //           ? "warning"
    //           : "secondary"
    //       }`}
    //       name={`${
    //         row.kycStatus === "success" ? "archive" : row.kycStatus === "pending" ? "alarm-alt" : "alert-circle"
    //       }`}
    //     ></Icon>{" "}
    //     {/* <span>KYC</span> */}
    //   </li>
    // </ul>
    ),
  },
  {
    name: "Sender",
    selector: (row) => row.username,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.username)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.username}{" "}
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
  // {
  //   name: "Balance",
  //   selector: (row) => row.balance,
  //   minWidth: "140px",
  //   cell: (row) => (
  //     <span className="tb-amount">
  //       {row.balance} <span className="currency">USD</span>
  //     </span>
  //   ),
  //   sortable: true,
  //   hide: 480,
  // },
  // {
  //   name: "Phone",
  //   selector: (row) => row.phone,
  //   sortable: true,
  //   cell: (row) => <span>{row.phone}</span>,
  //   hide: "md",
  // },
  {
    name: "Title",
    selector: (row) => row.subtitle,
    sortable: false,
    cell: (row) => <span>{row.subtitle}</span>,
    hide: "lg",
  },
  {
    name: "Date",
    selector: (row) => row.timeSent,
    sortable: true,
    cell: (row) => <span>{row.timeSent}</span>,
    hide: "lg",
  },
];

export const StarredMessagesTableColumns = [
  {
    name: "Archive",
    selector: (row) => row.archived,
    sortable: true,
    minWidth: "170px",
    hide: "md",
    cell: (row) => (
      <span>
        <Icon
            className={`text-dark`}
            name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "star" }`}
          ></Icon>{" "}
      </span>
      // <ul className="list-status d-flex">
      //   <li>
      //     <Icon
      //       classNamex={`text-dark`} 
      //       name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "archive" }`}
      //     ></Icon>{" "}
      //   </li>
      //   <li>
      //     <Icon
      //       className={`text-dark`}
      //       name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "star" }`}
      //     ></Icon>{" "}
      //   </li>
      // </ul>
    ),
  },
  {
    name: "Sender",
    selector: (row) => row.username,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.username)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.username}{" "}
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
    name: "Title",
    selector: (row) => row.subtitle,
    sortable: false,
    cell: (row) => <span>{row.subtitle}</span>,
    hide: "lg",
  },
  {
    name: "Date",
    selector: (row) => row.timeSent,
    sortable: true,
    cell: (row) => <span>{row.timeSent}</span>,
    hide: "lg",
  },
];

export const ArchivedMessagesTableColumns = [
  {
    name: "Archive",
    selector: (row) => row.archived,
    sortable: true,
    minWidth: "170px",
    hide: "md",
    cell: (row) => (
      <span>
        <Icon
            className={`text-dark`}
            name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "archive" }`}
          ></Icon>{" "}
      </span>
      // <ul className="list-status d-flex">
      //   <li>
      //     <Icon
      //       classNamex={`text-dark`} 
      //       name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "archive" }`}
      //     ></Icon>{" "}
      //   </li>
      //   <li>
      //     <Icon
      //       className={`text-dark`}
      //       name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "star" }`}
      //     ></Icon>{" "}
      //   </li>
      // </ul>
    ),
  },
  {
    name: "Sender",
    selector: (row) => row.username,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.username)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.username}{" "}
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
    name: "Title",
    selector: (row) => row.subtitle,
    sortable: false,
    cell: (row) => <span>{row.subtitle}</span>,
    hide: "lg",
  },
  {
    name: "Date",
    selector: (row) => row.timeSent,
    sortable: true,
    cell: (row) => <span>{row.timeSent}</span>,
    hide: "lg",
  },
];

export const SentMessagesTableColumns = [
  // {
  //   name: "Archive",
  //   selector: (row) => row.archived,
  //   sortable: true,
  //   minWidth: "170px",
  //   hide: "md",
  //   cell: (row) => (
  //     <span>
  //       <Icon
  //           className={`text-dark`}
  //           name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "archive" }`}
  //         ></Icon>{" "}
  //     </span>
  //     // <ul className="list-status d-flex">
  //     //   <li>
  //     //     <Icon
  //     //       classNamex={`text-dark`} 
  //     //       name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "archive" }`}
  //     //     ></Icon>{" "}
  //     //   </li>
  //     //   <li>
  //     //     <Icon
  //     //       className={`text-dark`}
  //     //       name={`${ row.emailStatus === "success" ? "archive" : row.emailStatus === "alert" ? "archive" : "star" }`}
  //     //     ></Icon>{" "}
  //     //   </li>
  //     // </ul>
  //   ),
  // },
  {
    name: "Sender",
    selector: (row) => row.username,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.username)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.username}{" "}
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
    name: "Title",
    selector: (row) => row.subtitle,
    sortable: true,
    cell: (row) => <span>{row.subtitle}</span>,
    hide: "lg",
  },
  {
    name: "Date",
    selector: (row) => row.timeSent,
    sortable: true,
    cell: (row) => <span>{row.timeSent}</span>,
    hide: "lg",
  },
];