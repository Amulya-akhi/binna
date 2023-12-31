document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.slideshow img');
    let currentImage = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    }

    // Set an interval to switch to the next image every 3 seconds (adjust as needed)
    const slideshowInterval = setInterval(nextImage, 500);

    // Initial display of the first image
    showImage(currentImage);

    // After slideshow, return to the first page after 9 seconds (adjust as needed)
    setTimeout(function () {
        clearInterval(slideshowInterval); // Stop the slideshow
        window.location.href = "index.html"; // Replace "firstPage.html" with the actual filename of your first page
    }, 45000);
});
