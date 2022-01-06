
function ageCalculator() {
    var today = new Date();
    var userinput = document.getElementById("p1").value;  
    var birthday = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("result").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
            var age = today.getFullYear() - birthday.getFullYear();
            var m = today.getMonth() - birthday.getMonth();
            var d = today.getDay() - birthday.getDay();
                var b = Math.abs(m);  

            if (b < 0 || (b === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

        let output = '';
        output = `<div class="result">${age} year </br> ${b} mounth </br> ${d} days </div>`;
        document.getElementById('div1').innerHTML = output;

}

}