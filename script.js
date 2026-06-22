//  PRODUCT DATA WITH TAGS AND DELIVERY 
const allProducts = [
  // Toys
  { 
    id: 1, 
    name: 'Chew Rope Toy', 
    price: 11.99, 
    category: 'toys', 
    img: 'https://i.etsystatic.com/9833782/r/il/f0bc8f/2886069733/il_fullxfull.2886069733_rwtn.jpg', 
    badge: 'Best Seller',
    tags: ['ប្រដាប់ខាំលេង', 'សម្រាប់ឆ្កែ/ឆ្មា'],
    delivery: 'Free Delivery'
  },
  { 
    id: 2, 
    name: 'Dental Sticks (12pk)', 
    price: 9.49, 
    category: 'toys', 
    img: 'https://www.buckboneorganics.com/cdn/shop/files/DCH12_FRONT_2026_1024x1024.jpg?v=1770742962', 
    badge: 'Best seller',
    tags: ['បំបាត់ក្លិនមាត់', 'ចំណីទំពារខាំជំនួយធ្មេញ'],
    delivery: 'Free Delivery'
  },
  { 
    id: 3, 
    name: 'Cat Feather Wand', 
    price: 7.99, 
    category: 'toys', 
    img: 'https://petfitforlife.com/cdn/shop/products/PFFL-00003_Main.jpg?v=1486992669&width=1946', 
    badge: '',
    tags: ['ឈើលេងជាមួយឆ្មាម៉ូដរោមបក្សី'],
    delivery: 'Free Delivery'
  },
  { 
    id: 4, 
    name: 'Interactive Treat Ball', 
    price: 14.99, 
    category: 'toys', 
    img: 'https://i5.walmartimages.com/seo/PrimePets-Dog-Treat-Ball-4-Pack-Interactive-Food-Dispensing-Puppy-Puzzle-Toy_c557d85d-baf0-46c1-98ec-6cd399060c8a.fd8ad5331a8cb525348dfa1cc30198fc.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', 
    badge: 'Top Pick',
    tags: ['បាល់លេងទម្លាក់ចំណី'],
    delivery: 'Free Delivery'
  },
  { 
    id: 5, 
    name: 'Squeaky Plush Duck', 
    price: 12.50, 
    category: 'toys', 
    img: 'https://fluffypuppypetstore.com/cdn/shop/files/dog-toys-duck.webp?v=1770289331', 
    tags: ['តុក្កតាទាខាំមានសំឡេង'],
    delivery: 'Free Delivery until'
  },
  { 
    id: 6, 
    name: 'Laser Pointer Cat Toy', 
    price: 8.99, 
    category: 'toys', 
    img: 'https://cdn.shopify.com/s/files/1/1733/0973/products/modern-pets-cat-toy-interactive-cat-laser-pointer-31999894814919.png?v=1635838558', 
    tags: ['ឡាស៊ែរបញ្ឆោតឆ្មា'],
    delivery: 'Free Delivery'
  },
  // Food
  { 
    id: 7, 
    name: 'Grain-Free Kibble', 
    price: 44.99, 
    oldPrice: 59.99, 
    category: 'food', 
    img: 'https://www.petwarehouse.ph/40601-thickbox_default/bare-kibble-candidly-fresh-beef-adult-small-breed-dog-dry-food.jpg', 
    badge: 'Sale',
    tags: ['ចំណីគ្រាប់សុខភាព គ្មានការលាយធញ្ញជាតិ'],
    delivery: 'Free Delivery'
  },
  { 
    id: 8, 
    name: 'Premium Food Bundle', 
    price: 119.99, 
    category: 'food', 
    img: 'https://www.petfoodprocessing.net/ext/resources/Articles/2025/01%20Jan/010825_Tractor-Supply-launches-new-dog-food_Lead.webp?height=667&t=1736341260&width=1080', 
    badge: 'Bundle',
    tags: ['ឈុតចំណីអាហារគុណភាពខ្ពស់'],
    delivery: 'Free Delivery'
  },
  { 
    id: 9, 
    name: 'Organic Chicken Treats', 
    price: 16.99, 
    category: 'food', 
    img: 'https://www.littlechonk.com/cdn/shop/files/treats-front-01.jpg?v=1780253472&width=1946', 
    tags: ['នំសាច់មាន់ធម្មជាតិ'],
    delivery: 'Free Delivery'
  },
  { 
    id: 10, 
    name: 'Salmon Oil Supplement', 
    price: 24.50, 
    category: 'food', 
    img: 'https://www.animed.co.uk/media/catalog/product/1/1/11285_ecommerce_salmon_oil_430ml_en_2026_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 
    tags: ['ប្រេងត្រីសាល់ម៉ុនជំនួយស្បែកនិងរោម'],
    delivery: 'Free Delivery'
  },
  { 
    id: 11, 
    name: 'Wet Food Variety Pack', 
    price: 34.99, 
    category: 'food', 
    img: 'https://www.weruva.com/cdn/shop/files/878408003530KitchenCuties3.2ozCan-3.jpg?v=1737823579&width=1214', 
    tags: ['កញ្ចប់អាហារចម្រុះរសជាតិ'],
    delivery: 'Free Delivery'
  },
  // Beds
  { 
    id: 12, 
    name: 'Donut Cuddler Bed', 
    price: 59.99, 
    category: 'beds', 
    img: 'https://funnyfuzzy.com/cdn/shop/products/0304-3_1_cd5662ac-8d28-4fd9-8e8e-9a116d3497ae.png?v=1776423567', 
    tags: ['ពូករាងដូណាត់'],
    delivery: 'Free Delivery'
  },
  { 
    id: 13, 
    name: 'Orthopedic Cloud Bed', 
    price: 449.99, 
    category: 'beds', 
    img: 'https://www.dogfriendlyco.ae/cdn/shop/files/PremiumOrthopedicMemoryFoamDogBed_GreyBoucle_Product_01.webp?v=1770908579', 
    tags: ['ពូកការពារឆ្អឹងខ្នង និងសន្លាក់'],
    delivery: 'Free Delivery'
  },
  { 
    id: 14, 
    name: 'Heated Pet Mat', 
    price: 39.99, 
    category: 'beds', 
    img: 'https://shop.alpenheat.com/3545/heated-pet-mat.jpg', 
    badge: 'Winter',
    tags: ['ពូកកម្ដៅសម្រាប់សត្វចិញ្ចឹម'],
    delivery: 'Free Delivery '
  },
  { 
    id: 15, 
    name: 'Cooling Gel Pad', 
    price: 29.99, 
    category: 'beds', 
    img: 'https://m.media-amazon.com/images/I/71A-1WtkxgL.jpg', 
    badge: 'Summer',
    tags: ['ពូកត្រជាក់'],
    delivery: 'Free Delivery'
  },
  // Grooming
  { 
    id: 16, 
    name: 'Deshedding Brush', 
    price: 18.99, 
    category: 'grooming', 
    img: 'https://mlo1wbhvgmgt.i.optimole.com/w:1000/h:1000/q:mauto/g:sm/f:best/https://pethero.co.za/wp-content/uploads/2022/01/Stylus-deshedding-brush.jpg', 
    badge: '',
    tags: ['ច្រាសសិតកាត់បន្ថយរោមជ្រុះ'],
    delivery: 'Free Delivery'
  },
  { 
    id: 17, 
    name: 'Grooming Kit + Shampoo', 
    price: 24.99, 
    category: 'grooming', 
    img: 'https://www.petterati.com/cdn/shop/files/combo-product.jpg?v=1734201276&width=480', 
    tags: ['ឈុតថែទាំរោម និងសាប៊ូងូតទឹក'],
    delivery: 'Free Delivery'
  },
  { 
    id: 18, 
    name: 'Waterproof Coat', 
    price: 34.99, 
    category: 'grooming', 
    img: 'https://www.thedogoutdoors.com/cdn/shop/files/puffer-for-page_1500x.jpg?v=1697811216', 
    badge: '',
    tags: ['អាវភ្លៀងសម្រាប់សត្វចិញ្ចឹម'],
    delivery: 'Free Delivery'
  },
  { 
    id: 19, 
    name: 'Deodorizing Spray', 
    price: 16.50, 
    category: 'grooming', 
    img: 'https://www.kohepets.com.sg/cdn/shop/files/buddycare-detangling-dog-spray.jpg?v=1732260881', 
    badge: '',
    tags: ['ស្ព្រាយបាញ់បំបាត់ក្លិន'],
    delivery: 'Free Delivery'
  },
  { 
    id: 20, 
    name: 'Nail Grinder Kit', 
    price: 22.99, 
    category: 'grooming', 
    img: 'https://www.advwin.com.au/cdn/shop/files/e74f93d9a61f9055_1200x.jpg?v=1761723300', 
    badge: '',
    tags: ['ឈុតម៉ាស៊ីនខាត់ក្រចកសត្វចិញ្ចឹម'],
    delivery: 'Free Delivery'
  },
  // Accessories
  { 
    id: 21, 
    name: 'Personalized ID Tag', 
    price: 12.99, 
    category: 'accessories', 
    img: 'https://images-cdn.ubuy.co.in/6825f3df0da04ce6e802fa80-personalized-dog-tags-stainless-steel.jpg', 
    badge: 'Custom',
    tags: ['បន្តោងឆ្លាក់ឈ្មោះសត្វចិញ្ចឹម'],
    delivery: 'Free Delivery'
  },
  { 
    id: 22, 
    name: 'Collapsible Water Bowl', 
    price: 9.99, 
    category: 'accessories', 
    img: 'https://i5.walmartimages.com/seo/2-Pack-Dog-Portable-Water-Bowl-for-Dogs-Cat-Collapsible-Dog-Bowls-for-Travel-Pet-Foldable-Feeding-Watering-Dish-for-Camping-Walking-BPA-Free_8fad56d9-8e55-42f8-a46d-315f5f4f0187.4f016825cf01e26da72a1aee56890f08.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', 
    tags: ['ចានទឹកបត់បាន'],
    delivery: 'Free Delivery'
  },
  { 
    id: 23, 
    name: 'Pet Carrier Backpack', 
    price: 49.99, 
    category: 'accessories', 
    img: 'https://m.media-amazon.com/images/I/81DfOyykwzL.jpg', 
    tags: ['កាតាបស្ពាយសត្វចិញ្ចឹម'],
    delivery: 'Free Delivery'
  },
  { 
    id: 24, 
    name: 'Leash & Collar Set', 
    price: 27.99, 
    category: 'accessories', 
    img: 'https://m.media-amazon.com/images/I/71xgLaOGVpL.jpg', 
    badge: '',
    tags: ['ឈុតខ្សែដឹក'],
    delivery: 'Free Delivery'
  }
];

