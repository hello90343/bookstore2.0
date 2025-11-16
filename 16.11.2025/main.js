const mainMain = document.getElementById("mainMain");

function init() {
    renderCards();
}

function renderCards() {
    let savedBooks = localStorage.getItem("booksData");

    if (savedBooks) {
        books = JSON.parse(savedBooks);
    }

    mainMain.innerHTML = "";

    for (let i = 0; i < books.length; i++) {

        mainMain.innerHTML += getBookTemplate(i);
    }
}

function sendComments(index) {
    let inputField = document.querySelector(".inputComment" + index);

    if (inputField.value.trim() != "") {
        books[index].comments.push({
            name: "User",
            comment: inputField.value
        });

        localStorage.setItem("booksData", JSON.stringify(books));

        inputField.value = "";
        init();
    }
}

function likeDislike(index) {
    let book = books[index];

    book.liked = !book.liked;

    if (book.liked) {
        book.likes++;
    } else {
        book.likes--;
    }

    localStorage.setItem("booksData", JSON.stringify(books));
    init();
}

function getHeart(isLiked) {
    if (isLiked) {
        return "❤️";
    } else {
        return "🤍";
    }
}