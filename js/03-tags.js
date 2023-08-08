/*
 * Делегирование
 * - один из многих
 * - несколько из многих Set
 */

// Задача. Когда я кликаю по тегу я хочу добавить активный какой-нибудь класс чтоб посдтветить что пользователь именно выбирает
// активный может быть только один (тогда нам нужно проверить при каждом клике если у нас есть активный элемент то нужно снять с него класс)
// с активного класса снять класс
// const tagsContainer = document.querySelector(".js-tags");
// // в переменной хранить выбранные значения клика
// let selectedTag = null;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveBtn = document.querySelector(".tags__btn-active");
//   // поиск активного класса

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn-active");
//   }

//   // currentActiveBtn?.classList.remove("tags__btn-active");
//   // если существует текучий класс тогда убери его а если нет тогда ничего не делай

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add("tags__btn-active");
//   // добавили активный класс на кнопку
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

/*
 * Задача 2 продолжение но по другому
 * Давайте сделем чтобы этих тегов можно было выбрать сколько угодно (чтобы по джава скрпит и по ноде показала статьи)
 */
// получили доступ к ссылке (элементу)
const tagsContainer = document.querySelector(".js-tags");
// new Set() - добавляет только уникальные элементы дуближей игнорирует
const selectedTag = new Set();

// повесили слушателя событий
tagsContainer.addEventListener("click", onTagsContainerClick);

// функция которая при клике на кнопку добавляет класс и убирает класс при повтором клике на туже кнопку
function onTagsContainerClick(evt) {
  // проверям что мы кликнули по кнопке
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn-active");

  // если есть активній класс тогда удаляем
  if (isActive) {
    selectedTag.delete(tag);
    // если класса активного нет тогда добаляем
  } else {
    selectedTag.add(tag);
    // добавили тег в пу3стой массив
  }

  evt.target.classList.toggle("tags__btn-active");
  // classList.toggle - это свойство работает так если там класс есть оно его снимет если класса нет оно его добавит
  // selectedTag.push(evt.target.dataset.value)
  console.log(selectedTag);
}
