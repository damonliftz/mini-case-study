/* ============================================================
   LOGIN FORM IMPLEMENTATION
   Handles: Validation, Authentication, Modal Management, Sidebar Toggle
   ============================================================ */

// ----------- LOGIN VALIDATION & AUTHENTICATION -----------
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorModal = document.getElementById("errorModal");
  const closeModalBtn = document.getElementById("closeModal");

  // Hardcoded credentials for basic authentication (replace with backend later)
  const validCredentials = {
    username: "admin",
    password: "1234"
  };

  // Prevent default submission & validate credentials
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (usernme === validUsername && password === validPassword) {
      window.location.href = "index.html";
    } else {

      modal.style.display = "block";
    }
  });
  function hideModal(){
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

  // Close modal when clicking "X" button
  closeModalBtn.addEventListener("click", hideModal);

  // Optional: Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === errorModal) {
      hideModal();
    }
  });

  // ----------- SIDEBAR TOGGLE FUNCTIONALITY -----------
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const navLinks = document.querySelectorAll(".nav-link");

  let sidebarOpen = false;

  toggleBtn.addEventListener("click", () => {
    sidebarOpen = !sidebarOpen;

    if (sidebarOpen) {
      // Expand sidebar
      sidebar.style.width = "272px";
      toggleBtn.style.transform = "rotate(90deg)";

      // Fade in links
      navLinks.forEach((link) => {
        link.style.opacity = "1";
        link.style.transition = "opacity 0.3s ease-in-out";
      });
    } else {
      // Collapse sidebar
      sidebar.style.width = "50px";
      toggleBtn.style.transform = "rotate(0deg)";

      // Fade out links
      navLinks.forEach((link) => {
        link.style.opacity = "0";
        link.style.transition = "opacity 0.3s ease-in-out";
      });
    }
  });
});