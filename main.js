var createScript = function(url) {
  var script = document.createElement('script');
  script.src = url;

  document.body.appendChild(script);
}
var getRandomEntry = function() {
  var random = document.getElementById("random");

  random.href="https://en.wikipedia.org/wiki/Special:Random";
}

var searchEntry = function() {
  alert("Search Entry");
}
