function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const modeToggle = document.getElementById('mode-toggle');
    const logo = document.getElementById('logo');

    // Pastikan light mode aktif saat pertama kali masuk
    body.classList.add('light-mode');
    header.classList.add('light-mode');
    if (footer) footer.classList.add('light-mode');
    modeToggle.textContent = "🌙Dark Mode";

    logo.src = "img/RafiLogoLight.png";
});

function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const modeToggle = document.getElementById('mode-toggle');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        header.classList.remove('light-mode');
        header.classList.add('dark-mode');
        if (footer) footer.classList.remove('light-mode');
        if (footer) footer.classList.add('dark-mode');
        modeToggle.textContent = '🌞Light Mode';

        logo.src = "img/RafiLogoDark.png";
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        header.classList.remove('dark-mode');
        header.classList.add('light-mode');
        if (footer) footer.classList.remove('dark-mode');
        if (footer) footer.classList.add('light-mode');
        modeToggle.textContent = '🌙Dark Mode';

        logo.src = "img/RafiLogoLight.png";
    }
}