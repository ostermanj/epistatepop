<?php
    ini_set("auto_detect_line_endings", true);
    $states = array();
    $row = 1;
    if (($handle = fopen("data/us-state-population.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            array_push($states, $data);
        }
        fclose($handle);
    }
    ini_set("auto_detect_line_endings", false);
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>U.S. State Population</title>
        <meta name="description" content="Explore the populations of U.S. states">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="/css/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js"></script>
        <script>
            window.stateData = <?php print(json_encode($states)) ?>;
        </script>
    </head>
    <body>
        <h1>U.S. State Population Explorer</h1>
        <select id="state-selector">
            <option disabled selected value="null">-- Select a state --</option>
            <?php
                for ($i = 1; $i < sizeOf($states); $i++) {
                    $state = $states[$i][0];
                    echo "<option value='$state'>$state</option>";
                }
            ?>
        </select>
        <h2 id="state-name"></h2>
        <p id="description"></p>
        <div id="chart-container"></div>
        <script src="/js/index.js"></script>
    </body>
</html>