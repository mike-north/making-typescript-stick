export enum Language {
  JavaScript,
  TypeScript='TS'
}

let lang1: Language = Language.JavaScript;
//   ^?
let lang2: Language = Language.TypeScript;
//   ^?

Math.round(lang1)
Math.round(lang2)
