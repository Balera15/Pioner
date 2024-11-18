window.onload = function () {
    const images = document.querySelectorAll('.fade-in');
    setTimeout(() => {
      images.forEach(image => 
        {
        image.classList.add('visible');
      }
      );
     }, 500); // 500 миллисекунд задержки перед началом появления
  };


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
]





  const cardContainer = document.getElementById("card-container");

  cardsData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imgElement = document.createElement("img");
    imgElement.src = card.image;
    imgElement.alt = card.title;
    imgElement.classList.add("card__image", "fade-in");
    cardElement.appendChild(imgElement);
    
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card__info");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = card.title;

    const likeButton = document.createElement("button");
    likeButton.classList.add("card__like-button");
    likeButton.textContent = "LIKE";

    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(likeButton);
    cardElement.appendChild(cardInfo);

    cardContainer.appendChild(cardElement);
  }
    )
