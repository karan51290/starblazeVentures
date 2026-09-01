(function () {
  var filtersEl = document.getElementById("portfolio-filters");
  var gridEl = document.getElementById("portfolio-grid");
  if (!filtersEl || !gridEl) return;

  var chips = Array.prototype.slice.call(filtersEl.querySelectorAll("[data-filter]"));
  var cards = Array.prototype.slice.call(gridEl.querySelectorAll(".portfolio-card"));
  var activeFilters = new Set();

  function readFiltersFromUrl() {
    var params = new URLSearchParams(window.location.search);
    activeFilters = new Set(params.getAll("service"));
  }

  function writeFiltersToUrl() {
    var params = new URLSearchParams(window.location.search);
    params.delete("service");
    activeFilters.forEach(function (value) {
      params.append("service", value);
    });
    var query = params.toString();
    var newUrl = window.location.pathname + (query ? "?" + query : "");
    window.history.replaceState(null, "", newUrl);
  }

  function applyFilters() {
    chips.forEach(function (chip) {
      chip.classList.toggle("is-active", activeFilters.has(chip.dataset.filter));
    });
    cards.forEach(function (card) {
      var cardServices = (card.dataset.services || "").split(",").filter(Boolean);
      var matches = activeFilters.size === 0 || cardServices.some(function (s) {
        return activeFilters.has(s);
      });
      card.classList.toggle("is-hidden", !matches);
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var filter = chip.dataset.filter;
      if (activeFilters.has(filter)) {
        activeFilters.delete(filter);
      } else {
        activeFilters.add(filter);
      }
      writeFiltersToUrl();
      applyFilters();
    });
  });

  readFiltersFromUrl();
  applyFilters();
})();
