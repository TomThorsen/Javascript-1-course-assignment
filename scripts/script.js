// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

var searchClicked = false;


fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then((res) => {
        createCard(res);
    })
    .catch(err => console.log(err));

function createCard(result) {
    console.log(result);
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



var searchBtn = document.getElementById('searchButton');
searchBtn.addEventListener('click', function(e){
    searchClicked = true;
    var cards = document.getElementById("cards");
    cards.remove();
})
