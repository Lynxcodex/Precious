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
