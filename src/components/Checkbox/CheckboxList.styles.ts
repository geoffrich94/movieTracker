import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${devices.tablet} {
    justify-content: start;
  }
`;
