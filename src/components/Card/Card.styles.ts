import styled from "styled-components";
import { devices } from "theme/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  border-radius: 10px 10px 15px 15px;
  transition-duration: 0.5s;
  height: 100%;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.8);
  }
  @media ${devices.tablet} {
    flex-basis: 17%;
  }
`;

export const Img = styled.img`
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.15);
  border-radius: 10px 10px 0px 0px;
`;

export const Title = styled.div`
  height: 50px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0px 0px 15px 15px;
`;
