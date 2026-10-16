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

addBookToLibrary("hobbit1", "tolkien", "345", "not read")

const form = document.querySelector("#book-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = Number(document.querySelector("#pages").value);
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);

    form.reset();
    writeAll()
});

document.querySelector("#new-book-btn").addEventListener("click", () => {
    document.querySelector("#book-dialog").showModal();
});

function writeAll(){
    for (let book of myLibrary){
        console.log(book.info())
    }
}
writeAll()