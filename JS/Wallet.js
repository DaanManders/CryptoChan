$(document).ready(function () {
  var Logout = document.getElementById("logout");

  Logout.addEventListener("click", function () {
    localStorage.removeItem("loggedin");
    window.location.href = "http://localhost/CryptoChan/Views/home.php";
  });
});
