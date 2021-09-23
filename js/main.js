let elBooksList = document.querySelector('.books__list');

// search-input
const elBookSearchForm = document.querySelector('.js-book-search-form');
const elBookSearchInput = elBookSearchForm.querySelector('.js-book-search-input');
const elBookSelect = elBookSearchForm.querySelector('.select');
const elBookYearInput = elBookSearchForm.querySelector('.js-book-year-input');
const elBookCountryInput = elBookSearchForm.querySelector('.js-book-country-input');
const elBookLanguageInput = elBookSearchForm.querySelector('.js-book-language-input');


// function findMovies (titleRegex) {
//   return movies.filter(movie => {
//     const meetsCriteria = movie.title.match(titleRegex) && (elGenresSelect.value === 'All' || movie.categories.includes(elGenresSelect.value)) && (elMinYearInput.value.trim() === '' || movie.year >= Number(elMinYearInput.value)) && (elMaxYearInput.value.trim() === '' || movie.year <= Number(elMaxYearInput.value));
//     return meetsCriteria;
//   });
// }

// books
let foundBooks = books.slice(0, 50);

// template
elBooksItemTemplate = document.querySelector('#books-item-template').content;

// Functions
function showBooks (movies, titleRegex = '') {
  elBooksList.innerHTML = '';
  const elBooksFragment = document.createDocumentFragment();


  for (let book of books) {
    const elNewBooksItem = elBooksItemTemplate.cloneNode(true);

    elNewBooksItem.querySelector('.book__img').src = book.imageLink;
    elNewBooksItem.querySelector('.book__img').alt = `${book.title} poster`;
    elNewBooksItem.querySelector('.book__title').textContent = book.title;
    elNewBooksItem.querySelector('.book__author').textContent = book.author;
    elNewBooksItem.querySelector('.book__year').textContent = book.year;
    elNewBooksItem.querySelector('.book__pages').textContent = book.pages;
    elNewBooksItem.querySelector('.book__language').textContent = book.language;


    elBooksFragment.appendChild(elNewBooksItem);
  }

  elBooksList.appendChild(elBooksFragment);
};

function findMovies (titleRegex){
  return books.filter(book => {

  });
};

 books.forEach((element, index) => {
  element.id = index;
});


// resuts
showBooks(foundBooks, '');
