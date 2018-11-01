<?php

# Import Tools and Configs
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';

# Get Parameters
$account_id = $_GET['account_id'];
$token = $_GET['token'];

# Check token
if (isTokenValid($account_id,$token)){

try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare("SELECT * FROM bookings WHERE account_id='$account_id'");
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
     # Print Result in JSON Format
     echo json_encode((object)[
        'success' => true,
        'data' => $result
     ],JSON_NUMERIC_CHECK);

    }
catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);
    }

}
else{
    echo json_encode((object)[
        'success' => false,
        'status' => 'UNAUTHORIZED',
        'account_id' => $account_id,
        'token' => $token,
        'query' => "SELECT * FROM tokens WHERE account_id='$account_id' AND token='$token' AND http_user_agent='$http_user_agent' AND token_valid=true"

    ]);
}
?>