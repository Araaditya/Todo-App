document.getElementById('theme-toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-theme', this.checked);
    let icon = document.getElementById('slider-icon');
    
    if (this.checked) {
        icon.textContent = "🌞"; 
        icon.style.left = "8px"; 
        icon.style.right = "auto";
    } else {
        icon.textContent = "🌙"; 
        icon.style.right = "8px";
        icon.style.left = "auto";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".status-radio").forEach(radio => {
        radio.addEventListener("change", function () {
            let row = this.closest("tr");
            row.classList.toggle("completed");
        });
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
        });
    });

    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", function () {
            let taskText = this.parentElement.parentElement.querySelector("td:first-child");
            let newTask = prompt("Edit your task:", taskText.innerText);
            if (newTask !== null) taskText.innerText = newTask;
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    const themeToggle = document.getElementById("theme-toggle");
    const icon = document.getElementById("slider-icon");

    // Apply saved theme without transition flicker
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.checked = true;
        icon.textContent = "🌞";
    } else {
        document.body.classList.remove("dark-theme");
        themeToggle.checked = false;
        icon.textContent = "🌙";
    }

    // Theme toggle event listener with localStorage
    themeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-theme", this.checked);
        localStorage.setItem("theme", this.checked ? "dark" : "light");
        icon.textContent = this.checked ? "🌞" : "🌙";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".status-radio").forEach(radio => {
        radio.addEventListener("change", function () {
            let row = this.closest("tr");
            row.classList.toggle("completed");
        });
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
        });
    });

    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", function () {
            let taskText = this.parentElement.parentElement.querySelector("td:first-child");
            let newTask = prompt("Edit your task:", taskText.innerText);
            if (newTask !== null) taskText.innerText = newTask;
        });
    });
});