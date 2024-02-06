import styled from "styled-components";
import { devices } from "theme/breakpoints";

export const Container = styled.div`
  flex-basis: 35%;
  @media ${devices.tablet} {
    flex-basis: 20%;
  }
`;
