
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const readMoreButton = document.getElementById("read-more-button");
    const trajectoryText = document.getElementById("trajectory-text");
    const currentYear = document.getElementById("current-year");

    // Ano automático no rodapé
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Abrir e fechar menu mobile
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");

            mobileMenu.classList.toggle("is-open", !isOpen);

            const menuIcon = menuToggle.querySelector("ion-icon");

            if (menuIcon) {
                menuIcon.setAttribute("name", isOpen ? "menu-outline" : "close-outline");
            }
        });

        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");

                const menuIcon = menuToggle.querySelector("ion-icon");

                if (menuIcon) {
                    menuIcon.setAttribute("name", "menu-outline");
                }
            });
        });
    }

    // Botão Ler mais / Ler menos
    if (readMoreButton && trajectoryText) {
        readMoreButton.addEventListener("click", function () {
            const isExpanded = readMoreButton.getAttribute("aria-expanded") === "true";

            readMoreButton.setAttribute("aria-expanded", String(!isExpanded));
            trajectoryText.classList.toggle("is-expanded", !isExpanded);

            readMoreButton.innerHTML = isExpanded
                ? 'Ler mais <ion-icon name="chevron-down-outline"></ion-icon>'
                : 'Ler menos <ion-icon name="chevron-up-outline"></ion-icon>';
        });
    }
});
