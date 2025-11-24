const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");

// Check stored credentials on page load
window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }
};

// Submit Form
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
    // Remove credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existingBtn.style.display = "none";
  }
});

// Login as existing user
existingBtn.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
