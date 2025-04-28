function downloadFile() {
  location.href='Lynx.pdf';
}

function hamburg() {
  document.getElementById("dropdown").style.transform = "translateY(0)";
}
function cancel() {
  document.getElementById("dropdown").style.transform = "translateY(-500px)";
}

const dropdownLinks = document.querySelectorAll('.dropdown .links a');
const dropdown = document.getElementById('dropdown');

dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdown.style.transform = 'translateY(-500px)'; // Hides dropdown
    });
});



// Show the back-to-top button when scrolling down
window.onscroll = function () {
  let backToTopButton = document.getElementById("backToTop");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Function to scroll to the top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
