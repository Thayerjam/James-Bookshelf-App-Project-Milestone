  const favoriteCounter = document.querySelector('#favoriteCounter');
  const mainSection = document.querySelector('#bookDisplayWrapper');
  
  const bookshelf = new Bookshelf();
  
  for (bookInfo of bookData) {
    const book = new Book(
      bookInfo.author,
      bookInfo.language,
      bookInfo.subject,
      bookInfo.title
    );
    bookshelf.addBook(book);
  };
  
  const addBookButton = document.querySelector('#addBook');
  addBookButton.addEventListener('click', userAddBook);
  
  const newBookTitle = document.querySelector('#newBookTitle');
  const newBookAuthor = document.querySelector('#newBookAuthor');
  const newBookLanguage = document.querySelector('#newBookLanguage');
  const newBookSubject = document.querySelector('#newBookSubject');
  
  function userAddBook() {
    bookshelf.books.unshift(new Book(newBookAuthor.value,newBookLanguage.value,newBookSubject.value,newBookTitle.value));
    bookshelf.render();
    newBookTitle.value = '';
    newBookAuthor.value = '';
    newBookLanguage.value = '';
    newBookSubject.value = '';
  };
  
  bookshelf.render();