<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!----- Bootstrap CDN Link | HTML Import ----->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!----- Link SCSS | HTML Import ----->
    <link rel="stylesheet" href="../SCSS/Home.scss">
    <!----- Link Google Fonts | HTML Import ----->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!----- Google Fonts: Tilt Warp & Lato | HTML Import ----->
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <!----- Fontawesome CDN Link | HTML Import ----->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!----- Jquery CDN Link | HTML Import ----->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!----- Link Mustache JS Template | HTML Import ----->
    <script src="https://unpkg.com/mustache@4.2.0/mustache.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="../JS/Home.js"></script>
    <!----- Website Icon | HTML Import ----->
    <link rel="icon" href="../SCSS/Images/Emote.png" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <title>CryptoChan</title>
</head>
<body class="body-container w-100 h-100">
    <!----- CryptoChan Navigation Menu | Body Container ----->
    <nav class="navigation-menu d-flex justify-content-between align-items-center">
        <div class="navigation-start d-flex justify-content-center align-items-center">
            <!----- CryptoChan Website Logo | Imported Image File Explorer ----->
            <img class="website-brandmark" src="../SCSS/Images/Brand.png">
        </div>
        <!----- CryptoChan Navigation Menu | Body Container ----->
        <div class="navigation-center d-flex justify-content-center align-items-center">
            <a class="navigation-item text-decoration-none fw-bold" href="Home.php">Home</a>
            <a class="navigation-item text-decoration-none fw-bold" href="Exchanges.php">Exchanges</a>
            <a class="navigation-item text-decoration-none fw-bold" href="News.php">News</a>
            <a class="navigation-item text-decoration-none fw-bold" href="#">Learn</a>
        </div>
        <!----- CryptoChan Navigation Menu | Body Container ----->
        <div class="navigation-end d-flex justify-content-center align-items-center">
            <div class="navigation-language d-flex align-items-center">
                <i class="navigation-color fa-solid fa-globe me-3"></i>
                <span class="navigation-color fw-bold">English</span>
                <i class="navigation-color fa-solid fa-chevron-down ms-3"></i>
            </div>
            <!----- Explore Wallet Button | Navigation Menu ----->
            <button class="explore-wallet-btn border-0 fw-bolder ms-5">Explore Wallet</button>
        </div>
    </nav>
    <!----- CryptoChan Main Container | Body Container ----->
    <div class="main-container">
        <div class="heading-container">
            <!----- CryptoChan Heading Container | Main Container ----->
            <div class="heading-wrapping d-flex flex-column align-items-start">
                <h1 class="header-one mb-4">The future is made</h1>
                <h2 class="header-two mb-5">of <span class="highlight ms-2">Currencies.</span></h2>
                <p class="biograph fw-bolder">Take control of your digital assets with confidence. Easy to use, fully encrypted, and <br> always at your fingertips. Whether you're new to crypto or a seasoned <br> pro, we've got you covered.</p>
            </div>
        </div>
        <div class="heading-actions mt-4">
            <!----- CryptoChan Heading Actions | Main Container ----->
            <button class="explore-wallet-btn border-0 fw-bolder me-3">Explore Wallet</button>
            <button class="trade-btn fw-bolder">Trade</button>
        </div>
    </div>
    <!----- Main Currency | Body Container ----->
    <div class="main-currencies mb-5">
        <div class="table-wrapper">
            <table class="currency-table">
                <!----- Currency Table | Main Currency ----->
                <thead class="curreny-table-header">
                    <tr>
                        <!----- Table Header | Currency Table ----->
                        <th class="currency-table-header-item fw-bolder ps-5 pt-3 pb-3">
                            <span>Name</span>
                            <i class="filter fa-solid fa-caret-down ms-1"></i>
                        </th>
                        <!----- Table Header | Currency Table ----->
                        <th class="currency-table-header-item fw-bolder pt-3 pb-3">
                            <span>Price</span>
                            <i class="filter fa-solid fa-caret-down ms-1"></i>
                        </th>
                        <!----- Table Header | Currency Table ----->
                        <th class="currency-table-header-item fw-bolder pt-3 pb-3">
                            <span>Trading Volume (24)</span>
                            <i class="filter fa-solid fa-caret-down ms-1"></i>
                        </th>
                        <!----- Table Header | Currency Table ----->
                        <th class="currency-table-header-item fw-bolder pt-3 pb-3">
                            <span>Market Cap</span>
                            <i class="filter fa-solid fa-caret-down ms-1"></i>
                        </th>
                    </tr>
                </thead>
                <tbody id="currency-table-body">
                    <!----- Mustache JavaScript Template ----->
                </tbody>
            </table>
        </div>
        <!----- Mustache Template loading | Currency Table ----->
        <template id="all-currencies-template">
            {{#data}}
                <tr class="currency-row" data-name="{{name}}" data-symbol="{{symbol}}" data-image="{{CoinImage}}" data-volume="{{volumeUsd24Hr}}" data-marketcap="{{marketCapUsd}}" data-supply="{{supply}}" data-price="{{priceUsd}}" data-id="{{id}}">
                    <!----- Currency Name | Currency Table ----->
                    <td class="currency-table-body-item fw-bolder ps-5 pt-3 pb-3">
                        <img src="{{CoinImage}}" alt="{{symbol}} logo" width="15" height="15" class="me-2">
                        {{name}} <span class="symbol ms-1">{{symbol}}</span>
                    </td>
                    <!----- Currency Price USD | Currency Table ----->
                    <td class="currency-table-body-item fw-bolder pt-3 pb-3">
                        <span class="dollar">$</span>
                        {{priceUsd}}
                    </td>
                    <!----- Currency Trading Volume 24Hr | Currency Table ----->
                    <td class="currency-table-body-item fw-bolder pt-3 pb-3">
                        <span class="dollar">$</span>
                        {{volumeUsd24Hr}}
                    </td>
                    <!----- Currency Market Capacity | Currency Table ----->
                    <td class="currency-table-body-item fw-bolder pt-3 pb-3">
                        <span class="dollar">$</span>
                        {{marketCapUsd}}
                    </td>
                </tr>
            {{/data}}
        </template>
    </div>
    <!----- Bootstrap Modal | Currency ----->
    <div class="modal fade" id="CurrencyInformation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered d-flex align-items-center justify-content-center">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img class="currency-image me-2" width="20" height="20" style="display:none;">
                        <h1 class="currency-name fw-bolder m-0"></h1>
                        <span class="currency-symbol fw-bolder ms-2"></span>
                    </div>
                    <i class="close-modal-btn fa-solid fa-xmark"></i>
                </div>
                <!----- Currency Details | Bootstrap Modal ----->
                <div class="modal-body">
                    <div class="currency-details d-flex align-items-center justify-content-between">
                        <div class="currency-detail d-flex align-items-center p-3 me-3">
                            <div class="detail-image d-flex align-items-center justify-content-center me-3">
                                <i class="fa-solid fa-bolt"></i>
                            </div>
                            <div class="detail-info d-flex flex-column">
                                <h2 class="info-type m-0 fw-bolder">Trading Volume</h2>
                                <div class="d-flex align-items-center">
                                    <span class="dollar fw-bolder me-1">$</span>
                                    <span class="info-digits"></span>
                                </div>
                            </div>
                        </div>
                        <!----- Currency Detail | Bootstrap Modal ----->
                        <div class="currency-detail d-flex align-items-center p-3 me-3">
                            <div class="detail-image d-flex align-items-center justify-content-center me-3">
                                <i class="fa-solid fa-shop"></i>
                            </div>
                            <div class="detail-info d-flex flex-column">
                                <h2 class="info-type m-0 fw-bolder">Market Cap</h2>
                                <div class="d-flex align-items-center">
                                    <span class="dollar fw-bolder me-1">$</span>
                                    <span class="info-digits"></span>
                                </div>
                            </div>
                        </div>
                        <!----- Currency Detail | Bootstrap Modal ----->
                        <div class="currency-detail d-flex align-items-center ps-3 pt-3 pb-3">
                            <div class="detail-image d-flex align-items-center justify-content-center me-3">
                                <i class="fa-solid fa-boxes-packing"></i>
                            </div>
                            <div class="detail-info d-flex flex-column">
                                <h2 class="info-type m-0 fw-bolder">Supply</h2>
                                <div class="d-flex align-items-center">
                                    <span class="dollar fw-bolder me-1">$</span>
                                    <span class="info-digits"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="currency-details mt-3">
                        <!----- Currency Detail | Bootstrap Modal ----->
                        <div class="currency-detail large d-flex align-items-center ps-3 pt-3 pb-3">
                            <div class="detail-image d-flex align-items-center justify-content-center me-3">
                                <i class="fa-solid fa-money-bill"></i>
                            </div>
                            <div class="detail-info d-flex flex-column">
                                <h2 class="info-type m-0 fw-bolder">Price (USD)</h2>
                                <div class="d-flex align-items-center">
                                    <span class="dollar fw-bolder me-1">$</span>
                                    <span class="info-digits"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!----- Chart.js Currency History | Bootstrap Modal ----->
                    <canvas class="graph mt-3 p-3 d-flex flex-column align-items-center" id="currency-history"></canvas>
                    <div class="d-flex align-items-center">
                        <!----- User Currency Interaction | Bootstrap Modal ----->
                        <input class="currency-amount hidden mt-3 me-2 outline-none p-3" type="number" id="amount">
                        <button type="submit" class="add-to-wallet-btn hidden fw-bolder mt-3 border-0 p-3" id="add">
                            <i class="fa-solid fa-wallet me-2"></i>
                            Add to Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>