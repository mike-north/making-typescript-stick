/**
 * @jest-environment jsdom
 */
import { expectType } from "tsd";

import $ from "../src";

const hiddenBox = $("#banner-message");
$("#button-container button").on("click", function (event) {
  expectType<void>(hiddenBox.show());
  expectType<MouseEvent>(event);
});

$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/33",
  success: function (result) {
    $("#weather-temp").html("<strong>" + result + "</strong> degrees");
  },
});
