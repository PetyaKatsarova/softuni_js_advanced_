<html>
    <head>
        <title>Office Blinds</title>
        <!-- <link href="resources/blinds.css" type="text/css" rel="stylesheet" /> -->
    </head>
    <body>

       <style>
          #wrapper{
    margin: 10% 2.5%;
    border: 2px dashed yellow;
}

#svg_blinds{
   display: inline-block;
   width: 45%;
   padding-left: 12%;
   border: 1px solid rgb(238, 223, 195); 
}
#formWindows{
    display: inline-block;
    vertical-align: top;
    /* margin: 0; */
    width: 40%;
    border: 1px solid rgb(233, 190, 233);
}

/* svg */
* {
    stroke-width: 0.1;
    stroke:black;
}
.verticalWindow svg rect, .horizontalWindow svg rect{
    opacity: 1;
}
.verticalWindow{
    transform:translate(-.25px, .22px);
}
.horizontalWindow{
    transform: translate(.22px, -.25px);
}
/* .verticalWindow svg .blinds, .horizontalWindow svg .blinds{
    <!-- fill-opacity: .4; -->
    <!-- fill: black; -->
} */
.flipped .blinds{
transform: rotate(180deg);
transform-origin: 50% 50%;
}



       </style>
       

        <?php 
             if(isset($_POST['moveBlinds'])){
                 $id = implode(',', $_POST['inputWindow']);// $id = str of all window blinds id
                 $data = Array('id'=>$id, 'lin'=>(int) $_POST['lin'], 'rot'=>(int) $_POST['rot']);
                 $http = new http();
                 $response = $http->get("http://fancyson.kantoor.ddvtech.com:5000/blinds", json_encode($data), Array("Content-Type"=>"application/json"));
                 if($response){
                     $decoded = json_decode($response,true);
                     if($decoded || isset($decoded['message'])){
                        msg($decoded['message']);
                     }else{
                         echo $response;
                     }
                
                }else{
                    errmsg('no responce');
                    cdump($http);
                }
            }
            // true is to change the assoc in arr
            $tgtPositions = json_decode($http->get("http://fancyson.kantoor.ddvtech.com:5000/blinds"),true);
            $windowId = '';
            $lin_1 = $lin_2 = $lin_3 = $lin_4 = $lin_5 = $lin_6 = $lin_7 = 0;

            foreach($tgtPositions['data'] as $position=>$value){

                 switch($value['id']){
                     case '1': {
                         $lin_1 =$value['tgt']['lin'];
                         echo "lin 1 = $lin_1</br>";
                     }
                     break;
                     case '2': {
                        $lin_2 =$value['tgt']['lin'];
                        echo "lin 2 = $lin_2</br>";
                    }
                    break;
                    case '3': {
                        $lin_3 =$value['tgt']['lin'];
                        echo "lin 3 = $lin_3</br>";
                    }
                    break;
                    case '4': {
                        $lin_4 =$value['tgt']['lin'];
                        echo "lin 4 = $lin_4</br>";
                    }
                    break;
                    case '5': {
                        $lin_5 =$value['tgt']['lin'];
                        echo "lin 5 = $lin_5</br>";
                    }
                    break;
                    case '6': {
                        $lin_6 =$value['tgt']['lin'];
                        echo "lin 6 = $lin_6</br>";
                    }
                    break;
                    case '7': {
                        $lin_7 =$value['tgt']['lin'];
                        echo "lin 7 = $lin_7</br>";
                    }
                    break;
                    default: 
                        echo "No received linear value.";
                 }

                // $lin = $value['tgt']['lin'];
                // $rot = $value['tgt']['rot'];
            }
            // cdump($tgtPositions);
            // set svg blinds on tgt position
        ?>
        <div id="wrapper">
            <svg id="svg_blinds" viewBox="-2 -2.5 17 17" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                <?php
                for ($i = 1; $i <= 7; $i++) {
                ?>
                    <pattern id="slots_<?php echo $i; ?>" width=".5" height="0.5" patternUnits="userSpaceOnUse" >
                        <circle cx="0.25" cy="0.25" r="0.25" fill="lime" style="stroke:none"/>
                        <rect x="0.225" width="0.05" height="100%" fill="red" style="stroke:none; <?php if (in_array($i,Array(5,6,7))) { echo "transform:rotate(90deg); transform-origin: center;"; } ?>" />
                    </pattern>
                <?php } ?>
                </defs>

                <!-- frame: 2 paralepipeds, 1 polygon -->
                <rect x="0" width="10.2" height="5.5" fill="none" />
                <rect x="10.2" width="3.3" height="5.5" fill="none"/>
                <polygon points="0,5.5 10.2,5.5 10.2,12.5 0,11" x="3" y="7.5" width="13.5" height="5.5" fill="none" />
            
                <g class="horizontalWindow">
                    
                    <svg class="windows" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_1;?>%" height="100%" class="blinds" fill="url(#slots_1)" />
                    </svg>
                    <svg class="flipped windows" x="3.3" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_2; ?>%" height="100%" class="blinds"  fill="url(#slots_2)" />
                    </svg>
                    <svg class="flipped windows" x="6.6" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_3; ?>%" height="100%" class="blinds" fill="url(#slots_3)" />
                    </svg>
                    <svg class="windows" x="10.125" width="3" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_4; ?>%" height="100%" class="blinds" fill="url(#slots_4)"/>
                    </svg>
                </g>
                <g class="verticalWindow">
                    <svg class="flipped windows" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $lin_5; ?>%" fill="url(#slots_5)"/>
                    </svg>
                    <svg class="flipped windows" x="13.5" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $lin_6; ?>%" fill="url(#slots_6)"/>
                    </svg>
                    <svg class="flipped windows" y="5.5" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $lin_7; ?>%" fill="url(#slots_7)"/>
                    </svg>
                </g>
            </svg>
            <form id="formWindows" method="post">
                <label>Select a window: </label>
                <div class="checkboxesWrapper">
                <?php
                    for ($i = 1; $i <= 7; $i++) {
                ?>
                        <input type="checkbox" name="inputWindow[]" value="<?php echo $i; ?>" />
                <?php } ?>
                        </div>
                        <label for="lin">Linear Position: </label>
                        <input type="range" name="lin" min="1" max="100" value="30" class="slider" id="lin" />
                        <label for="rot">AngleRotation: </label>
                        <input type="range" name="rot" min="1" max="100" value="60" class="slider" id="rot" />
                        <label> Select All: </label>
                        <input type="checkbox" name="windows_all" />
                        <input type="submit" name="moveBlinds"/>
            </form>
        </div> <!--  #wrapper -->
        <script>
            let windows = document.querySelectorAll('.windows');

            for(let i=0; i<windows.length; i++){
               windows[i].addEventListener('mouseover', (e)=>{
                windows[i].style.cursor = "pointer";
               });

                windows[i].addEventListener('click', (e)=>{
                    // check/uncheck corresponding input 
                    let inputWindow = document.querySelector(`input[value="${i+1}"]`);
                    if(!inputWindow.checked){
                        inputWindow.setAttribute('checked', true);
                        inputWindow.checked = true;
                    }else{
                        inputWindow.removeAttribute('çhecked');
                        inputWindow.checked = false;
                    }
                });
            }
                let inputWindowsAll = document.querySelector('input[name="windows_all"]');
                inputWindowsAll.addEventListener("change", ()=>{
                    let windows = document.querySelectorAll("input[type='checkbox']");
                    for(let window of windows){
                        if(inputWindowsAll.checked == true){
                            window.setAttribute('checked', tru<html>
    <head>
        <title>Office Blinds</title>
        <link href="resources/blinds.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <?php 
             if(isset($_POST['moveBlinds'])){
                 $id = implode(',', $_POST['inputWindow']);// $id = str of all window blinds id
                 $data = Array('id'=>$id, 'lin'=>(int) $_POST['lin'], 'rot'=>(int) $_POST['rot']);
                 $http = new http();
                 $response = $http->get("http://fancyson.kantoor.ddvtech.com:5000/blinds", json_encode($data), Array("Content-Type"=>"application/json"));
                 if($response){
                     $decoded = json_decode($response,true);
                     if($decoded || isset($decoded['message'])){
                        msg($decoded['message']);
                     }else{
                         echo $response;
                     }
                
                }else{
                    errmsg('no responce');
                    cdump($http);
                }
            }
            // true is to change the assoc in arr
            $tgtPositions = json_decode($http->get("http://fancyson.kantoor.ddvtech.com:5000/blinds"),true);
            $windowId = '';
            $lin_1 = $lin_2 = $lin_3 = $lin_4 = $lin_5 = $lin_6 = $lin_7 = 0;

            foreach($tgtPositions['data'] as $position=>$value){

                 switch($value['id']){
                     case '1': {
                         $lin_1 =$value['tgt']['lin'];
                         echo "lin 1 = $lin_1</br>";
                     }
                     break;
                     case '2': {
                        $lin_2 =$value['tgt']['lin'];
                        echo "lin 2 = $lin_2</br>";
                    }
                    break;
                    case '3': {
                        $lin_3 =$value['tgt']['lin'];
                        echo "lin 3 = $lin_3</br>";
                    }
                    break;
                    case '4': {
                        $lin_4 =$value['tgt']['lin'];
                        echo "lin 4 = $lin_4</br>";
                    }
                    break;
                    case '5': {
                        $lin_5 =$value['tgt']['lin'];
                        echo "lin 5 = $lin_5</br>";
                    }
                    break;
                    case '6': {
                        $lin_6 =$value['tgt']['lin'];
                        echo "lin 6 = $lin_6</br>";
                    }
                    break;
                    case '7': {
                        $lin_7 =$value['tgt']['lin'];
                        echo "lin 7 = $lin_7</br>";
                    }
                    break;
                    default: 
                        echo "No received linear value.";
                 }

                // $lin = $value['tgt']['lin'];
                // $rot = $value['tgt']['rot'];
            }
            // cdump($tgtPositions);
            // set svg blinds on tgt position
        ?>
        <div id="wrapper">
            <svg id="svg_blinds" viewBox="-2 -2.5 17 17" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                <?php
                for ($i = 1; $i <= 7; $i++) {
                ?>
                    <pattern id="slots_<?php echo $i; ?>" width=".5" height="0.5" patternUnits="userSpaceOnUse" >
                        <circle cx="0.25" cy="0.25" r="0.25" fill="lime" style="stroke:none"/>
                        <rect x="0.225" width="0.05" height="100%" fill="red" style="stroke:none; <?php if (in_array($i,Array(5,6,7))) { echo "transform:rotate(90deg); transform-origin: center;"; } ?>" />
                    </pattern>
                <?php } ?>
                </defs>

                <!-- frame: 2 paralepipeds, 1 polygon -->
                <rect x="0" width="10.2" height="5.5" fill="none" />
                <rect x="10.2" width="3.3" height="5.5" fill="none"/>
                <polygon points="0,5.5 10.2,5.5 10.2,12.5 0,11" x="3" y="7.5" width="13.5" height="5.5" fill="none" />
            
                <g class="horizontalWindow">
                    
                    <svg class="windows" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_1;?>%" height="100%" class="blinds" fill="url(#slots_1)" />
                    </svg>
                    <svg class="flipped windows" x="3.3" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_2; ?>%" height="100%" class="blinds"  fill="url(#slots_2)" />
                    </svg>
                    <svg class="flipped windows" x="6.6" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_3; ?>%" height="100%" class="blinds" fill="url(#slots_3)" />
                    </svg>
                    <svg class="windows" x="10.125" width="3" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $lin_4; ?>%" height="100%" class="blinds" fill="url(#slots_4)"/>
                    </svg>
                </g>
                <g class="verticalWindow">
                    <svg class="flipped windows" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $lin_5; ?>%" fill="url(#slots_5)"/>
                    </svg>
                    <svg class="flipped windows" x="13.5" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $lin_6; ?>%" fill="url(#slots_6)"/>
                    </svg>
                    <svg class="flipped windows" y="5.5" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $lin_7; ?>%" fill="url(#slots_7)"/>
                    </svg>
                </g>
            </svg>
            <form id="formWindows" method="post">
                <label>Select a window: </label>
                <div class="checkboxesWrapper">
                <?php
                    for ($i = 1; $i <= 7; $i++) {
                ?>
                        <input type="checkbox" name="inputWindow[]" value="<?php echo $i; ?>" />
                <?php } ?>
                        </div>
                        <label for="lin">Linear Position: </label>
                        <input type="range" name="lin" min="1" max="100" value="30" class="slider" id="lin" />
                        <label for="rot">AngleRotation: </label>
                        <input type="range" name="rot" min="1" max="100" value="60" class="slider" id="rot" />
                        <label> Select All: </label>
                        <input type="checkbox" name="windows_all" />
                        <input type="submit" name="moveBlinds"/>
            </form>
        </div> <!--  #wrapper -->
        <script>
            let windows = document.querySelectorAll('.windows');

            for(let i=0; i<windows.length; i++){
               windows[i].addEventListener('mouseover', (e)=>{
                windows[i].style.cursor = "pointer";
               });

                windows[i].addEventListener('click', (e)=>{
                    // check/uncheck corresponding input 
                    let inputWindow = document.querySelector(`input[value="${i+1}"]`);
                    if(!inputWindow.checked){
                        inputWindow.setAttribute('checked', true);
                        inputWindow.checked = true;
                    }else{
                        inputWindow.removeAttribute('çhecked');
                        inputWindow.checked = false;
                    }
                });
            }
                let inputWindowsAll = document.querySelector('input[name="windows_all"]');
                inputWindowsAll.addEventListener("change", ()=>{
                    let windows = document.querySelectorAll("input[type='checkbox']");
                    for(let window of windows){
                        if(inputWindowsAll.checked == true){
                            window.setAttribute('checked', true);
                            window.checked = true;
                        }else{
                            window.removeAttribute("checked");
                            window.checked = false;
                        }
                    }
                });
        </script>
        <?php var_dump($_POST); ?>
    </body>
</html>e);
                            window.checked = true;
                        }else{
                            window.removeAttribute("checked");
                            window.checked = false;
                        }
                    }
                });
        </script>
        <?php var_dump($_POST); ?>
    </body>
</html>