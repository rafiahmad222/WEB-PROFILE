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

// EmailJS
emailjs.init("wJ33Y7Hkm25p7L3tt");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Ambil data dari formulir
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });

    // Kirim data ke EmailJS
    emailjs.send("service_rafi222", "template_rafi", {
        name: name,
        email: email,
        message: message,
        time: currentTime,

    }).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);

            // Tampilkan pesan sukses
            const responseDiv = document.getElementById("form-response");
            responseDiv.style.display = "block";
            responseDiv.textContent = "Your message has been sent successfully!";

            // Reset formulir
            document.getElementById("contact-form").reset();

            // Sembunyikan pesan sukses setelah beberapa detik
            setTimeout(() => {
                responseDiv.style.display = "none";
            }, 5000);
        },
        function (error) {
            console.log("FAILED...", error);

            // Tampilkan pesan error
            const responseDiv = document.getElementById("form-response");
            responseDiv.style.display = "block";
            responseDiv.style.color = "red";
            responseDiv.textContent = "Failed to send message. Please try again later.";
        }
    );
});