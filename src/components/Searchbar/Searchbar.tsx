import * as S from "./Searchbar.styles";

interface SearchBarProps {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <S.SearchBar>
      <input type="text" placeholder="Search..." onChange={onChange} />
      <img src="/assets/search.svg" alt="search icon" />
    </S.SearchBar>
  );
};
