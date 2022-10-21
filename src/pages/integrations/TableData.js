import User3 from "../../images/avatar/a-sm.jpg";
import React from "react";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
// import OrderModal from "./OrderModal";
import { ViewWebhookModal, EditWebhookModal, RemoveWebhookModal } from "./ModalData";

// this table shows the data in orders page
export const apiKeysTable = [
  {
    name: "ID",
    width: "200px",
    selector: (row) => row.id,
    sortable: true,
    cell: (row) => <span>{row.id}</span>,
    hide: "lg",
  },
  {
    name: "Event",
    selector: (row) => row.event,
    width: "220px",
    sortable: true,
    cell: (row) => <span>{row.event}</span>,
    hide: "lg",
  },
  
  
  {
    name: "Url",
    selector: (row) => row.url,
    sortable: true,
    hide: "sm",
    cell: (row) => (
      <span
        className={`tb-status btn-dim ml-1 text-${
          row.url === "New Order" ? "success" : row.url === "Processing" ? "warning" : row.url === "Awaiting Payment" ? "primary" : row.url === "Canceled" ? "danger" : "Completed" ? "dark" : "Pending" ? "#0000FF" : "danger"
        }`}
      >
        {row.url}
      </span>
    ),
  },
  {
    name: "Action",
    selector: (row) => row.action,
    hide: "md",
    cell: (row) => (
      <> 
        <ViewWebhookModal data={row} /> &nbsp; 
        <EditWebhookModal data={row} /> &nbsp;
        <RemoveWebhookModal data={row} />
      </>
    ),
  },
];