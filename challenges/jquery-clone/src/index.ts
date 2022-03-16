import * as nodeFetch from "node-fetch";
import * as querystring from 'querystring';

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
}

function $(selector: string) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return null;
  return new SelectorResult(elements);
}

module $ {
  type JSONPrimitive = string | number | boolean | null;
  type JSONObject = { [member: string]: JSONValue };
  type JSONArray = JSONValue[];
  type JSONValue = JSONPrimitive | JSONObject | JSONArray;

  export interface AjaxInfo {
    url: string;
    success?: (resp: JSONValue) => void,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  }
  export function ajax(
    requestInfo: AjaxInfo,
  ): Promise<unknown> {
    const { url, success } = requestInfo;
    return nodeFetch.default(url).then((resp) => {
      return resp.json().then((data: JSONValue) => {
        success && success(data);
        return data;
      });
    });
  }
}

export default $;
