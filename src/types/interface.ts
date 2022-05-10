export interface IMovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieList {
  Search: IMovieItem[];
}

export interface IFetchConfig {
  s: string;
  page: number;
}
