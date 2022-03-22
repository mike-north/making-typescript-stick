/**
 * @jest-environment jsdom
 */
import { DataStore } from "../src";

test("module's default export is a class", () => {
  let ds = new DataStore();
  expect(ds).toBeInstanceOf(DataStore);
});

test("Initially getAllSongs() and getAllMovies() return empty arrays", () => {
  let ds = new DataStore();
  expect(ds.getAllSongs()).toStrictEqual([]);
  expect(ds.getAllMovies()).toStrictEqual([]);
});

test("addSong() and addMovie() accept arguments and return the newly added record", () => {
  let ds = new DataStore();
  let song = { id: "1", singer: "Singer 1" };
  let movie = { id: "back-to-the-future", director: "Stephen Spielberg" };
  expect(ds.addSong(song)).toStrictEqual(song);
  expect(ds.addMovie(movie)).toStrictEqual(movie);
});

test("addSong() and addMovie() result in getAllSongs() and getAllMovies() returning a longer list", () => {
  let ds = new DataStore();
  let song = { id: "1", singer: "Singer 1" };
  let movie = { id: "back-to-the-future", director: "Stephen Spielberg" };
  ds.addSong(song);
  ds.addMovie(movie);
  expect(ds.getAllSongs()).toStrictEqual([song]);
  expect(ds.getAllMovies()).toStrictEqual([movie]);
});
test("clearSongs() and clearMovies() result in getAllSongs() and getAllMovies() returning empty lists", () => {
  let ds = new DataStore();
  let song = { id: "1", singer: "Singer 1" };
  let movie = { id: "back-to-the-future", director: "Stephen Spielberg" };
  ds.addSong(song);
  ds.addMovie(movie);
  expect(ds.getAllSongs()).toStrictEqual([song]);
  expect(ds.getAllMovies()).toStrictEqual([movie]);

  ds.clearSongs();
  ds.clearMovies();

  expect(ds.getAllSongs()).toStrictEqual([]);
  expect(ds.getAllMovies()).toStrictEqual([]);
});
