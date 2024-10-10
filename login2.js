document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Dummy user data
  const users = [
    { username: "Avijit Das", password: "01851483607" },
    
    // Add more user data as needed
  ];

  // Check if input matches user data
  const authenticatedUser = users.find(user => user.username === username && user.password === password);

  // Display appropriate message
  if (authenticatedUser) {
    window.location.href = "videos.html";
  } else {
    document.getElementById("error").textContent = "Sorry there is no permission for you to enter the site";
  } 
});
