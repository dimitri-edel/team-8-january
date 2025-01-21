// Function to load the Navbar
function loadNavbar() {
    const currentPage = window.location.pathname.split("/").pop();

    const navbarHtml = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo-img.png" id="logo" alt="Logo" class="logo-img" style="width: 100px;">
                </a>
                <button class="navbar-toggler" tabindex="0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "index.html" ? "active" : ""}" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "post-generator.html" ? "active" : ""}" href="post-generator.html">Post Generator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "learn-more.html" ? "active" : ""}" href="learn-more.html">Learn More</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "resources.html" ? "active" : ""}" href="resources.html">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "about.html" ? "active" : ""}" href="about.html">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    document.getElementById("navbar-placeholder").insertAdjacentHTML("afterbegin", navbarHtml);
}

// Function to load the Footer
function loadFooter() {
    const footerHtml = `
            <footer class="footer text-white py-5" style="background-color: #2c3e50;">
            <div class="container">
                <div class="row">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/" class="text-white me-3"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://x.com/" class="text-white me-3"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/" class="text-white me-3"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/" class="text-white me-3"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <p>&copy; 2025 Spot Trafficking, Stop Trafficking. All rights reserved.</p>
            </div>
        </footer>
    `;
    document.getElementById("footer-placeholder").insertAdjacentHTML("beforeend", footerHtml);
}

document.addEventListener("DOMContentLoaded", function () {
    loadNavbar();
    loadFooter();
});

// Close the navbar when clicking outside
document.addEventListener("click", function (event) {
    const navbarCollapse = document.querySelector("#navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");

    const isNavbarOpen = navbarCollapse.classList.contains("show");

    if (
        isNavbarOpen &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true,
        });
        bsCollapse.hide();
    }
});
