class SelectorResult {
  #elements: NodeListOf<Element>;
  constructor(elements: NodeListOf<Element>) {
    this.#elements = elements;
  }
  html(contents: string) {
    this.#elements.forEach(e => {
      e.innerHTML = contents
    })
  }
}

function $(selector: string) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return null;
  return new SelectorResult(elements);
}

module $ {
  export function ajax(): Promise<Response> {
    console.log("ajax");
    return fetch("");
  }
}

export default $;
