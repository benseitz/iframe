$(document).ready(function () {
  $(window).on("message onmessage", function (e) {
    var iFrameHeight = e.originalEvent.data;
    $("#iframe").height(iFrameHeight + "px");
  });
  $("#iframe").on("load", function () {
    var documentHeight = $(this).contents().find("div").height();
    window.postMessage(documentHeight, window.location.href);
  });
});
