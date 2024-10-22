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
        Currency.currencyID = Currency.ID;
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

  document.addEventListener("click", function (e) {
    if (e.target.closest(".delete-currency")) {
      var currencyID = e.target
        .closest(".delete-currency")
        .getAttribute("data-id");

      DeleteCurrency(currencyID);
    }
  });

  GetWalletCurrencies();
});

function DeleteCurrency(ID) {
  $.ajax({
    url: "../INC/Functions.php", // Your PHP file handling the request
    type: "POST",
    data: { action: "delete_currency", currency_id: ID }, // Send the currency ID to delete
    success: function (response) {
      console.log(response); // Check the response from the server
      if (response.success) {
        alert("Currency deleted successfully!");
        GetWalletCurrencies(); // Refresh the wallet to reflect the deletion
      } else {
        alert("Error: Could not delete currency");
      }
    },
    error: function (xhr, status, error) {
      console.error("AJAX Error: ", error);
    },
  });
}
