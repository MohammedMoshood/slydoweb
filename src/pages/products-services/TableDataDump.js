// import User from "../../images/avatar/b-sm.jpg";
// import User2 from "../../images/avatar/c-sm.jpg";
// import User3 from "../../images/avatar/a-sm.jpg";
// import User4 from "../../images/avatar/d-sm.jpg";
// import {
//   // Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   // ModalForm,
//   FormGroup,
//   Nav,
//   NavLink,
//   NavItem,
//   TabContent,
//   TabPane,
// } from "reactstrap";

// export const ordersTable = [
//   {
//     name: "Order Number",
//     selector: (row) => row.orderNumber,
//     sortable: true,
//     cell: (row) => <span>{row.orderNumber}</span>,
//     hide: "lg",
//   },
//   {
//     name: "Customer",
//     selector: (row) => row.name,
//     compact: true,
//     grow: 2,
//     style: { paddingRight: "20px" },
//     cell: (row) => (
//       <div className="user-card mt-2 mb-2">
//         <UserAvatar theme={row.avatarBg} text={findUpper(row.name)} image={row.image}></UserAvatar>
//         <div className="user-info">
//           <span className="tb-lead">
//             {row.name}{" "}
//             <span
//               className={`dot dot-${
//                 row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
//               } d-md-none ml-1`}
//             ></span>
//           </span>
//         </div>
//       </div>
//     ),
//     sortable: true,
//   },
//   {
//     name: "Date & Time",
//     selector: (row) => row.dateAndTime,
//     width: "220px",
//     sortable: true,
//     cell: (row) => <span>{row.dateAndTime}</span>,
//     hide: "lg",
//   },
//   {
//     name: "Price",
//     selector: (row) => row.price,
//     minWidth: "140px",
//     cell: (row) => (
//       <span className="tb-amount">
//         <span className="currency">&#8358;</span> {row.price}
//       </span>
//     ),
//     sortable: true,
//     hide: 480,
//   },
  
//   // {
//   //   name: "Verified",
//   //   selector: (row) => row.verified,
//   //   sortable: true,
//   //   minWidth: "170px",
//   //   hide: "md",
//   //   cell: (row) => (
//   //     <Button className="list-status btn btn-round btn-icon d-flex">
//   //       <Icon
//   //           className={`text-${
//   //             row.emailStatus === "success" ? "success" : row.emailStatus === "pending" ? "info" : "secondary"
//   //           }`}
//   //           name={`${
//   //             row.emailStatus === "success"
//   //               ? "check-circle"
//   //               : row.emailStatus === "alert"
//   //               ? "alert-circle"
//   //               : "alarm-alt"
//   //           }`}
//   //         ></Icon>{" "}
//   //     </Button>
//   //   ),
//   // },
  
//   {
//     name: "Status",
//     selector: (row) => row.status,
//     sortable: true,
//     hide: "sm",
//     cell: (row) => (
//       <span
//         className={`tb-status btn-dim ml-1 text-${
//           row.status === "New Order" ? "success" : row.status === "Processing" ? "warning" : row.status === "Awaiting Payment" ? "primary" : row.status === "Canceled" ? "danger" : "Completed" ? "dark" : "Pending" ? "#0000FF" : "danger"
//         }`}
//       >
//         {row.status}
//       </span>
//     ),
//   },
//   {
//     name: "Paid",
//     selector: (row) => row.paid,
//     sortable: true,
//     hide: "md",
//     cell: (row) => (
//       <Button className="list-status btn btn-round btn-icon d-flex">
//         <Icon
//             className={`text-${
//               row.paid === "success" ? "success" : row.paid === "pending" ? "info" : "secondary"
//             }`}
//             name={`${
//               row.paid === "success"
//                 ? "check-circle"
//                 : row.paid === "alert"
//                 ? "alert-circle"
//                 : "check-circle-fill"
//             }`}
//           ></Icon>{" "}
//       </Button>
//     ),
//   },
//   {
//     name: "Action",
//     selector: (row) => row.action,
//     hide: "md",
//     cell: (row) => (
//       <OrderModal/>
//     ),
//   },
// ];

// export const orderssData = [
//   {
//     id: 1,
//     orderNumber: "001",
//     avatarBg: "purple",
//     name: "Ayodeji Moshood",
//     dateAndTime: "10 Feb 2020 • 08:05am",
//     price: "35,040.34",
//     paid: "Active",
//     status: "New Order",
//     action: "",
//     displayName: "amoshood",
//     dob: "10 Aug, 1980",
//     role: "Customer",
//     checked: false,
//     email: "info@slydo.co",
//     phone: "818474958",
//     emailStatus: "success",
//     kycStatus: "success",
//     address: "Magodo Trenches",
//     state: "Lagos",
//     country: "Nigeria",
//     designation: "UI/UX Designer",
//     projects: "213",
//     performed: "87.5",
//     tasks: "587",
//   }
// ];
// export const contactData = [
//   {
//     id: 1,
//     orderNumber: "001",
//     avatarBg: "purple",
//     name: "Ayodeji Moshood",
//     dateAndTime: "10 Feb 2020 • 08:05am",
//     price: "35,040.34",
//     paid: "Active",
//     status: "New Order",
//     action: "",
//   }
// ];
// export const servicesData = [
//   {
//     id: 1,
//     orderNumber: "001",
//     avatarBg: "purple",
//     name: "Ayodeji Moshood",
//     dateAndTime: "10 Feb 2020 • 08:05am",
//     price: "35,040.34",
//     paid: "Active",
//     status: "New Order",
//     action: "",
//   }
// ];