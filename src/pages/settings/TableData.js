import User3 from "../../images/avatar/a-sm.jpg";
import React from "react";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import { ViewTeamMemberModal, ViewShippingOptionModal, EditTeamMemberModal, RemoveTeamMemberModal, EditShippingOptionModal, RemoveShippingOptionModal } from "./ModalData";

// this table shows the data in team members page
export const teammembersTable = [
  {
    name: "Team Members",
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
    name: "Role",
    selector: (row) => row.role,
    width: "220px",
    sortable: true,
    cell: (row) => <span>{row.role}</span>,
    hide: "lg",
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    hide: "sm",
    cell: (row) => (
      <Button
        className={`tb-status btn-dim ml-1 text-${
          row.status === "Active" ? "success" : row.status === "Processing" ? "warning" : row.status === "Awaiting Payment" ? "primary" : row.status === "Non Active" ? "danger" : "Completed" ? "dark" : "Pending" ? "#0000FF" : "danger"
        }`}
        color={`btn-dim btn-${
          row.status === "Active" ? "success" : row.status === "Processing" ? "warning" : row.status === "Awaiting Payment" ? "primary" : row.status === "Non Active" ? "danger" : "Completed" ? "dark" : "Pending" ? "#0000FF" : "danger"
        }`}
      >
        {row.status}
      </Button>
    ),
  },
  {
    name: "Action",
    selector: (row) => row.action,
    hide: "md",
    cell: (row) => (
      <> <ViewTeamMemberModal data={row} /> &nbsp; <EditTeamMemberModal data={row} /> &nbsp; <RemoveTeamMemberModal data={row} /></>
    ),
  },
];

// this data shows in team members table
export const teammembersData = [
  {
    id: 1,
    orderNumber: "001",
    avatarBg: "purple",
    name: "Ayodeji Moshood",
    role: "Support Specialist",
    status: "Active",
    action: "",
  },
  {
    id: 2,
    orderNumber: "002",
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    role: "Administrator",
    status: "Non Active",
    action: "",
  },
  {
    id: 3,
    orderNumber: "003",
    avatarBg: "info",
    name: "Joe Larson",
    role: "Developer",
    status: "Non Active",
    action: "",
  },
  {
    id: 4,
    orderNumber: "004",
    avatarBg: "danger",
    name: "Jane Montgomery",
    role: "Analyst",
    status: "Active",
    action: ""
  },
  {
    id: 5,
    orderNumber: "005",
    avatarBg: "purple",
    name: "Frances Burns",
    role: "Tax Analyst",
    status: "Active",
    action: "",
  },
  {
    id: 6,
    orderNumber: "006",
    avatarBg: "primary",
    name: "Alan Butler",
    role: "View Only",
    status: "Non Active",
    action: "",
  },
];

// this table shows the data in team members page
export const shippingoptionsTable = [
  {
    name: "Location Name",
    width: "200px",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => <span>{row.name}</span>,
    hide: "lg",
  },
  
  {
    name: "Price",
    selector: (row) => row.amount,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency">&#8358;</span> {row.amount}
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
      <><ViewShippingOptionModal data={row}/> &nbsp; <EditShippingOptionModal data={row}/>&nbsp;<RemoveShippingOptionModal data={row}/></>
    ),
  },
];

// this data shows in team members table
export const shippingoptionsData = [
  {
    id: 1,
    locationName: "USPS",
    avatarBg: "purple",
    name: "Ayodeji Moshood",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "35,040.34",
    paid: "Active",
    status: "New Order",
    action: "",
  },
  {
    id: 2,
    locationName: "Local shipment",
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "580.00",
    paid: "Active",
    status: "Processing",
    action: "",
  },
  {
    id: 3,
    locationName: "Test Shipping",
    avatarBg: "info",
    name: "Joe Larson",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "32,000.34",
    paid: "Active",
    status: "Awaiting Payment",
    action: "",
  },
  {
    id: 4,
    locationName: "Mainland Express",
    avatarBg: "danger",
    name: "Jane Montgomery",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "2,000.00",
    paid: "Active",
    status: "Canceled",
    action: ""
  },
];