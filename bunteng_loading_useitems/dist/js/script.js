function setLoadingUseItems(visible, items) {
    const container = document.getElementById('loading-useitems-container');
    if (!container) return;
    if (visible) {
        container.style.display = 'flex';
        const itemsContainer = document.getElementById('loading-useitems-items');
        itemsContainer.innerHTML = ''; 
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'circle-progress load-items-circle';
            itemElement.style.setProperty('--percent', item.progress);
            itemElement.innerHTML = `
                <span class="value flex justify-center items-center">
                    <img src="${item.icon}" alt="${item.name}" class="icon">
                </span>
            `;
            itemsContainer.appendChild(itemElement);
        });
    } else {
        container.style.display = 'none';
    }
}
setLoadingUseItems(true, [
  {
    name: "Bonus",
    icon: "./img/bonus.png",
    progress: 50
  },
  {
    name: "Bonus",
    icon: "./img/bonus.png",
    progress: 50
  },
  {
    name: "Bonus",
    icon: "./img/bonus.png",
    progress: 100
  }
]);
