import * as S from "./CheckboxList.styles";

interface CheckboxListProps {
  children: React.ReactNode;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
