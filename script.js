document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideshowInterval;
    let isPlaying = false;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        currentSlide = index;
    }

    function startStopSlideshow() {
        if (isPlaying) {
            clearInterval(slideshowInterval);
            document.querySelector('#start--stop-btn').innerText = 'Start';
            isPlaying = false;
        } else {
            slideshowInterval = setInterval(nextSlide, 2000);
            document.querySelector('#start--stop-btn').innerText = 'Stop';
            isPlaying = true;
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    document.querySelector('#start--stop-btn').addEventListener('click', startStopSlideshow);
    document.querySelector('#nxtBtn').addEventListener('click', () => {
        clearInterval(slideshowInterval);
        nextSlide();
    });
    document.querySelector('#prevBtn').addEventListener('click', () => {
        clearInterval(slideshowInterval);
        prevSlide();
    });

    startStopSlideshow();
})
