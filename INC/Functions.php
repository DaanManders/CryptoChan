<?php
// Database connection function remains the same
function ConnectDatabase() {
    $Host = "localhost";
    $User = "root";
    $Password = "";
    $Table = "cryptochan";

    $MySQLI = new mysqli($Host, $User, $Password, $Table);

    if($MySQLI->connect_errno) {
        die("Connection with Database " . $Table . " failed: " . $MySQLI->connect_error);
    }

    return $MySQLI;
}

// Main logic to handle the CreateAccount action
if (isset($_POST['action']) && $_POST['action'] == 'CreateAccount') {
    $FirstName = $_POST['f_name'];
    $LastName = $_POST['l_name'];
    $Email = $_POST['email'];
    $Password = $_POST['password'];

    $Result = CreateAccount($FirstName, $LastName, $Email, $Password);
    echo $Result;
}

// Function to create an account
function CreateAccount($FirstName, $LastName, $Email, $Password) {
    $MySQLI = ConnectDatabase();

    // Check if the email already exists
    $CheckEmailSTMT = $MySQLI->prepare("SELECT * FROM users WHERE Email = ?");
    $CheckEmailSTMT->bind_param("s", $Email);
    $CheckEmailSTMT->execute();
    $CheckEmailSTMT->store_result();

    if ($CheckEmailSTMT->num_rows > 0) {
        $CheckEmailSTMT->close();
        $MySQLI->close();
        return "Email already exists!";
    }

    $CheckEmailSTMT->close();

    // Insert user data with plain password
    $STMT = $MySQLI->prepare("INSERT INTO users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)");
    $STMT->bind_param("ssss", $FirstName, $LastName, $Email, $Password);

    if ($STMT->execute()) {
        $STMT->close();
        $MySQLI->close();
        // Redirect to Home
        header("Location: http://localhost/CryptoChan/Views/");
        exit(); // Exit Script
    } else {
        $ErrorMessage = $MySQLI->error;
        $STMT->close();
        $MySQLI->close();
        return "Error: " . $ErrorMessage;
    }
}

// Main logic to handle the Login action
if (isset($_POST['action']) && $_POST['action'] == 'Login') {
    $Email = $_POST['email'];
    $Password = $_POST['password'];

    $Result = Login($Email, $Password);
    echo $Result;
}

if (isset($_POST['action']) && $_POST['action'] == 'AddCurrencyToWallet') {
    $UserID = $_POST['user_id'];
    $ID = $_POST['id'];
    $Name = $_POST['name'];
    $Symbol = $_POST['symbol'];
    $Amount = $_POST['amount'];
    $Price = $_POST['price'];

    $Result = AddCurrencyToWallet($UserID, $ID, $Name, $Symbol, $Amount, $Price);
    echo $Result;
}

// Function to handle login
function Login($Email, $Password) {
    $MySQLI = ConnectDatabase();

    // Prepare the statement to find the user by email
    $STMT = $MySQLI->prepare("SELECT id, Password FROM users WHERE Email = ?");
    $STMT->bind_param("s", $Email);
    $STMT->execute();
    $STMT->store_result();

    if ($STMT->num_rows === 0) {
        $STMT->close();
        $MySQLI->close();
        return "Invalid email or password!"; // User not found
    }

    // Fetch the stored password and user ID
    $STMT->bind_result($userId, $storedPassword);
    $STMT->fetch();

    // Check if the provided password matches the stored password
    if ($storedPassword === $Password) {
        $STMT->close();
        $MySQLI->close();

        // Return user ID as part of the success response
        return json_encode([
            'status' => 'success',
            'user_id' => $userId
        ]);
    } else {
        $STMT->close();
        $MySQLI->close();
        return "Invalid email or password!"; // Incorrect password
    }
}

function AddCurrencyToWallet($UserID, $ID, $Name, $Symbol, $Amount, $Price) {
    $MySQLI = ConnectDatabase();

    // First, check if the currency already exists in the user's wallet
    $CheckQuery = $MySQLI->prepare("SELECT currencyAmount FROM currencies WHERE userId = ? AND currencyId = ?");
    $CheckQuery->bind_param("is", $UserID, $ID);
    $CheckQuery->execute();
    $result = $CheckQuery->get_result();

    if ($result->num_rows > 0) {
        // Currency exists, so update the amount
        $existingRow = $result->fetch_assoc();
        $newAmount = $existingRow['currencyAmount'] + $Amount; // Update the amount

        $UpdateQuery = $MySQLI->prepare("UPDATE currencies SET currencyAmount = ? WHERE userId = ? AND currencyId = ?");
        $UpdateQuery->bind_param("iis", $newAmount, $UserID, $ID);
        $UpdateQuery->execute();
        $UpdateQuery->close();
    } else {
        // Currency does not exist, so insert a new row
        $STMT = $MySQLI->prepare("INSERT INTO currencies (userId, currencyId, currencyName, currencySymbol, currencyAmount, currencyPrice) VALUES (?, ?, ?, ?, ?, ?)");
        $STMT->bind_param("isssis", $UserID, $ID, $Name, $Symbol, $Amount, $Price);
        $STMT->execute();
        $STMT->close();
    }

    $CheckQuery->close();
    $MySQLI->close();
}

function getCurrenciesByUserId($userId) {
    // Assuming you have a database connection set up
    $MySQLI = ConnectDatabase();

    // Prepare the SQL statement to prevent SQL injection
    $stmt = $MySQLI->prepare("SELECT * FROM currencies WHERE userId = ?");
    $stmt->bind_param("i", $userId); // "i" denotes that the parameter is an integer

    // Execute the statement
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Fetch all currencies into an array
    $currencies = [];
    while ($row = $result->fetch_assoc()) {
        $currencies[] = $row;
    }

    // Close the statement
    $stmt->close();

    // Return the currencies as a JSON response
    header('Content-Type: application/json');
    echo json_encode($currencies);
}

// Check if the user_id parameter is set and call the function
if (isset($_GET['user_id'])) {
    $userId = intval($_GET['user_id']); // Convert to integer
    getCurrenciesByUserId($userId);
}

?>
