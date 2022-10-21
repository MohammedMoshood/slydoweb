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
import { RemoveContactModal, RejectConnectionRequestModal, AcceptConnectionRequestModal, BlockContactModal, UnblockConnectionModal, PaymentRequestsModal } from "./ModalData";

// transaction table
export const transactionTable = [
  {
    name: "From Customer",
    selector: (row) => row.from_name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.from_name)} image={row.from_image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.from_name}{" "}
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
    name: "To Customer",
    selector: (row) => row.to_name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.to_name)} image={row.to_image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.to_name}{" "}
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
    name: "Amount",
    selector: (row) => row.amount,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount text-dark">
        <span className="currency text-dark">&#8358;</span> {row.amount}
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
        // className={`tb-status btn-dim ml-1 text-${
        //   row.status === "New Order" ? "success" : row.status === "Processing" ? "warning" : row.status === "Awaiting Payment" ? "primary" : row.status === "Canceled" ? "danger" : "Completed" ? "dark" : "Pending" ? "#0000FF" : "danger"
        // }`}
        className="btn-dim btn-primary rounded" style={{padding: "5px 10px 5px 10px"}}
      >
        {row.status}
      </span>
    ),
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
  // {
  //   name: "Action",
  //   selector: (row) => row.action,
  //   hide: "md",
  //   cell: (row) => (
  //     <>
  //     <RemoveContactModal/>
  //     &nbsp;
  //     <BlockContactModal/>
  //     </>
  //   ),
  // },
];

// dummy transaction data
export const transactionData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Ayodeji Moshood",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    // status: "",
    category: "Uncategorized",
    description: "Order Ref: 207",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 3,
    avatarBg: "info",
    name: "Joe Larson",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Jane Montgomery",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 5,
    avatarBg: "purple",
    name: "Frances Burns",
    image: User,
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 6,
    avatarBg: "primary",
    name: "Alan Butler",
    image: User2,
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "Victoria Lynch",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 8,
    avatarBg: "success",
    name: "Patrick Newman",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 9,
    avatarBg: "purple",
    name: "Jane Harris",
    image: User4,
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "Emma Walker",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 11,
    avatarBg: "pink",
    name: "Lilja Peltola",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 12,
    avatarBg: "secondary",
    name: "Annette Hunter",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "General",
    description: "Order Ref: 207"
  },
  {
    id: 13,
    avatarBg: "pink",
    name: "Sara Koivisto",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 14,
    avatarBg: "blue",
    name: "Kianna Pham",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 15,
    avatarBg: "pink",
    name: "Raymond Atkins",
    image: User4,
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 16,
    avatarBg: "blue",
    name: "Amira Talley",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 17,
    avatarBg: "secondary",
    name: "Lana Steiner",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 18,
    avatarBg: "warning",
    name: "Joshua Mcnair",
    image: User4,
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 19,
    avatarBg: "secondary",
    name: "Asiya Wolff",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
  {
    id: 20,
    avatarBg: "warning",
    name: "Fox Mccloud",
    amount: "35,040.34",
    status: "New Order",
    dateAndTime: "10 Feb 2020 • 08:05am",
    category: "Uncategorized",
    description: "Order Ref: 207"
  },
];

// payment requests table
export const paymentRequestsTable = [
  {
    name: "From Customer",
    selector: (row) => row.from_name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.from_name)} image={row.from_image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.from_name}{" "}
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
    name: "To Customer",
    selector: (row) => row.to_name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.to_name)} image={row.to_image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.to_name}{" "}
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
    name: "Amount",
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
    name: "Date & Time",
    selector: (row) => row.dateAndTime,
    width: "220px",
    sortable: true,
    cell: (row) => <span>{row.dateAndTime}</span>,
    hide: "lg",
  },
  {
    name: "In/Out",
    selector: (row) => row.inout,
    minWidth: "140px",
    cell: (row) => (
      // <span className="tb-amount">
      //   <span className="currency">&#8358;</span> {row.amount}
      // </span>
      <>
      <Button className="list-status btn btn-round btn-icon d-flex">
        <Icon
            className={`text-${
              row.inout === "success" ? "success" : row.inout === "pending" ? "info" : "secondary"
            }`}
            name={`${
              row.inout === "success"
                ? "arrow-up-round-fill"
                : row.inout === "alert"
                ? "arrow-up-round-fill"
                : "arrow-up-round-fill"
            }`}
          ></Icon>{" "}
      </Button>
      </>
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
      <PaymentRequestsModal/>
      </>
    ),
  },
];

