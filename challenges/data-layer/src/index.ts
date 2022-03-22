export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface DataEntityMap {
  movie: Movie;
}


export interface Song extends DataEntity {
  singer: string;
}
// export interface Comic extends DataEntity {
//   issueNumber: number;
// }
export interface DataEntityMap {
  song: Song;
  // comic: Comic;
};

type DataStoreMethods = {
  [K in keyof DataEntityMap as `getAll${Capitalize<K>}s`]: () => DataEntityMap[K][];
} & {
  [K in keyof DataEntityMap as `get${Capitalize<K>}`]: (
    id: string
  ) => DataEntityMap[K];
} & {
  [K in keyof DataEntityMap as `clear${Capitalize<K>}s`]: () => void;
} & {
  [K in keyof DataEntityMap as `add${Capitalize<K>}`]:
    (arg: DataEntityMap[K]) => DataEntityMap[K];
};

function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== 'undefined';
}

export class DataStore implements DataStoreMethods {
  #data: { [K in keyof DataEntityMap]: Record<string, DataEntityMap[K]> } = {
    movie: {},
    song: {},
  };
  getAllSongs() {
    return Object.keys(this.#data.song).map(
      (songKey) => this.#data.song[songKey]!
    )
  }
  getSong(songKey: string): Song {
    const song = this.#data.song[songKey]
    if (!song) throw new Error(`Could not find song with id ${songKey}`);
    return song;
  }
  clearSongs(): void {
    this.#data.song = {}
  }
  getAllMovies() {
    return Object.keys(this.#data.movie).map(
      (movieKey) => this.#data.movie[movieKey]!
    )
  }
  getMovie(movieKey: string): Movie {
    const Movie = this.#data.movie[movieKey]
    if (!Movie) throw new Error(`Could not find Movie with id ${movieKey}`);
    return Movie;
  }
  clearMovies(): void {
    this.#data.movie = {}
  }
  addMovie(m: Movie): Movie {
    this.#data.movie[m.id] = m;
    return m;
  }
  addSong(s: Song): Song {
    this.#data.song[s.id] = s;
    return s;
  }
}
