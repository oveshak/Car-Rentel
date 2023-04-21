let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distace: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".text", { delay: 200, origin: "top" });

sr.reveal(".form-container form", { delay: 300, origin: "left" });

sr.reveal(".heading", { delay: 300, origin: "top" });

sr.reveal(".ride-container .box .box-img", { delay: 200, origin: "right" });

sr.reveal(".services-containe .box", { delay: 300, origin: "top" });

sr.reveal(".about-container .about-img", { delay: 400, origin: "left" });

sr.reveal(".about-container .about-text", { delay: 200, origin: "right" });

sr.reveal(".reviews-container .box", { delay: 200, origin: "right" });

sr.reveal(".newsletter .box", { delay: 300, origin: "bottom" });
