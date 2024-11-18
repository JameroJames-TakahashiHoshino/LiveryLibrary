function cancelForm() {
    document.querySelector('form').reset();
}
let popup = document.getElementById('popeye');

function openPopUp() {
    popup.classList.add("open-popeye");
}
function closePopUp() {
    popup.classList.remove("open-popeye");
}