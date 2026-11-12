
document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("recipe-search");
  const toneFilter = document.getElementById("tone-filter");
  const tuningFilter = document.getElementById("tuning-filter");
  const clearButton = document.getElementById("clear-filters");
  const countDisplay = document.getElementById("recipe-count");
  const noResults = document.getElementById("no-results");

  const cards = Array.from(
    document.querySelectorAll(".recipe-card")
  );

  // Build dropdown options from actual recipe metadata
  function populateOptions(select, values) {
    const uniqueValues = [...new Set(values.filter(Boolean))]
      .sort((a, b) => a.localeCompare(b));

    uniqueValues.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  populateOptions(
    toneFilter,
    cards.map(card => card.dataset.tone)
  );

  populateOptions(
    tuningFilter,
    cards.map(card => card.dataset.tuning)
  );

  // Filter cards without reloading the page
  function filterRecipes() {

    const query = searchInput.value.trim().toLowerCase();
    const selectedTone = toneFilter.value;
    const selectedTuning = tuningFilter.value;

    let visibleCount = 0;

    cards.forEach(card => {

      const searchText = (card.dataset.search || "")
        .toLowerCase();

      const tone = card.dataset.tone || "";
      const tuning = card.dataset.tuning || "";

      const matchesSearch = searchText.includes(query);
      const matchesTone = !selectedTone || tone === selectedTone;
      const matchesTuning = !selectedTuning ||
                            tuning === selectedTuning;

      const visible = matchesSearch &&
                      matchesTone &&
                      matchesTuning;

      card.hidden = !visible;

      if (visible) visibleCount++;
    });

    countDisplay.textContent =
      `${visibleCount} ${visibleCount === 1 ? "recipe" : "recipes"} found`;

    noResults.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", filterRecipes);
  toneFilter.addEventListener("change", filterRecipes);
  tuningFilter.addEventListener("change", filterRecipes);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    toneFilter.value = "";
    tuningFilter.value = "";
    filterRecipes();
    searchInput.focus();
  });

  filterRecipes();

});
