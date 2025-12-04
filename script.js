const optionBoxes = document.querySelectorAll(".option-box");
const prices = {
  1: 10.0,
  2: 18.0,
  3: 24.0,
};

function updateActiveOption(optionBox) {
  optionBoxes.forEach((b) => b.classList.remove("active"));
  optionBox.classList.add("active");

  const option = optionBox.dataset.option;
  const price = prices[option] || 0;
  const totalElement = document.querySelector(".total");
  if (totalElement) {
    totalElement.textContent = `Total : $${price.toFixed(2)} USD`;
  }
}

function handleOptionClick(e) {
  if (e.target.tagName === "SELECT") return;

  updateActiveOption(this);
}

function handleOptionKeydown(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    updateActiveOption(this);
  }
}

optionBoxes.forEach((box) => {
  box.addEventListener("click", handleOptionClick);
  box.addEventListener("keydown", handleOptionKeydown);
  box.tabIndex = 0; // Make focusable for keyboard navigation
});

document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
