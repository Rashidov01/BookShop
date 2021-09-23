let elBooksList = document.querySelector('.books__list');

// books
let foundBooks = books.slice(0, 50);

// template
elBooksItemTemplate = document.querySelector('#books-item-template').content;


function showBooks () {
  elBooksList.innerHTML = '';
  const elBooksFragment = document.createDocumentFragment();


  for (let book of books) {
    const elNewBooksItem = elBooksItemTemplate.cloneNode(true);

    // elNewBooksItem.querySelector('.book__img').src = imgLink;
    // elNewBooksItem.querySelector('.book__img').alt = `${book.title} poster`;
    elNewBooksItem.querySelector('.book__title').textContent = book.title;
    elNewBooksItem.querySelector('.book__author').textContent = book.author;
    elNewBooksItem.querySelector('.book__year').textContent = book.year;
    elNewBooksItem.querySelector('.book__pages').textContent = book.pages;
    elNewBooksItem.querySelector('.book__language').textContent = book.language;


    elBooksFragment.appendChild(elNewBooksItem);
  }

  elBooksList.appendChild(elBooksFragment);
}

showBooks(foundBooks, '');
