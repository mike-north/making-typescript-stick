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
  element.innerHTML = `<div id='post-info'></div>`;
  document.body.appendChild(element);

  const result = await $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/33",
    success: (result) => {
      $("#post-info").html(
        "<strong>" + result.title + "</strong>" + result.body
      )
    },
  })

  expect(result).toBeTruthy();
  expect(JSON.stringify(result)).toBe(
    '{\"userId\":4,\"id\":33,\"title\":\"qui explicabo molestiae dolorem\",\"body\":\"rerum ut et numquam laborum odit est sit\\nid qui sint in\\nquasi tenetur tempore aperiam et quaerat qui in\\nrerum officiis sequi cumque quod\"}'
  );
});