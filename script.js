var quoteArray;

function refreshQuote() {
	var post = quoteArray.shift();
	console.log(quoteArray);
	document.getElementById("quoteBody").innerHTML = post.content;
	document.getElementById("quoteAuthor").innerHTML = post.title;
}

function saveQuotes(quoteObj) {
	quoteArray = quoteObj;
	var post = quoteArray.shift();
	console.log(post.content);
	document.getElementById("quoteBody").innerHTML = post.content;
	document.getElementById("quoteAuthor").innerHTML = post.title;
}

function loadQuote() {
    var s = document.createElement("script");
    s.src = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&_jsonp=saveQuotes";
    document.body.appendChild(s);
} 

document.addEventListener("DOMContentLoaded", loadQuote());
document.body.onkeyup = function(e){
    if(e.which == 32){
        refreshQuote();
    }
}
window.onload = function() { 
	document.getElementById("loading").style.display = "none";
	document.getElementById("refreshLabel").style.display = "block";
	document.getElementById("quote").className = "quote";

} 
