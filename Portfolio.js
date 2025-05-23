const container = document.querySelector('.projects-container');

let scrollDirection = 1;
const scrollStep = 1; 
const delay = 10;

function autoScroll() {
    container.scrollLeft += scrollDirection * scrollStep;
    
    if (scrollDirection === 1 && container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
    } else if (scrollDirection === -1 && container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth;
    }
}

let scrollInterval = setInterval(autoScroll, delay);

document.getElementById('scroll-left').addEventListener('click', () => {
    scrollDirection = -1;
});

document.getElementById('scroll-right').addEventListener('click', () => {
    scrollDirection = 1;
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.project-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

let touchStartX = null;

container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
    if (!touchStartX) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) > 50) { 
        scrollDirection = diff > 0 ? -1 : 1;
    }

    touchStartX = null;
});