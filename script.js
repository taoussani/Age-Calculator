
function ageCalculator() {

    var birthday = document.getElementById("p1").value;  
    var arr = birthday.split("-");

    var d1 = arr[2];
    var m1 = arr[1];
    var y1 = arr[0];

    if(birthday==null || birthday=='') {  
      document.getElementById("result").innerHTML = "**Choose a date please!";    
      return false;   

    } else {  
        var date = new Date();
        var d2 = date.getDate();
        var m2 = 1 + date.getMonth();
        var y2 = date.getFullYear();

        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
        }

        if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
        }

        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;


    }

        let output = '';
        output = `<div class="result">${y} year </br> ${m} month </br> ${d} days </div>`;
        document.getElementById('div1').innerHTML = output;

}

