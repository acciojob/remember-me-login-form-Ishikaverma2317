const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Show existing user button if data saved
function checkExistingUser() {
  const user = localStorage.getItem("username");
  const pass = localStorage.getItem("password");

  if (user && pass) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}
checkExistingUser();

// Submit handler
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkExistingUser();
});

// Existing user login
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});
