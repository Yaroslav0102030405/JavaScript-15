/*
 * Делегирование
 * - один из многих
 * - несколько из многих Set
 */

// Задача. Когда я кликаю по тегу я хочу добавить активный какой-нибудь класс чтоб посдтветить что пользователь именно выбирает
// активный может быть только один (тогда нам нужно проверить при каждом клике если у нас есть активный элемент то нужно снять с него класс)
// с активного класса снять класс
const tagsContainer = document.querySelector(".js-tags");
// в переменной хранить выбранные значения клика
let selectedTag = null;

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const currentActiveBtn = document.querySelector(".tags__btn-active");
  // поиск активного класса

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove("tags__btn-active");
  }
  // если существует текучий класс тогда убери его а если нет тогда ничего не делай

  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add("tags__btn-active");
  // добавили активный класс на кнопку
  selectedTag = nextActiveBtn.dataset.value;
  console.log(selectedTag);
}
