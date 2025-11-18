function setAutofarm(value) {
    const farm = document.querySelector(".autofarm-circle");
    farm.style.setProperty("--percent", value);
}
setAutofarm(100)