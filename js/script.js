document.addEventListener("DOMContentLoaded", function () {
  // Variabel global
  const productGrid = document.getElementById("product-grid");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const noResultsDiv = document.getElementById("no-results");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const logo = document.getElementById("logo");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  let productSwiper = null;

  // Galeri & Lightbox
  const galleryWrapper = document.getElementById("gallery-wrapper");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightboxBtn = document.getElementById("close-lightbox");

  function initGallery() {
    if (!galleryWrapper) return;
    galleryImages.forEach((imgUrl) => {
      const slide = `
                <div class="swiper-slide gallery-slide" data-src="${imgUrl}">
                    <img src="${imgUrl}" alt="Foto Galeri Stok" class="w-full h-full object-cover">
                </div>
            `;
      galleryWrapper.innerHTML += slide;
    });

    new Swiper(".gallery-swiper", {
      loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      effect: "fade",
      fadeEffect: { crossFade: true },
    });

    galleryWrapper.addEventListener("click", function (e) {
      const slide = e.target.closest(".gallery-slide");
      if (slide) {
        const imgSrc = slide.getAttribute("data-src");
        lightboxImg.src = imgSrc;
        lightboxModal.classList.remove("hidden");
      }
    });

    function closeLightbox() {
      lightboxModal.classList.add("hidden");
    }
    closeLightboxBtn.addEventListener("click", closeLightbox);
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Navigasi Halaman
  function showPage(pageId) {
    sections.forEach((section) => section.classList.remove("active"));
    const activeSection = document.getElementById(pageId);
    if (activeSection) activeSection.classList.add("active");
    window.scrollTo(0, 0);
    navLinks.forEach((link) => {
      if (link.hash === `#${pageId}`) {
        link.classList.add("text-blue-600", "font-semibold");
      } else {
        link.classList.remove("text-blue-600", "font-semibold");
      }
    });
    mobileMenu.classList.add("hidden");
  }

  function setupNavigation() {
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(link.hash.substring(1));
      });
    });
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("beranda");
    });
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Fungsionalitas Katalog Produk
  function initCatalog() {
    if (!productGrid) return;

    const categories = [...new Set(produkData.map((p) => p.kategori))];
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });

    renderProduk();
    searchInput.addEventListener("input", updateFilter);
    categoryFilter.addEventListener("change", updateFilter);
  }

  function renderProduk(filter = {}) {
    productGrid.innerHTML = "";
    const filteredProduk = produkData.filter((produk) => {
      const searchTerm = (filter.term || "").toLowerCase();
      const searchCategory = filter.category || "semua";
      const matchTerm = produk.nama.toLowerCase().includes(searchTerm) || produk.deskripsiSingkat.toLowerCase().includes(searchTerm);
      const matchCategory = searchCategory === "semua" || produk.kategori === searchCategory;
      return matchTerm && matchCategory;
    });

    noResultsDiv.classList.toggle("hidden", filteredProduk.length > 0);
    productGrid.classList.toggle("hidden", filteredProduk.length === 0);

    filteredProduk.forEach((produk) => {
      const productCard = `
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 group transform hover:-translate-y-2 transition-transform duration-300">
                    <img src="${produk.gambar[0]}" alt="${produk.nama}" class="w-full h-48 object-cover">
                    <div class="p-5">
                        <span class="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">${produk.kategori}</span>
                        <h3 class="text-lg font-bold mt-2 mb-2 truncate">${produk.nama}</h3>
                        <p class="text-slate-600 text-sm h-10">${produk.deskripsiSingkat}</p>
                        <button data-id="${produk.id}" class="open-modal-btn mt-4 w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                            Lihat Detail
                        </button>
                    </div>
                </div>
            `;
      productGrid.innerHTML += productCard;
    });
  }

  function updateFilter() {
    const filter = { term: searchInput.value, category: categoryFilter.value };
    renderProduk(filter);
  }

  // Fungsionalitas Modal Produk
  function initProductModal() {
    const modal = document.getElementById("product-modal");
    const closeModalBtn = document.getElementById("close-modal");

    productGrid.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("open-modal-btn")) {
        const productId = e.target.getAttribute("data-id");
        const product = produkData.find((p) => p.id == productId);
        if (product) openProductModal(product, modal);
      }
    });

    function openProductModal(product, modal) {
      document.getElementById("modal-category").textContent = product.kategori;
      document.getElementById("modal-title").textContent = product.nama;
      document.getElementById("modal-description").textContent = product.deskripsiLengkap;

      const specsTable = document.getElementById("modal-specs");
      specsTable.innerHTML = "";
      for (const [key, value] of Object.entries(product.spesifikasi)) {
        specsTable.innerHTML += `<tr class="border-b"><td class="py-2 font-medium text-slate-500">${key}</td><td class="py-2 text-slate-800">${value}</td></tr>`;
      }

      const waButton = document.getElementById("modal-wa-button");
      const waText = `Halo, saya tertarik dengan produk ${product.nama}. Mohon informasinya.`;
      waButton.href = `https://wa.me/6281234567890?text=${encodeURIComponent(waText)}`;

      const modalImagesWrapper = document.getElementById("modal-images-wrapper");
      modalImagesWrapper.innerHTML = "";
      product.gambar.forEach((imgUrl) => {
        modalImagesWrapper.innerHTML += `<div class="swiper-slide bg-slate-200 flex items-center justify-center"><img src="${imgUrl}" alt="${product.nama}" class="max-w-full max-h-full object-contain"></div>`;
      });

      modal.classList.remove("hidden");

      if (productSwiper) productSwiper.destroy(true, true);
      productSwiper = new Swiper(".product-swiper", {
        loop: product.gambar.length > 1,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      });
    }

    function closeModal() {
      modal.classList.add("hidden");
    }

    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Fungsionalitas FAQ
  function initFAQ() {
    const faqContainer = document.getElementById("faq-container");
    if (faqContainer) {
      faqContainer.addEventListener("click", function (e) {
        const questionButton = e.target.closest(".faq-question");
        if (!questionButton) return;

        const faqItem = questionButton.parentElement;
        const answer = faqItem.querySelector(".faq-answer");
        const icon = questionButton.querySelector(".faq-icon");
        const isOpening = answer.classList.contains("hidden");

        faqContainer.querySelectorAll(".faq-item").forEach((item) => {
          item.querySelector(".faq-answer").classList.add("hidden");
          item.querySelector(".faq-icon").classList.remove("rotate-180");
        });

        if (isOpening) {
          answer.classList.remove("hidden");
          icon.classList.add("rotate-180");
        }
      });
    }
  }

  // Inisialisasi semua fungsi
  function initialize() {
    initGallery();
    setupNavigation();
    initCatalog();
    initProductModal();
    initFAQ();
    showPage("beranda");
    lucide.createIcons();
  }

  initialize();
});
