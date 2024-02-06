import { Toolbar, Main, Footer } from "components";
import * as S from "./App.styles";
import { useState } from "react";

export const App: React.FC = () => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchMovie(event.currentTarget.value);
  };

  return (
    <S.Container>
      <Toolbar onChange={handleSearchChange} />
      <Main searchMovie={searchMovie} />
      <Footer />
    </S.Container>
  );
};