// dummy payment requests data
export const paymentrequestsData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Ayodeji Moshood",
    checked: false,
    email: "info@slydo.co",
    description: "amoshood",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: "",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    description: "alawson",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: "",
  },
  {
    id: 3,
    avatarBg: "info",
    name: "Joe Larson",
    dob: "19 Jan, 1985",
    role: "Customer",
    email: "larson@example.com",
    description: "jlarson",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: "",
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Jane Montgomery",
    dob: "24 April, 1985",
    role: "Subscriber",
    email: "jane84@example.com",
    description: "janemont",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
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
    description: "frances",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
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
    description: "butler",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: "",
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "Victoria Lynch",
    dob: "02 May, 1993",
    role: "Investor",
    email: "victoria@example.com",
    description: "vitoria",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 8,
    avatarBg: "success",
    name: "Patrick Newman",
    dob: "15 Feb, 1997",
    role: "Customer",
    email: "patrick@example.com",
    description: "patrick",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
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
    description: "harris",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "Emma Walker",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "walker@example.com",
    description: "walker",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 11,
    avatarBg: "pink",
    name: "Lilja Peltola",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "lilja@example.com",
    description: "lilja",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: "",
  },
  {
    id: 12,
    avatarBg: "secondary",
    name: "Annette Hunter",
    dob: "30 Dec, 1998",
    role: "Investor",
    email: "hunter@example.com",
    description: "hunter",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: "",
  },
  {
    id: 13,
    avatarBg: "pink",
    name: "Sara Koivisto",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "sara@example.com",
    description: "sara",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 14,
    avatarBg: "blue",
    name: "Kianna Pham",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "kiana@example.com",
    description: "kiana",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
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
    description: "raykins",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 16,
    avatarBg: "blue",
    name: "Amira Talley",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "amira@example.com",
    description: "amira",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 17,
    avatarBg: "secondary",
    name: "Lana Steiner",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "steinar@example.com",
    description: "steinar",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
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
    description: "joshua",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 19,
    avatarBg: "secondary",
    name: "Asiya Wolff",
    dob: "30 Dec, 1998",
    role: "Customer",
    email: "asia@example.com",
    description: "asia",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
  {
    id: 20,
    avatarBg: "warning",
    name: "Fox Mccloud",
    dob: "30 Dec, 1998",
    role: "Admin",
    email: "fox@example.com",
    description: "foxcloud",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
    inout: "",
    action: ""
  },
];

// payouts table
export const payoutsTable = [
  {
    name: "Customer Bank Account Name",
    selector: (row) => row.customer_bank_account?.bank_account,
    width: "280px",
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.customer_bank_account?.bank_account)} image={row.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.customer_bank_account?.bank_account}{" "}
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
    name: "Customer Account Number",
    selector: (row) => row.customer_bank_account?.account_number,
    width: "280px",
    sortable: true,
    cell: (row) => <span>{row.customer_bank_account?.account_number}</span>,
    hide: "lg",
  },
  {
    name: "Amount",
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
    name: "Status",
    selector: (row) => row.status,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount btn-dim btn-danger text-danger rounded" style={{padding: "5px 10px 5px 10px"}} >
        <span className="currency text-danger">&#8358;</span> {row.status}
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  // {
  //   name: "Action",
  //   selector: (row) => row.action,
  //   hide: "md",
  //   cell: (row) => (
  //     <>
  //     <UnblockConnectionModal/>
  //     </>
  //   ),
  // },
];

// dummy payouts data
export const payoutsData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "Ayodeji Moshood",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashley Lawson",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 3,
    avatarBg: "info",
    name: "Joe Larson",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Jane Montgomery",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 5,
    avatarBg: "purple",
    name: "Frances Burns",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 6,
    avatarBg: "primary",
    name: "Alan Butler",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "Victoria Lynch",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 8,
    avatarBg: "success",
    name: "Patrick Newman",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 9,
    avatarBg: "purple",
    name: "Jane Harris",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "Emma Walker",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 11,
    avatarBg: "pink",
    name: "Lilja Peltola",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 12,
    avatarBg: "secondary",
    name: "Annette Hunter",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 13,
    avatarBg: "pink",
    name: "Sara Koivisto",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 14,
    avatarBg: "blue",
    name: "Kianna Pham",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 15,
    avatarBg: "pink",
    name: "Raymond Atkins",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 16,
    avatarBg: "blue",
    name: "Amira Talley",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 17,
    avatarBg: "secondary",
    name: "Lana Steiner",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 18,
    avatarBg: "warning",
    name: "Joshua Mcnair",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 19,
    avatarBg: "secondary",
    name: "Asiya Wolff",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
  {
    id: 20,
    avatarBg: "warning",
    name: "Fox Mccloud",
    dateAndTime: "10 Feb 2020 • 08:05am",
    amount: "35,040.34",
  },
];

