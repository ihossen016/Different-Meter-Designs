<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Pump Dashboard</title>
    <script src="zingChart.min.js"></script>
    <link rel="stylesheet" href="new.css?v=<?php echo time(); ?>" />
  </head>
  ​
  <body>
    <img src="wasa.png" alt="" id="image">

    <div class="zc-body">
      ​
      <div class="zc-body1">
        <div id="myChart1" class="chart--container"></div>
        <div id="myChart2" class="chart--container"></div>
        <div id="myChart3" class="chart--container"></div>
      </div>
      ​
      <div class="zc-body2">
        <div id="myChart4" class="chart--container2"></div>
        <div id="myChart5" class="chart--container2"></div>
        <div id="myChart6" class="chart--container2"></div>
      </div>

      <div class="zc-body3">
        <div id="myChart7" class="chart--container3"></div>
        <div id="myChart8" class="chart--container3"></div>
        <div id="myChart9" class="chart--container3"></div>
      </div>
    </div>

    <?php
    // Create Connection
    $conn = mysqli_connect('localhost', 'root', '', 'dhaka_wasa');

    // Check connection
    if (!$conn) {
        die('Connection failed: ' . mysqli_connect_error());
    }

    $sql = 'SELECT * FROM report ORDER BY Sl DESC LIMIT 1';
    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_row($result);

    $waterFlow = $row[2];
    $waterLevel = $row[3];
    $runTime = $row[4];
    $stopTime = $row[5];
    $unit = $row[6];
    $production = $row[7];
    $cumulativeProduction = $row[8];

// echo ' Water level is: ' . $value;
// echo '<br/>';
// echo ' Frequency is: ' . $frequency;
?>

    <script>
        var waterFlow = <?php echo $waterFlow; ?>;
        var waterLevel = <?php echo $waterLevel; ?>;
        var runTime = <?php echo $runTime; ?>;
        var stopTime = <?php echo $stopTime; ?>;
        var unit = <?php echo $unit; ?>;
        var production = <?php echo $production; ?>;
        var cumulativeProduction = <?php echo $cumulativeProduction; ?>;
    </script>
    <script src="app.js"></script>
  </body>
</html>
