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
// Функция для создания карточки
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

  const titleSkeleton = document.createElement("div");
  titleSkeleton.classList.add("card__title-skeleton");

  const buttonSkeleton = document.createElement("div");
  buttonSkeleton.classList.add("card__like-button-skeleton");

  skeletonElement.appendChild(imageSkeleton);
  skeletonElement.appendChild(titleSkeleton);
  skeletonElement.appendChild(buttonSkeleton);

  return skeletonElement;
}
//карточка со скелетом
function addCard(cardData, delay) {
  const skeleton = createSkeleton();
  cardContainer.appendChild(skeleton); 
  //смена
  setTimeout(() => {
    const cardElement = createCard(cardData);
    cardContainer.replaceChild(cardElement, skeleton); 
    //анимация появления карточки
    setTimeout(() => {
      cardElement.classList.add("visible");
    }, 100); //задержка
  }, delay);
}
//рандом карточка
function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cardsData.length);
  return cardsData[randomIndex];
}
//автоматическое добавление карточек с интервалом
function startAddingCards() {
  setInterval(() => {
    const randomCard = getRandomCard(); 
    addCard(randomCard, 2000); 
  }, 3000); //+ карточка каждые 3 секунды
}
startAddingCards();