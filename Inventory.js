document.addEventListener('DOMContentLoaded', function() {
    const bookItems = document.querySelectorAll('.book-item');

    bookItems.forEach(item => {
        const img = item.querySelector('img');
        const titleDiv = item.querySelector('.book-title');

        titleDiv.textContent = img.alt;

        item.addEventListener('mouseenter', () => {
            titleDiv.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseleave', () => {
            titleDiv.style.transform = 'translateY(100%)';
        });
    });
});


