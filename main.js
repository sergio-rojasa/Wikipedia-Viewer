document.getElementById("search").addEventListener('keypress', function(event){
  if(event.keyCode === 13) {
    getEntry();
  }
});
var createScript = function(url) {
    var script = document.createElement('script');
    script.src = url

    document.body.appendChild(script);
};
var createLink = function(page) {
    var a = document.createElement("a");
    var baseUrl = "https://en.wikipedia.org/wiki/index.html?curid=";
    var url = baseUrl + page;
    var searchResult = document.getElementById("searchResult");

    a.href = url;
    a.setAttribute("target", "blank");
    a.setAttribute("id", page);

    searchResult.appendChild(a);
}
var getRandomEntry = function() {
  var random = document.getElementById("random");

  random.href="https://en.wikipedia.org/wiki/Special:Random";
}
var getEntry = function() {
    var searchEntry = document.getElementById("search");
    var baseUrl = 'https://en.wikipedia.org/w/api.php?';
    var url = baseUrl+"action=query&generator=search&gsrsearch="+searchEntry.value+"&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=parseEntry&format=json";

    createScript(url);
};


var parseEntry = function(data) {
    var pages = data.query.pages;
    var searchResult = document.getElementById("searchResult");

    if(searchResult) {
       while(searchResult.firstChild) {
           searchResult.removeChild(searchResult.firstChild);
       }
    }
    for(var page in pages) {
        createLink(pages[page].pageid);
        var link = document.getElementById(pages[page].pageid);
        link.innerHTML =  "<div>"+"<h2>"+pages[page].title+"</h2>"
                         +"<p>"+pages[page].extract+"</p>"+"</div>";
    }
};

