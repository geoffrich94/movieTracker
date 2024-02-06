import * as S from "./Toolbar.styles";
import { SearchBar } from "components";

interface ToolbarProps {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onChange }) => {
  return (
    <S.Container>
      <S.FlexContainer>
        <img src="assets/logo.png" alt="logo" width="100px" />
        <S.Title>Movie Tracking System</S.Title>
      </S.FlexContainer>
      <SearchBar onChange={onChange} />
    </S.Container>
  );
};
