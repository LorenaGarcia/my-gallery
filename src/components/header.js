import React from "react";
import styled from "styled-components";
import Image from "../images/profile.png";

export const Container = styled.div`
  text-align: center;
`;

export const ImageUser = styled.img`
  width: 150px;
  border-radius: 50px;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #4e5150;
  margin-top: 10px;
`;

export const SubTitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a9a9a9;
  margin-top: -15px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const Information = styled.div`
  border-radius: 20px;
  width: 100px;
  height: 67px;
  background-color: #e5e5e5;
  margin: 15px;

  @media (max-width: 480px) {
    margin: 5px;
    width: 80px;
    height: 58px;
  }
`;

export const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #4e5150;
  margin-top: 0px;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Numbers = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #4e5150;
  margin-top: 15%;
  margin-bottom: 2px;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

const Header = () => {
  return (
    <Container>
      <ImageUser src={Image} />
      <Title> Rodney Cotton </Title>
      <SubTitle>Helsinki, Finland</SubTitle>
      <Social>
        <Information>
          <Numbers>100</Numbers>
          <Text>Posts</Text>
        </Information>
        <Information>
          <Numbers>2,242</Numbers>
          <Text>Follower</Text>
        </Information>
        <Information>
          <Numbers>1,432</Numbers>
          <Text>Following</Text>
        </Information>
      </Social>
    </Container>
  );
};

export default Header;
