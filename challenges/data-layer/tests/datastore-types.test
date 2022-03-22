import { expectType } from "tsd";

import { DataStore, DataEntity, Song, Movie } from "../src";

let movie: Movie = {
  id: "1",
  director: "Steven Spielberg",
};

let song: Song = {
  id: "2",
  singer: "The Beatles",
};

/**
 * Method return values
 */
// DataStore.addMovie returns a Movie
expectType<ReturnType<DataStore["addMovie"]>>({} as Movie);
// DataStore.addSong returns a Song
expectType<ReturnType<DataStore["addSong"]>>({} as Song);

// DataStore.getMovie returns a Movie
expectType<ReturnType<DataStore["getMovie"]>>({} as Movie);
// DataStore.getSong returns a Song
expectType<ReturnType<DataStore["getSong"]>>({} as Song);

// DataStore.getAllMovies returns a Movie[]
expectType<ReturnType<DataStore["getAllMovies"]>>({} as Movie[]);
// DataStore.getAllSongs returns a Song[]
expectType<ReturnType<DataStore["getAllSongs"]>>({} as Song[]);

// DataStore.clearMovies returns a Movie[]
expectType<ReturnType<DataStore["clearMovies"]>>(null);
// DataStore.clearSongs returns a Song[]
expectType<ReturnType<DataStore["clearSongs"]>>(null);

/**
 * Arguments
 */
//  DataStore.addMovie takes a Movie
expectType<Parameters<DataStore["addMovie"]>>([movie]);
//  DataStore.getMovie takes an id
expectType<Parameters<DataStore["getMovie"]>>([""]);
//  DataStore.getAllMovies takes no args
expectType<Parameters<DataStore["getAllMovies"]>>([]);
//  DataStore.clearMovies takes no args
expectType<Parameters<DataStore["clearMovies"]>>([]);

//  DataStore.addSong takes a Song
expectType<Parameters<DataStore["addSong"]>>([song]);
//  DataStore.getSong takes an id
expectType<Parameters<DataStore["getSong"]>>([""]);
//  DataStore.getAllSongs takes no args
expectType<Parameters<DataStore["getAllSongs"]>>([]);
//  DataStore.clearSongs takes no args
expectType<Parameters<DataStore["clearSongs"]>>([]);

// Only the following methods/properties are available on the DataStore
expectType<
  | "addSong"
  | "addMovie"
  | "getSong"
  | "getMovie"
  | "getAllSongs"
  | "getAllMovies"
  | "clearSongs"
  | "clearMovies"
>("addSong" as keyof DataStore);
