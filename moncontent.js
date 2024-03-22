function openDefaults() {
    'use strict';
    // Get the element with id="defaultOpen" and click on it
    let mon = "";
        for (let i = 1; i < 11; i += 1) {
        mon = "defaultOpen" + i;
        document.getElementById(mon).click();
    }
}

function openCity(evt, cityName, mon) {
    'use strict';
    var i, tabcontent, tablinks;
    
    //tabcontent = document.getElementsByClassName("tabcontent");
    //for (i = 0; i < tabcontent.length; i += 1) {
    //    tabcontent[i].style.display = "none";
    //}
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i += 1) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    //document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    switch (cityName) {
    case "A": // Full
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 240px"><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "C": // 4-way
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 120px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td> </tr><tr style="height: 120px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "F": // 9-way
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "G": // 12-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="4"></td> </tr> </table>';
        break;
    case "H": // 16-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "K": // 25-way   
        document.getElementById(mon).innerHTML = '<div id="K" class="tabcontent"> <table class="table"> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table></div>'; 
        break;
    case "N": // VT Co-ord 1
        document.getElementById(mon).innerHTML = '<div id="N" class="tabcontent"> <table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table></div>';
        break;
    case "O": // VT Co-ord 2
        document.getElementById(mon).innerHTML = '<div id="O" class="tabcontent"> <table class="table"> <colgroup> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> </colgroup> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 144px"> <td colspan="5" ><input type="text" class="textbox"></td> <td colspan="5" ><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr></table></div>';
        break;
    case "P": // 10+2
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "Q": // 3+2
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "R": // 4+2
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="4"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "S": // 8+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="4"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "V": // 3+4
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "W": // 
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "X": // 12+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "Y": // 1+12
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "AA": // 24-way VT Co-ord
        document.getElementById(mon).innerHTML = '<div id="AA" class="tabcontent"> <table class="table"> <colgroup> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> </colgroup> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td> </td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td> </td> </tr></table></div>';
        break;            
    case "EE": // 6+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 80px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 80px"> <td colspan="3" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 80px"> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "GG": // 2+10
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    }
}