const languages = [];

let elBooksList = document.querySelector('.books__list');

// search-input
const elBookSearchForm = document.querySelector('.js-book-search-form');
const elBookSearchInput = elBookSearchForm.querySelector('.js-book-search-input');
const elBookSelect = elBookSearchForm.querySelector('.select');
const elBookYearInput = elBookSearchForm.querySelector('.js-book-year-input');
const elBookAuthorInput = elBookSearchForm.querySelector('.js-book-author-input');
const elBookLanguageSelect = elBookSearchForm.querySelector('.js-book-language-select');


// template
elBooksItemTemplate = document.querySelector('#books-item-template').content;

// Functions
// function getUniqueLang() {
//   // const lang = [];
//   book.language.forEach(book => {
//     // lang.push(book.language);
//     // lang.forEach(count => {

//     // });
//     if (!books.includes(count)){
//       books.push(count)
//     }
//   });
// }

// function getUniqueLang () {
//   books.forEach(book => {
//     books.language.forEach(language => {
//       if (!languages.includes(language)) {
//         languages.push(language);
//       }
//     });
//   });
//   genres.sort();
// }

function findLanguages(){

  for (const book of books) {
    if(!languages.includes(book.language)) {
      languages.push(book.language);
    }
  }
};

function showLanguages() {

  const elLanguagesFragment = document.createDocumentFragment();

  languages.forEach(opt => {
    const elLanguageOption = document.createElement('option');
    elLanguageOption.textContent = opt;
    elLanguageOption.value = opt;
    elLanguagesFragment.appendChild(elLanguageOption);
  })
  elBookLanguageSelect.appendChild(elLanguagesFragment);

}

function showBooks(books) {
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
    elNewBooksItem.querySelector('.wikipedia-link').href = book.link;
    elNewBooksItem.querySelector('.wikipedia-link').target = '_blank';

    elBooksFragment.appendChild(elNewBooksItem);
  }

  elBooksList.appendChild(elBooksFragment);
};

function findBooks(titleRegex) {
  return books.filter( book => {
    const meetsCriteria = book.title.match(titleRegex) && book.year === Number(elBookYearInput.value) && (elBookLanguageSelect.value = 'All' || book.language.includes(elBookLanguageSelect.value))
    return meetsCriteria;
  });
};

function bookFind (evt){
  evt.preventDefault();

  const titleRegex = new RegExp (elBookSearchInput.value.trim(), 'gi');
  const foundBooks = findBooks(titleRegex);

  if(foundBooks.length > 0){
    showBooks(foundBooks,titleRegex)
  } else{
    elBooksList.innerHTML = '<div class="col-12">No book found</div>';
  }
}

  if (elBookSearchForm){
    elBookSearchForm.addEventListener('submit', bookFind);
  }

books.forEach((element, index) => {
  element.id = index;
});


// results
// getUniqueLang();
findLanguages();
showLanguages();
showBooks(books);
