interface Movie {
  overview: string;
}

interface MoviesTypes {
  pending: boolean;
  movies: Movie[];
}

export type {MoviesTypes};
