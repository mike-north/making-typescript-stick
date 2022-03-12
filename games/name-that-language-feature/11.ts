interface TVShow {
  releaseDate: Date;
  show: string;
  episode: number;
}
interface Movie {
  title: string;
  releaseDate: Date;
}

type Video = Movie | TVShow;

function isFish(mediaItem: Video): mediaItem is Video {
  //                                    ^?
  return (mediaItem as Video).releaseDate instanceof Date;
}
