function setLoad(value) {
  const loading = document.querySelector(".loading-circle");
  const textload = document.querySelector("#text-loading");
  textload.textContent = value + "%";
  loading.style.setProperty("--percent", value + "%");
}
setLoad(10)