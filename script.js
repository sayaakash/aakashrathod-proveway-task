const optionBoxes = document.querySelectorAll(".option-box");
const prices = {
  1: 10.0,
  2: 18.0,
  3: 24.0,
};

optionBoxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    if (e.target.tagName === "SELECT") return;

    optionBoxes.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    const option = this.dataset.option;
    const price = prices[option];
    document.querySelector(".total").textContent = `Total : $${price.toFixed(
      2
    )} USD`;
  });
});

document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
