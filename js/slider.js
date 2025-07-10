document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slides .slide-placeholder');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function showSlide() {
    console.log('Current index:', index);
    console.log('Total slides:', slides.length);
    slidesContainer.style.transform = `translateX(-${index * 700}px)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide();
  });
});