 const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        hamburgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('.nav-link, .live-container-mobile');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });
           // const searchBtn = document.getElementById('searchBtn');
//const searchBox = document.getElementById('searchBox');

//searchBtn.addEventListener('click', function() {
   // searchBox.classList.toggle('active');
//});
        });