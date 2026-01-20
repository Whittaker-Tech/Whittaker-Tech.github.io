document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-nav-link");

            // 1. Update Active Link
            navLinks.forEach((nav) => nav.classList.remove("active"));
            this.classList.add("active");

            // 2. Update Active Page
            pages.forEach((page) => {
                if (page.getAttribute("data-page") === targetPage) {
                    page.classList.add("active");
                } else {
                    page.classList.remove("active");
                }
            });
        });
    });
});