// bank accounts table
export const bankAccountsTable = [
  {
    name: "Bank Name",
    selector: (row) => row.bank?.name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row.bank?.name)} image={row.bank?.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row.bank?.name}{" "}
            {/* <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ml-1`}
            ></span> */}
          </span>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Account Name",
    selector: (row) => row.account_name,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.account_name} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Account Number",
    selector: (row) => row.account_number,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.account_number} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  // {
  //   name: "Default",
  //   selector: (row) => row.action,
  //   hide: "md",
  //   cell: (row) => (
  //     <Button color="success" className="btn-dim btn-icon btn-round" size="md">
  //       <Icon name="check-circle-fill" />
  //     </Button>
  //   ),
  // },
];

// dummy bank accounts data
export const bankaccountsData = [
  {
    id: 1,
    avatarBg: "danger",
    name: "Zenith Bank",
    accountnumber: "2009•••964",
    action: "",
  },
  // {
  //   id: 2,
  //   avatarBg: "warning",
  //   image: User3,
  //   name: "Guarantee Trust Bank",
  //   accountnumber: "2009•••964",
  //   action: "",
  // },
  {
    id: 3,
    avatarBg: "warning",
    image: GTBank,
    name: "Guarantee Trust Bank",
    accountnumber: "2009•••964",
    action: "",
  },
  {
    id: 4,
    avatarBg: "danger",
    name: "Sterling Bank",
    accountnumber: "2009•••964",
    action: "",
  },
  {
    id: 5,
    avatarBg: "purple",
    name: "Kuda Bank",
    accountnumber: "2009•••964",
    action: "",
  },
  {
    id: 6,
    avatarBg: "danger",
    image: UBA,
    name: "United Bank of Africa",
    accountnumber: "2009•••964",
    action: "",
  },
  {
    id: 7,
    avatarBg: "success",
    image: Fidelity,
    name: "Fidelity Bank",
    accountnumber: "2009•••964",
    action: ""
  },
  {
    id: 8,
    avatarBg: "dark",
    image: Providus,
    name: "Providus Bank",
    accountnumber: "2009•••964",
    action: ""
  },
  // {
  //   id: 9,
  //   avatarBg: "purple",
  //   name: "Jane Harris",
  //   accountnumber: "2009•••964",
  //   action: ""
  // },
  // {
  //   id: 10,
  //   avatarBg: "purple",
  //   name: "Emma Walker",
  //   accountnumber: "2009•••964",
  //   action: ""
  // },
];

export const invoiceTable = [
  {
    name: "Customer",
    selector: (row) => row?.from_name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row?.from_name)} image={row?.from_image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row?.from_name}{" "}
            {/* <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ml-1`}
            ></span> */}
          </span>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.amount} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Items",
    selector: (row) => row.items?.name,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.items?.name} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.status} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Due Date",
    selector: (row) => row.dueDate,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.dueDate} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Invoice Date",
    selector: (row) => row.invoiceDate,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.invoiceDate} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  // {
  //   name: "Default",
  //   selector: (row) => row.action,
  //   hide: "md",
  //   cell: (row) => (
  //     <Button color="success" className="btn-dim btn-icon btn-round" size="md">
  //       <Icon name="check-circle-fill" />
  //     </Button>
  //   ),
  // },
];

export const paymentContractTable = [
  {
    name: "Contractor",
    selector: (row) => row?.name,
    compact: true,
    grow: 2,
    style: { paddingRight: "20px" },
    cell: (row) => (
      <div className="user-card mt-2 mb-2">
        <UserAvatar theme={row.avatarBg} text={findUpper(row?.name)} image={row?.image}></UserAvatar>
        <div className="user-info">
          <span className="tb-lead">
            {row?.name}{" "}
            {/* <span
              className={`dot dot-${
                row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
              } d-md-none ml-1`}
            ></span> */}
          </span>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.amount} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Payment Duration",
    selector: (row) => row?.paymentDuration,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row?.paymentDuration} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Start Date",
    selector: (row) => row?.startDate,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row?.startDate} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "End Date",
    selector: (row) => row?.endDate,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row?.endDate} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    minWidth: "140px",
    cell: (row) => (
      <span className="tb-amount">
        <span className="currency"> {row.status} </span>
      </span>
    ),
    sortable: true,
    hide: 480,
  }
  // {
  //   name: "Default",
  //   selector: (row) => row.action,
  //   hide: "md",
  //   cell: (row) => (
  //     <Button color="success" className="btn-dim btn-icon btn-round" size="md">
  //       <Icon name="check-circle-fill" />
  //     </Button>
  //   ),
  // },
];