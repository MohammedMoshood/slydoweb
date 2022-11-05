import React, { useState, useContext } from "react";

const Context = React.createContext();

export const NavProvider = ({ children }) => {
  // Sidebar Submenu

  const [showsubmenu, setSubmenu] = useState(false);

  const openSubmenu = () => setSubmenu(true);

  const closeSubmenu = () => setSubmenu(false);

  //Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(true);
    setIsDropdown(false);
  };
  const sidebarClose = () => {
    setIsOpen(false);
    closeSubmenu();
    setIsMenuDropdown(false);
  };

  // Navigation Subnav
  const [subnav, setSubnav] = useState(false);

  const openSubnav = () => {
    setSubnav(true);
  };

  const closeSubnav = () => {
    setSubnav(false);
  };

  //UserDropdown

  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  // Submenu UserDropdown
  const [isMenuDropdown, setIsMenuDropdown] = useState(false);
  const toggleMenuDropdown = () => {
    setIsMenuDropdown(!isMenuDropdown);
  };
  return (
    <Context.Provider
      value={{
        isMenuDropdown,
        toggleMenuDropdown,
        showsubmenu,
        openSubmenu,
        closeSubmenu,
        isMenuDropdown,
        isDropdown,
        isOpen,
        sidebarClose,
        toggleDropdown,
        closeSubnav,
        openSubnav,
        subnav,
        sidebarOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useNavContext = () => {
  return useContext(Context);
};
