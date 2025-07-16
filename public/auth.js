// auth.js
function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("⚠️ Unauthorized! Please login first.");
    window.location.href = "seller-login.html";
  }
}

function logout() {
  localStorage.removeItem("token");
  alert("✅ Logged out successfully!");
  window.location.href = "seller-login.html";
}
