document.addEventListener("DOMContentLoaded", function () {
    // Deteta se o ficheiro atual está dentro de um subdiretório (como /pages/)
    const isSubfolder = window.location.pathname.includes('/pages/');
    const basePath = isSubfolder ? '../' : './';

    // Carrega o Header
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        fetch(basePath + "components/header.html")
            .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar header");
                return response.text();
            })
            .then(data => {
                // Ajusta automaticamente os links do menu dependendo da página
                let correctedData = data;
                if (isSubfolder) {
                    // Corrige links que vão para o index ou para imagens a partir das subpáginas
                    correctedData = correctedData
                        .replace(/href="index.html"/g, 'href="../index.html"')
                        .replace(/src="images\//g, 'src="../images/');
                }
                headerContainer.innerHTML = correctedData;
            })
            .catch(error => console.error(error));
    }

    // Carrega o Footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        fetch(basePath + "components/footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar footer");
                return response.text();
            })
            .then(data => {
                let correctedData = data;
                if (isSubfolder) {
                    correctedData = correctedData
                        .replace(/href="index.html"/g, 'href="../index.html"')
                        .replace(/src="images\//g, 'src="../images/');
                }
                footerContainer.innerHTML = correctedData;
            })
            .catch(error => console.error(error));
    }
});
