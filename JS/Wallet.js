function GetWalletCurrencies() {
  // Extacts User ID from LocalStorage.
  const UserID = localStorage.getItem("user_id");

  $.ajax({
    url: "../INC/Functions.php", // Include Functions.php from URL.
    type: "GET", // GET Request.
    data: { user_id: UserID },

    // If AJAX Request is Successful.
    success: function (data) {
      var Currencies = data; // Assign Data to Variable.
      var Template = $("#wallet-currencies-template").html();
      // Insert Data into Mustache Template.

      // Loop Through Currency Array.
      Currencies.forEach((Currency) => {
        // Get Currency Image based on Currency ID / URL to LowerCase.
        Currency.CoinImage = `https://assets.coincap.io/assets/icons/${Currency.currencySymbol.toLowerCase()}@2x.png`;
        Currency.currencyID = Currency.ID; // Assign Currency ID.
      });

      // Render Mustache Template.
      var RenderTemplate = Mustache.render(Template, { data: Currencies });
      $("#currency-wallet-body").html(RenderTemplate);
      // Display Mustache Template.
    },
  });
}

$(document).ready(function () {
  // Assign Logout Button to a Variable.
  var Logout = document.getElementById("logout");

  Logout.addEventListener("click", function () {
    localStorage.removeItem("loggedin"); // Removes Logged In Boolean from LocalStorage.
    localStorage.removeItem("user_id"); // Untracks User ID from LocalStorage.

    window.location.href = "http://localhost/CryptoChan/Views/home.php";
    // Redirect to Home.
  });

  // Click Event on the Entire Document.
  document.addEventListener("click", function (e) {
    if (e.target.closest(".delete-currency")) {
      var currencyID = e.target
        .closest(".delete-currency")
        .getAttribute("data-id");

      // Trigger Delete Currency Function.
      DeleteCurrency(currencyID);
    }
  });

  // Get User's Wallet Currencies.
  GetWalletCurrencies();
});

function DeleteCurrency(ID) {
  $.ajax({
    url: "../INC/Functions.php", // Include Functions.php with URL.
    type: "POST", // POST Request.
    data: { action: "delete_currency", currency_id: ID },

    // If AJAX Request is Succesful.
    success: function () {
      // Success Message when Deleted.
      alert("Currency deleted successfully!");

      // Get User's Wallet Currencies.
      GetWalletCurrencies();

      window.location.href = "http://localhost/CryptoChan/Views/wallet.php";
      // Refresh the URl.
    },

    error: function (xhr, status, error) {
      console.error("AJAX Error: ", error);
    },
  });
}
