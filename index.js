//live exercise
// var textareaTag = document.querySelector("textarea");
// var btn = document.queySelector(".btn-primary")
// var inputBtn = document.queySelector("#input-btn");
// var inputTranslator = document.querySelector("input[name='translator']");

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputBox = document.querySelector("#translate-output");

// var serverURL = "https://api.funtranslations.com/translate/minion.json";

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslateURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with the server! try again after some time");
}

function clickHandler() {
  var inputText = txtInput.value;
  var URL = getTranslateURL(inputText.value);

  fetch(URL)
    .then((response) => response.json())
    .then((json) => (outputBox.innerText = json.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
