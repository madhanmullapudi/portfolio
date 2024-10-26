// Get a reference to the div element
const divElement = document.getElementById("logo");

// Add a click event listener
divElement.addEventListener("click", function() {
    // Define the URL you want to navigate to
    const targetUrl = "index.html"; // Replace with your desired URL

    // Navigate to the URL
    window.location.href = targetUrl;
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.one, .two, .three');
    hiddenElements.forEach((el) => observer.observe(el));
  });
  