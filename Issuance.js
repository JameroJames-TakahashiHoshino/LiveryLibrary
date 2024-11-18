function cancelForm() {
    document.querySelector('form').reset();
}
let popup = document.getElementById('popup');

function openPopUp() {
    popup.classList.add("open-popup");
}
function closePopUp() {
    popup.classList.remove("open-popup");
}