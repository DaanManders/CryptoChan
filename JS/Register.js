function TogglePassword() {
  // Assign Toggle Password Icon to JavaScript Variable & Click Event.
  document.getElementById("toggle").addEventListener("click", function () {
    var Password = document.getElementById("Password"); // Initialize Password Input Field.
    var Icon = this; // Assign Toggle Icon.

    if (Icon.classList.contains("fa-eye")) {
      // If Password Toggle Icon contains Font Awesome Class.
      Icon.classList.remove("fa-eye"); // Remove Font Awesome Class.
      Icon.classList.add("fa-eye-slash"); // Add Font Awesome Class.
      Password.type = "text"; // Change Input Field Type.
    } else {
      // If Password Toggle Icon contains Font Awesome Class.
      Icon.classList.remove("fa-eye-slash"); // Remove Font Awesome Class.
      Icon.classList.add("fa-eye"); // Add Font Awesome Class.
      Password.type = "password"; // Change Input Field Type.
    }
  });
}

function NavigateToLogin() {
  window.location.href = "http://localhost/CryptoChan/Views/Login.php";
  // Navigate to Register.php.
}

function CreateAccount() {
  var FirstName = $("#FirstName").val(); // First Name Value.
  var LastName = $("#LastName").val(); // Last Name Value.
  var Email = $("#Email").val(); // Email Field Value.
  var Password = $("#Password").val(); // Password Field Value.

  if (!FirstName || !LastName || !Email || !Password) {
    alert("All Fields are Required!"); // If Field(s) are Empty.
  } else {
    $.ajax({
      type: "POST", // AJAX Request Type.
      url: "../INC/Functions.php", // Link Functions File.
      data: {
        action: "CreateAccount",
        f_name: FirstName, // First Name Credential.
        l_name: LastName, // Last Name Credential.
        email: Email, // Email Credential.
        password: Password, // Password Credential.
      },

      // AJAX Call Success.
      success: function (response) {
        if (response.startsWith("Error:")) {
          alert(response); // Print Response.
        } else {
          alert(response);
          // Redirect back to Home.
          window.location.href = "Home.php";
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

  $("#create").click(function (event) {
    event.preventDefault(); // Prevent Reloading the Page.
    CreateAccount(); // Register Account.
  });

  $("#login").click(function () {
    NavigateToLogin(); // Navigate.
  });
});
