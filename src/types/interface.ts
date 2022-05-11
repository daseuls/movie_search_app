export interface IMovieResponse {
  Response: string;
  Search?: IMovieItem[];
  totalResults?: string;
  Error?: string;
}

export interface IMovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IFetchConfig {
  s: string;
  page: number;
}
