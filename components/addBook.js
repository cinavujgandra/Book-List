import { viewBooks } from './viewBooks.js'
export const title = document.getElementById('title')
export const author = document.getElementById('author')
export const ISBN = document.getElementById('ISBN')
export const submitBook = document.getElementById('submitBook')
export const bookSuccess = document.getElementById('bookSuccess')
export const bookDanger = document.getElementById('bookDanger')
export const tbodyBooks = document.getElementById('tbodyBooks')
let id = 1
let booksArray = []

export class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
  getBook() {
    const book = {
      'ID':id++, 'title': this.title, 'author': this.author, 'ISBN': this.ISBN
    }
    return book
  }
}

export const createBook = (e) => {
  e.preventDefault()
  if (title.value != "" && author.value != "" && ISBN.value != "") {
    const book = new Book(title.value, author.value, ISBN.value)
   
    booksArray = [...booksArray, ...[book.getBook()]]
    const books = viewBooks(booksArray)
    tbodyBooks.innerHTML = books

    successMessage()

  } else {
    errorMessage()
  }
}


const successMessage = () => {
  bookSuccess.style.display = "block";
  bookDanger.style.display = "none";
  title.value = ""
  author.value = ""
  ISBN.value = ""
}

const errorMessage = () => {
  bookSuccess.style.display = "none";
  bookDanger.style.display = "block";
}


submitBook.addEventListener('click', createBook)
