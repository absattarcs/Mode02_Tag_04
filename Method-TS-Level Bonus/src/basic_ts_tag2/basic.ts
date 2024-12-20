
const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
const searchBox = document.getElementById('searchBox') as HTMLInputElement;
const result = document.getElementById('result') as HTMLParagraphElement;
const textElement = document.getElementById('text') as HTMLParagraphElement;

searchButton.addEventListener('click', () => {
  const searchTerm = searchBox.value.trim();
  if (!searchTerm) {
    result.textContent = 'Please enter a valid word to search.';
    return;
  }

  const originalText = textElement.innerText;
  const regex = new RegExp(`(${searchTerm})`, 'gi'); // Case-insensitive match for the word
  const occurrences = (originalText.match(regex) || []).length;

  if (occurrences > 0) {
    // Highlight the word in the text
    const highlightedText = originalText.replace(regex, `<span class="highlight">$1</span>`);
    textElement.innerHTML = highlightedText;
    result.textContent = `The word "${searchTerm}" appears ${occurrences} time(s) in the text.`;
  } else {
    result.textContent = `The word "${searchTerm}" was not found in the text.`;
  }
});
