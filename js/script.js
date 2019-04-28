var slider = document.querySelector('.slider');
var slides = slider.querySelectorAll('.slide');
var arrowLeft = slider.querySelector('.arrow--left');
var arrowRight = slider.querySelector('.arrow--right');
var points = slider.querySelectorAll('.point');

var currentSlide = 1;
var interval;

var takeInterval = function() {
  if (interval) {
    clearInterval(interval);
  }
  interval =setInterval(turnNextSlide, 5000);
};

var turnSlide = function() {
  slides.forEach(function(slide){
    if (slide.classList.contains('slider--active')) slide.classList.remove('slider--active');
  });

  slides[currentSlide - 1].classList.add('slider--active');

  slides.forEach(function(slide){
    if (slide.classList.contains('fadeIn')) slide.classList.remove('fadeIn');
  });

  slides[currentSlide - 1].classList.add('fadeIn');

  points.forEach(function(point){
    if (point.classList.contains('point--active')) point.classList.remove('point--active');
  });

  points[currentSlide - 1].classList.add('point--active');

  takeInterval();
}


var turnNextSlide = function() {
  currentSlide === 3 ? currentSlide = 1 : currentSlide++;
  turnSlide();
};

var turnPrevSlide = function() {
  currentSlide === 1 ? currentSlide = 3 : currentSlide--;
  turnSlide();
}; 

arrowRight.addEventListener('click', function(){
  turnNextSlide();
});

arrowLeft.addEventListener('click', function(){
  turnPrevSlide();
});


var pointClickHandler = function(point, index) {
  currentSlide = index  + 1;
  turnSlide();
};

points.forEach(function(point,index) {
  point.addEventListener('click', function() {
    pointClickHandler(point, index);
  });
});

takeInterval();