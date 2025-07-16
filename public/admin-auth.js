// admin-auth.js
function checkAdminAuth() {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    alert("🛑 Access Denied. Please login as Admin first.");
    window.location.href = "admin-login.html";
  }
}
