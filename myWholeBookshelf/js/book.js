function Book(author, language, subject, title) {
    this.title = title;
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.isFavorite = false;
    this.comments = [];
    this.commentSpace;
    this.commentDisplay = false;
    

    //Render function for each individual book and all the elements attached to them.
    //This function could definitely be cleaned up, its rather messy and overly complex as it stands
    this.render = function () {
      let buttonStyle = this.isFavorite ? 'lightblue' : 'none';
      
      //creating each individual book's DOM elements
      const bookDiv = document.createElement("div");
      const title = document.createElement("div");
      const author = document.createElement("div");
      const language = document.createElement("div");
      const subject = document.createElement("div");
      const comments = document.createElement("div");
      const favoriteButton = document.createElement("a");
      const commentButton = document.createElement("a");
      //using 'this' instead of 'const' so comments can be properly pulled from each individual book's comment box
      this.commentSpace = document.createElement("input");
      
      //adding classes to the book's DOM elements for styling
      bookDiv.classList.add('bookWrapper');
      title.classList.add('bookTitle');
      author.classList.add('bookAuthor');
      language.classList.add('bookLanguage');
      subject.classList.add('bookSubject');
      subject.classList.add('bookComments');
      favoriteButton.classList.add('favoriteBook');
      favoriteButton.classList.add('button');
      commentButton.classList.add('bookComment');
      commentButton.classList.add('button');
        this.commentSpace.classList.add('commentSpace');
      this.commentSpace.setAttribute("id", "commentSpace");

      //displaying relevant book data
      title.textContent = "Title: " + this.title;
      author.textContent = "Author: " + this.author;
      language.textContent = "Language: " + this.language;
      subject.textContent = "Subject: " + this.subject;
      


      //favorite button rendering and event binding
      favoriteButton.addEventListener('click', this.changeFavorite);
      favoriteButton.innerText = 'Favorite';
      favoriteButton.style.backgroundColor = buttonStyle;

      //comment button rendering and event binding
      this.commentSpace.innerText = 'comments';
      commentButton.innerText = 'Comment';
      if (this.comments.length > 0) {
        comments.textContent = "Comments: " + this.comments;
      }
      if (!this.commentDisplay) {
        this.commentSpace.style.display = 'none';
      } else {
        commentButton.innerText = "Add Comment";
      }
      commentButton.addEventListener('click', this.addComment);

      //appening finalized elements to the DOM
      bookDiv.append(title);
      bookDiv.append(author);
      bookDiv.append(language);
      bookDiv.append(subject);
      bookDiv.append(comments);
      bookDiv.append(favoriteButton);
      bookDiv.append(this.commentSpace);
      bookDiv.append(commentButton);
      return bookDiv;
    };
    

    //changeFavorite button simply flips the book's isFavorite property and rerenders the page
    this.changeFavorite = () => {
      this.isFavorite = !this.isFavorite;
      mainSection.innerHTML = '';
      bookshelf.render();
    }
    

    //addComment button pulling data from the comment box and placing it into the book's comment property before rerendering the page
    this.addComment = () => {
      this.commentDisplay = !this.commentDisplay;
      if (this.commentSpace.value !== '') {
        this.comments.push(this.commentSpace.value);
      }
      console.log(this.comments)
      bookshelf.render();
    }
  };