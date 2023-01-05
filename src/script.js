const contato = document.getElementById("contato");
const dialog = document.getElementById("dialog");
const close = document.getElementById("enviar");
const btn_menu = document.getElementById("menu-btn");
const img_menu = document.getElementById("img-btn");
const menus = document.getElementsByTagName("a");

function menu() {
  if (btn_menu.classList) btn_menu.classList.add("active");
  if (img_menu.classList) img_menu.classList.add("active");
}

function close_menu() {
  btn_menu.classList.remove("active");
  img_menu.classList.remove("active");
}

contato.addEventListener("click", () => {
  dialog.style.display = "flex";
});

close.addEventListener("click", () => {
  dialog.style.display = "none";
});

document.onkeydown = function (e) {
  if (e.key === "Escape") {
    dialog.style.display = "none";
    btn_menu.classList.remove("active");
    img_menu.classList.remove("active");
  }
};

$(document).ready(function () {
  $(".carousel").owlCarousel({
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
    },
  });
});
