function getBookTemplate(indexBook) {
    let book = books[indexBook];

    let html = `
        <div class="test1">
            <div class="Like">
                <p class="likeClass${indexBook}" onclick="likeDislike(${indexBook})">${getHeart(book.liked)}</p>
                <p>${book.likes}</p>
            </div>
            <p>${book.name}</p>
            <p>${book.author}</p>
            <p>${book.price}</p>
            <p>${book.publishedYear}</p>
            <p>${book.genre}</p>
        </div>
    `;

    for (let c = 0; c < book.comments.length; c++) {
        html += `
            <div class="test2">
                <p>${book.comments[c].name}</p>
                <p>${book.comments[c].comment}</p>
            </div>
        `;
    }

    html += `
        <br>
        <form onclick="sendComments(${indexBook});">
            <input class="inputComment${indexBook}" type="text" placeholder="Kommentar hinzufügen">
            <button type="submit">Absenden</button>
        </form>
        <br>
    `;

    return html;
}