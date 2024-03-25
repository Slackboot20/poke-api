document.addEventListener("DOMContentLoaded", async function() {
    const pageWrapper = document.querySelector(".page-wrapper");

    if (!pageWrapper) {
        console.error("No .page-wrapper element found in the document.");
        return;
    }

    try {
        // Fetch and inject the header
        const headerResponse = await fetch("../components/header.html");
        const headerData = await headerResponse.text();
        pageWrapper.insertAdjacentHTML("afterbegin", headerData);
        console.log("Inserting header", headerData);
    
        // Fetch and inject the footer
        const footerResponse = await fetch("../components/footer.html");
        const footerData = await footerResponse.text();
        pageWrapper.insertAdjacentHTML("beforeend", footerData);
                console.log("Inserting footer", footerData);
    } catch (error) {
        console.error("Error while injecting components:", error);
    }
    
});
