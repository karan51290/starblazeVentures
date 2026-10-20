(function () {
  var dialog = document.getElementById("buy-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;

  document.querySelectorAll("[data-buy-now]").forEach(function (btn) {
    btn.addEventListener("click", function () { dialog.showModal(); });
  });
  dialog.querySelectorAll("[data-buy-close]").forEach(function (btn) {
    btn.addEventListener("click", function () { dialog.close(); });
  });
  // Click on the backdrop closes the dialog
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
