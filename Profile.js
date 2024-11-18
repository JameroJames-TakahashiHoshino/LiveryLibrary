document.getElementById('profile-image-input').addEventListener('change', function() {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        document.querySelector('.profile-image').src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const editProfileButton = document.getElementById('edit-profile-button');
    const cancelEditButton = document.getElementById('cancel-edit-button');
    const profileView = document.querySelectorAll('#profile-view');
    const editProfileView = document.getElementById('edit-profile-view');

    editProfileButton.addEventListener('click', () => {
        profileView.forEach(view => view.style.display = 'none');
        editProfileView.style.display = 'flex';
    });

    cancelEditButton.addEventListener('click', () => {
        profileView.forEach(view => view.style.display = 'block');
        editProfileView.style.display = 'flex';
    });
});
