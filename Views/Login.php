<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!----- Bootstrap CDN Link | HTML Import ----->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!----- Link SCSS | HTML Import ----->
    <link rel="stylesheet" href="../SCSS/Login.scss">
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
    <script src="../JS/Login.js"></script> <!----- Link JavaScript | HTML Import ----->
    <!----- Link Mustache JS Template | HTML Import ----->
    <script src="https://unpkg.com/mustache@4.2.0/mustache.min.js"></script>
    <!----- Website Icon | HTML Import ----->
    <link rel="icon" href="../SCSS/Images/Emote.png" type="image/png">
    <title>Login</title>
</head>
<body class="body-container w-100 h-100">
    <div class="login-container d-flex align-items-center justify-content-center">
        <div class="login-card ps-4 pe-4 pt-5 pb-5">
            <form>
                <!----- Heading | Login Card ----->
                <div class="login-heading mb-5">
                    <h1 class="header-one fw-bolder m-0">Welcome Back!</h1>
                    <h2 class="header-two fw-bolder">
                        Don't have an Account? 
                        <span id="register" class="register-link">Register</span>
                    </h2>
                </div>
                <!----- Account Credentials | Login Card ----->
                <div class="account-credentials d-flex flex-column mb-3">
                    <input class="input-large mb-3 fw-bolder" type="email" placeholder="Email" id="Email" required>
                    <div class="password-field d-flex justify-content-between align-items-center">
                        <input id="Password" class="input-large-t fw-bolder" type="password" placeholder="Password" required>
                        <i id="toggle" class="fa-solid fa-eye ps-3"></i>
                    </div>
                </div>
                <!----- Button | Login Card ----->
                <div class="account-login mb-3">
                    <button class="login-account-btn border-0 fw-bolder" type="button" id="login">Login</button>
                </div>
                <!----- Third Party | Login Card ----->
                <div class="third-party d-flex align-items-center justify-content-between">
                    <button class="google-btn d-flex align-items-center justify-content-center fw-bolder me-3">
                        <img class="me-2" src="../SCSS/Images/Google.png" height="20px" width="20px">
                        Google
                    </button>
                    <button class="apple-btn d-flex align-items-center justify-content-center fw-bolder">
                        <i class="fa-brands fa-apple me-2"></i>
                        Apple
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>