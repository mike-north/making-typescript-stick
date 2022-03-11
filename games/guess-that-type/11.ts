export async function tryFetch(url: RequestInfo) {
  try {
    const val = await (await fetch(url)).json();
    return val;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

async function main() {
  const val = await tryFetch("https://example.com");
  ///    ^?
}
