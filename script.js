const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const wordElement = document.querySelector(".word");
    const words = ["DATA", "ANGKA", "INFORMASI", "STATISTIK"]; // Kata-kata untuk animasi
    let currentWordIndex = 0;

    function changeWord() {
        // Tambahkan efek flip
        wordElement.classList.add("flip-up");

        setTimeout(() => {
            // Ganti teks setelah animasi keluar
            currentWordIndex = (currentWordIndex + 1) % words.length;
            wordElement.textContent = words[currentWordIndex];
            wordElement.classList.remove("flip-up");
        }, 500); // Durasi animasi keluar
    }

    setInterval(changeWord, 1500); // Ganti kata setiap 2 detik
});

































//BAGIAN DARI INDEX SATU JANGAN DIHAPUSS!!!!
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener("load", function () {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
});
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});





