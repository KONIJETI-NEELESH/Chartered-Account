const carouselData = [
  {
    image: 'https://www.grandmarkca.com/wp-content/uploads/2018/12/GM_Services_Banner_Insolvency.jpg',
    title: 'INSOLVENCY \n PROFESSIONALS'
  },
  {
    image: 'https://www.grandmarkca.com/wp-content/uploads/2018/12/GM_Inside_Banner_Tax-Consulting.jpg',
    title: 'TAX CONSULTING'
  },
  {
    image: 'https://www.grandmarkca.com/wp-content/uploads/2018/12/GM_Services_Banner_AUDITASSURANCE.jpg',
    title: 'AUDIT & ASSURANCE',
  },
];

const autoplayInterval = 3000;
let currentImageIndex = 0;

const carouselContainer = document.getElementById('autoplay-carousel');

function goToPreviousImage() {
  const newIndex = (currentImageIndex - 1 + carouselData.length) % carouselData.length;
  const imgContainers = document.getElementsByClassName('img-container');
  for (let i = 0; i < imgContainers.length; i++) {
    imgContainers[i].style.transition = 'opacity 1s ease-in-out';
  }
  currentImageIndex = newIndex;
  renderCarousel();
}

function goToNextImage() {
  const newIndex = (currentImageIndex + 1) % carouselData.length;
  currentImageIndex = newIndex;
  renderCarousel();
}

function renderCarousel() {
  const currentData = carouselData[currentImageIndex];

  const carouselHtml = `
      <div class="autoplay-carousel-with-data">
        <button onclick="goToPreviousImage()" class="previous-btn">
          <h1 class="previous">&lt;</h1>
        </button>
        <div class="carousel-content">
          <img src="${currentData.image}" alt="Carousel Image" class="img-container">
          <div class="data-container">
            <h1 class="carousel-h1">${currentData.title}</h1>
          </div>
        </div>
        <button onclick="goToNextImage()" class="next-btn">
          <h1 class="next">&gt;</h1>
        </button>
      </div>
    `;

  carouselContainer.innerHTML = carouselHtml;
}

setInterval(goToNextImage, autoplayInterval);
renderCarousel();