export class AsyncManager {
  constructor(arg: 0 | 4 | string) {
    if (arg > 0 || arg <= 0) {
      new Promise((resolve, reject) => {
        arg;
        // ^?
      });
    }
  }
}
