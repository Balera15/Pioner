const cardsData = [
  {
    image: "./img/kamaz1 1.png",
    title: "Название 1",
    alt: "Картинка 1"
  },
  {
    image: "./img/title-aero 1.png",
    title: "Название 2",
    alt: "Картинка 2"
  },
  {
    image: "./img/main-slide-power 1.png",
    title: "Название 3",
    alt: "Картинка 3"
  }
];

const cardContainer = document.getElementById("card-container");
let cardCount = 0;
const maxCards = 50; 
//карточки
function createCard(cardData) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.src = cardData.image;
  imgElement.alt = cardData.alt;
  imgElement.classList.add("card__image");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = cardData.title;

  const likeButton = document.createElement("button");
  likeButton.classList.add("card__like-button");
  likeButton.textContent = "LIKE";

  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(likeButton);
  cardElement.appendChild(imgElement);
  cardElement.appendChild(cardInfo);

  return cardElement;
}
//скелет
function createSkeleton() {
  const skeletonElement = document.createElement("div");
  skeletonElement.classList.add("card__skeleton");

  const imageSkeleton = document.createElement("div");
  imageSkeleton.classList.add("card__image-skeleton");

  const loaderGif = document.createElement("img");
  loaderGif.src = "./img/preloader.gif";
  loaderGif.alt = "Загрузка...";
  loaderGif.classList.add("card__loader");
  imageSkeleton.appendChild(loaderGif);

  const titleSkeleton = document.createElement("div");
  titleSkeleton.classList.add("card__title-skeleton");

  const buttonSkeleton = document.createElement("div");
  buttonSkeleton.classList.add("card__like-button-skeleton");

  skeletonElement.appendChild(imageSkeleton);
  skeletonElement.appendChild(titleSkeleton);
  skeletonElement.appendChild(buttonSkeleton);

  return skeletonElement;
}
//addskelet
function addCard(cardData, delay) {
  const skeleton = createSkeleton();
  cardContainer.appendChild(skeleton);

  //смена
  setTimeout(() => {
    const cardElement = createCard(cardData);
    cardContainer.replaceChild(cardElement, skeleton);
    setTimeout(() => {
      cardElement.classList.add("visible");
    }, 200); 
  }, delay);
}

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cardsData.length);
  return cardsData[randomIndex];
}
//подгрузка при прокрутке
function loadCards() {
  if (cardCount < maxCards) {
    let cardsToAdd = 3;
    if (cardCount + cardsToAdd > maxCards) {
      cardsToAdd = maxCards - cardCount;
    }
    for (let i = 0; i < cardsToAdd; i++) {
      const randomCard = getRandomCard();
      addCard(randomCard, 500 * i); 
      cardCount++;
    }
  }
}
//проверка на низ страницы
function isAtBottom() {
  return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
}
window.addEventListener('scroll', () => {
  if (isAtBottom() && cardCount < maxCards) {
    loadCards();
  }
});
loadCards();