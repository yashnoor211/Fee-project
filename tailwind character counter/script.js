const inputField = document.getElementById('inputField');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const numberCount = document.getElementById('numberCount');
const spaceCount = document.getElementById('spaceCount'); // Added spaceCount element
const countButton = document.getElementById('countButton');

countButton.addEventListener('click', function() {
  const text = inputField.value;
  const charLength = text.replace(/\s/g, '').length;
  const wordArray = text.trim().split(/\s+/).filter(word => word !== '');
  const wordLength = wordArray.length;
  const numbers = text.match(/\d+/g);
  const numberLength = numbers ? numbers.length : 0;
  
  const spaceLength = text.split(" ").length - 1; // Counting the number of spaces

  charCount.textContent = `${charLength} characters`;
  wordCount.textContent = `${wordLength} words`;
  numberCount.textContent = `${numberLength} numbers`;
  spaceCount.textContent = `${spaceLength} spaces`; // Displaying the count of spaces
});
