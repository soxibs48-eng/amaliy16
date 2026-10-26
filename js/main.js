/**
 * Bario Neal — Ethical Fine Jewelry & Wedding Rings
 * Interactive Client-Side Logic & State Management
 */

// ============================================================================
// 1. Product Data Store
// ============================================================================
const productsData = {
  1: {
    id: 1,
    title: 'Avens Diamond Cluster Ring',
    price: 2840,
    tag: 'Fairmined Gold',
    img: 'assets/images/ring-avens.jpg',
    specs: '14k Yellow Gold • Traceable Diamond Cluster',
    desc: 'An iconic Bario Neal design featuring a radiant cluster of ethically sourced, conflict-free brilliant white diamonds set with organic prongs on an ethical solid gold band.'
  },
  2: {
    id: 2,
    title: 'Senna Textured Band Stack',
    price: 1150,
    tag: 'Bestseller',
    img: 'assets/images/ring-bands.jpg',
    specs: '18k Recycled Gold • Hand Carved',
    desc: 'Hand-sculpted organic wave band crafted with 100% recycled gold in Philadelphia, finished with delicate artisanal texture and subtle ethical flush-set emerald accents.'
  },
  3: {
    id: 3,
    title: 'Ray Emerald & Diamond Toi et Moi Ring',
    price: 3490,
    tag: 'Signature Design',
    img: 'assets/images/ring-toietmoi.jpg',
    specs: 'Zambian Emerald & Conflict-Free Diamond',
    desc: 'A poetic celebration of two distinct paths uniting. Features a vibrant traceable Zambian emerald and a pear-cut diamond set in an asymmetrical, modern architectural bypass band.'
  },
  4: {
    id: 4,
    title: 'Burst Halo Diamond Ring',
    price: 4200,
    tag: 'Limited Edition',
    img: 'assets/images/ring-cluster.jpg',
    specs: 'Certified Ethical Center Stone • Platinum',
    desc: 'An architectural heirloom piece featuring a radiant conflict-free central diamond encircled by a celestial spray of baguette and marquise cut diamonds.'
  },
  5: {
    id: 5,
    title: 'Lash Solitaire Diamond Ring',
    price: 980,
    tag: 'Everyday Fine',
    img: 'assets/images/jewelry-rings.jpg',
    specs: '14k Gold • Stacking Essential',
    desc: 'A minimal, low-profile bezel setting holding a brilliant recycled diamond. Perfect worn solo or stacked beside custom wedding bands.'
  },
  6: {
    id: 6,
    title: 'Turquoise Inlay Gold Cuff',
    price: 1420,
    tag: 'Everyday Fine',
    img: 'assets/images/jewelry-bracelets.jpg',
    specs: '14k Solid Gold • Natural Turquoise',
    desc: 'An architectural solid gold cuff inlaid with ethical natural Sleeping Beauty turquoise. Meticulously polished for everyday comfort and lasting luster.'
  },
  7: {
    id: 7,
    title: 'Aira Diamond Pendant Necklace',
    price: 1280,
    tag: 'Everyday Fine',
    img: 'assets/images/jewelry-necklaces.jpg',
    specs: '14k Gold • 18-inch Cable Chain',
    desc: 'Layered delicate 14k gold cable chains featuring an emerald-cut diamond bezel pendant, designed to catch light effortlessly from day to evening.'
  },
  8: {
    id: 8,
    title: 'Linear Diamond Drop Studs',
    price: 890,
    tag: 'Everyday Fine',
    img: 'assets/images/jewelry-earrings.jpg',
    specs: '14k Gold • Post & Butterfly Backs',
    desc: 'Architectural studs cascading into geometric drops, featuring conflict-free white diamonds hand-set in recycled 14k gold.'
  }
};

// ============================================================================
// 2. Shopping Bag (Cart) State
// ============================================================================
let shoppingBag = [
  {
    id: 1,
    title: 'Avens Diamond Cluster Ring',
    metal: '14k Yellow Gold',
    size: '6.5',
    price: 2840,
    quantity: 1,
    img: 'assets/images/ring-avens.jpg'
  }
];

let currentModalProduct = null;
let currentSelectedMetal = '14k Yellow Gold';
let currentMetalPriceOffset = 0;

