/**
 * @jest-environment jsdom
 */
import $ from "../src";

function sum(a: number, b: number) {
  return a + b;
}

test("module's default export is a value", () => {
  expect($).toBeTruthy();
});

test("module's default export is a one-arg function", () => {
  expect(typeof $).toBe("function");
  expect($.length).toBe(1);
});

test("module's default export has an `.ajax` property that's a function", () => {
  expect(typeof $.ajax).toBe("function");
});

test("module's default export has an `.ajax` property that's a function", () => {
  expect(typeof $.ajax).toBe("function");
});

test('`$("button.continue")` returns something truthy', () => {
  const element = document.createElement("div");
  element.id = "test-element";
  element.innerHTML = `<button class='continue'>Continue</button>`;
  document.body.appendChild(element);

  const result = $("button.continue");
  expect(result).toBeTruthy();

  document.body.removeChild(element);
});

test('`$("button.continue").html("Next Step...")` returns something truthy', () => {
  const element = document.createElement("div");
  element.id = "test-element";
  element.innerHTML = `<button class='continue'>Continue</button>`;
  document.body.appendChild(element);

  const result = $("button.continue");
  expect(result).toBeTruthy();
  result.html("Next Step...");
  expect(document.querySelector("button.continue").innerHTML).toBe(
    "Next Step..."
  );

  document.body.removeChild(element);
});
test('`$("button.continue").html("Next Step...")` returns something truthy', async () => {
  const element = document.createElement("div");
  element.id = "test-element";
  element.innerHTML = `<div id='weather-temp'></div>`;
  document.body.appendChild(element);

  const result = await $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    data: {
      zipcode: "97201",
    },
    success: (result) => {
      $("#weather-temp").html("<strong>" + result + "</strong> degrees");
    },
  });

  expect(result).toBeTruthy();
  expect(JSON.stringify(result)).toBe(
    '{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"}'
  );
});
