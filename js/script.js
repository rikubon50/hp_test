

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slides .slide-placeholder');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function showSlide() {
    slidesContainer.style.transform = `translateX(-${index * 700}px)`;
  }

  if (prevBtn) {
    prevBtn.style.display = 'block';
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide();
    });
  }

  if (nextBtn) {
    nextBtn.style.display = 'block';
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      showSlide();
    });
  }
});