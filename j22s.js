// script.js

function lightCandle() {
    var candleImage = document.getElementById('candleImage');
    var candleContainer = document.getElementById('candleContainer');

    // Change the image source to the lit candle
    candleImage.src = "hb21.jpg";
    //document.write("You're officially legal! 🥳 May this year bring you tons of joy, exciting adventures, and all the success you deserve. Here's to making incredible memories and embracing the amazing journey ahead. Cheers to 21! 🎈🌟 Love you! 💖");

    // Disable further clicks on the container
    candleContainer.onclick = null;

    // After lighting the candle, go to the next page after a delay (adjust as needed)
    setTimeout(function () {
        window.location.href = "fam3.html"; // Replace "nextPage.html" with the actual filename of your next page
    }, 2000); // Delay of 2 seconds before navigating to the next page
}
