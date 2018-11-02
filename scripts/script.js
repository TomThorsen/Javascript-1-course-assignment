// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards


// global for card object
var cardObject;

// get object from JSON
fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then((res) => {
        createCard(res);
    })
    .catch(err => console.log(err));

// create elements on webpage from JSON
function createCard(result) {
    cardObject = result.cards;
    for (var i = 0; i < result.cards.length; i++) {
        var cardCont = document.createElement('div');
        cardCont.className = 'card-container';
        var column4 = document.createElement('div');
        column4.className = 'col-sm-4';

        cardCont.innerHTML += "<h4>" + result.cards[i].name + "</h4>";
        cardCont.innerHTML += "<img src=" + result.cards[i].imageUrl + " width='100%'>";
        cardCont.innerHTML += "<a href='card-specific.html?id=" + result.cards[i].id + "' class='btn btn-success'>View More</a>";

        column4.appendChild(cardCont);
        document.getElementById('cards').appendChild(column4);
    }
}


// search button click event and function
var searchBtn = document.getElementById('searchButton');
searchBtn.addEventListener('click', function(){
    var searchInput = document.getElementById("search").value; // Search input

    // Remove all children of cards div
    var cards = document.getElementById("cards");
    while (cards.hasChildNodes()) {
        cards.removeChild(cards.lastChild);
    }

    // Filter cards based on search input using filter, convert to lowercase and includes for matches on part of string.
    var searchResult = cardObject.filter(function(res) {
        return res.name.toLowerCase().includes(searchInput.toLowerCase())
    });

    // error if no search match
    if (searchResult.length === 0) {
        var errorCont = document.createElement('div');
        errorCont.className = 'search-error-cont';
        errorCont.innerHTML += "<h1>No results found<h1>";
        document.getElementById('cards').appendChild(errorCont);
    }

    // display results if match
    for (var i = 0; i < searchResult.length; i++) {
        var cardCont = document.createElement('div');
        cardCont.className = 'card-container';
        var column4 = document.createElement('div');
        column4.className = 'col-sm-4';

        cardCont.innerHTML += "<h4>" + searchResult[i].name + "</h4>";
        cardCont.innerHTML += "<img src=" + searchResult[i].imageUrl + " width='100%'>";
        cardCont.innerHTML += "<a href='card-specific.html?id=" + searchResult[i].id + "' class='btn btn-success'>View More</a>";

        column4.appendChild(cardCont);
        document.getElementById('cards').appendChild(column4);
    }
    event.preventDefault(); // prevent script from reloading on search submit
});
