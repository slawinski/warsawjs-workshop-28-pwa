export interface Movie {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export type Movies = Array<Movie>;
