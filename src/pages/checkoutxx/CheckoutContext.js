import React, { useState, createContext } from "react";
import { checkoutData } from "./CheckoutData";

export const CheckoutContext = createContext();

export const CheckoutContextProvider = (props) => {
  const [data, setData] = useState(checkoutData);

  return <CheckoutContext.Provider value={{ contextData: [data, setData] }}>{props.children}</CheckoutContext.Provider>;
};
