// ---------------------------
// 1) DATA สินค้า
// ---------------------------
const itemsData = [
  { id: 1, name: "เนื้อสัตว์", type: "เงินสด", price: 850, quantity: 40, image: "./img/meat.png" },
  { id: 2, name: "ผักสด", type: "เงินสด", price: 120, quantity: 30, image: "./img/meat.png" },
  { id: 3, name: "ไข่ไก่", type: "เงินสด", price: 6, quantity: 200, image: "./img/meat.png" },
  { id: 4, name: "ไข่ไก่", type: "เงินสด", price: 6, quantity: 200, image: "./img/meat.png" },
  { id: 5, name: "ไข่ไก่", type: "เงินสด", price: 6, quantity: 200, image: "./img/meat.png" }
];

// ---------------------------
// 2) SELECTOR
// ---------------------------
const itemsContainer = document.querySelector(".b-body");
const cartContainer = document.querySelector(".box-top");

// SUMMARY
const sumPriceEl = document.getElementById("sum-price");
const bonusEl = document.getElementById("bonus");
const totalPriceEl = document.getElementById("total-price");

// RIGHT PANEL
const rightEl = document.querySelector(".right");
const rightBody = rightEl.querySelector(".body-2");
const rightTotalEl = document.getElementById("right-total");
const sellBtn = document.getElementById("sell-btn");
const confirmSellBtn = document.getElementById("confirm-sell-btn");

let cart = [];

// ---------------------------
// 3) RENDER PRODUCTS
// ---------------------------
function renderItems() {
  itemsContainer.innerHTML = "";

  itemsData.forEach(item => {
    const html = `
      <div class="items relative flex flex-col" data-id="${item.id}">
        <div class="b-pading">
          <div class="quantity flex"><div>${item.quantity}</div></div>

          <div class="img-item flex flex justify-center">
            <div class="flex justify-center items-center">
              <img src="${item.image}" alt="">
            </div>
          </div>

          <div class="price flex justify-between items-center">
            <div class="text-center">
              <div>${item.type}</div>
              <div>ราคา/ชิ้น</div>
            </div>
            <div>${item.price}.-</div>
          </div>
        </div>

        <div class="add absolute">
          <div class="add-btn"><div>+</div></div>
          <div class="add-text flex">
            <div><img src="./img/left-click.png" alt=""></div>
            <div>เพิ่มในรายการขาย</div>
          </div>
        </div>
      </div>
    `;

    itemsContainer.insertAdjacentHTML("beforeend", html);
  });

  bindAddButtons();
}

// ---------------------------
// 4) ADD TO CART
// ---------------------------
function addToCart(id) {
  const item = itemsData.find(i => i.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.amount += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      type: item.type,
      image: item.image,
      price: item.price,
      amount: 1
    });
  }

  renderCart();
  updateSummary();
}

// ---------------------------
// 5) REMOVE ITEM
// ---------------------------
function bindRemoveButtons() {
  document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-remove"));
      cart = cart.filter(c => c.id !== id);
      renderCart();
      updateSummary();
    });
  });
}

// ---------------------------
// 6) RENDER CART
// ---------------------------
function renderCart() {
  cartContainer.innerHTML = "";

  cart.forEach(c => {
    const total = c.price * c.amount;

    const html = `
      <div class="item-cart flex justify-between items-center">
        <div class="l-item flex items-center">
          <div class="icon-item flex justify-center items-center">
            <img src="${c.image}" alt="">
          </div>

          <div>
            <div>${c.type}</div>
            <div>จำนวน</div>
          </div>

          <div>${c.amount}</div>
        </div>

        <div class="r-item flex items-center">
          <div>${total}.-</div>
          <div class="icon-bin flex justify-center items-center" data-remove="${c.id}">
            <img src="./img/bin.png" alt="">
          </div>
        </div>
      </div>
    `;

    cartContainer.insertAdjacentHTML("beforeend", html);
  });

  bindRemoveButtons();
}

// ---------------------------
// 7) BIND BUTTON + ADD
// ---------------------------
function bindAddButtons() {
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.closest(".items").getAttribute("data-id"));
      addToCart(id);
    });
  });
}

// ---------------------------
// 8) UPDATE SUMMARY
// ---------------------------
function updateSummary() {
  const sum = cart.reduce((total, item) => total + item.price * item.amount, 0);
  const bonus = Math.floor(sum * 0); // 0%
  const total = sum + bonus;

  sumPriceEl.textContent = sum.toLocaleString();
  bonusEl.textContent = bonus.toLocaleString();
  totalPriceEl.textContent = total.toLocaleString();
}

// ---------------------------
// 9) SELL BUTTON → SHOW RIGHT PANEL
// ---------------------------
sellBtn.addEventListener("click", () => {
  if (cart.length === 0) return alert("กรุณาเลือกสินค้า");

  rightEl.style.display = "flex";
  rightBody.innerHTML = "";

  cart.forEach(item => {
    const total = item.price * item.amount;

    const html = `
      <div class="item-list flex justify-between">
        <div class="l-item flex items-center">
          <div class="pulsing"></div>
          <div class="icon-item flex justify-center items-center">
            <img src="${item.image}" alt="">
          </div>
          <div>
            <div>${item.name}</div>
            <div>จำนวน</div>
          </div>
          <div>${item.amount}</div>
        </div>
        <div class="r-item flex items-center">
          <div>${total}.-</div>
        </div>
      </div>
    `;

    rightBody.insertAdjacentHTML("beforeend", html);
  });

  const sum = cart.reduce((t, i) => t + i.price * i.amount, 0);
  rightTotalEl.textContent = sum.toLocaleString();
});

// ---------------------------
// 10) CONFIRM SELL
// ---------------------------
confirmSellBtn.addEventListener("click", () => {
  if (cart.length === 0) return alert("ไม่มีสินค้าให้ขาย");

  alert(`ขายสินค้าเรียบร้อย! ยอดรวม: ${rightTotalEl.textContent}`);

  cart = [];
  renderCart();
  updateSummary();

  rightEl.style.display = "none";
});

// START
renderItems();