//  RENDER PRODUCTS 
let currentView = 'grid';

function renderProductGrid(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-img">
        ${p.badge ? `<span class="badge-sale">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/400x400/eee/999?text=Pet+Product'">
      </div>
      <div class="product-info">
        <h3 class="product-title">${p.name}</h3>
        ${p.tags ? `<div class="product-tags">${p.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}</div>` : ''}
        <div class="price-delivery">
          <span class="price">$${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}
          ${p.delivery ? `<span class="delivery-badge">${p.delivery}</span>` : ''}
        </div>
        <button class="add-to-cart">Order Now</button>
      </div>
    </div>
  `).join('');
}

function renderProducts(filter = 'all', sort = 'default') {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  
  let filtered = filter === 'all' ? allProducts : allProducts.filter(p => p.category === filter);
  
  if (sort === 'price-low') filtered.sort((a,b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a,b) => b.price - a.price);
  else if (sort === 'name') filtered.sort((a,b) => a.name.localeCompare(b.name));

  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = `${filtered.length} products`;

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-category="${p.category}">
      <div class="product-img">
        ${p.badge ? `<span class="badge-sale">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/400x400/eee/999?text=Pet+Product'">
      </div>
      <div class="product-info">
        <h3 class="product-title">${p.name}</h3>
        ${p.tags ? `<div class="product-tags">${p.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}</div>` : ''}
        <div class="price-delivery">
          <span class="price">$${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}
          ${p.delivery ? `<span class="delivery-badge">${p.delivery}</span>` : ''}
        </div>
        <button class="add-to-cart">Order Now</button>
      </div>
    </div>
  `).join('');

  // Apply view mode
  if (currentView === 'list') {
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.querySelectorAll('.product-card').forEach(card => {
      card.style.display = 'flex';
      card.style.flexDirection = 'row';
      card.style.alignItems = 'center';
      card.style.padding = '16px';
      const img = card.querySelector('.product-img');
      img.style.width = '150px';
      img.style.height = '150px';
      img.style.flexShrink = '0';
      card.querySelector('.product-info').style.flex = '1';
    });
  } else {
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, 1fr))';
    grid.querySelectorAll('.product-card').forEach(card => {
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.padding = '0';
      const img = card.querySelector('.product-img');
      img.style.width = 'auto';
      img.style.height = '240px';
      img.style.flexShrink = '0';
      card.querySelector('.product-info').style.flex = '1';
    });
  }

  bindCartEvents();
}

//  CART EVENTS 
function bindCartEvents() {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.removeEventListener('click', cartHandler);
    btn.addEventListener('click', cartHandler);
  });
}

function cartHandler(e) {
  const card = e.currentTarget.closest('.product-card');
  let name = 'item';
  if (card) {
    const titleEl = card.querySelector('.product-title');
    if (titleEl) name = titleEl.innerText;
  }
  alert(`"${name}" added to cart! thank you.`);
}

// Auto-bind on page load
document.addEventListener('DOMContentLoaded', bindCartEvents);