const menuData = {
  tradicionais: [
    ["MUSSARELA", "Molho de tomate, mussarela e orégano", "R$ 39,90"],
    ["CALABRESA", "Molho de tomate, mussarela, calabresa e cebola", "R$ 42,90"],
    ["FRANGO COM CATUPIRY", "Frango desfiado, catupiry e mussarela", "R$ 44,90"],
    ["MARGUERITA", "Mussarela, tomate, manjericão e azeite", "R$ 41,90"]
  ],
  especiais: [
    ["PIZZA DA VILA", "Mussarela, calabresa, bacon, cebola e molho especial", "R$ 49,90"],
    ["VILA BACON", "Mussarela, bacon crocante, cebola roxa e barbecue", "R$ 48,90"],
    ["SERTANEJA", "Carne seca, mussarela, cebola e catupiry", "R$ 51,90"],
    ["QUATRO QUEIJOS", "Mussarela, provolone, parmesão e gorgonzola", "R$ 49,90"]
  ],
  doces: [
    ["CHOCOLATE", "Creme de chocolate e chocolate ao leite", "R$ 39,90"],
    ["BANANA & CANELA", "Banana, açúcar, canela e doce de leite", "R$ 38,90"],
    ["ROMEU E JULIETA", "Goiabada cremosa, mussarela e canela", "R$ 39,90"],
    ["NUTELLA & MORANGO", "Creme de avelã e morangos", "R$ 44,90"]
  ],
  bebidas: [
    ["COCA-COLA 2L", "Refrigerante gelado", "R$ 12,00"],
    ["COCA-COLA ZERO 2L", "Refrigerante gelado", "R$ 12,00"],
    ["GUARANÁ 2L", "Refrigerante gelado", "R$ 10,00"],
    ["SUCO DE LARANJA", "Servido gelado", "R$ 9,00"]
  ]
};

const menuList = document.querySelector("#menu-list");

function renderMenu(category) {
  menuList.innerHTML = menuData[category].map(item => `
    <article class="menu-item">
      <div class="item-top">
        <span class="item-name">${item[0]}</span>
        <span class="item-dots"></span>
        <span class="item-price">${item[2]}</span>
      </div>
      <span class="item-desc">${item[1]}</span>
    </article>
  `).join("");
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.category);
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

renderMenu("tradicionais");
