import React, {useEffect, useState} from "react";
import axios from "axios";
import User from "../../images/avatar/b-sm.jpg";
import User2 from "../../images/avatar/c-sm.jpg";
import User3 from "../../images/avatar/a-sm.jpg";
import User4 from "../../images/avatar/d-sm.jpg";
import { UserAvatar, Icon } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import { RemoveContactModal, RejectConnectionRequestModal, AcceptConnectionRequestModal, BlockContactModal, UnblockConnectionModal } from "./ModalData";

// contact table
export const contactsTable = [
  {
    name: "User",
    selector: (row) => row.name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.name)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.name}{" "}
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
    name: "Username",
    selector: (row) => row.username,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.username} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    // hide: "md",
    cell: (row) => (
      <>
      {/* {row.action} */}
      <RemoveContactModal/>
      &nbsp;
      <BlockContactModal/>
      </>
    ),
  },
];



// export const contactsData = [...contacts]
// const {full_name, user} = contactsData ({
//   columns, data
// })

export const contactsData = [
  {
    id: 1 + 1,
    avatarBg: "purple",
    full_name: "response.data.full_name",
    // name: contacts.results.full_name,
    // checked: false,
    // email: "info@slydo.co",
    username: "response.data.username",
    // username: contacts.results.username,
    action: "",
  },
];

