import React from "react";

import { LogoHeader, Header } from "./style";
import logo from "/public/images/IMAGOTIPO.png";

export const Nav = () => {
  return (
    <Header>
      <LogoHeader src={logo} alt="academia pets online" />
    </Header>
  );
};
