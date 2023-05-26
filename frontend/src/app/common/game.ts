export interface Game {
  id: string;
  name: string;
  icon: string;
  banner: string;
  images: string[];
  price: number;
  developers: string[];
  publishers: string[];
  genres: string[];
  consoles: string[];
  release_date: {
    day: number,
    month: number,
    year: number
  };
  post_date: {
    day: number,
    month: number,
    year: number
  };
  comments?: [{
    user_uid: string,
    user_name: string,
    game_id: string,
    comment: string,
    score: number,
    date: {
      day: number,
      month: number,
      year: number
    }
  }]
}
