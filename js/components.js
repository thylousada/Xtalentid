document.addEventListener("DOMContentLoaded", function () {


function loadComponent(id, file) {

fetch(file)

.then(response => response.text())

.then(data => {

document.getElementById(id).innerHTML = data;

})

.catch(error => {

console.log("Erro ao carregar componente:", error);

});

}


let isPages = window.location.pathname.includes("/pages/");


if (isPages) {


loadComponent(
"header",
"../components/header.html"
);


loadComponent(
"footer",
"../components/footer.html"
);



} else {


loadComponent(
"header",
"components/header.html"
);


loadComponent(
"footer",
"components/footer.html"
);



}


});
