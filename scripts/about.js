// refer to question 3 before development starts for scope document


// Get element and innerHTML content
var aboutText = document.getElementById('aboutText');
    aboutTextContent = aboutText.innerHTML;
// Replace word Magic with Something
var replacedAboutText = aboutTextContent.replace(/Magic/g,"Something");
    aboutText.innerHTML = "";
    aboutText.innerHTML += replacedAboutText;

// moreInfoTrigger toggle for changing between display block and none
var infoTrigger = document.getElementById('moreInfoTrigger');
infoTrigger.addEventListener('click', function(){
    var infoContent = document.getElementById('moreInfoContent');
    if (infoContent.style.display === "block") {
        infoContent.style.display = "none";
    } else {
        infoContent.style.display = "block";
    }
});