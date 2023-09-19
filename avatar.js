const thumbnails = document.querySelectorAll('.thumbnail');
const magnifiedImage = document.getElementById('magnifiedImage');
const magnifiedImageContainer = document.querySelector('.magnified-image-container');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const imgSrc = thumbnail.getAttribute('data-src');
        magnifiedImage.setAttribute('src', imgSrc);
        magnifiedImageContainer.style.display = 'block';
    });
});

magnifiedImageContainer.addEventListener('click', () => {
    magnifiedImageContainer.style.display = 'none';
});
