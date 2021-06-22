

Petya Katsarova <pskpetya@gmail.com>
To:
Petya Katsarova

Mon, 14 June at 1:15 pm

<html>
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
           // cdump($tgtPositions);
            // $windowId = '';
            $blind_positions = Array();

            foreach($tgtPositions['data'] as $position=>$value){
                $blind_positions[$value["id"]] = $value['tgt'];
            }    

            ksort($blind_positions);
            cdump($blind_positions);
        ?>
        <div id="wrapper">
            <svg id="svg_blinds" viewBox="-2 -2.5 17 17" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                <?php
                 foreach($blind_positions as $id=>$vals) {
                ?>
                    <pattern id="slots_<?php echo $id; ?>" width=".5" height="0.5" patternUnits="userSpaceOnUse" >
                        <circle cx="0.25" cy="0.25" r="0.25" fill="transparent" style="stroke:none"/>
                        <!-- width bellow was 0.05 -->
                        <rect x="0.225"    width="0.1" height="100%" fill="beige" style="stroke:none;<?php
                        // $id is it an array?
                      
                            // default for vertical blinds is 90deg: u add on top the rot angle u want
                            echo "transform:rotate(".((in_array($id,Array("5","6","7")) ? 90 : 0) + $blind_positions[$id]['rot'])."deg);";   
                            echo "transform-origin: .25px .25px;";
                        
                        ?>" />
                        
                    </pattern>
                <?php } ?>
                <!-- closing foreach -->
                </defs>

                <!-- frame: 2 paralepipeds, 1 polygon -->
                <rect x="0" width="10.2" height="5.5" fill="none" />
                <rect x="10.2" width="3.3" height="5.5" fill="none"/>
                <polygon points="0,5.5 10.2,5.5 10.2,12.5 0,11" x="3" y="7.5" width="13.5" height="5.5" fill="none" />
            
               <!-- return all windows svg -->
               <g class="horizontalWindow">
                    
                    <svg class="windows" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $blind_positions[1]['lin'];?>%" height="100%" class="blinds" fill="url(#slots_1)" />
                    </svg>
                    <svg class="flipped windows" x="3.3" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $blind_positions[2]['lin']; ?>%" height="100%" class="blinds"  fill="url(#slots_2)" />
                    </svg>
                    <svg class="flipped windows" x="6.6" width="3.1" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $blind_positions[3]['lin']; ?>%" height="100%" class="blinds" fill="url(#slots_3)" />
                    </svg>
                    <svg class="windows" x="10.125" width="3" height=".5" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <rect width="100%" height="100%" />
                        <rect width="<?php echo $blind_positions[4]['lin']; ?>%" height="100%" class="blinds" fill="url(#slots_4)"/>
                    </svg>
                </g>
                <g class="verticalWindow">
                    <svg class="flipped windows" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $blind_positions[5]['lin']; ?>%" fill="url(#slots_5)"/>
                    </svg>
                    <svg class="flipped windows" x="13.5" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $blind_positions[6]["lin"]; ?>%" fill="url(#slots_6)"/>
                    </svg>
                    <svg class="flipped windows" y="5.5" width=".5" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" />
                        <rect class="blinds" width="100%" height="<?php echo $blind_positions[7]['lin']; ?>%" fill="url(#slots_7)"/>
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
                    console.log(inputWindow[i]);
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
</html>




