import React from "react";
import styled from "styled-components";

export const ContainerFooter = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a9a9a9;
  text-align: center;

  @media (max-width: 480px) {
  }
`;

const Footer = () => {
  return <ContainerFooter>Lorraine @ DevChallenges.io</ContainerFooter>;
};

export default Footer;
