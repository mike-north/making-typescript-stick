import fetch from "node-fetch";

class SelectorResult {
  #elements: NodeListOf<Element>;
  constructor(elements: NodeListOf<Element>) {
    this.#elements = elements;
  }
  html(contents: string) {
    this.#elements.forEach((e) => {
      e.innerHTML = contents;
    });
  }
  show() {
    this.#elements.forEach((e) => {
      if (e instanceof HTMLElement) {
        e.style.visibility = "visible";
      }
    });
  }
  hide() {
    this.#elements.forEach((e) => {
      if (e instanceof HTMLElement) {
        e.style.visibility = "hidden";
      }
    });
  }
  on<K extends keyof HTMLElementEventMap>(
    event: K,
    callback: (event: HTMLElementEventMap[K]) => void
  ) {
    this.#elements.forEach((e) => {
      if (e instanceof HTMLElement) {
        e.addEventListener(event, callback);
      }
    });
  }
}

function $(selector: string) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return null;
  return new SelectorResult(elements);
}

module $ {
  export type JSONPrimitive = string | number | boolean | null;
  export type JSONObject = { [member: string]: JSONValue };
  export type JSONArray = JSONValue[];
  export type JSONValue = JSONPrimitive | JSONObject | JSONArray;

  export interface AjaxInfo {
    url: string;
    success?: (resp: JSONValue) => void;
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  }
  export function ajax(requestInfo: AjaxInfo): Promise<unknown> {
    const { url, success } = requestInfo;
    return fetch(url).then((resp) => {
      return resp.json().then((respData: JSONValue) => {
        success && success(respData);
        return respData;
      });
    });
  }
}

export default $;
