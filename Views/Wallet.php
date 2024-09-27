<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!----- Bootstrap CDN Link | HTML Import ----->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!----- Link SCSS | HTML Import ----->
    <link rel="stylesheet" href="../SCSS/Wallet.scss">
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
    <script src="../JS/Wallet.js"></script>
    <!----- Website Icon | HTML Import ----->
    <link rel="icon" href="../SCSS/Images/Emote.png" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <title>Wallet</title>
</head>
<body class="body-container w-100 h-100">
    <nav class="navigation-menu d-flex justify-content-between align-items-center">
        <div class="navigation-start d-flex justify-content-center align-items-center">
            <!----- CryptoChan Website Logo | Imported Image File Explorer ----->
            <img class="website-brandmark" src="../SCSS/Images/Brand.png">
        </div>
        <!----- CryptoChan Navigation Menu | Body Container ----->
        <div class="navigation-center d-flex justify-content-center align-items-center">
            <a class="navigation-item text-decoration-none fw-bold" href="Home.php">Home</a>
            <a class="navigation-item text-decoration-none fw-bold" href="#">Community</a>
            <a class="navigation-item text-decoration-none fw-bold" href="#">Products</a>
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
            <button class="logout-btn border-0 fw-bolder ms-5" id="logout">Logout</button>
        </div>
    </nav>
    <div class="wallet-container mt-5">
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
                            <span>Amount</span>
                            <i class="filter fa-solid fa-caret-down ms-1"></i>
                        </th>
                        <!----- Table Header | Currency Table ----->
                        <th class="currency-table-header-item fw-bolder pt-3 pb-3">
                            <span>Current Price</span>
                            <i class="filter fa-solid fa-caret-down ms-1"></i>
                        </th>
                        <th class="currency-table-header-item fw-bolder pt-3 pb-3">
                            <span>Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody id="currency-table-body">
                    <!----- Mustache JavaScript Template ----->
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>