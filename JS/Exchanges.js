function GetCryptoExchanges() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://api.coincap.io/v2/exchanges",

    success: function (data) {
      var Exchanges = data.data;
      var Template = $("#all-exchanges-template").html();

      console.log(Exchanges);

      var RenderTemplate = Mustache.render(Template, { data: Exchanges });
      $("#exchanges-wrapper").html(RenderTemplate);
    },
  });
}

function NavigateToRegister() {
  // Assign Logged In Variable based on LocalStorage.
  const LoggedIn = localStorage.getItem("loggedin") === "yes";

  window.location.href = LoggedIn // Checks if the User is Logged In.
    ? "http://localhost/CryptoChan/Views/wallet.php" // Redirect to Wallet.php if User is Logged In.
    : "http://localhost/CryptoChan/Views/register.php"; // Redirect to Register.php if User is NOT Logged In.
}

$(document).ready(function () {
  GetCryptoExchanges();

  document.querySelectorAll(".explore-wallet-btn").forEach((Button) => {
    // Adding a Click Event to the Explore Wallet Buttons.
    Button.addEventListener("click", function () {
      // If the Button Text contains "Explore Wallet" Handle Navigation.
      if (this.textContent.includes("Explore Wallet")) NavigateToRegister();
    });
  });
});
