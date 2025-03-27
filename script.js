function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.innerWidth <= 768) { 
        if (window.scrollY > lastScrollY) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const modeToggle = document.getElementById('mode-toggle');
    const logo = document.getElementById('logo');

    // light mode aktif saat pertama kali masuk
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

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("wJ33Y7Hkm25p7L3tt"); 

    const popup = document.getElementById("status-popup");
    const statusMessage = document.getElementById("status-message");
    const closePopup = document.getElementById("close-popup");

    function showPopup(message, isSuccess) {
        statusMessage.textContent = message;
        statusMessage.style.color = isSuccess ? "green" : "red";
        popup.classList.remove("hidden");
    }

    closePopup.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let currentTime = new Date().toLocaleString();
        document.getElementById("time").value = currentTime;

        emailjs.sendForm("service_rafi222", "template_rafi", this)
            .then(function () {
                showPopup("Pesan berhasil dikirim!", true);
                document.getElementById("contact-form").reset();
            }, function (error) {
                showPopup("Gagal mengirim pesan! Silakan coba lagi.", false);
                console.error("Error:", error);
            });
    });
});
