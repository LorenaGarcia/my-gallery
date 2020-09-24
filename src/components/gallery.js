import React from "react";
import styled, { css } from "styled-components";
import Image1 from "../images/photo1.png";
import Image2 from "../images/photo2.png";
import Image3 from "../images/photo3.png";
import Image4 from "../images/photo4.png";
import Image5 from "../images/photo5.png";
import Image6 from "../images/photo6.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 50vh);
  grid-gap: 1rem;
  margin-bottom: 60px;

  @media (max-width: 480px) {
    grid-template-rows: repeat(3, 20vh);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-rows: repeat(3, 30vh);
  }
`;

const StyledImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
`;

export const ImageContainer1 = styled.img`
  ${StyledImage}

  grid-column: 1 / 2;
  grid-row: 1 / 1;
`;

export const ImageContainer2 = styled.img`
  ${StyledImage}

  grid-column: 2 / 4;
  grid-row: 1 / 1;
`;

export const ImageContainer3 = styled.img`
  ${StyledImage}

  grid-column: 1 / 3;
  grid-row: 2 / 2;
`;

export const ImageContainer4 = styled.img`
  ${StyledImage}

  grid-column: 3 / 4;
  grid-row: 2 / 4;
`;

export const ImageContainer5 = styled.img`
  ${StyledImage}

  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;

export const ImageContainer6 = styled.img`
  ${StyledImage}

  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

const Gallery = () => {
  return (
    <Container>
      <ImageContainer1 src={Image1} />

      <ImageContainer2 src={Image2} />

      <ImageContainer3 src={Image3} />

      <ImageContainer4 src={Image4} />

      <ImageContainer5 src={Image6} />

      <ImageContainer6 src={Image5} />
    </Container>
  );
};

export default Gallery;
