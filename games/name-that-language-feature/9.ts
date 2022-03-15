type ConsoleMethods = {
  [K in 'log' | 'warn' | 'error']: Console[K]
}

/*

type ConsoleMethods = {
  log: (...data: any[]) => void;
  warn: (...data: any[]) => void;
  error: (...data: any[]) => void;
}

*/
