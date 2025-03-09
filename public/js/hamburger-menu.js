document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector("#toggle"); // mobile menu toggle
    const menu = document.querySelector("#menu"); // mobile menu container
    const menuItems = document.querySelectorAll("#menu li a"); // menu links
    const dropdowns = document.querySelectorAll(".dropdown > .nav-link"); // dropdown parent links
    const buttons = document.querySelector(".nav-buttons"); // theme buttons
    const body = document.body;

    // move buttons inside the menu on mobile
    function moveButtons() {
        if (window.innerWidth <= 768) {
            if (!menu.contains(buttons)) {
                menu.appendChild(buttons);
            }
        } else {
            const navRight = document.querySelector(".nav-right");
            if (!navRight.contains(buttons)) {
                navRight.appendChild(buttons);
            }
        }
    }

    // run on page load and on resize
    moveButtons();
    window.addEventListener("resize", moveButtons);

    // toggle mobile menu
    toggle.addEventListener("click", function () {
        const isActive = menu.classList.contains("is-active");

        menu.classList.toggle("is-active");
        body.classList.toggle("nav-open");
        this.setAttribute("aria-expanded", String(!isActive));
    });

    // dropdown toggle
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault();

            const parent = this.parentElement;
            const chevron = this.querySelector(".fa-chevron-down");

            parent.classList.toggle("open");

            // rotate chevron (only if it exists)
            if (chevron) {
                chevron.style.transform = parent.classList.contains("open") ? "rotate(180deg)" : "rotate(0deg)";
            }

            // close other open dropdowns
            document.querySelectorAll(".dropdown").forEach(item => {
                if (item !== parent) {
                    item.classList.remove("open");
                    const otherChevron = item.querySelector(".fa-chevron-down");
                    if (otherChevron) otherChevron.style.transform = "rotate(0deg)";
                }
            });
        });
    });

    // close menu & dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) {
            menu.classList.remove("is-active");
            body.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");

            // Close dropdowns & reset chevrons
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("open");
                const chevron = dropdown.querySelector(".fa-chevron-down");
                if (chevron) chevron.style.transform = "rotate(0deg)";
            });
        }
    });

    // close menu & dropdowns with escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            menu.classList.remove("is-active");
            body.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();

            // close all dropdowns & reset chevrons
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("open");
                const chevron = dropdown.querySelector(".fa-chevron-down");
                if (chevron) chevron.style.transform = "rotate(0deg)";
            });
        }
    });

    // ensure dropdowns close when navigating with the keyboard
    menuItems.forEach(item => {
        item.addEventListener("keydown", function (event) {
            if (event.key === "Tab") {
                // close dropdowns if tabbing away
                document.querySelectorAll(".dropdown").forEach(dropdown => dropdown.classList.remove("open"));
            }
        });
    });
});
