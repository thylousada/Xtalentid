document.addEventListener("DOMContentLoaded", () => {

    const isPages = window.location.pathname.includes("/pages/");
    const base = isPages ? "../" : "";

    function loadComponent(id, file) {
        fetch(file)
            .then(r => r.text())
            .then(html => {
                html = html.replace(/\.\.\//g, base);
                document.getElementById(id).innerHTML = html;
            })
            .catch(err => console.error(err));
    }

    loadComponent("header", base + "components/header.html");
    loadComponent("footer", base + "components/footer.html");

});
