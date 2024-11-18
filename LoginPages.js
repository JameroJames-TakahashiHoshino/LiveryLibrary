function solve() {
  var email = document.getElementById("first").value;
  var password = document.getElementById("password").value;

  // Define valid credentials
  const validCredentials = [
      { email: "Jamero@gmail.com", password: "Jamero" },
      { email: "Daniel@gmail.com", password: "Daniel" },
      { email: "Costin@gmail.com", password: "Costin" }
  ];

  // Check if the entered credentials match any valid pair
  const isValid = validCredentials.some(cred => 
      cred.email === email && cred.password === password
  );

  if (isValid) {
      window.location.href = "D:/Library Management/Dashboard.html";
  } else {
      alert("Invalid email or password.");
  }
}
  
  function showSignUp() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
  }
  
  function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
  }
  
  function showForgotPassword() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
  }