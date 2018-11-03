// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

// combine link and id
var idLink = "https://api.magicthegathering.io/v1/cards/" + id;

// fetch specific card from JSON
fetch(idLink)
    .then(result => result.json())
    .then((res) => {
        createCard(res);
    })
    .catch(err => console.log(err));

// display card
function createCard(result) {
    var cardImage = document.getElementById('cardImage');
    var cardDetails = document.getElementById('cardDetails');

    if (result.card === undefined) { // display error on invalid URL
        cardDetails.innerHTML += "<h2>Invalid Card URL</h2>";
    } else { // if valid URL display card and info
        cardImage.innerHTML += "<img src=" + result.card.imageUrl + " width='100%'>";
        cardDetails.innerHTML += "<h2>" + result.card.name + "</h2>";
        cardDetails.innerHTML += "<div><b>About:  </b>" + result.card.text + "</div>";
        cardDetails.innerHTML += "<div><b>Rarity: </b>" + result.card.rarity + "</div>";
        cardDetails.innerHTML += "<div><b>Color: </b>" + result.card.colors + "</div>";
    }
}
