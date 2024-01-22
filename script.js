// Array of image URLs to display when the "No" button is clicked
const images = [
  'picture/cat1.jpg',
  'picture/cat2.gif',
  'picture/cat3.gif',
  'picture/cat4.jpg',
  
  // Add more image URLs as needed
];

let currentIndex = 0;

function showImage(buttonType) {
    const hiddenImage = document.getElementById('hiddenImage');
    
    if (buttonType === 'yes') {
        // Display an image for the "Yes" button
        hiddenImage.src = 'picture/cathappy.jpg';  // Replace with your image URL
    } else {
        // Display an image for the "No" button
        hiddenImage.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    hiddenImage.style.display = 'block';
}