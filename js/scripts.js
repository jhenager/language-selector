// Business Logic




// User Interface Logic

$(document).ready(function(){
  $("form#language").submit(function(event) {
    const age = parseInt($("input#age").val());
    if (age>18 && "input[type=radio][value=beanie]:checked"){
      alert("Beanie is checked");
    } else{
      alert("It didn't work")
    }
   
    event.preventDefault();
  })
});