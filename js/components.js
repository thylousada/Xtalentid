document.addEventListener("DOMContentLoaded", function () {
    const isSubfolder = window.location.pathname.includes('/pages/');
    const basePath = isSubfolder ? '../' : './';

    // Carregar Header
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        fetch(basePath + "components/header.html")
            .then(response => response.text())
            .then(data => {
                let html = data;
                if (isSubfolder) {
                    // Ajusta caminhos para quando estás numa subpágina dentro de /pages/
                    html = html
                        .replace(/href="index\.html"/g, 'href="../index.html"')
                        .replace(/href="pages\//g, 'href="../pages/')
                        .replace(/src="images\//g, 'src="../images/');
                }
                headerContainer.innerHTML = html;
            })
            .catch(err => console.error("Erro ao carregar header:", err));
    }

    // Carregar Footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        fetch(basePath + "components/footer.html")
            .then(response => response.text())
            .then(data => {
                let html = data;
                if (isSubfolder) {
                    html = html
                        .replace(/href="index\.html"/g, 'href="../index.html"')
                        .replace(/href="pages\//g, 'href="../pages/')
                        .replace(/src="images\//g, 'src="../images/');
                }
                footerContainer.innerHTML = html;
            })
            .catch(err => console.error("Erro ao carregar footer:", err));
    }
});
