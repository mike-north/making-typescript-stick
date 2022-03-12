export class Book {
  title: string = "";
  author: string = "";
}

export const keys = Object.keys(new Book());
//             ^?
