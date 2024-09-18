const quotes = document.getElementById('quotes');
const authors = document.getElementById('authors');
const btn = document.getElementById('btn')


const allQuotes = [
    {
        theQuote: "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
        theAuthor: "Bill Watterson"
    },
    {
        theQuote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
        theAuthor: "Stephen Chbosky"
    },
    {
        theQuote: "And now that you don't have to be perfect, you can be good.",
        theAuthor: "John Steinbeck"
    },
    {
        theQuote: "Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.",
        theAuthor: "Ilona Andrews"
    },
    {
        theQuote: "I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.",
        theAuthor: "Holly Black"
    },
    {
        theQuote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default",
        theAuthor: "J.K. Rowling"
    },
    {
        theQuote: "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.”",
        theAuthor: "Charles Darwin"
    },
    {
        theQuote: "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
        theAuthor: "Ray Bradbury"
    },
    {
        theQuote: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
        theAuthor: "Maya Angelou"
    },
    {
        theQuote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        theAuthor: "Oscar Wilde"
    }

   
];
    btn.addEventListener("click", () => {
    const randomName = Math.floor(Math.random() * allQuotes.length)
    const dash = "- "
    console.log(allQuotes[randomName])
    quotes.innerHTML = allQuotes[randomName].theQuote;
    authors.innerHTML = dash + allQuotes[randomName].theAuthor;
    
})
   