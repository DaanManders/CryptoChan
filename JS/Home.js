function GetAllCurrencyData() {
  // Get All Currency Data from API.
  $.ajax({
    type: "GET", // GET Request.
    dataType: "json", // Return Data in JSON.
    url: "https://api.coincap.io/v2/assets", // API URL.

    // If AJAX is Successful.
    success: function (data) {
      var Currencies = data.data; // Push API Data in the Currencies Array Variable.
      var Template = $("#all-currencies-template").html(); // Assign the Mustache Template.

      // Loop Through the Currencies Object.
      Currencies.forEach((Currency) => {
        // Get Currency Image by Getting the Currency Symbol in LowerCase.
        Currency.CoinImage = `https://assets.coincap.io/assets/icons/${Currency.symbol.toLowerCase()}@2x.png`;
      });

      CryptoEuroAttribute(Currencies, Template);
    },
  });
}

function CryptoEuroAttribute(Currencies, Template) {
  $.ajax({
    type: "GET", // GET Request.
    dataType: "json", // Return Data in JSON.
    url: "https://api.coincap.io/v2/rates/euro", // API URL.

    // If AJAX is Successful.
    success: function (data) {
      var RateUsd = parseFloat(data.data.rateUsd); // Get the Conversion Rate to USD and Parse it as a Float.

      Currencies.forEach(function (Currency) {
        var PriceUsd = parseFloat(Currency.priceUsd); // Convert the Price to a Float for Calculation.
        var PriceEuro = (PriceUsd / RateUsd).toFixed(2); // Calculate Price in Euro and round to 2 Decimal.

        // Add PriceEuro as a Property of each Currency Object.
        Currency.PriceEuro = PriceEuro;
      });

      // Render the Mustache Template with the Currencies Array.
      var RenderTemplate = Mustache.render(Template, { data: Currencies });
      $("#currency-table-body").html(RenderTemplate);
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

function FormattingCurrencyData(CurrencyData) {
  // Formats Long Currency Data to a Shorter Notation.
  if (CurrencyData >= 1e9) return (CurrencyData / 1e9).toFixed(2) + "B"; // Bilion.
  if (CurrencyData >= 1e6) return (CurrencyData / 1e6).toFixed(2) + "M"; // Milion.
  if (CurrencyData >= 1e3) return (CurrencyData / 1e3).toFixed(2) + "K"; // Thousand.
  return CurrencyData; // Return Shorter Notation.
}

function RegisterCurrencyData(CurrencyID, CurrencyName, CurrencySymbol, Price) {
  // Assign Add to Wallet Button to a Specific Variable.
  AddCurrency = document.getElementById("add");

  // Add Click Event to the Add to Wallet Button.
  AddCurrency.addEventListener("click", function () {
    var UserID = localStorage.getItem("user_id"); // Extract User ID from Local Storage.
    var Amount = $("#amount").val(); // Extract Currency Amount from Input Field.

    AddCurrencyToWallet(
      UserID, // Pass User ID to the Function.
      CurrencyID, // Pass Currency ID to the Function.
      CurrencyName, // Pass Currency Name to the Function.
      CurrencySymbol, // Pass Currency Symbol to the Function.
      Amount, // Pass Currency Amount to the Function.
      Price // Pass Currency Price to the Function.
    );
  });
}

function AddCurrencyToWallet(
  UserID, // Extract User ID.
  CurrencyID, // Extract Currency ID.
  CurrencyName, // Extract Currency Name.
  CurrencySymbol, // Extract Currency Symbol.
  CurrencyAmount, // Extract Currency Amount.
  CurrencyPrice // Extract Currency Price.
) {
  $.ajax({
    type: "POST", // POST Request.
    url: "../INC/Functions.php", // Include Functions.php with URL.
    data: {
      action: "AddCurrencyToWallet", // Add Action to AJAX Request.
      user_id: UserID, // Push User ID in JSON Data.
      id: CurrencyID, // Push Currency ID in JSON Data.
      name: CurrencyName, // Push Currency Name in JSON Data.
      symbol: CurrencySymbol, // Push Currency Symbol in JSON Data.
      amount: CurrencyAmount, // Push Currency Amount in JSON Data.
      price: CurrencyPrice, // Push Currency Price in JSON Data.
    },

    // If AJAX Request is Succesful.
    success: function (response) {
      // If Response Include "Error" in Message.
      if (response.includes("Error:")) {
        alert(response); // Log the Response in an Alert.
      } else {
        // Redirect to the User's Wallet.
        window.location.href = "http://localhost/CryptoChan/Views/wallet.php";
      }
    },

    // If AJAX Request fails.
    error: function (jqXHR, textStatus) {
      // Log the Error in an Alert.
      alert("An error occurred: " + textStatus);
    },
  });
}

// Get Currency History from CoinCap API.
function GetCurrencyHistory(CurrencyURL) {
  const EndDate = new Date().getTime(); // Get the End Date from the Start Date.
  const StartDate = EndDate - 7 * 24 * 60 * 60 * 1000; // Get the Start Date of the Currency History (Weekly).

  $.ajax({
    type: "GET", // GET Request.
    dataType: "json", // Return Data in JSON.
    url: `https://api.coincap.io/v2/assets/${CurrencyURL}/history?interval=d1&start=${StartDate}&end=${EndDate}`,
    // Checks the Currency History of the Selected URL with the Start Date & End Date (Weekly).

    // If AJAX Request is Succesful.
    success: function (HistoryData) {
      const PriceArray = []; // Initialize Currency Price Array.
      const DateArray = []; // Initialize Currency Date Array.

      // Loops Through the Currency History Data.
      $.each(HistoryData.data, function (index, Value) {
        // Formats the Currency History Data in Months & Days (EN - US Time).
        const FormattedDate = new Date(Value.date).toLocaleDateString("en-US", {
          month: "2-digit", // Two Month Digits.
          day: "2-digit", // Two Day Digits.
        });

        PriceArray.push(Value.priceUsd); // Push Currency Price (Data) in Price Array.
        DateArray.push(FormattedDate); // Push Currency Date (Data) in Date Array.
      });

      // Generate Currency History Chart based on Currency Array's.
      GenerateCurrencyHistoryChart(DateArray, PriceArray);
    },
  });
}

function GenerateCurrencyHistoryChart(CurrencyDate, CurrencyPrice) {
  // Assign Chart.js Variable(s) to Generate the Currency History Chart.
  var Context = document.getElementById("currency-history").getContext("2d");
  var Graph = Chart.getChart("currency-history"); // Get Chart from Wallet.php.

  // If Graph Already Exists.
  if (Graph) Graph.destroy();

  // Generate new Chart.
  var Graph = new Chart(Context, {
    type: "line", // Chart Type.
    data: {
      labels: CurrencyDate, // Chart Labels.
      datasets: [
        {
          label: "Price (USD)", // Chart Label.
          borderColor: "#d719b6", // Line Color.
          data: CurrencyPrice, // Chart Data.
          fill: false, // Prevent Filling the Area under Line.
        },
      ],
    },

    options: {
      scales: {
        x: {
          type: "category", // Set Category for String Label(s).
          title: {
            display: true,
            text: "Date", // Label for the X-Axis.
          },
        },
        y: {
          type: "linear", // Set Linear for Numerical Value(s).
          title: {
            display: true,
            text: "Price", // Label for the Y-Axis.
          },
        },
      },
      elements: {
        point: {
          radius: 3, // Points on the Line
        },
      },
    },
  });
}

// If Document is Fully Loaded & Parsed.
$(document).ready(function () {
  // Get Currency Data from CoinCap API.
  GetAllCurrencyData();

  // Get Currency History from CoinCap API.
  GetCurrencyHistory();

  // Checks for all Buttons in Application with Explore Wallet Class.
  document.querySelectorAll(".explore-wallet-btn").forEach((Button) => {
    // Adding a Click Event to the Explore Wallet Buttons.
    Button.addEventListener("click", function () {
      // If the Button Text contains "Explore Wallet" Handle Navigation.
      if (this.textContent.includes("Explore Wallet")) NavigateToRegister();
    });
  });

  document.addEventListener("click", function (event) {
    // Check if the clicked element has the class 'currency-row'.
    if (event.target.closest(".currency-row")) {
      const row = event.target.closest(".currency-row");

      const CurrencyName = row.dataset.name; // Get Currency Name.
      const CurrencySymbol = row.dataset.symbol; // Get Currency Symbol.
      const CurrencyImage = row.dataset.image; // Get Currency Image.

      const TradingVolume = FormattingCurrencyData(row.dataset.volume); // Get Trading Volume.
      const MarketCap = FormattingCurrencyData(row.dataset.marketcap); // Get Market Cap.
      const Supply = FormattingCurrencyData(row.dataset.supply); // Get Supply.
      const Price = FormattingCurrencyData(row.dataset.price); // Get Price.

      const CurrencyURL = row.dataset.id; // Get Currency ID.

      // Update modal content.
      document.querySelector(".currency-name").textContent = CurrencyName; // Set Currency Name.
      document.querySelector(".currency-symbol").textContent = CurrencySymbol; // Set Currency Symbol.

      // Update Currency Image in Modal.
      const currencyImage = document.querySelector(
        "#CurrencyInformation .modal-header img"
      );

      currencyImage.src = CurrencyImage;
      currencyImage.style.display = "block"; // Show image.

      // Edit remaining currency data in the modal.
      const infoDigits = document.querySelectorAll(
        ".currency-details .info-digits"
      );

      infoDigits[0].textContent = TradingVolume; // Set Trading Volume.
      infoDigits[1].textContent = MarketCap; // Set Market Cap.
      infoDigits[2].textContent = Supply; // Set Supply.
      infoDigits[3].textContent = Price; // Set Price.

      // Get currency history from CoinCap API.
      GetCurrencyHistory(CurrencyURL);

      // Show the modal
      $("#CurrencyInformation").modal("show"); // Ensure you have a method to show the modal.

      // Register currency data for adding to wallet.
      RegisterCurrencyData(CurrencyURL, CurrencyName, CurrencySymbol, Price);
    }
  });

  // Assigning Add Currency Button to a Variable.
  AddCurrencyButton = document.getElementById("add");
  CurrencyAmount = document.getElementById("amount");

  if (localStorage.getItem("loggedin") === "yes") {
    // If User is Logged In Show Add Currency To Wallet Button.
    AddCurrencyButton.classList.toggle("hidden");
    CurrencyAmount.classList.toggle("hidden");
  }
});
