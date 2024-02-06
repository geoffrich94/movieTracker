import styled from "styled-components";
import { devices } from "theme/breakpoints";

export const Container = styled.header`
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const Title = styled.h3`
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`;
