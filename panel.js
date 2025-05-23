const audio = new Audio('sounds/menu-open.mp3');
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
  const menu = document.getElementById('menu-overlay');
  if (!menu.classList.contains('active')) {
    audio.currentTime = 0;
    audio.play();
  }
  menu.classList.toggle('active');
}

function navigateAndClose(id) {
  scrollToSection(id);
  document.getElementById('menu-overlay').classList.remove('active');
}

function envoyerCommande() {
  const panel = document.getElementById("panneau").value;
  const numero = document.getElementById("whatsapp").value;
  const moyen = document.getElementById("paiement").value;

  const message = `Je veux un ${panel}, mon moyen de paiement est ${moyen}. Mon numéro WhatsApp est : ${numero}`;
  const numeroWhatsApp = "237689200244";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank");
}
function autoScrollCarousel() {
  const carousel = document.querySelector('.carousel');
  let scrollPos = 0;
  const panelWidth = 320; 

  setInterval(() => {
    scrollPos += panelWidth;
    if (scrollPos >= carousel.scrollWidth - carousel.clientWidth) {
      scrollPos = 0;
    }
    carousel.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
  }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
  autoScrollCarousel(); 
});
const traduction = {
  fr: {
    header: "Panneaux Pterodactyles",
    tarifs: "Tarifs",
    commander: "Commander",
    contact: "Contact",
    langues: "Langues",
    menu_contact: "Contact",
    menu_commande: "Commander",
    menu_tarifs: "Tarifs",
    menu_apropos: "À propos",
    menu_langues: "Langues",
    contactText: "N'hésitez pas à nous contacter.",
    apropos_titre: "À propos",
    apropos_contenu1: "Nous fournissons des panneaux puissants pour héberger vos serveurs Pterodactyl.",
    apropos_contenu2: "SENKU TECH met à votre disposition ses services. Notre Principe No1: Satisfaire à tout prix.",
    apropos_contenu3: "NOBLESSE OBLIGÉ!!!"
},
  en: {
    header: "Pterodactyl Panels",
    tarifs: "Pricing",
    commander: "Order",
    contact: "Contact",
    langues: "Languages",
    menu_contact: "Contact",
    menu_commande: "Order",
    menu_tarifs: "Pricing",
    menu_apropos: "About",
    menu_langues: "Languages",
    contactText: "Feel free to contact us.",
    apropos_titre: "About",
    apropos_contenu1: "We provide powerful panels to host your Pterodactyl servers.",
    apropos_contenu2: "SENKU TECH offers its services. Our No.1 principle: Satisfaction at all cost.",
    apropos_contenu3: "NOBLESSE OBLIGÉ!!!"
},
  es: {
    header: "Paneles de Pterodáctilo  ",
    tarifs: "Precios",
    commander: "Ordenar",
    contact: "Contacto",
    langues: "Idiomas",
    menu_contact: "Contacto",
    menu_commande: "Ordenar",
    menu_tarifs: "Precios",
    menu_apropos: "Acerca de",
    menu_langues: "Idiomas",
    contactText: "No dudes en contactarnos.",
    apropos_titre: "Acerca de",
    apropos_contenu1: "Proporcionamos paneles potentes para alojar tus servidores Pterodactyl.",
    apropos_contenu2: "SENKU TECH pone sus servicios a tu disposición. Nuestro principio nº 1: Satisfacción a toda costa.",
    apropos_contenu3: "NOBLESSE OBLIGÉ!!!"
},
  hi: {
    header: "प्टेरोडैक्टिल पैनल्स  ",
    tarifs: "मूल्य निर्धारण",
    commander: "आदेश दें",
    contact: "संपर्क करें",
    langues: "भाषाएँ",
    menu_contact: "संपर्क",
    menu_commande: "आदेश दें",
    menu_tarifs: "मूल्य निर्धारण",
    menu_apropos: "परिचय",
    menu_langues: "भाषाएँ",
    contactText: "हमसे संपर्क करने में संकोच न करें।",
    apropos_titre: "परिचय",
    apropos_contenu1: "हम आपके Pterodactyl सर्वर को होस्ट करने के लिए शक्तिशाली पैनल प्रदान करते हैं।",
    apropos_contenu2: "SENKU TECH आपकी सेवा में है। हमारा पहला सिद्धांत: हर कीमत पर संतुष्टि।",
    apropos_contenu3: "NOBLESSE OBLIGÉ!!!"
},
  ur: {
    header: "پٹیروڈیکٹائل پینلز ",
    tarifs: "قیمتیں",
    commander: "آرڈر دیں",
    contact: "رابطہ کریں",
    langues: "زبانیں",
    menu_contact: "رابطہ",
    menu_commande: "آرڈر دیں",
    menu_tarifs: "قیمتیں",
    menu_apropos: "تعارف",
    menu_langues: "زبانیں",
    contactText: "ہم سے رابطہ کرنے میں ہچکچاہٹ نہ کریں۔",
    apropos_titre: "تعارف",
    apropos_contenu1: "ہم آپ کے Pterodactyl سرورز کی میزبانی کے لیے طاقتور پینلز فراہم کرتے ہیں۔",
    apropos_contenu2: "SENKU TECH آپ کی خدمت میں حاضر ہے۔ ہمارا اصول نمبر 1: ہر قیمت پر اطمینان۔",
    apropos_contenu3: "NOBLESSE OBLIGÉ!!!"
}
};

function changerLangue(lang) {
  const t = traduction[lang];
  if (!t) return;

  document.querySelector("header h1").innerText = t.header;
  document.querySelector("#tarifs h2").innerText = t.tarifs;
  document.querySelector("#commande h2").innerText = t.commander;
  document.querySelector("#contact h2").innerText = t.contact;
  document.querySelector("#langues h2").innerText = t.langues;
  document.querySelector("#contact p").innerText = t.contactText;
  document.querySelector("#apropos h2").textContent = t.apropos_titre;

  const aproposParas = document.querySelectorAll("#apropos p");
  if (aproposParas.length>= 3) {
aproposParas[0].textContent = t.apropos_contenu1;
    aproposParas[1].textContent = t.apropos_contenu2;
    aproposParas[2].textContent = t.apropos_contenu3;
}

  const menuItems = document.querySelectorAll(".menu-content li");
  if (menuItems.length>= 5) {
    menuItems[0].innerText = t.menu_contact;
    menuItems[1].innerText = t.menu_commande;
    menuItems[2].innerText = t.menu_tarifs;
    menuItems[3].innerText = t.menu_apropos;
    menuItems[4].innerText = t.menu_langues;
}
}
function demarrerDefilementAutomatique() {
  const container = document.querySelector(".carousel-container");
  const vitesse = 1;
  let rafId;

  function defilement() {
    container.scrollLeft += vitesse;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }

    rafId = requestAnimationFrame(defilement);
  }

  defilement();
}
window.addEventListener('DOMContentLoaded', () => {
  autoScrollCarousel(); 
  demarrerDefilementAutomatique();
});

function toggleWhatsAppLinks() {
  const links = document.getElementById('whatsapp-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTelegramLinks() {
  const links = document.getElementById('telegram-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
}