document.addEventListener("DOMContentLoaded", function () {
    // Deteta a raiz do projeto para carregar os componentes
    const isSubfolder = window.location.pathname.includes('/pages/');
    const basePath = isSubfolder ? '../' : './';

    // Carregar Header
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        fetch(basePath + "components/header.html")
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
            })
            .catch(err => console.error("Erro ao carregar header:", err));
    }

    // Carregar Footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        fetch(basePath + "components/footer.html")
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(err => console.error("Erro ao carregar footer:", err));
    }
});
