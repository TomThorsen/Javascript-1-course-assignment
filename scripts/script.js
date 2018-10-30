// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards


// global var for card object
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
        cardCont.innerHTML += "<img src=" + result.cards[i].imageUrl + " width='100%'>"
        cardCont.innerHTML += "<a href='card-specific.html?id=" + result.cards[i].id + "' class='btn btn-success'>View More</a>"

        column4.appendChild(cardCont);
        document.getElementById('cards').appendChild(column4);
    }
}


// search button click event and function
var searchBtn = document.getElementById('searchButton');
searchBtn.addEventListener('click', function(){
    var inputField = document.getElementById("search"); // Search input
    var searchInput = inputField.value.toLowerCase(); // Search Input to lowercase

    // Remove all children of cards
    var cards = document.getElementById("cards");
    while (cards.hasChildNodes()) {
        cards.removeChild(cards.lastChild);
    }

    // map new array based on search input
    var search = (userinput) => {
        return Object.keys(cardObject).filter(key => {
            return cardObject[key].name.toLowerCase().includes(userinput)
        })
            .map(foundKey => ({...cardObject[foundKey], key: foundKey }))
    };
    var searchResult = search(searchInput);

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
        cardCont.innerHTML += "<img src=" + searchResult[i].imageUrl + " width='100%'>"
        cardCont.innerHTML += "<a href='card-specific.html?id=" + searchResult[i].id + "' class='btn btn-success'>View More</a>"

        column4.appendChild(cardCont);
        document.getElementById('cards').appendChild(column4);
    }
    event.preventDefault();
})
