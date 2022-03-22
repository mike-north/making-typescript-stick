import fetch from "node-fetch";

class SelectorResult {
  #elements;
  constructor(elements: NodeListOf<Element>) {
    this.#elements = elements;
  }
  html(contents: string) {
    // iterate over everything we found
    this.#elements.forEach((elem) => {
      // set contents equal to string we were given
      elem.innerHTML = contents;
    });
  }
  on<K extends keyof HTMLElementEventMap>(
    eventName: K,
    cb: (event: HTMLElementEventMap[K]) => void
  ) {
    // iterate over everything we found
    this.#elements.forEach((elem) => {
      // would want a type guard to check whether something is
      // an HTMLElement (vs. a Element)
      const htmlElem = elem as HTMLElement;
      htmlElem.addEventListener(eventName, cb);
    });
  }
  show() {
    // iterate over everything we found
    this.#elements.forEach((elem) => {
      // would want a type guard to check whether something is
      // an HTMLElement (vs. a Element)
      const htmlElem = elem as HTMLElement;
      htmlElem.style.visibility = "visible";
    });
  }
  hide() {
    // iterate over everything we found
    this.#elements.forEach((elem) => {
      // would want a type guard to check whether something is
      // an HTMLElement (vs. a Element)
      const htmlElem = elem as HTMLElement;
      htmlElem.style.visibility = "hidden";
    });
  }
}

function $(selector: string) {
  return new SelectorResult(document.querySelectorAll(selector));
}

namespace $ {
  export function ajax({
    url,
    success,
  }: {
    url: string;
    success: (data: any) => void;
  }): any {
    return fetch(url)
      .then((resp) => resp.json())
      .then(success);
  }
}

export default $;

$("button.continue").html("Next Step...");

const hiddenBox = $("#banner-message");
$("#button-container button").on("click", (event) => {
  hiddenBox.show();
});
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/33",
  success: (result) => {
    $("#post-info").html("<strong>" + result.title + "</strong>" + result.body);
  },
});
