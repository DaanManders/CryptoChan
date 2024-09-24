function TogglePassword() {
  document.getElementById("toggle").addEventListener("click", function () {
    var Password = document.getElementById("Password"); // Assign Password Input.
    var Icon = this; // Assign Icon.

    if (Icon.classList.contains("fa-eye")) {
      Icon.classList.remove("fa-eye");
      Icon.classList.add("fa-eye-slash");
      Password.type = "text";
    } else {
      Icon.classList.remove("fa-eye-slash");
      Icon.classList.add("fa-eye");
      Password.type = "password";
    }
  });
}

function NavigateToRegister() {
  window.location.href = "http://localhost/CryptoChan/Views/Register.php";
}

$(document).ready(function () {
  TogglePassword(); // Password Visibility.

  $("#register").click(function () {
    NavigateToRegister(); // Navigate.
  });
});
