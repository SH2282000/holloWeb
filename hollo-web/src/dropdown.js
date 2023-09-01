export function dropdown(idButton) {
  const dropdownBtn = document.getElementById(`dropdown-btn${idButton}`);
  const dropdownCaret = document.getElementById(`arrow${idButton}`);
  const dropdownContent = document.getElementById(`dropdown-content${idButton}`);

  // add click event to dropdown button
  dropdownBtn.addEventListener("click", () => {
    dropdownCaret.classList.toggle("arrow-rotate");
    dropdownContent.classList.toggle("menu-open");
    dropdownBtn.setAttribute(
      "aria-expanded",
      dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
}

