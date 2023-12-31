import { changeVideo } from "./video";

export function dropdown(idButton, numOfButtons) {
  const dropdownBtn = document.getElementById(`dropdown-btn${idButton}`);
  const dropdownCaret = document.getElementById(`arrow${idButton}`);
  const dropdownContent = document.getElementById(`dropdown-content${idButton}`);

  // add click event to dropdown button
  dropdownBtn.addEventListener("click", () => {
    dropdownCaret.classList.toggle("arrow-rotate");
    if (idButton == 0) {
      changeVideo("menu")
      for (const x of Array(numOfButtons - 1).keys()) {
        closeEverything(x + 1)
      }
    } else {
      closeEverything(0)
    }
    dropdownContent.classList.toggle("menu-open");
    dropdownBtn.setAttribute(
      "aria-expanded",
      dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
}

function closeEverything(idButton) {
  const dropdownBtn = document.getElementById(`dropdown-btn${idButton}`);
  const dropdownCaret = document.getElementById(`arrow${idButton}`);
  const dropdownContent = document.getElementById(`dropdown-content${idButton}`);

  dropdownCaret.classList.remove("arrow-rotate");
  dropdownContent.classList.remove("menu-open");
  dropdownBtn.setAttribute("aria-expanded", "false");
}