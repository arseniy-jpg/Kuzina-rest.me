const translations = {
  en: {
    subtitle: "Fine Dining • Coffee • Atmosphere",
    about: "About", menu: "Menu", specials: "Specials", contact: "Contact",
    aboutTitle: "About", aboutText: "Welcome to our cozy restaurant located in the heart of the city. We serve fresh dishes, aromatic coffee, and warm hospitality.",
    menuTitle: "Menu", dish1: "Carbonara Pasta", dish2: "Caesar Salad",
    price1: "€7.50", price2: "€5.90",
    specialsTitle: "Special Offers", special1: "🎉 Every Tuesday - 20% off everything!", special2: "☕ Free coffee with any dessert!",
    contactTitle: "Contact", address: "📍 Address: Example Street 5, Podgorica", phone: "📞 Phone: +382 67 123 456", hours: "🕒 Open: 10:00 – 23:00"
  },
  ru: {
    subtitle: "Авторская кухня • Кофе • Атмосфера",
    about: "О нас", menu: "Меню", specials: "Акции", contact: "Контакты",
    aboutTitle: "О ресторане", aboutText: "Добро пожаловать в наш уютный ресторан в центре города! Мы готовим свежие блюда и встречаем гостей с улыбкой.",
    menuTitle: "Меню", dish1: "Паста Карбонара", dish2: "Салат Цезарь",
    price1: "450 ₽", price2: "350 ₽",
    specialsTitle: "Акции", special1: "🎉 Каждый вторник — скидка 20% на всё меню!", special2: "☕ Кофе в подарок при заказе десерта!",
    contactTitle: "Контакты", address: "📍 Адрес: ул. Примерная 5, Подгорица", phone: "📞 Телефон: +382 67 123 456", hours: "🕒 Ежедневно 10:00 – 23:00"
  },
  me: {
    subtitle: "Gurmanska kuhinja • Kafa • Atmosfera",
    about: "O nama", menu: "Meni", specials: "Akcije", contact: "Kontakt",
    aboutTitle: "O restoranu", aboutText: "Dobrodošli u naš udoban restoran u srcu grada! Nudimo svježa jela, mirisnu kafu i toplu atmosferu.",
    menuTitle: "Meni", dish1: "Carbonara pasta", dish2: "Cezar salata",
    price1: "7.50 €", price2: "5.90 €",
    specialsTitle: "Akcije", special1: "🎉 Svakog utorka - 20% popusta na sve!", special2: "☕ Besplatna kafa uz svaki desert!",
    contactTitle: "Kontakt", address: "📍 Adresa: Ulica Primjerna 5, Podgorica", phone: "📞 Telefon: +382 67 123 456", hours: "🕒 Otvoreno: 10:00 – 23:00"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}