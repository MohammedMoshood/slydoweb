import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";
import PrivateRoute from "./route/PrivateRoute";

import Layout from "./layout/Index";

import Error404Classic from "./pages/error/404-classic";
import Error404Modern from "./pages/error/404-modern";
import Error504Modern from "./pages/error/504-modern";
import Error504Classic from "./pages/error/504-classic";

import Faq from "./pages/others/Faq";
import Terms from "./pages/others/Terms";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Success from "./pages/auth/Success";
import InvoicePrint from "./pages/pre-built/invoice/InvoicePrint";

import FrontPage from "./pages/FrontPage";
import UnderConstruction from "./pages/UnderConstruction";
import { NavProvider } from "./context/Context";
import Chat from "./pages/FrontPage/Chat";
import Developers from "./pages/FrontPage/Developers";
import Business from "./pages/FrontPage/Business";
import Socials from "./pages/FrontPage/Socials";

const App = (props) => {
  return (
    <Switch>
      {/* Front Page */}
      
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/socials" component={Socials} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/developers" component={Developers} />
        <Route exact path="/features" component={UnderConstruction} />
        <Route exact path="/pricing" component={UnderConstruction} />
        <Route exact path="/support" component={UnderConstruction} />
        <Route exact path="/product" component={UnderConstruction} />
        <Route exact path="/our-services" component={UnderConstruction} />
        <Route exact path="/technology" component={UnderConstruction} />
        <Route exact path="/slydo-invoice" component={UnderConstruction} />
        <Route exact path="/payment" component={UnderConstruction} />
        <Route exact path="/contract" component={UnderConstruction} />
        <Route exact path="/termsandconditions" component={UnderConstruction} />
        <Route exact path="/privacypolicy" component={UnderConstruction} />
       

      {/* Auth Pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/auth-success`} component={Success}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auth-reset`} component={ForgotPassword}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auth-register`} component={Register}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auth-login`} component={Login}></Route>

      {/* Print Pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print/:id`} component={InvoicePrint}></Route>

      {/* Helper pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/auths/terms`} component={Terms}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auths/faq`} component={Faq}></Route>

      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print`} component={InvoicePrint}></Route>

      {/*Error Pages*/}
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404-classic`} component={Error404Classic}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/504-modern`} component={Error504Modern}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404-modern`} component={Error404Modern}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/504-classic`} component={Error504Classic}></Route>

      {/*Main Routes*/}
      <PrivateRoute exact path="" component={Layout}></PrivateRoute>
      <Route component={RedirectAs404}></Route>
     
    </Switch>
  );
};
export default withRouter(App);
