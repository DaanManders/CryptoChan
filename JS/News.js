function GetCryptoNews() {
  $.ajax({
    type: "GET",
    dataType: "JSON",
    url: "https://newsdata.io/api/1/news?apikey=pub_579174d6e2e00c887ef7450e7cefc2c328783&q=crypto",

    success: function (data) {
      var News = data.results;
      var Template = $("#all-news-template").html();

      console.log(News);

      var RenderTemplate = Mustache.render(Template, { data: News });
      $("#news-wrapper").html(RenderTemplate);
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
  GetCryptoNews();

  document.querySelectorAll(".explore-wallet-btn").forEach((Button) => {
    // Adding a Click Event to the Explore Wallet Buttons.
    Button.addEventListener("click", function () {
      // If the Button Text contains "Explore Wallet" Handle Navigation.
      if (this.textContent.includes("Explore Wallet")) NavigateToRegister();
    });
  });
});
