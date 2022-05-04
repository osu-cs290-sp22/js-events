var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  console.log("== handleNewWordsEntered() called")
  var text = event.currentTarget.value;
  console.log("  - text:", text)
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  console.log("  - allWords:", allWords)
  currentWord = 0;
}

var wordsInput = document.getElementById('words-input')
// wordsInput.addEventListener('input', handleNewWordsEntered)
wordsInput.addEventListener('change', handleNewWordsEntered)

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}

function computeHighlight() {
  var everyNthSelect = document.getElementById('every-nth-select')
  var n = parseInt(everyNthSelect.value)
  if ((currentWord + 1) % n === 0) {
    var selectedButton = document.querySelector('input[name="highlight-color"]:checked')
    console.log("== selectedButton:", selectedButton)
    return selectedButton.value
  } else {
    return false
  }
}

function handleButtonClick(event) {
  console.log("== A button was clicked")
  var word = allWords[currentWord]
  console.log("  - word:", word)
  if (word) {
    var highlight = computeHighlight()
    var wordElem = generateWordElem(word, highlight)
    console.log("  - wordElem:", wordElem)

    var container = event.currentTarget.parentNode.parentNode
    var wordsContainer = container.querySelector('.words-container')
    wordsContainer.appendChild(wordElem)

    currentWord = (currentWord + 1) % allWords.length
  }
}

var buttons = document.getElementsByClassName('add-word-button')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleButtonClick)
}
