document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    // Toggle navigation menu
    hamburger.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.classList.toggle('active'); // Toggle hamburger animation
        hamburger.setAttribute('aria-expanded', isOpen);

        // Prevent body scroll when the menu is open
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            closeMenu();
        }
    });

    // Smooth scrolling for anchor links and close the menu
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close the menu after clicking a link
                closeMenu();
            }
        });
    });

    // Accessibility: Make hamburger button focusable and keyboard-operable
    hamburger.setAttribute('tabindex', '0');
    hamburger.setAttribute('aria-controls', 'nav-links');
    hamburger.setAttribute('aria-expanded', 'false');

    hamburger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click(); // Trigger click event on Enter or Space key
        }
    });

    // Function to close the menu
    function closeMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = ''; // Re-enable body scroll
    }
});