// ============================================================================
// 3. Lifecycle & Event Listeners
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {

  // --- Header Scroll Effect ---
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // --- Button Listeners ---
  const heroBookBtn = document.getElementById('heroBookBtn');
  if (heroBookBtn) heroBookBtn.addEventListener('click', () => openAppointmentModal('Virtual'));

  const bookConsultBtn = document.getElementById('bookConsultBtn');
  if (bookConsultBtn) bookConsultBtn.addEventListener('click', () => openAppointmentModal('Virtual'));

  const customBookBtn = document.getElementById('customBookBtn');
  if (customBookBtn) customBookBtn.addEventListener('click', () => openAppointmentModal('Philadelphia'));

  const customProcessBtn = document.getElementById('customProcessBtn');
  if (customProcessBtn) customProcessBtn.addEventListener('click', () => openCustomProcessGuide());

  const ethicalLearnBtn = document.getElementById('ethicalLearnBtn');
  if (ethicalLearnBtn) ethicalLearnBtn.addEventListener('click', () => openEthicalReportModal());

  const readStoriesBtn = document.getElementById('readStoriesBtn');
  if (readStoriesBtn) readStoriesBtn.addEventListener('click', () => openStory('Love In All Ways', 'Every love story is sacred and individual. Our gender-neutral bands, custom eternity rings, and heirloom pieces are created with pride to honor commitments of every kind.'));

  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) searchBtn.addEventListener('click', () => {
    const term = prompt('Search our ethical fine jewelry collection (e.g. "Emerald", "Cluster", "Band"):');
    if (term) {
      showToast(`Showing search results for "${term}"`);
      const target = document.getElementById('wedding');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // --- Cart Toggle ---
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);

  // --- Newsletter Form ---
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput.value.trim();
      if (email) {
        showToast(`Thank you! Exclusive updates will be sent to ${email}`);
        emailInput.value = '';
      }
    });
  }

  // --- Date Picker Defaults ---
  const apptDate = document.getElementById('apptDate');
  if (apptDate) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    apptDate.min = tomorrow.toISOString().split('T')[0];
    apptDate.value = tomorrow.toISOString().split('T')[0];
  }

  // Keyboard Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeCart();
      closeAppointmentModal();
      closeStoryModal();
    }
  });

  // Render Initial Cart
  updateCartUI();
});

