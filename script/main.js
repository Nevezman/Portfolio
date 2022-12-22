function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__area'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popup.classList.add('active'); // И для самого окна
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight= "15px"
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popup.classList.remove('active'); // И с окна
  document.body.style.overflow = "";
  document.body.style.paddingRight= "";
});
let burger = document.querySelector('.burger__items'); // Само окно
let openBurgerButtons = document.querySelectorAll('.burger__btn'); // Кнопки для показа окна
let lines = document.querySelector('.burger__btn'); 
let closeBurgerLinks = document.querySelectorAll('.menu_items')

openBurgerButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      burger.classList.toggle('burger__open'); // И для самого окна
      lines.classList.toggle('burger__active');
  })
});
closeBurgerLinks.forEach((links) => {
  links.addEventListener('mouseup', (closeBurger) => {
  closeBurger.preventDefault();
  burger.classList.remove('burger__open');
  lines.classList.remove('burger__active');
  })
});
