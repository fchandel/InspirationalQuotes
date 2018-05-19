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

//call api by appending the script to our document. Bypasses cross-origin error
function loadQuote() {
    var s = document.createElement("script");
    s.src = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&_jsonp=saveQuotes";
    document.body.appendChild(s);
} 

//calls loadQuote() on page load
document.addEventListener("DOMContentLoaded", loadQuote());

//on hitting spacebar, call refreshQuote()
document.body.onkeyup = function(e){
    if(e.which == 32){
        refreshQuote();
    }
}


//On load, check if the device is mobile.
//hide the loading animation
//and show quote

window.onload = function() { 

	var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        //Conditional script here
        window.addEventListener('touchstart', function() {
  			refreshQuote();
  			document.getElementById("refreshLabel").style.display = "none";
		});
    } else {
		document.getElementById("refreshLabel").style.display = "block";
    }

    
	document.getElementById("loading").style.display = "none";
	document.getElementById("quote").className = "quote";

} 
