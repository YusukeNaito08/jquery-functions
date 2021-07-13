"use strict";
$("#btn").on("click", function () {
  $.ajax({
    type: "GET",
    url: "./data.json",
    dataType: "json",
    timeout: "5000",
  })
    .done(function (data) {
      $("#number").text(data[0].id);
      $("#name").text(data[0].name);
      $("#color").text(data[0].color);
      $("#form").text(data[0].form);
    })
    .fail(function () {
      console.log("データがありません");
    });
});
