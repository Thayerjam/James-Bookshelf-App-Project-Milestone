function Bookshelf(books = []) {
    let displayOnlyFavorites = false;
    
    this.books = books;
    
    this.addBook = function(book) {
      this.books.push(book);
    };


    //Render function for the Bookshelf itself. This function renders each individual book through the book's independant render function
    this.render = function () {
      const wrapperDiv = document.querySelector('#bookDisplayWrapper');
      wrapperDiv.innerHTML = '';
      if (displayOnlyFavorites) {
        this.books.map((book) => book.isFavorite ? wrapperDiv.append(book.render()) : null)
      } else {
        this.books.map((book) => wrapperDiv.append(book.render()))
      }
      //favoritesCount counts each book in the bookshelf.books array only if the isFavorite property returns true
      const favoritesCount = this.books
          .map((book) => (book.isFavorite ? 1 : 0))
          .reduce((total, currentValue) => total + currentValue);
      favoriteCounter.innerText = "Favorite Count: " + favoritesCount;
      const totalBookCount = document.querySelector('#totalBookCount');
      totalBookCount.innerText = "Total Book Count: " + bookshelf.books.length;
      return wrapperDiv;
    };
    

    //Sort by Author and rerender the page with the new sorted array
    this.sortByAuthor = function () {
      books.sort(function(book1, book2) {
        if (book1.author === '') {
          return -1;
        }
        if (book2.author === '') {
          return 1;
        }
        let author1 = book1.author[0].toUpperCase();
        let author2 = book2.author[0].toUpperCase();
        if (author1 < author2) {
          return -1;
        }
        if (author1 > author2) {
          return 1;
        }
        return 0;
      });
      mainSection.innerHTML = '';
      bookshelf.render();
    };
    const sortByAuthor = document.querySelector('#sortByAuthor');
    sortByAuthor.addEventListener('click', this.sortByAuthor);
  

    //Sort by Title and rerender the page with the new sorted array
    this.sortByTitle = function () {
      books.sort(function(book1, book2) {
        if (book1.title === '') {
          return -1;
        }
        if (book2.title === '') {
          return 1;
        }
        let title1 = book1.title[0].toUpperCase();
        let title2 = book2.title[0].toUpperCase();
        if (title1 < title2) {
          return -1;
        }
        if (title1 > title2) {
          return 1;
        }
        return 0;
      });
      mainSection.innerHTML = '';
      bookshelf.render();
    };
    const sortByTitle = document.querySelector('#sortByTitle');
    sortByTitle.addEventListener('click', this.sortByTitle);
  

    //Sort by number of topics and rerender the page with the new sorted array
    this.sortByTopic = function () {
      books.sort(function(book1, book2) {
        let subject1 = book1.subject.length
        let subject2 = book2.subject.length
        if (subject1 < subject2) {
          return -1;
        }
        if (subject1 > subject2) {
          return 1;
        }
        return 0;
      });
      mainSection.innerHTML = '';
      bookshelf.render();
    };
    const sortByTopic = document.querySelector('#sortByTopic');
    sortByTopic.addEventListener('click', this.sortByTopic);
    

    //This button makes books show only if their isFavorite property is true. Rerenders page to hide or show favorites only
    this.showOnlyFavorites = function () {
      displayOnlyFavorites = !displayOnlyFavorites;
      mainSection.innerHTML = '';
      bookshelf.render();
    }
    const showOnlyFavorites = document.querySelector('#showOnlyFavorites');
    showOnlyFavorites.addEventListener('click', this.showOnlyFavorites);
  };