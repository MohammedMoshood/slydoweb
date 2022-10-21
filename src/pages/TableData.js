import User3 from "../../images/avatar/a-sm.jpg";
import React from "react";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import OrderModal from "./OrderModal";

// this table shows the data in orders page
export const ordersTable = [
  {
    name: "Order Number",
    width: "200px",
    selector: (row) => row.orderNumber,
    sortable: true,
    cell: (row) => <span>{row.orderNumber}</span>,
    hide: "lg",
  },
  {
    name: "Customer",
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
    name: "Date & Time",
    selector: (row) => row.dateAndTime,
    width: "220px",
    sortable: true,
    cell: (row) => <span>{row.dateAndTime}</span>,
    hide: "lg",
  },
  {
    name: "Price",
    selector: (row) => row.price,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency">&#8358;</span> {row.price}
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  
  
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    hide: "sm",
    cell: (row) => (
      <span
        className={`tb-status btn-dim ml-1 text-${
          row.status === "New Order" ? "success" : row.status === "Processing" ? "warning" : row.status === "Awaiting Payment" ? "primary" : row.status === "Canceled" ? "danger" : "Completed" ? "dark" : "Pending" ? "#0000FF" : "danger"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Paid",
    selector: (row) => row.paid,
    sortable: true,
    hide: "md",
    cell: (row) => (
      <Button className="list-status btn btn-round btn-icon d-flex">
        <Icon
            className={`text-${
              row.paid === "success" ? "success" : row.paid === "pending" ? "info" : "secondary"
            }`}
            name={`${
              row.paid === "success"
                ? "check-circle"
                : row.paid === "alert"
                ? "alert-circle"
                : "check-circle-fill"
            }`}
          ></Icon>{" "}
      </Button>
    ),
  },
  {
    name: "Action",
    selector: (row) => row.action,
    hide: "md",
    cell: (row) => (
      <OrderModal/>
    ),
  },
];

export const ordersData = [
  {
    id: 1,
    orderNumber: "001",
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
    orderNumber: "002",
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
    orderNumber: "003",
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
    orderNumber: "004",
    avatarBg: "danger",
    name: "Jane Montgomery",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "0.00",
    paid: "Active",
    status: "Canceled",
    action: ""
  },
  {
    id: 5,
    orderNumber: "005",
    avatarBg: "purple",
    name: "Frances Burns",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "42.50",
    status: "Completed",
    action: "",
  },
  {
    id: 6,
    orderNumber: "006",
    avatarBg: "primary",
    name: "Alan Butler",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "440.34",
    status: "On Hold",
    action: "",
  },
  {
    id: 7,
    orderNumber: "007",
    avatarBg: "warning",
    name: "Victoria Lynch",
    dateAndTime: "10 Feb 2020 • 08:05am",
    price: "59,400.68",
    status: "Pending",
    action: "",
  },
];