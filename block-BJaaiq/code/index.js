let root = document.querySelector('ul');

let max = quotes.length;
let index = 0;

function addQuotes() {
    for (let i = 0; i < max; i++) {

        let li = document.createElement('li');
        let blockquote = document.createElement('blockquote');
        let cite = document.createElement('cite');
        blockquote.innerText = quotes[index].quoteText;
        cite.innerText = quotes[index].quoteAuthor;

        li.append(blockquote, cite);

        root.append(li);
        index++ ;
    }
}

document.addEventListener('scroll', () => {
    let scrollheight = document.documentElement.scrollHeight;
    let scrolltop = document.documentElement.scrollTop;
    let clientheight = document.documentElement.clientHeight;

    if(scrolltop + clientheight >= scrollheight && index < quotes.length) {
        addQuotes();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    alert(`The content of the DOM is Loaded`);
    addQuotes();
})