function GetCryptoDataForHome() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://api.coincap.io/v2/assets",
    success: function (data) {
      var Currencies = data.data;
      var Template = $("#all-currencies-template").html();

      Currencies.forEach((Currency) => {
        Currency.CoinImage = `https://assets.coincap.io/assets/icons/${Currency.symbol.toLowerCase()}@2x.png`;
      });

      var RenderTemplate = Mustache.render(Template, { data: Currencies });
      $("#currency-table-body").html(RenderTemplate);
    },
  });
}

function NavigateToRegister() {
  window.location.href = "http://localhost/CryptoChan/Views/register.php";
}

function FormatNumber(Number) {
  if (Number >= 1e9) {
    return (Number / 1e9).toFixed(2) + "B"; // Format billions
  } else if (Number >= 1e6) {
    return (Number / 1e6).toFixed(2) + "M"; // Format millions
  } else if (Number >= 1e3) {
    return (Number / 1e3).toFixed(2) + "K"; // Format thousands
  } else {
    return Number; // Return as is if less than 1000
  }
}

$(document).ready(function () {
  GetCryptoDataForHome();

  document.querySelectorAll(".explore-wallet-btn").forEach((Button) => {
    Button.addEventListener("click", function () {
      if (this.textContent.includes("Explore Wallet")) {
        NavigateToRegister();
      }
    });
  });

  // Add a click event listener for the currency rows
  $(document).on("click", ".currency-row", function () {
    // Get the currency data from the clicked row
    const CurrencyName = $(this).data("name");
    const CurrencySymbol = $(this).data("symbol");
    const CurrencyImage = $(this).data("image");
    const TradingVolume = FormatNumber($(this).data("volume"));
    const MarketCap = FormatNumber($(this).data("marketcap"));
    const Supply = FormatNumber($(this).data("supply"));
    const Price = FormatNumber($(this).data("price"));

    // Update the modal content
    $(".currency-name").text(CurrencyName);
    $(".currency-symbol").text(CurrencySymbol);
    $("#CurrencyInformation .modal-header img")
      .attr("src", CurrencyImage)
      .show();

    // Update the modal body details
    $(".currency-details .info-digits").eq(0).text(TradingVolume);
    $(".currency-details .info-digits").eq(1).text(MarketCap);
    $(".currency-details .info-digits").eq(2).text(Supply);
    $(".currency-details .info-digits").eq(3).text(Price);

    // Show the modal
    $("#CurrencyInformation").modal("show");
  });
});
