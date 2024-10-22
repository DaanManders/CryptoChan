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

function NavigateToRegister() {
  window.location.href = "http://localhost/CryptoChan/Views/Register.php";
  // Navigate to Register.php.
}

function Login() {
  var Email = $("#Email").val(); // Assign Email Input Field Value to Variable.
  var Password = $("#Password").val(); // Assign Password Input Field Value to Variable.

  // If Either Input Field(s) are Empty.
  if (!Email || !Password) {
    // Display Error in Localhost Alert.
    alert("All Fields are Required!");
  } else {
    // If Input Field(s) are Filled In.
    $.ajax({
      type: "POST", // POST Request.
      url: "../INC/Functions.php", // Include Function.php with URL.
      data: {
        action: "Login", // Include Action.
        email: Email, // Assign Email.
        password: Password, // Assign Password.
      },

      // If AJAX Request is Successful.
      success: function (response) {
        // Assign JSON Response to Variable.
        var Data = JSON.parse(response);

        if (Data.status === "success") {
          // If JSON Data Mentions Succesful Login.
          window.location.href = "Home.php"; // Redirect to Home.

          localStorage.setItem("loggedin", "yes"); // Fill LocalStorage with Boolean.
          localStorage.setItem("user_id", Data.user_id); // Assign User ID.
        } else {
          // If JSON Data Mentions Failed Login.
          alert(response); // Alert Error in Localhost Alert.
          window.location.href = "Login.php";
          // Redirect to Login.
        }
      },

      // If AJAX Request Failed.
      error: function (xhr, status, error) {
        // Display Error in Localhost Alert.
        alert("An error occurred: " + error);
      },
    });
  }
}

// If Document is Fully Parsed & Loaded.
$(document).ready(function () {
  // Make Toggle Password Function Constant.
  TogglePassword();

  // If Register Link is Pressed.
  $("#register").click(NavigateToRegister);

  // If Login Button is Pressed.
  $("#login").click(function (event) {
    event.preventDefault(); // Prevent Refresh.
    Login(); // Trigger Login.
  });
});
