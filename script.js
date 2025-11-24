// Check if saved credentials exist on page load
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  const existingBtn = document.getElementById("existing");

  if (savedUsername && savedPassword) {
    // Show existing user login button
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }

  // Existing user login button click
  existingBtn.addEventListener("click", function () {
    alert(`Logged in as ${savedUsername}`);
  });
};

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save credentials
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      existingBtn.style.display = "block";
    } else {
      // Remove saved credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");

      existingBtn.style.display = "none";
    }
  });
});
