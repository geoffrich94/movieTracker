import * as S from "./Card.styles";

interface CardProps {
  title: string;
  poster: string;
}

export const Card: React.FC<CardProps> = ({ title, poster }) => {
  return (
    <S.Container>
      <S.Img width="100%" alt={title} src={poster} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
