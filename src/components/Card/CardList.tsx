import * as S from "./CardList.styles";

interface CardListProps {
  children: React.ReactNode;
}

export const CardList: React.FC<CardListProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
