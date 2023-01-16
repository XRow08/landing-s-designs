/* const contato = document.getElementById('contato'); */
const dialog = document.getElementById('dialog');
const close2 = document.getElementById('fechar_model');
const close = document.getElementById('enviar');
const btn_menu = document.getElementById('menu-btn');
const img_menu = document.getElementById('img-btn');
const menus = document.getElementsByTagName('a');
const main = document.getElementById('main');
const main_main = document.getElementById('main_main');
const fechar = document.getElementById('fechar');

const change = (src) => {
  main.src = src;
  main_main.style.display = 'flex';
};

function menu() {
  if (btn_menu.classList.contains('active')) {
    img_menu.classList.remove('active');
    btn_menu.classList.remove('active');
  } else {
    btn_menu.classList.add('active');
    img_menu.classList.add('active');
  }
}

fechar.addEventListener('click', () => {
  main_main.style.display = 'none';
});

/* contato.addEventListener('click', () => {
  dialog.style.display = 'flex';
}); */

close.addEventListener('click', () => {
  dialog.style.display = 'none';
});

close2.addEventListener('click', () => {
  dialog.style.display = 'none';
});

document.onkeydown = function (e) {
  if (e.key === 'Escape') {
    dialog.style.display = 'none';
    btn_menu.classList.remove('active');
    img_menu.classList.remove('active');
  }
};

$(document).ready(function () {
  $('.carousel').owlCarousel({
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
