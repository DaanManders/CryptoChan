function GetWalletCurrencies() {
  const UserID = localStorage.getItem("user_id");

  $.ajax({
    url: "../INC/Functions.php",
    type: "GET",
    data: { user_id: UserID },
    success: function (data) {
      var Currencies = data;
      var Template = $("#wallet-currencies-template").html();

      Currencies.forEach((Currency) => {
        Currency.CoinImage = `https://assets.coincap.io/assets/icons/${Currency.currencySymbol.toLowerCase()}@2x.png`;
      });

      var RenderTemplate = Mustache.render(Template, { data: Currencies });
      $("#currency-wallet-body").html(RenderTemplate);
    },
  });
}

$(document).ready(function () {
  var Logout = document.getElementById("logout");

  Logout.addEventListener("click", function () {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("user_id");
    window.location.href = "http://localhost/CryptoChan/Views/home.php";
  });

  GetWalletCurrencies();
});
