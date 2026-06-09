document.addEventListener("DOMContentLoaded", () => {

    // Typing Effect
    const text = "Web Developer | Freelance Developer";
    const typingElement = document.getElementById("typing");

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }

    typeWriter();

    // Dark Mode Toggle
    const toggleBtn = document.getElementById("themeToggle");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const icon = toggleBtn.querySelector("i");

        if(document.body.classList.contains("dark-mode")){
            icon.classList.remove("bi-moon");
            icon.classList.add("bi-sun");
        }else{
            icon.classList.remove("bi-sun");
            icon.classList.add("bi-moon");
        }
    });

    // Fade Animation
    const cards = document.querySelectorAll(".fade-card");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });

    });

    cards.forEach(card => observer.observe(card));

});


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.remove("bi-moon");
    icon.classList.add("bi-sun");
}

// Toggle theme
toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");
    } else {
        localStorage.setItem("theme", "light");
        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");
    }
});

document.getElementById('toggleTechStack').addEventListener('click', function(e) {
    e.preventDefault();

    const techStacks = document.getElementById('moreTechStacks');

    if (techStacks.style.display === 'none') {
        techStacks.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        techStacks.style.display = 'none';
        this.textContent = 'View All';
    }
});
