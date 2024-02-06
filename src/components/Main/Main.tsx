import { useEffect, useState } from "react";
import { CardList, Card, CheckboxList, Checkbox } from "components";
import * as S from "./Main.styles";

interface MainProps {
  searchMovie: string;
}

interface RawMovie {
  imdbId: number;
  ImdbLink: string;
  Title: string;
  IMDBScore: number;
  Genre: string;
  Poster: string;
}

interface SimplifiedMovie {
  title: string;
  poster: string;
  genres: string[];
}

export const Main: React.FC<MainProps> = ({ searchMovie }) => {
  const [movies, setMovies] = useState<SimplifiedMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<SimplifiedMovie[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<{
    [key: string]: boolean;
  }>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/almaeconomics/movies_database/main/movies.json"
        );
        const data: RawMovie[] = await res.json();

        const genres: { [key: string]: boolean } = {};

        const simplifiedData: SimplifiedMovie[] = data.map((movie) => {
          const movieGenres = movie.Genre.split("|").map((genre) =>
            genre.trim()
          );

          movieGenres.forEach((genre) => {
            if (!genres.hasOwnProperty(genre)) {
              genres[genre] = false;
            }
          });

          return {
            title: movie.Title,
            poster: movie.Poster,
            genres: movieGenres,
          };
        });

        setMovies(simplifiedData);
        setSelectedGenres(genres);
        setFilteredMovies(simplifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      const updatedMovies = movies
        .filter((movie) => {
          const titleLowerCase =
            movie.title && typeof movie.title === "string"
              ? movie.title.toLowerCase()
              : "";
          return titleLowerCase.includes(searchMovie.toLowerCase());
        })
        .filter((movie) => {
          if (Object.keys(selectedGenres).length === 0) {
            return true;
          }
          const movieGenres = movie.genres || [];

          return (
            Object.values(selectedGenres).every((value) => !value) ||
            movieGenres.some((movieGenre) => selectedGenres[movieGenre])
          );
        });

      setFilteredMovies(updatedMovies);
    };

    handleFilter();
  }, [searchMovie, selectedGenres, movies]);

  useEffect(() => {
    if (!loading) {
      setFilteredMovies(movies);
    }
  }, [loading, movies]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres((prevSelectedGenres) => ({
      ...prevSelectedGenres,
      [genre]: !prevSelectedGenres[genre],
    }));
  };

  console.log("filteredMovies:", filteredMovies);

  return (
    <S.Container>
      <div>
        <S.Heading>Genres</S.Heading>
        <CheckboxList>
          {Object.keys(selectedGenres).map((genre) => (
            <Checkbox
              key={genre}
              label={genre}
              checked={selectedGenres[genre]}
              onGenreChange={() => handleGenreChange(genre)}
            />
          ))}
        </CheckboxList>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <S.Heading>Movies</S.Heading>
          <CardList>
            {filteredMovies.slice(0, 10).map((movie, idx) => (
              <Card key={idx} title={movie.title} poster={movie.poster} />
            ))}
          </CardList>
        </div>
      )}
    </S.Container>
  );
};
