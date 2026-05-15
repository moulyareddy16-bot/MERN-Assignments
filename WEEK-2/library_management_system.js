/**
 * Library Book Management System
 * Objective: Manage a collection of books using ES6 classes.
 */

class Book {
  constructor(title, author, pages, isAvailable) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // Mark the book as borrowed
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`"${this.title}" has been borrowed.`);
    } else {
      console.log(`"${this.title}" is already currently unavailable.`);
    }
  }

  // Mark the book as returned
  returnBook() {
    this.isAvailable = true;
    console.log(`"${this.title}" has been returned.`);
  }

  // Display book details
  getInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Available: ${this.isAvailable}`);
  }

  // Check if the book is considered long (more than 300 pages)
  isLongBook() {
    return this.pages > 300;
  }
}

// Initialize book collection
const b1 = new Book('Harry Potter', 'J.K. Rowling', 990, true);
const b2 = new Book('Ramayan', 'Valmiki', 5000, true);
const b3 = new Book('Bahubali', 'Rajamouli', 1500, true);
const b4 = new Book('Life', 'Siri', 600, true);
const b5 = new Book('Hello', 'John', 288, true);

const books = [b1, b2, b3, b4, b5];

// 1. Display info of all books
console.log("--- All Books ---");
books.forEach(book => book.getInfo());

// 2. Borrow books and show status
console.log("\n--- Borrowing Process ---");
b1.borrow();
b4.borrow();
console.log(`Is "${b1.title}" available? ${b1.isAvailable}`);
console.log(`Is "${b4.title}" available? ${b4.isAvailable}`);

// 3. Return a book and show updated status
console.log("\n--- Returning Process ---");
b1.returnBook();
console.log(`Updated status of "${b1.title}": ${b1.isAvailable}`);

// 4. Count "long books"
const longBooksCount = books.filter(book => book.isLongBook()).length;
console.log(`\nTotal long books (> 300 pages): ${longBooksCount}`);

// 5. List all currently available books
console.log("\n--- Available Books ---");
books.filter(book => book.isAvailable).forEach(book => book.getInfo());