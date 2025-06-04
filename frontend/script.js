function login() {
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;
  if (user && pass) {
    alert("✅ Login successful!");
    window.location.href = "home.html";
  } else {
    alert("⚠️ Please enter both username and password.");
  }
}

function signup() {
  const user = document.getElementById('signup-user').value;
  const pass = document.getElementById('signup-pass').value;
  if (user && pass) {
    alert("✅ Account created successfully!");
    window.location.href = "index.html";
  } else {
    alert("⚠️ Please fill all fields.");
  }
}

function logout() {
  alert("🚪 Logging out...");
  window.location.href = "index.html";
}

function alertButton() {
  alert("🚨 Emergency alert activated!");
}

function heartRate() {
  alert("❤️ Heart rate monitor enabled (simulated).");
}

function locationButton() {
  alert("📍 Location service activated (simulated).");
}

function motionDetect() {
  alert("📡 Motion detection started (simulated).");
}

function goToLogin() {
  window.location.href = "index.html";
}
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}
function navigateTo(page) {
  window.location.href = page;
}
