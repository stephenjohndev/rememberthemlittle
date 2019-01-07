<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

$query = $_GET['query'];

if(isset($query)){
    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $stmt = $conn->prepare(
            "SELECT 'accounts' as source_table, account_id, NULL as booking_id, account_name, NULL as subject_name, NULL as booking_date FROM accounts WHERE account_id LIKE '%$query%' OR account_name LIKE '%$query%' LIMIT 5
            UNION
            SELECT 'bookings' as source_table, b.account_id, b.booking_id, a.account_name, b.subject_name, b.booking_date FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE b.booking_id LIKE '%$query%' OR a.account_name LIKE '%$query%' OR b.subject_name LIKE '%$query%' LIMIT 5" 
        );
        $stmt->execute();

        #Fetch and Arrange Result
        $result = array();

        while($row = $stmt->fetch())
        {
            if($row['source_table'] != $current_table)
            {
                $current_table = $row['source_table'];
            }
            $result[$current_table][] = $row;
        }

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
?>