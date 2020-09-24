import React from "react";
import styled from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";
import Gallery from "./components/gallery";

export const Container = styled.header`
  min-height: 100vh;
  display: grid;
  justify-content: center;

  grid-template-columns: 100%;
  grid-gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 200px;
  margin-right: 200px;
  grid-template-areas:
    "header"
    "main"
    "footer";

  @media (max-width: 480px) {
    margin: 12px;
  }

  @media (min-width: 481px) and (max-width: 780px) {
    margin: 50px;
  }
`;

export const GridHeader = styled.header`
  grid-area: header;
`;

export const GridMain = styled.div`
  grid-area: main;
`;

export const GridFooter = styled.footer`
  grid-area: footer;
`;

const Home = () => {
  return (
    <Container>
      <GridHeader>
        <Header />
      </GridHeader>
      <GridMain>
        <Gallery />
      </GridMain>
      <GridFooter>
        <Footer />
      </GridFooter>
    </Container>
  );
};

export default Home;
