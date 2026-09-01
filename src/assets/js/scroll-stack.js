(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll(".services-stack__row"));
  if (!rows.length || !("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-stacked", entry.intersectionRatio < 1);
      });
    },
    { threshold: [1] }
  );

  rows.forEach(function (row) {
    observer.observe(row);
  });
})();
