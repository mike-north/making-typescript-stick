export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface Song extends DataEntity {
  singer: string;
}

export type DataEntityMap = {
  movie: Movie;
  song: Song;
};

type DataEntities = keyof DataEntityMap;

type DataStorage = {
  [K in DataEntities as `${K}s`]: Record<string, DataEntityMap[K]>;
};

function isDefined<T>(value: T | undefined): value is T {
  return typeof value !== 'undefined';
}

export type DataStorageMethods = {
  [K in DataEntities as `add${Capitalize<K>}`]: (
    arg: DataEntityMap[K]
  ) => DataEntityMap[K];
} &
  {
    [K in DataEntities as `get${Capitalize<K>}`]: (
      id: string
    ) => DataEntityMap[K] | undefined;
  } &
  {
    [K in DataEntities as `getAll${Capitalize<K>}s`]: (
      id: string
    ) => DataEntityMap[K][];
  } &
  {
    [K in DataEntities as `clear${Capitalize<K>}s`]: () => null;
  };

export class DataStore implements DataStorageMethods {
  #dataStorage: DataStorage = {
    songs: {},
    movies: {},
  };
  addSong(song: Song) {
    this.#dataStorage.songs[song.id] = song;
    return song;
  }
  addMovie(movie: Movie) {
    this.#dataStorage.movies[movie.id] = movie;
    return movie;
  }

  getSong(id: string) {
    return this.#dataStorage.songs[id];
  }
  getMovie(id: string) {
    return this.#dataStorage.movies[id];
  }
  clearSongs() {
    this.#dataStorage.songs = {};
    return null;
  }
  clearMovies() {
    this.#dataStorage.movies = {};
    return null;
  }
  getAllSongs() {
    return Object.keys(this.#dataStorage.songs).map(
      (k) => this.#dataStorage.songs[k]
    ).filter(isDefined);
  }
  getAllMovies() {
    return Object.keys(this.#dataStorage.movies).map(
      (k) => this.#dataStorage.movies[k]
    ).filter(isDefined);;
  }
}
