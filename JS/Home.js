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

  GetCurrencyHistory();

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
    const CurrencyURL = $(this).data("id");

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

    GetCurrencyHistory(CurrencyURL);

    // Show the modal
    $("#CurrencyInformation").modal("show");
  });
});

function GetCurrencyHistory(CurrencyURL) {
  const endTime = new Date().getTime();
  const startTime = endTime - 7 * 24 * 60 * 60 * 1000;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://api.coincap.io/v2/assets/${CurrencyURL}/history?interval=d1&start=${startTime}&end=${endTime}`,

    success: function (HistoryData) {
      console.log(HistoryData);

      const DateArray = [];
      const PriceArray = [];

      $.each(HistoryData.data, function (index, value) {
        // Format the date to MM/DD or DD-MM as needed
        const formattedDate = new Date(value.date).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
        });
        DateArray.push(formattedDate);
        PriceArray.push(value.priceUsd);
      });

      generateChart(DateArray, PriceArray);
    },
  });
}

function generateChart(chartDate, chartPrice) {
  var ctx = document.getElementById("currency-history").getContext("2d");

  var graph = Chart.getChart("currency-history");

  if (graph) {
    graph.destroy();
  }

  var graph = new Chart(ctx, {
    type: "line",

    data: {
      labels: chartDate,
      datasets: [
        {
          type: "line",
          label: "Price (USD)",
          borderColor: "#d719b6",
          data: chartPrice,
        },
      ],
    },

    options: {
      scales: {
        x: [
          {
            display: true,
            title: {
              display: true,
              labelString: "Date",
            },
          },
        ],
        y: [
          {
            display: true,
            title: {
              display: true,
              labelString: "Price",
            },
          },
        ],
      },
      elements: { point: { radius: 0 } },
    },
  });
}
