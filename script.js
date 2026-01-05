document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Dynamic Year
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Dynamic Media Upload (Gallery)
    const uploadInput = document.getElementById('mediaUpload');
    if (uploadInput) {
        uploadInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;

            const url = URL.createObjectURL(file);
            const galleryGrid = document.querySelector('.gallery-grid');
            const newItem = document.createElement('div');
            newItem.className = 'gallery-item';

            if (file.type.startsWith('video/')) {
                newItem.innerHTML = `
                    <video src="${url}" autoplay muted loop playsinline></video>
                    <div class="gallery-overlay">
                        <h3>${file.name}</h3>
                    </div>
                `;
            } else {
                newItem.innerHTML = `
                    <img src="${url}" alt="User Upload">
                    <div class="gallery-overlay">
                        <h3>${file.name}</h3>
                    </div>
                `;
            }

            // Add to beginning of grid
            galleryGrid.insertBefore(newItem, galleryGrid.firstChild);
        });
    }

    // Scroll Animation (Simple Link Handler)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission (Mock)
    // Form Submission (REAL)
    // The form now uses Formsubmit.co, so we don't need to prevent default behavior.
    // We can just add a simple visual feedback if needed, but standard browser submission is safest.

});
