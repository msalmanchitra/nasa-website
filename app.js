 const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const searchIcon = document.getElementById('searchIcon');
    const mobileSearchBar = document.getElementById('mobileSearchBar');
    const closeSearch = document.getElementById('closeSearch');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      mobileSearchBar.classList.remove('active');
    });

    searchIcon.addEventListener('click', () => {
      mobileSearchBar.classList.toggle('active');
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });

    closeSearch.addEventListener('click', () => {
      mobileSearchBar.classList.remove('active');
    });
  