// contact request table
export const contactRequestTable = [
  {
    name: "User",
    selector: (row) => row.name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.name)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.name}{" "}
            <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ml-1`}
            ></span>
          </span>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) => row.username,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.username} </span>
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
      <AcceptConnectionRequestModal/>
        &nbsp;
      <RejectConnectionRequestModal/>
      </>
    ),
  },
];

// contact request data
export const contactRequestData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Ayodeji Moshood",
    checked: false,
    email: "info@slydo.co",
    username: "amoshood",
    action: "",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    username: "alawson",
    action: "",
  },
  {
    id: 3,
    avatarBg: "info",
    name: "Joe Larson",
    dob: "19 Jan, 1985",
    role: "Customer",
    email: "larson@example.com",
    username: "jlarson",
    action: "",
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Jane Montgomery",
    dob: "24 April, 1985",
    role: "Subscriber",
    email: "jane84@example.com",
    username: "janemont",
    action: "",
  },
  {
    id: 5,
    avatarBg: "purple",
    name: "Frances Burns",
    dob: "30 May, 2000",
    role: "Manager",
    image: User,
    email: "frances@example.com",
    username: "frances",
    action: "",
  },
  {
    id: 6,
    avatarBg: "primary",
    name: "Alan Butler",
    dob: "10 Feb, 1997",
    role: "Investor",
    image: User2,
    email: "butler@example.com",
    username: "butler",
    action: "",
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "Victoria Lynch",
    dob: "02 May, 1993",
    role: "Investor",
    email: "victoria@example.com",
    username: "vitoria",
    action: ""
  },
  {
    id: 8,
    avatarBg: "success",
    name: "Patrick Newman",
    dob: "15 Feb, 1997",
    role: "Customer",
    email: "patrick@example.com",
    username: "patrick",
    action: ""
  },
  {
    id: 9,
    avatarBg: "purple",
    name: "Jane Harris",
    dob: "28 Feb, 1985",
    role: "Customer",
    image: User4,
    email: "harris@example.com",
    username: "harris",
    action: ""
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "Emma Walker",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "walker@example.com",
    username: "walker",
    action: ""
  },
  {
    id: 11,
    avatarBg: "pink",
    name: "Lilja Peltola",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "lilja@example.com",
    username: "lilja",
    action: "",
  },
  {
    id: 12,
    avatarBg: "secondary",
    name: "Annette Hunter",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "hunter@example.com",
    username: "hunter",
    action: "",
  },
  {
    id: 13,
    avatarBg: "pink",
    name: "Sara Koivisto",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "sara@example.com",
    username: "sara",
    action: ""
  },
  {
    id: 14,
    avatarBg: "blue",
    name: "Kianna Pham",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "kiana@example.com",
    username: "kiana",
    action: ""
  },
  {
    id: 15,
    avatarBg: "pink",
    name: "Raymond Atkins",
    dob: "30 Dec, 1998",
    role: "Customer",
    image: User4,
    email: "sara@example.com",
    username: "raykins",
    action: ""
  },
  {
    id: 16,
    avatarBg: "blue",
    name: "Amira Talley",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "amira@example.com",
    username: "amira",
    action: ""
  },
  {
    id: 17,
    avatarBg: "secondary",
    name: "Lana Steiner",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "steinar@example.com",
    username: "steinar",
    action: ""
  },
  {
    id: 18,
    avatarBg: "warning",
    name: "Joshua Mcnair",
    dob: "30 Dec, 1998",
    image: User4,
    role: "Admin",
    email: "joshua@example.com",
    username: "joshua",
    action: ""
  },
  {
    id: 19,
    avatarBg: "secondary",
    name: "Asiya Wolff",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "asia@example.com",
    username: "asia",
    action: ""
  },
  {
    id: 20,
    avatarBg: "warning",
    name: "Fox Mccloud",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "fox@example.com",
    username: "foxcloud",
    action: ""
  },
];

// blocked contact table and data
export const blockedcontactTable = [
  {
    name: "User",
    selector: (row) => row.name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.name)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.name}{" "}
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
    name: "Username",
    selector: (row) => row.username,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.username} </span>
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
      <UnblockConnectionModal/>
      </>
    ),
  },
];

// blocked contact data
export const blockedcontactData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Ayodeji Moshood",
    checked: false,
    email: "info@slydo.co",
    username: "amoshood",
    action: "",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    username: "alawson",
    action: "",
  },
  {
    id: 3,
    avatarBg: "info",
    name: "Joe Larson",
    dob: "19 Jan, 1985",
    role: "Customer",
    email: "larson@example.com",
    username: "jlarson",
    action: "",
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Jane Montgomery",
    dob: "24 April, 1985",
    role: "Subscriber",
    email: "jane84@example.com",
    username: "janemont",
    action: "",
  },
  {
    id: 5,
    avatarBg: "purple",
    name: "Frances Burns",
    dob: "30 May, 2000",
    role: "Manager",
    image: User,
    email: "frances@example.com",
    username: "frances",
    action: "",
  },
  {
    id: 6,
    avatarBg: "primary",
    name: "Alan Butler",
    dob: "10 Feb, 1997",
    role: "Investor",
    image: User2,
    email: "butler@example.com",
    username: "butler",
    action: "",
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "Victoria Lynch",
    dob: "02 May, 1993",
    role: "Investor",
    email: "victoria@example.com",
    username: "vitoria",
    action: ""
  },
  {
    id: 8,
    avatarBg: "success",
    name: "Patrick Newman",
    dob: "15 Feb, 1997",
    role: "Customer",
    email: "patrick@example.com",
    username: "patrick",
    action: ""
  },
  {
    id: 9,
    avatarBg: "purple",
    name: "Jane Harris",
    dob: "28 Feb, 1985",
    role: "Customer",
    image: User4,
    email: "harris@example.com",
    username: "harris",
    action: ""
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "Emma Walker",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "walker@example.com",
    username: "walker",
    action: ""
  },
  {
    id: 11,
    avatarBg: "pink",
    name: "Lilja Peltola",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "lilja@example.com",
    username: "lilja",
    action: "",
  },
  {
    id: 12,
    avatarBg: "secondary",
    name: "Annette Hunter",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "hunter@example.com",
    username: "hunter",
    action: "",
  },
  {
    id: 13,
    avatarBg: "pink",
    name: "Sara Koivisto",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "sara@example.com",
    username: "sara",
    action: ""
  },
  {
    id: 14,
    avatarBg: "blue",
    name: "Kianna Pham",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "kiana@example.com",
    username: "kiana",
    action: ""
  },
  {
    id: 15,
    avatarBg: "pink",
    name: "Raymond Atkins",
    dob: "30 Dec, 1998",
    role: "Customer",
    image: User4,
    email: "sara@example.com",
    username: "raykins",
    action: ""
  },
  {
    id: 16,
    avatarBg: "blue",
    name: "Amira Talley",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "amira@example.com",
    username: "amira",
    action: ""
  },
  {
    id: 17,
    avatarBg: "secondary",
    name: "Lana Steiner",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "steinar@example.com",
    username: "steinar",
    action: ""
  },
  {
    id: 18,
    avatarBg: "warning",
    name: "Joshua Mcnair",
    dob: "30 Dec, 1998",
    image: User4,
    role: "Admin",
    email: "joshua@example.com",
    username: "joshua",
    action: ""
  },
  {
    id: 19,
    avatarBg: "secondary",
    name: "Asiya Wolff",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "asia@example.com",
    username: "asia",
    action: ""
  },
  {
    id: 20,
    avatarBg: "warning",
    name: "Fox Mccloud",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "fox@example.com",
    username: "foxcloud",
    action: ""
  },
];
