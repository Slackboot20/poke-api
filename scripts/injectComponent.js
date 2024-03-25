document.addEventListener("DOMContentLoaded", function() {
    // Declare an asynchronous function
    async function injectComponents() {
        // Fetch and inject the header
        const headerResponse = await fetch("./components/header.html");
        const headerData = await headerResponse.text();
        document.querySelector(".page-wrapper").insertAdjacentHTML("afterbegin", headerData);

        // Fetch and inject the footer
        const footerResponse = await fetch("./components/footer.html");
        const footerData = await footerResponse.text();
        document.querySelector(".page-wrapper").insertAdjacentHTML("beforeend", footerData);
    }
    
    // Call the asynchronous function
    injectComponents();
});

