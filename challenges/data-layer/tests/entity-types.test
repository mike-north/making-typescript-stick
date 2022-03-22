import { expectType } from "tsd";

import { DataStore, DataEntity, Song, Movie } from "../src";


expectType<Song['id']>('1');
expectType<Movie['id']>('1');
expectType<Song['singer']>('abc');
expectType<Movie['director']>('abc');

// Only the following methods/properties are available on the Movie interface
expectType<
  | "id"
  | "director"
>("id" as keyof Movie);

// Only the following methods/properties are available on the Movie interface
expectType<
  | "id"
  | "singer"
>("id" as keyof Song);
