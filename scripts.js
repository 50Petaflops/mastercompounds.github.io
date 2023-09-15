let images = [
    { src: 'body-bg-1.jpg', description: 'Description for image 1' },
    { src: 'body-bg-2.jpg', description: 'Description for image 1' },
    { src: 'body-bg-3.jpg', description: 'Description for image 1' },
    { src: 'body-bg-4.jpg', description: 'Description for image 1' },
    { src: 'body-bg-5.jpg', description: 'Description for image 1' },
    { src: 'body-bg-6.jpg', description: 'Description for image 1' },
    { src: 'body-bg-7.jpg', description: 'Description for image 1' },
    { src: 'body-bg-8.jpg', description: 'Description for image 1' },
    { src: 'body-bg-9.jpg', description: 'Description for image 1' },
    { src: 'body-bg-10.jpg', description: 'Description for image 1' },
    { src: 'body-bg-11.jpg', description: 'Description for image 1' },
    // Add more images as needed
];
let currentImageIndex = 0;

function changeImage() {
    let imageContainer = document.querySelector('.cont-3-1');
    imageContainer.style.backgroundImage = `url(${images[currentImageIndex].src})`;
    // Add a div or other element for the description if needed
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 10000); // Change every 5 seconds


