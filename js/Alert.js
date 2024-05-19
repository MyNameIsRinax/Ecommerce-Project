$(document).ready(function () {
    $(".buy").click(function showToast() {
      var myToast = new bootstrap.Toast(document.getElementById("cartToast"));
      myToast.show();
    });
  });