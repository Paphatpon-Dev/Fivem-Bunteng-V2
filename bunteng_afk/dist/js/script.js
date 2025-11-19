function setAfkCoin(value){
    const afk = document.querySelector(".afk-circle");
    afk.style.setProperty("--percent", value);
}
 setAfkCoin(100);