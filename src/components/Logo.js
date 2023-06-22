import React from "react";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="jobster logo" className="logo" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .logo {
    width: 25vh;
  }
`;

export default Logo;
