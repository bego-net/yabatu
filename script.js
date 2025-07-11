document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for registering with us!");
    this.reset();
  });
  
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }
  