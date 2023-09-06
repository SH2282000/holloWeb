export function windowContactAction() {
    const contactWindowButton = document.getElementById(`contact-btn`);
    const arrowContact = document.getElementById(`arrow-contact`);
    const contactWindow = document.getElementById(`contact-window`);

    // add click event to dropdown button
    contactWindowButton.addEventListener("click", () => {
        arrowContact.classList.toggle("arrow-rotate");
        contactWindow.classList.toggle("show");
    });
}