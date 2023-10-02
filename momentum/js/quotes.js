const quotes = [
    {
        quote: "아끼다 똥된다.",
        author: "미상"},
    {
        quote: "늦었다고 생각될때 진짜 늦은거다",
        author: "박명수"},
    {
        quote: "쇠뿔도 단김에 빼라",
        author: "미상"},
    {
        quote: "금강산도 식후경",
        author: "몰라"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;