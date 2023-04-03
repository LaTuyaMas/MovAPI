export interface Game {
  _id: string;
  name: string;
  icon: string;
  banner: string;
  images: string[];
  price: number;
  developers: string[];
  publishers: string[];
  genres: string[];
  consoles: string[];
  release_date: string;
  post_date: string;
  comments?: [{
    user_uid: string,
    user_name: string,
    comment: string,
    score: number,
    date: string
  }]
}
