document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const gallery = document.querySelector('.gallery');
    const books = gallery.getElementsByClassName('book');
  
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
  
        Array.from(books).forEach(function(book) {
            const title = book.querySelector('h3').textContent.toLowerCase();
            const author = book.querySelector('p').textContent.toLowerCase();
  
            if (title.includes(searchTerm) || author.includes(searchTerm)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    });
  });