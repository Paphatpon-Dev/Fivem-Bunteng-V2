function setMicLevel(level) {
  const bars = document.querySelectorAll(".micro");
  bars.forEach((bar, index) => {
    if (index < level) bar.classList.add("ative");
    else bar.classList.remove("ative");
  });
}
function setStamina(value) {
  const stamina = document.querySelector(".stamina-circle");
  stamina.style.setProperty("--percent", value);
}
function setHp(value) {
  const bloodHp = document.querySelector(".blood-circle");
  bloodHp.style.setProperty("--percent", value + "%");
}
function setAmor(value) {
  const Amor = document.querySelector(".amor-circle");
  Amor.style.setProperty("--percent", value + "%");
}
function setFood(value) {
  const food = document.querySelector(".food-w");
  const status = document.querySelector("#text-food");
  const foodadd = value * 0.9 + 11;
  const foodremove = value * 0.9 - 3;
  if (value > 20) {
    food.style.setProperty("--percent", foodremove + "%");
  } else {
    food.style.setProperty("--percent", foodadd + "%");
  }
  status.textContent = value + "%";
}
function setOxigen(value) {
  const oxigen = document.querySelector(".oxigen-w");
  const status = document.querySelector("#text-oxigen");
  const oxigenadd = value * 0.9 + 11;
  const oxigenremove = value * 0.9 - 3;
  if (value > 20) {
    oxigen.style.setProperty("--percent", oxigenremove + "%");
  } else {
    oxigen.style.setProperty("--percent", oxigenadd + "%");
  }
  status.textContent = value + "%";
}
setOxigen(100)
setFood(100)
setAmor(100)
setHp(100)
setStamina(100);
setMicLevel(3);