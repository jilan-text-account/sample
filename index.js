const searchButton = document.getElementById('search-button');
const cards = document.querySelectorAll('.card');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');

const scrollToSection1Button = document.getElementById('scroll-to-section1');
const scrollToSection2Button = document.getElementById('scroll-to-section2');
const scrollToTextButton = document.getElementById('scroll-to-text');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const targetText = document.getElementById('target-text');
  
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    let resultsFound = false;
  
    cards.forEach(card => {
      const keywords = card.dataset.keywords.toLowerCase();
      card.classList.remove('highlighted'); // Remove previous highlights
      if (keywords.includes(searchTerm)) {
      card.classList.add('highlighted');
      resultsFound = true;
    }
  });

  // Show/hide "no results" message
  noResults.style.display = resultsFound ? 'none' : 'block';
});

// Optional: Highlight on Enter key press
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});
  
    scrollToSection1Button.addEventListener('click', () => {
      section1.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    });
  
    scrollToSection2Button.addEventListener('click', () => {
      section2.scrollIntoView({ behavior: 'smooth' });
    });
  
    scrollToTextButton.addEventListener('click', () => {
      targetText.scrollIntoView({ behavior: 'smooth' });
    });