// ============================================================================
// 4. Quick View & Customizer Logic
// ============================================================================
function openQuickView(productId) {
  const product = productsData[productId];
  if (!product) return;

  currentModalProduct = product;
  currentSelectedMetal = '14k Yellow Gold';
  currentMetalPriceOffset = 0;

  document.getElementById('modalProductTitle').textContent = product.title;
  document.getElementById('modalProductTag').textContent = product.tag;
  document.getElementById('modalProductDesc').textContent = product.desc;
  document.getElementById('modalProductImg').src = product.img;
  document.getElementById('modalProductImg').alt = product.title;
  
  updateModalPrice();

  // Reset active metal button
  document.querySelectorAll('.metal-btn').forEach((btn, idx) => {
    if (idx === 0) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  const backdrop = document.getElementById('quickViewBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeQuickView() {
  const backdrop = document.getElementById('quickViewBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function selectMetal(button, metalName, offsetPrice) {
  document.querySelectorAll('.metal-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  currentSelectedMetal = metalName;
  currentMetalPriceOffset = offsetPrice;
  updateModalPrice();
}

function updateModalPrice() {
  if (!currentModalProduct) return;
  const totalPrice = currentModalProduct.price + currentMetalPriceOffset;
  document.getElementById('modalProductPrice').textContent = `$${totalPrice.toLocaleString()}`;
}

function addCurrentModalToCart() {
  if (!currentModalProduct) return;
  const sizeSelect = document.getElementById('ringSizeSelect');
  const selectedSize = sizeSelect ? sizeSelect.value : '6.5';
  const finalPrice = currentModalProduct.price + currentMetalPriceOffset;

  addToCart({
    id: currentModalProduct.id,
    title: currentModalProduct.title,
    metal: currentSelectedMetal,
    size: selectedSize,
    price: finalPrice,
    img: currentModalProduct.img
  });

  closeQuickView();
}

// ============================================================================
// 5. Shopping Bag Drawer & Management
// ============================================================================
function addToCart(item) {
  // Check if identical item already in cart
  const existing = shoppingBag.find(i => i.id === item.id && i.metal === item.metal && i.size === item.size);
  if (existing) {
    existing.quantity += 1;
  } else {
    shoppingBag.push({
      ...item,
      quantity: 1
    });
  }

  updateCartUI();
  openCart();
  showToast(`Added ${item.title} to your bag`);
}

function removeFromCart(index) {
  const removed = shoppingBag[index];
  shoppingBag.splice(index, 1);
  updateCartUI();
  if (removed) {
    showToast(`Removed ${removed.title} from your bag`);
  }
}

function updateQuantity(index, delta) {
  if (!shoppingBag[index]) return;
  shoppingBag[index].quantity += delta;
  if (shoppingBag[index].quantity <= 0) {
    removeFromCart(index);
    return;
  }
  updateCartUI();
}

function updateCartUI() {
  const listEl = document.getElementById('cartItemsList');
  const countBadge = document.getElementById('cartCountBadge');
  const subtotalEl = document.getElementById('cartSubtotalAmount');
  const progressFill = document.getElementById('shippingProgressFill');
  const shippingText = document.getElementById('shippingText');

  const totalItems = shoppingBag.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = shoppingBag.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;

  // Shipping progress ($150 threshold)
  const threshold = 150;
  if (subtotal >= threshold) {
    if (progressFill) progressFill.style.width = '100%';
    if (shippingText) shippingText.innerHTML = 'You have unlocked <strong>Free US Insured Shipping</strong>!';
  } else {
    const percent = Math.min(100, Math.round((subtotal / threshold) * 100));
    if (progressFill) progressFill.style.width = `${percent}%`;
    const remaining = threshold - subtotal;
    if (shippingText) shippingText.innerHTML = `Add <strong>$${remaining}</strong> more for Free Insured Shipping.`;
  }

  // Render items
  if (listEl) {
    if (shoppingBag.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--color-muted);">
          <i class="fa-solid fa-bag-shopping" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.4;"></i>
          <p style="font-size: 1.1rem; font-family: var(--font-serif); margin-bottom: 0.5rem;">Your bag is currently empty</p>
          <p style="font-size: 0.85rem;">Discover our handcrafted ethical engagement and wedding rings.</p>
        </div>
      `;
    } else {
      listEl.innerHTML = shoppingBag.map((item, idx) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4>${item.title}</h4>
            <div class="cart-item-meta">${item.metal} • Size ${item.size}</div>
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.35rem;">
              <button onclick="updateQuantity(${idx}, -1)" style="border: 1px solid var(--color-border); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;">-</button>
              <span style="font-size: 0.85rem; font-weight: 500;">${item.quantity}</span>
              <button onclick="updateQuantity(${idx}, 1)" style="border: 1px solid var(--color-border); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;">+</button>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
            <button class="cart-remove-btn" onclick="removeFromCart(${idx})" title="Remove item" style="margin-top: 0.5rem;">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
  }
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.add('active');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.remove('active');
}

function simulateCheckout() {
  if (shoppingBag.length === 0) {
    showToast('Your bag is currently empty. Add a piece to proceed.');
    return;
  }
  showToast('Connecting to 256-bit encrypted checkout gateway...');
  setTimeout(() => {
    alert('Bario Neal Secure Checkout:\n\nThank you for choosing ethical fine jewelry! In this live demonstration, your order details have been securely recorded.');
    closeCart();
  }, 900);
}

// ============================================================================
// 6. Appointment Consultation Modal
// ============================================================================
function openAppointmentModal(locationPreference = 'Virtual') {
  const modal = document.getElementById('appointmentModal');
  const locSelect = document.getElementById('apptLocation');
  if (locSelect) {
    if (locationPreference.includes('Philadelphia')) locSelect.value = 'Philadelphia';
    else if (locationPreference.includes('New York')) locSelect.value = 'New York';
    else locSelect.value = 'Virtual';
  }
  if (modal) modal.classList.add('active');
}

function closeAppointmentModal() {
  const modal = document.getElementById('appointmentModal');
  if (modal) modal.classList.remove('active');
}

function handleAppointmentSubmit(e) {
  e.preventDefault();
  closeAppointmentModal();
  showToast('Appointment request received! Our studio coordinator will confirm via email within 24 hours.');
}

// ============================================================================
// 7. Information & Story Modals
// ============================================================================
function openStory(title, content) {
  const modal = document.getElementById('storyModal');
  const titleEl = document.getElementById('storyModalTitle');
  const contentEl = document.getElementById('storyModalContent');
  if (titleEl) titleEl.textContent = title;
  if (contentEl) contentEl.textContent = content;
  if (modal) modal.classList.add('active');
}

function closeStoryModal() {
  const modal = document.getElementById('storyModal');
  if (modal) modal.classList.remove('active');
}

function openCustomProcessGuide() {
  openStory(
    'The Custom Design Experience',
    'Creating custom fine jewelry with Bario Neal is an intimate and transparent journey. Step 1: Initial design consultation (virtual or in-person). Step 2: Gemstone sourcing and 3D CAD modeling. Step 3: Wax prototype fitting. Step 4: Casting in certified Fairmined or 100% recycled gold in our Philadelphia workshop.'
  );
}

function openEthicalReportModal() {
  openStory(
    '2026 Impact & Sourcing Standards',
    'As a founding member of ethical jewelry initiatives, Bario Neal guarantees that 100% of our precious metals are recycled or Fairmined certified. We audit our diamond and colored gemstone supply chain to ensure living wages, safe mining environments, and zero environmental destruction.'
  );
}

function openSizeGuide() {
  openStory(
    'Ring Sizing Guide & Ring Sizer',
    'We offer complimentary ring sizers mailed directly to your home anywhere in the US. Every Bario Neal wedding ring and engagement ring includes one complimentary resizing within one full year of purchase.'
  );
}

function openCareGuide() {
  openStory(
    'Care & Cleaning Guide',
    'Fine jewelry is an enduring heirloom. We recommend gently cleansing your gold and diamonds with warm soapy water and a soft bristle brush. Complimentary lifetime ultrasonic cleaning is always provided in our Philadelphia and New York showrooms.'
  );
}

function openResizingModal() {
  openStory(
    'Repairs, Resizing & Heirloom Rework',
    'We service all Bario Neal pieces in our on-site studio. From ring resizing to stone resetting and metal polishing, our master artisans ensure your piece lasts for generations.'
  );
}

function openWarrantyModal() {
  openStory(
    'Lifetime Craftsmanship Warranty',
    'All Bario Neal fine jewelry is guaranteed against manufacturing defects for life. We stand behind our ethical materials and hand-finished craftsmanship.'
  );
}

// ============================================================================
// 8. Toast Notifications
// ============================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}
