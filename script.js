// Get references to DOM elements
		const form = document.getElementById('loginForm');
		const usernameInput = document.getElementById('username');
		const passwordInput = document.getElementById('password');
		const checkbox = document.getElementById('checkbox');
		const submitBtn = document.getElementById('submit');
		const existingBtn = document.getElementById('existing');

		// Check if credentials are saved in localStorage on page load
		function checkSavedCredentials() {
			const savedUsername = localStorage.getItem('username');
			const savedPassword = localStorage.getItem('password');
			
			// If credentials exist, show the "Login as existing user" button
			if (savedUsername && savedPassword) {
				existingBtn.style.display = 'block';
			} else {
				existingBtn.style.display = 'none';
			}
		}

		// Handle form submission
		form.addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent default form submission
			
			const username = usernameInput.value;
			const password = passwordInput.value;
			const rememberMe = checkbox.checked;
			
			// Display alert with username
			alert(`Logged in as ${username}`);
			
			// If "Remember Me" is checked, save credentials to localStorage
			if (rememberMe) {
				localStorage.setItem('username', username);
				localStorage.setItem('password', password);
				existingBtn.style.display = 'block'; // Show existing user button
			} else {
				// If not checked, remove any saved credentials
				localStorage.removeItem('username');
				localStorage.removeItem('password');
				existingBtn.style.display = 'none'; // Hide existing user button
			}
			
			// Clear form fields
			form.reset();
		});

		// Handle "Login as existing user" button click
		existingBtn.addEventListener('click', function() {
			const savedUsername = localStorage.getItem('username');
			
			if (savedUsername) {
				alert(`Logged in as ${savedUsername}`);
			}
		});

		// Check for saved credentials on page load
		checkSavedCredentials();