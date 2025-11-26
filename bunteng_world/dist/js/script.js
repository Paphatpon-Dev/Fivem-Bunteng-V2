// select
document.querySelectorAll(".dropdown").forEach(drop => {
    const selected = drop.querySelector(".dropdown-selected");
    const list = drop.querySelector(".dropdown-list");

    selected.addEventListener("click", () => {
        list.style.display =
          list.style.display === "block" ? "none" : "block";
    });

    list.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", () => {
            selected.innerText = item.dataset.value;
            list.style.display = "none";
        });
    });
});
