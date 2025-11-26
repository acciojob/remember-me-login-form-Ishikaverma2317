const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// ✅ Check localStorage on load
window.onload = () => {
  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (storedUser && storedPass) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
};

// ✅ Submit Handler
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

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

  window.onload();
});

// ✅ Existing User Login
existingBtn.addEventListener("click", () => {
  const storedUser = localStorage.getItem("username");
  alert(`Logged in as ${storedUser}`);
});
