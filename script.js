// Save character sheet data
document.getElementById('save-sheet').addEventListener('click', () => {
    const formData = {
      name: document.getElementById('name').value,
      origin: document.getElementById('origin').value,
      archetype: document.getElementById('archetype').value,
      tendency: document.getElementById('tendency').value,
      technique: document.getElementById('technique').value,
      brutalRanks: document.querySelectorAll('#specialties .checkbox-row input:checked').length,
    };
  
    localStorage.setItem('characterSheet', JSON.stringify(formData));
    alert('Character sheet saved!');
  });
  
  // Theme toggle functionality
  const toggleThemeButton = document.getElementById('toggle-theme');
  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
  