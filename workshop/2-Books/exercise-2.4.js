// From 2.3
// Copy over all of the code from 2.3...

class BookList {
  constructor() {
    this.books = [];
    this.currentlyReading = null;
    this.lastRead = null;
  }
  add = (book) => {
    this.books.push(book);
    this.currentlyReading = this.books[0];
  };
  getNumRead = () => {
    let booksRead = 0;
    this.books.forEach((book) => {
      if (book.isRead === true) {
        booksRead += 1;
      }
    });
    return booksRead;
  };
  getNumUnread = () => {
    let booksUnread = 0;
    this.books.forEach((book) => {
      if (book.isRead === false) {
        booksUnread += 1;
      }
    });
    return booksUnread;
  };
  startReading = (bookTitle) => {
    let currentBook = this.books.find((book) => {
      if (bookTitle === book.title) {
        return true;
      }
    });
    this.currentlyReading = currentBook;
  };
  finishReading = (bookTitle) => {
    let finishedBook = this.books.find((book) => {
      if (bookTitle === book.title) {
        return true;
      }
    });
    this.lastRead = finishedBook;
    this.currentlyReading = null;
  };
}

// startReading = (bookTitle) => {
//   // When we start reading a book, we should set the `currentlyReading` property
//   // to point to it.
//       let currentBook = this.books.find((book) => {
//         if (book.title  === bookTitle) {
//           return true;
//         }
//       });
//       this.currentlyReading = currentBook;
//     };
//     finishReading = (bookTitle) => {
//       // set `currentlyReading` back to `null`,
//   // and set `lastRead` to the book we just finished.
//       let finishedBook = this.books.find((book) => {
//         if (book.title = bookTitle) {
//           return true;
//         }
//       });
//       this.currentlyReading = null;
//       this.lastRead = finishedBook;
//     };

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

// Exercise 2.4
/*

In our BookList, we have properties to track:
- The last book we've read
- The book we're currently reading
- The next book up

We're not using these properties yet; they're always null.

Our new task is to make them functional. When we add our first book to the
list, `currentlyReading` should get set to it.

We need two new methods:

- startReading
- finishReading

Both of these methods will take a book title, as a string.

When we start reading a book, we should set the `currentlyReading` property
to point to it.

When we finish reading a book, we should set `currentlyReading` back to `null`,
and set `lastRead` to the book we just finished.

Your goal is to add the methods and behaviour necessary so that the following
code runs well and produces the expected output.
*/

const homeLibrary = new BookList();

homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);
homeLibrary.add(new Book("The Eire Affair", "Fantasy", "Jasper Fforde"));
homeLibrary.add(
  new Book("The Revisionists", "Science-fiction", "thomas Mullen")
);

console.log("initial state", homeLibrary.currentlyReading); // should be The Shining book object
console.log("initial last-read", homeLibrary.lastRead); // should be null

homeLibrary.finishReading("The Shining");
console.log(
  "Currently reading, after finishing The Shining",
  homeLibrary.currentlyReading
); // should be null
console.log("Last-read, after finishing The Shining", homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading("The Revisionists");
console.log(
  "Currentky reading, After starting The Revisionists",
  homeLibrary.currentlyReading
); // should be The Revisionists book
