var quoteArray;

//set new quote
function refreshQuote() {
	var post = quoteArray.shift();
	console.log(quoteArray);
	document.getElementById("quoteBody").innerHTML = post.content;
	document.getElementById("quoteAuthor").innerHTML = post.title;
}

//save the quote objects we receive from api call to a global array to use.
//.shift() is similar to pop()

function saveQuotes(quoteObj) {
	quoteArray = quoteObj;
	var post = quoteArray.shift();
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

		window.addEventListener("touchstart", tapHandler);
		//event.preventDefault();
		var tapedTwice = false;

		function tapHandler(event) {
			event.preventDefault();
    		if(!tapedTwice) {
        	tapedTwice = true;
        	setTimeout( function() { tapedTwice = false; }, 300 );
        		return false;
    		}
    		event.preventDefault();

    		//action on double tap goes below
    		refreshQuote();
 		}

   	 } else {
		document.getElementById("refreshLabel").style.display = "block";
    	}


	document.getElementById("loading").style.display = "none";
	document.getElementById("quote").className = "quote";

} 

