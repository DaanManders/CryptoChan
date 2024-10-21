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

function Login() {
  var Email = $("#Email").val(); // Email Field Value.
  var Password = $("#Password").val(); // Password Field Value.

  if (!Email || !Password) {
    alert("All Fields are Required!"); // If Field(s) are Empty.
  } else {
    $.ajax({
      type: "POST", // AJAX Request Type.
      url: "../INC/Functions.php", // Link Functions File.
      data: {
        action: "Login", // Add action for login
        email: Email, // Email Credential.
        password: Password, // Password Credential.
      },

      // AJAX Call Success.
      success: function (response) {
        var data = JSON.parse(response); // Parse the JSON response

        if (data.status === "success") {
          window.location.href = "Home.php";
          localStorage.setItem("loggedin", "yes");
          localStorage.setItem("user_id", data.user_id); // Store user_id
        } else {
          alert(response); // Handle any other responses, such as error messages
          window.location.href = "Login.php";
        }
      },

      // Execute Error Callback.
      error: function (xhr, status, error) {
        alert("An error occurred: " + error);
      },
    });
  }
}

$(document).ready(function () {
  TogglePassword(); // Password Visibility.

  $("#register").click(function () {
    NavigateToRegister(); // Navigate to Register.
  });

  $("#login").click(function (event) {
    event.preventDefault(); // Prevent Reloading the Page.
    Login(); // Execute login function.
  });
});
