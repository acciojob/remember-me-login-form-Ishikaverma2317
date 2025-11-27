const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// show existing user button if credentials stored
function checkExistingUser() {
  const u = localStorage.getItem("username");
  const p = localStorage.getItem("password");

  if (u && p) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}
checkExistingUser();

// submit handler
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

// login as existing user
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});
