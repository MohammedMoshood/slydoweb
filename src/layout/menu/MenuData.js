const menu = [
  {
    heading: "Navigation",
  },
  // {
  //   icon: "bag",
  //   text: "Dashboard (Business)",
  //   link: "/ecommerce/index",
  //   panel: true,
  //   newTab: true,
  //   subPanel: [
  //     {
  //       icon: "dashboard-fill",
  //       text: "Dashboard",
  //       link: "/ecommerce/index",
  //     },
  //     {
  //       icon: "bag-fill",
  //       text: "Orders",
  //       link: "/ecommerce/orders",
  //     },
  //     {
  //       icon: "package-fill",
  //       text: "Products",
  //       link: "/ecommerce/products",
  //     },
  //     {
  //       icon: "users-fill",
  //       text: "Customers",
  //       link: "/ecommerce/customer",
  //     },
  //     {
  //       icon: "chat-fill",
  //       text: "Support",
  //       link: "/ecommerce/support",
  //     },
  //     {
  //       icon: "opt-alt-fill",
  //       text: "Settings",
  //       link: "/ecommerce/settings",
  //     },
  //     {
  //       icon: "server-fill",
  //       text: "Integration",
  //       link: "/ecommerce/integration",
  //     },
  //   ],
  // },
  // {
  //   heading: "Dashboards",
  // },
  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "/",
  },
  // {
  //   icon: "cart-fill",
  //   text: "Checkout",
  //   link: "/checkout",
  // },
  {
    icon: "user-fill",
    text: "Profile",
    link: "/profile",
  },
  {
    icon: "chat-fill",
    text: "Messages",
    link: "/messages",
  },
  {
    icon: "chat-fill",
    text: "Messages New",
    link: "/messagesnew",
  },
  // {
  //   heading: "Pre-built Pages",
  // },
  // {
  //   icon: "tile-thumb-fill",
  //   text: "Product / Services",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Orders",
  //       link: "/project-card",
  //     },
  //     {
  //       text: "Products",
  //       link: "/project-list",
  //     },
  //     {
  //       text: "Services",
  //       link: "/project-list",
  //     },
  //   ],
  // },
  // {
  //   icon: "activity-round-fill",
  //   text: "Sales",
  //   link: "/sales",
  // },
  // {
  //   icon: "growth-fill",
  //   text: "Analytics",
  //   link: "/analytics",
  // },
  // {
  //   heading: "Pre-built Pages",
  // },
  // {
  //   icon: "tile-thumb-fill",
  //   text: "Projects",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Project Cards",
  //       link: "/project-card",
  //     },
  //     {
  //       text: "Project List",
  //       link: "/project-list",
  //     },
  //   ],
  // },
  // {
  //   icon: "users-fill",
  //   text: "User Manage",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "User List - Default",
  //       link: "/user-list-default",
  //     },
  //     {
  //       text: "User List - Regular",
  //       link: "/user-list-regular",
  //     },
  //     {
  //       text: "User List - Compact",
  //       link: "/user-list-compact",
  //     },
  //     {
  //       text: "User Details - Regular",
  //       link: "/user-details-regular/1",
  //     },
  //     {
  //       text: "User Profile - Regular",
  //       link: "/user-profile-regular",
  //     },
  //     {
  //       text: "User Contact - Card",
  //       link: "/user-contact-card",
  //     },
  //   ],
  // },

  // {
  //   icon: "cc-alt2-fill",
  //   text: "Orders",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Order List - Default",
  //       link: "/order-list-default",
  //     },
  //     {
  //       text: "Order List - Regular",
  //       link: "/order-list-regular",
  //     },
  //     {
  //       text: "Order List - Sales",
  //       link: "/order-list-sales",
  //     },
  //   ],
  // },
  // {
  //   icon: "file-docs",
  //   text: "AML / KYCs",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "KYC List - Regular",
  //       link: "/kyc-list-regular",
  //     },
  //     {
  //       text: "KYC Details - Regular",
  //       link: "/kyc-details-regular/UD01544",
  //     },
  //   ],
  // },
  // {
  //   icon: "grid-alt-fill",
  //   text: "Applications",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Messages",
  //       link: "/app-messages",
  //     },
  //     {
  //       text: "Chats / Messenger",
  //       link: "/app-chat",
  //     },
  //     {
  //       text: "Inbox / Mail",
  //       link: "/app-inbox",
  //     },
  //     {
  //       text: "Calendar",
  //       link: "/app-calender",
  //     },
  //     {
  //       text: "Kanban Board",
  //       link: "/app-kanban",
  //     },
  //     {
  //       text: "File Manager",
  //       link: "/app-file-manager",
  //       badge: "new",
  //     },
  //   ],
  // },
  {
    icon: "tag-fill",
    // text: "SlydoCommerce",
    text: "Products / Services",
    active: false,
    subMenu: [
      {
        text: "Orders",
        link: "/orders",
      },
      {
        text: "Products",
        link: "/products",
      },
      // {
      //   text: "Products Grid",
      //   link: "/product-card",
      // },
      {
        text: "Services",
        link: "/services",
      },
    ],
  },
  {
    icon: "users-fill",
    text: "Contacts",
    active: false,
    subMenu: [
      {
        text: "Contact",
        link: "/contacts",
      },
      {
        text: "Contact Requests",
        link: "/contact-requests",
      },
      {
        text: "Blocked Contacts",
        link: "/blocked-contacts",
      },
    ],
  },
  // {
  //   icon: "user-check-fill",
  //   text: "Connected Users",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Connections",
  //       link: "/connections",
  //     },
  //     {
  //       text: "Connection Requests",
  //       link: "/connection-requests",
  //     },
  //     {
  //       text: "Services",
  //       link: "/services",
  //     },
  //   ],
  // },
  {
    icon: "cards-fill",
    text: "Payments",
    active: false,
    subMenu: [
      {
        text: "Transactions",
        link: "/transactions",
      },
      {
        text: "Payment Request",
        link: "/payment-requests",
      },
      {
        text: "Payouts",
        link: "/payouts",
      },
      {
        text: "Invoice",
        link: "/invoice",
      },
      {
        text: "Payment Contract",
        link: "/payment-contract",
      },
      {
        text: "Bank Accounts",
        link: "/bank-accounts",
      },
    ],
  },
  {
    icon: "blogger",
    text: "Blog",
    active: false,
    subMenu: [
      {
        text: "Blog Posts",
        link: "/blogposts",
      },
      {
        text: "Create Blog Post",
        link: "/blog/create",
      },
    ],
  },
  // {
  //   icon: "blogger",
  //   text: "Blog",
  //   link: "/blog",
  // },
  {
    icon: "book-fill",
    text: "Integrations",
    active: false,
    subMenu: [
      {
        text: "API Key",
        link: "/api-keys",
      },
    ],
  },
  {
    icon: "setting-alt-fill",
    text: "Settings",
    active: false,
    subMenu: [
      {
        text: "Team Members",
        link: "/team-members",
      },
      {
        text: "Shipping Options",
        link: "/shipping-options",
      },
      {
        text: "Terms & Condition",
        link: "/terms-and-condition",
      },
    ],
  },
  // {
  //   icon: "file-docs",
  //   text: "Invoice",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Invoice List",
  //       link: "/invoice-list",
  //     },
  //     {
  //       text: "Invoice Details",
  //       link: "/invoice-details/1",
  //     },
  //   ],
  // },
  // {
  //   icon: "view-col",
  //   text: "Pricing Table",
  //   link: "/pricing-table",
  // },
  // {
  //   icon: "img",
  //   text: "Image Gallery",
  //   link: "/image-gallery",
  // },
  // {
  //   heading: "Misc Pages",
  // },
  // {
  //   icon: "light-fill",
  //   text: "Auth Pages",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Login / Signin",
  //       link: "/auth-login",
  //       newTab: true,
  //     },
  //     {
  //       text: "Register / Signup",
  //       link: "/auth-register",
  //       newTab: true,
  //     },
  //     {
  //       text: "Forgot Password",
  //       link: "/auth-reset",
  //       newTab: true,
  //     },
  //     {
  //       text: "Success / Confirm",
  //       link: "/auth-success",
  //       newTab: true,
  //     },
  //   ],
  // },
  // {
  //   icon: "files-fill",
  //   text: "Error Pages",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "404 Classic",
  //       link: "/errors/404-classic",
  //       newTab: true,
  //     },
  //     {
  //       text: "504 Classic",
  //       link: "/errors/504-classic",
  //       newTab: true,
  //     },
  //     {
  //       text: "404 Modern",
  //       link: "/errors/404-modern",
  //       newTab: true,
  //     },
  //     {
  //       text: "504 Modern",
  //       link: "/errors/504-modern",
  //       newTab: true,
  //     },
  //   ],
  // },
  // {
  //   icon: "files-fill",
  //   text: "Other Pages",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Blank / Startup",
  //       link: "/_blank",
  //     },
  //     {
  //       text: "Faqs / Help",
  //       link: "/pages/faq",
  //     },
  //     {
  //       text: "Terms / Policy",
  //       link: "/pages/terms-policy",
  //     },
  //     {
  //       text: "Regular Page - v1",
  //       link: "/pages/regular-v1",
  //     },
  //     {
  //       text: "Regular Page - v2",
  //       link: "/pages/regular-v2",
  //     },
  //   ],
  // },
  // {
  //   heading: "Components",
  // },
  // {
  //   icon: "layers-fill",
  //   text: "Ui Elements",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Alerts",
  //       link: "/components/alerts",
  //     },
  //     {
  //       text: "Accordions",
  //       link: "/components/accordions",
  //     },
  //     {
  //       text: "Avatar",
  //       link: "/components/avatar",
  //     },
  //     {
  //       text: "Badges",
  //       link: "/components/badges",
  //     },
  //     {
  //       text: "Buttons",
  //       link: "/components/buttons",
  //     },
  //     {
  //       text: "Button Group",
  //       link: "/components/button-group",
  //     },
  //     {
  //       text: "Breadcrumbs",
  //       link: "/components/breadcrumbs",
  //     },
  //     {
  //       text: "Cards",
  //       link: "/components/cards",
  //     },
  //     {
  //       text: "Carousel",
  //       link: "/components/carousel",
  //     },
  //     {
  //       text: "Dropdowns",
  //       link: "/components/dropdowns",
  //     },
  //     {
  //       text: "Modals",
  //       link: "/components/modals",
  //     },
  //     {
  //       text: "Pagination",
  //       link: "/components/pagination",
  //     },
  //     {
  //       text: "Popovers",
  //       link: "/components/popovers",
  //     },
  //     {
  //       text: "Progress",
  //       link: "/components/progress",
  //     },
  //     {
  //       text: "Spinner",
  //       link: "/components/spinner",
  //     },
  //     {
  //       text: "Tabs",
  //       link: "/components/tabs",
  //     },
  //     {
  //       text: "Toast",
  //       link: "/components/toast",
  //     },
  //     {
  //       text: "Typography",
  //       link: "/components/typography",
  //     },
  //     {
  //       text: "Tooltips",
  //       link: "/components/tooltips",
  //     },
  //     {
  //       text: "Utilities",
  //       active: false,
  //       subMenu: [
  //         {
  //           text: "Borders",
  //           link: "/components/util-border",
  //         },
  //         {
  //           text: "Colors",
  //           link: "/components/util-colors",
  //         },
  //         {
  //           text: "Display",
  //           link: "/components/util-display",
  //         },
  //         {
  //           text: "Embeded",
  //           link: "/components/util-embeded",
  //         },
  //         {
  //           text: "Flex",
  //           link: "/components/util-flex",
  //         },
  //         {
  //           text: "Text",
  //           link: "/components/util-text",
  //         },
  //         {
  //           text: "Sizing",
  //           link: "/components/util-sizing",
  //         },
  //         {
  //           text: "Spacing",
  //           link: "/components/util-spacing",
  //         },
  //         {
  //           text: "Others",
  //           link: "/components/util-others",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   icon: "dot-box-fill",
  //   text: "Crafted Icons",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "SVG Icon-Exclusive",
  //       link: "/svg-icons",
  //     },
  //     {
  //       text: "Nioicon - HandCrafted",
  //       link: "/nioicon",
  //     },
  //   ],
  // },
  // {
  //   icon: "table-view-fill",
  //   text: "Tables",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Basic Tables",
  //       link: "/table-basic",
  //     },
  //     {
  //       text: "Special Tables",
  //       link: "/table-special",
  //     },
  //     {
  //       text: "DataTables",
  //       link: "/table-datatable",
  //     },
  //   ],
  // },
  // {
  //   icon: "view-group-fill",
  //   text: "Forms",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Form Elements",
  //       link: "/components/form-elements",
  //     },
  //     {
  //       text: "Checkbox Radio",
  //       link: "/components/checkbox-radio",
  //     },
  //     {
  //       text: "Input Group",
  //       link: "/components/input-group",
  //     },
  //     {
  //       text: "Form Upload",
  //       link: "/components/form-upload",
  //     },
  //     {
  //       text: "Advanced Controls",
  //       link: "/components/advanced-control",
  //     },
  //     {
  //       text: "Form Layouts",
  //       link: "/components/form-layouts",
  //     },
  //     {
  //       text: "Form Validation",
  //       link: "/components/form-validation",
  //     },
  //     {
  //       text: "Date Time Picker",
  //       link: "/components/datetime-picker",
  //     },
  //     {
  //       text: "Number Spinner",
  //       link: "/components/number-spinner",
  //     },
  //     {
  //       text: "noUiSlider",
  //       link: "/components/nouislider",
  //     },
  //     {
  //       text: "Wizard Basic",
  //       link: "/components/wizard-basic",
  //     },
  //     {
  //       text: "Rich Editor",
  //       active: false,
  //       subMenu: [
  //         {
  //           text: "Quill",
  //           link: "/components/quill",
  //         },
  //         {
  //           text: "Tinymce",
  //           link: "/components/tinymce",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   icon: "pie-fill",
  //   text: "Charts",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Chart Js",
  //       link: "/charts/chartjs",
  //     },
  //     {
  //       text: "Knobs",
  //       link: "/charts/knobs",
  //     },
  //   ],
  // },
  // {
  //   icon: "puzzle",
  //   text: "Widgets",
  //   subMenu: [
  //     {
  //       text: "Card Widgets",
  //       link: "/components/widgets/cards",
  //     },
  //     {
  //       text: "Chart Widgets",
  //       link: "/components/widgets/charts",
  //     },
  //     {
  //       text: "Rating Widgets",
  //       link: "/components/widgets/rating",
  //     },
  //   ],
  // },
  // {
  //   icon: "block-over",
  //   text: "Miscellaneous",
  //   subMenu: [
  //     {
  //       text: "Slick Sliders",
  //       link: "/components/misc/slick-slider",
  //     },
  //     {
  //       text: "JsTree",
  //       link: "/components/misc/jsTree",
  //     },
  //     {
  //       text: "React Toastify",
  //       link: "/components/misc/toastify",
  //     },
  //     {
  //       text: "Sweet Alert",
  //       link: "/components/misc/sweet-alert",
  //     },
  //     {
  //       text: "React DualListBox",
  //       link: "/components/misc/dual-list",
  //     },
  //     {
  //       text: "React Beautiful Dnd",
  //       link: "/components/misc/beautiful-dnd",
  //     },
  //     {
  //       text: "Google Map",
  //       link: "/components/misc/map",
  //     },
  //   ],
  // },
  // {
  //   icon: "tag-alt-fill",
  //   text: "Email Template",
  //   link: "/email-template",
  //   active: "false",
  // },
];
export default menu;
