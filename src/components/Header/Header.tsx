import React, { FC } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: orange;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  pointer-events: none;
`;

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <HeaderWrapper>
    <Title>Stack With buentellopc</Title>
  </HeaderWrapper>
);

export default Header;
