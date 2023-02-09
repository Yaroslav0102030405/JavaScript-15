const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];

/*
 * Задача создать динамические карточки по шаблону
 */

// 1 шаг. Создадим динамическую разметку. Будем использовать шаблонные строки это будет быстрее разработка
// 2 шаг Зарендерить разметку
// 3 шаг При клике на цвет изменять его в боди (будем на общий контаинер вешать слушателя на клик)

const paletteContainer = document.querySelector('.js-palette')
const cardsMarkup = createColorCardsMarkup(colors)

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)
// insertAdjacentHTML - мы говорим браузеру возьми и сам распарся
// beforeend - распарся перед концом
console.log(createColorCardsMarkup(colors));

function createColorCardsMarkup(colors) {
    return colors.map(({ hex, rgb }) => {
        // деструктуризировали 2 свойства
        return `<div class="color-card">
            <div
                class="color-swatch"
                data-hex="${hex}"
                data-rgb="${rgb}"
                style="background-color: ${hex}"
            ></div>
            <div class="color-meta">
                <p>HEX: ${hex}</p>
                <p>RGB: ${rgb}</p>
            </div>
        </div>`;
    })
        .join('');
    // метод джоин бере массив строк и сшивает в одну строку
}

// это 70% фронтенда когда от бекенда будет приходить массив с обьектами 
// а ты будешь в интерфейсе рисовать по этим обьектам какой - то интерфейс
