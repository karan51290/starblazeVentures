(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var lines = ["Hi StarBlaze, I'm " + data.get("name") + "."];
    if (data.get("topic")) lines.push("I'm interested in: " + data.get("topic") + ".");
    lines.push(data.get("message"));
    var url = "https://wa.me/" + form.dataset.phone + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
  });
})();
