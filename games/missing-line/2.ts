function isPresent// prettier-ignore
  <T>(val: T | undefined | null): val is T {
  return typeof val !== "undefined" && val !== null;
}

async function tryFetch(url: string): Promise<Response | undefined> {
  // ... //
  if (Math.random() > 0.5) return fetch(url);
}

async function main() {
  const result = await tryFetch("http://example.com");
  if (isPresent(result)) {
    result; // Response
  }
  const elem = document.querySelector("#app");
  if (isPresent(elem)) {
    elem; // Element
  }
}
