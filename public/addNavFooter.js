// asynchronously add nav and footer into page
// page needs tags with id of nav and footer respectively
navTarget = document.getElementById("nav");
footerTarget = document.getElementById("footer");

const loadComponent = (filepath) => {
    return fetch(filepath).then((res) => {
        if (res.ok) {
            return res.text();
        }
        throw new Error("Network response was not ok");
    });
};

Promise.all([
    loadComponent("./components/navbar.html"),
    loadComponent("./components/footer.html"),
])
    .then(([navHtml, footerHtml]) => {
        navTarget.innerHTML = navHtml;
        footerTarget.innerHTML = footerHtml;
    })
    .catch((error) => {
        console.error("Error loading components:", error);
    });
