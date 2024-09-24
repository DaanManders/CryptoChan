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
    if(isset($_POST['action']) && $_POST['action'] == 'CreateAccount') {
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

    $HashedPassword = password_hash($Password, PASSWORD_DEFAULT);

    $STMT = $MySQLI->prepare("INSERT INTO users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)");
    $STMT->bind_param("ssss", $FirstName, $LastName, $Email, $HashedPassword);

    if ($STMT->execute()) {
        $STMT->close();
        $MySQLI->close();

        // Redirect to Home.
        header("Location: http://localhost/CryptoChan/Views/");
        exit(); // Exit Script.
    } else {
        $ErrorMessage = $MySQLI->error;
        $STMT->close();
        $MySQLI->close();
        return "Error: " . $ErrorMessage;
    }
}
?>
