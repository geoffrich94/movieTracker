import styled from "styled-components";

export const SearchBar = styled.div`
  width: 500px;
  display: flex;
  align-self: center;
  justify-content: center;
  border: 2px solid #efefef;
  border-radius: 100px;
  padding: 10px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  & input {
    width: 100%;
    border: none;
    outline: none;
  }
`;
