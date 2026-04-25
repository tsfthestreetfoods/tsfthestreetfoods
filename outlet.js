const outletConfig = {
  'bhaji-pav': {
    outletName: 'Bhaji Pav',
    phone: '918409067309',
    mapUrl: 'https://share.google/gjvX9seNaSlevF1n9',
    swiggyUrl: '#',
    zomatoUrl: '#',
    menu: [
      { id: 'pb', name: 'Classic Pav Bhaji', price: 149, desc: 'Butter-loaded Mumbai style bhaji', image: 'images/bhaji.jpg' },
      { id: 'cb', name: 'Cheese Burger', price: 129, desc: 'Crispy patty, cheese & sauces', image: 'images/bhaji.jpg' },
      { id: 'fm', name: 'Fried Momos', price: 119, desc: 'Served with spicy chutney', image: 'images/bhaji.jpg' },
      { id: 'cc', name: 'Cold Coffee', price: 89, desc: 'Creamy cafe-style cold coffee', image: 'images/bhaji.jpg' }
    ]
  },
  baithak: {
    outletName: 'Baithak',
    phone: '918409067309',
    mapUrl: 'https://share.google/8egLSYewcyZuOjMww',
    swiggyUrl: '#',
    zomatoUrl: '#',
    menu: [
      { id: 'chai-sirf', name: 'Sirf Chai', price: 10, desc: 'Chai Chahiye', image: 'images/baithak.jpg' },
      { id: 'chai-adrak', name: 'Adrak Chai', price: 10, desc: 'Chai Chahiye', image: 'images/baithak.jpg' },
      { id: 'chai-elaichi', name: 'Elaichi Chai', price: 12, desc: 'Chai Chahiye', image: 'images/baithak.jpg' },
      { id: 'chai-special', name: 'Baithak Special Chai', price: 15, desc: 'Chai Chahiye', image: 'images/baithak.jpg' },
      { id: 'coffee', name: 'Coffee', price: 15, desc: 'Coffee Boss', image: 'images/baithak.jpg' },
      { id: 'coffee-special', name: 'Special Coffee', price: 20, desc: 'Coffee Boss', image: 'images/baithak.jpg' },
      { id: 'maggie', name: 'Maggie', price: 30, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-masala', name: 'Masala Maggie', price: 40, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg', name: 'Veg Maggie', price: 40, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg-masala', name: 'Veg Masala Maggie', price: 50, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-cheese', name: 'Cheese Maggie', price: 55, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg-cheese', name: 'Veg Cheese Maggie', price: 65, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-schezwan', name: 'Schezwan Maggie', price: 40, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg-schezwan', name: 'Veg Schezwan Maggie', price: 50, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg-cheese-schezwan', name: 'Veg Cheese Schezwan Maggie', price: 65, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-baithak-special', name: 'Baithak Special Maggie', price: 80, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'omelette-single', name: 'Omelette (Single Egg)', price: 15, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-veg', name: 'Veg Omelette', price: 25, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-bread', name: 'Bread Omelette', price: 20, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-veg-bread', name: 'Veg Bread Omelette', price: 30, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-cheese', name: 'Cheese Omelette', price: 35, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-veg-cheese', name: 'Veg Cheese Omelette', price: 40, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-veg-cheese-bread', name: 'Veg Cheese Bread Omelette', price: 60, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'veg-sandwich', name: 'Veg Sandwich', price: 50, desc: 'Additional item', image: 'images/baithak.jpg' },
      { id: 'corn-cheese', name: 'Corn Cheese', price: 60, desc: 'Additional item', image: 'images/baithak.jpg' },
      { id: 'cold-coffee-small', name: 'Cold Coffee Small', price: 35, desc: 'Additional item', image: 'images/baithak.jpg' },
      { id: 'cold-coffee-large', name: 'Cold Coffee Large', price: 70, desc: 'Additional item', image: 'images/baithak.jpg' },
      { id: 'bun-butter', name: 'Bun Butter', price: 20, desc: 'Additional item', image: 'images/baithak.jpg' },
      { id: 'butter-toast', name: 'Butter Toast', price: 10, desc: 'Additional item', image: 'images/baithak.jpg' }
    ]
  },
  'china-ka-maal': {
    outletName: 'China Ka Maal',
    phone: '917033182192',
    mapUrl: 'https://share.google/0GJ7uHHTRGUVC8TvQ',
    swiggyUrl: '#',
    zomatoUrl: '#',
    menu: [
      { id: 'hc', name: 'Hakka Noodles', price: 139, desc: 'Wok-tossed veggies & sauces', image: 'images/china.jpg' },
      { id: 'mc', name: 'Chilli Chicken', price: 199, desc: 'Spicy & juicy Indo-Chinese favorite', image: 'images/china.jpg' },
      { id: 'kr', name: 'Kathi Roll', price: 129, desc: 'Loaded roll with signature sauces', image: 'images/china.jpg' },
      { id: 'fr', name: 'Fried Rice', price: 129, desc: 'Classic flavorful rice bowl', image: 'images/china.jpg' }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const outletFromQuery = params.get('outlet');
const outletFromPage = document.body.dataset.outlet;
const outletKey = outletFromQuery || outletFromPage;
const config = outletConfig[outletKey];

if (!config) {
  document.body.innerHTML = '<p style="font-family:sans-serif;padding:20px">Outlet not found.</p>';
} else {
  const els = {
    title: document.getElementById('outlet-title'),
    subtitle: document.getElementById('outlet-subtitle'),
    phone: document.getElementById('outlet-phone'),
    map: document.getElementById('outlet-map'),
    whatsapp: document.getElementById('outlet-whatsapp'),
    swiggy: document.getElementById('outlet-swiggy'),
    zomato: document.getElementById('outlet-zomato'),
    menuList: document.getElementById('menu-list'),
    cartList: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    checkout: document.getElementById('checkout-btn')
  };

  els.title.textContent = config.outletName;
  els.subtitle.textContent = `Menu, location, and quick order details for ${config.outletName}.`;
  els.phone.textContent = `+${config.phone}`;
  els.map.href = config.mapUrl;
  els.whatsapp.href = `https://wa.me/${config.phone}`;
  els.swiggy.href = config.swiggyUrl;
  els.zomato.href = config.zomatoUrl;

  const cart = new Map();

  function renderMenu() {
    els.menuList.innerHTML = '';
    config.menu.forEach(item => {
      const qty = cart.get(item.id)?.qty || 0;
      const row = document.createElement('article');
      row.className = 'menu-item';
      row.innerHTML = `
        <img src="${item.image || 'images/hero.png'}" alt="${item.name}">
        <div class="menu-meta">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="menu-bottom">
            <span class="price">₹${item.price}</span>
            <div class="item-actions">
              <span class="qty">${qty}</span>
              <button class="pill primary" data-action="inc" data-id="${item.id}" aria-label="Add ${item.name}">+</button>
            </div>
          </div>
        </div>
      `;
      els.menuList.appendChild(row);
    });
  }

  function renderCart() {
    els.cartList.innerHTML = '';
    if (!cart.size) {
      els.cartList.innerHTML = '<p class="empty">No items yet. Add from menu.</p>';
      els.cartTotal.textContent = '₹0';
      return;
    }

    let total = 0;
    cart.forEach((entry) => {
      total += entry.price * entry.qty;
      const row = document.createElement('div');
      row.className = 'cart-row';
      row.innerHTML = `<span>${entry.name} × ${entry.qty}</span><span>₹${entry.price * entry.qty}</span>`;
      els.cartList.appendChild(row);
    });
    els.cartTotal.textContent = `₹${total}`;
  }

  function updateQty(id, delta) {
    const item = config.menu.find(m => m.id === id);
    const existing = cart.get(id);
    const nextQty = (existing?.qty || 0) + delta;

    if (nextQty <= 0) {
      cart.delete(id);
    } else {
      cart.set(id, { ...item, qty: nextQty });
    }

    renderMenu();
    renderCart();
  }

  els.menuList.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const id = btn.dataset.id;
    updateQty(id, 1);
  });

  els.checkout.addEventListener('click', () => {
    if (!cart.size) {
      alert('Please add at least one item to cart.');
      return;
    }

    const allow = window.confirm('Do you allow us to open WhatsApp with your order draft?');
    if (!allow) return;

    let lines = [`Hello ${config.outletName}, I want to place an order:`];
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      lines.push(`• ${item.name} x ${item.qty} = ₹${item.price * item.qty}`);
    });
    lines.push(`Total: ₹${total}`);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${config.phone}?text=${text}`, '_blank');
  });

  renderMenu();
  renderCart();
}
