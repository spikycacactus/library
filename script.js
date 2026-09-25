function Book (title, author, numberOfPages, read){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function () {
        return `${this.title} was written by ${this.author}, it has ${this.numberOfPages} pages and I ${this.read} it yet`
    };
};

const myLibrary = [];

function addBookToLibrary(title, author, numberOfPages, read) {
    const book = new Book(title, author, numberOfPages, read);
    book.id = crypto.randomUUID()
    myLibrary.push(book)
  // take params, create a book then store it in the array
}

const hobbit = new Book("hobbit", "tolkien", "345", "not read");
console.log(hobbit.info())
addBookToLibrary("hobbit1", "tolkien", "345", "not read")
addBookToLibrary("hobbit2", "tolkien", "345", "not read")
addBookToLibrary("hobbit3", "tolkien", "345", "not read")

function writeAll(){
    for (let book of myLibrary){
        console.log(book.info())
    }
}
writeAll()