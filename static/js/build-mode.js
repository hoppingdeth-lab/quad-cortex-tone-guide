document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(
    ".build-section[data-build-recipe]"
  );

  if (!section) return;

  const checkboxes = Array.from(
    section.querySelectorAll(".build-step-checkbox")
  );

  const progressPanel = section.querySelector(".build-progress");
  const progressBar = section.querySelector(".build-progress-bar");
  const progressCount = section.querySelector(".build-progress-count");
  const resetButton = section.querySelector(".build-reset");

  if (
    !checkboxes.length ||
    !progressPanel ||
    !progressBar ||
    !progressCount ||
    !resetButton
  ) return;

  const recipe = section.dataset.buildRecipe;
  const storageKey = `qctg-build-progress:${recipe}`;

  // Identify the current set of build steps.
  // If a recipe is substantially revised, old progress is reset.
  const titles = Array.from(
    section.querySelectorAll(".step-content h3"),
    element => element.textContent.trim()
  );

  function saveProgress() {
    try {
      const data = {
        titles,
        completed: checkboxes.map(box => box.checked)
      };

      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (error) {
      // Build Mode still works if browser storage is blocked.
    }
  }

  function restoreProgress() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return;

      const data = JSON.parse(saved);

      if (
        !Array.isArray(data.titles) ||
        !Array.isArray(data.completed) ||
        JSON.stringify(data.titles) !== JSON.stringify(titles) ||
        data.completed.length !== checkboxes.length
      ) {
        return;
      }

      checkboxes.forEach((box, index) => {
        box.checked = data.completed[index] === true;
      });
    } catch (error) {
      // Invalid or unavailable saved data is ignored.
    }
  }

  function updateProgress() {
    let completed = 0;

    checkboxes.forEach(box => {
      const step = box.closest(".build-step");

      if (box.checked) completed++;

      if (step) {
        step.classList.toggle("is-complete", box.checked);
      }

      const label = box.parentElement.querySelector("span");

      if (label) {
        label.textContent = box.checked
          ? "Completed"
          : "Mark as complete";
      }
    });

    progressBar.max = checkboxes.length;
    progressBar.value = completed;

    progressCount.textContent =
      `${completed} of ${checkboxes.length} steps complete`;
  }

  // Load any previous progress before showing controls.
  restoreProgress();
  updateProgress();

  section.classList.add("is-interactive");
  progressPanel.hidden = false;

  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      updateProgress();
      saveProgress();
    });
  });

  resetButton.addEventListener("click", () => {
    checkboxes.forEach(box => {
      box.checked = false;
    });

    updateProgress();
    saveProgress();
  });
});
