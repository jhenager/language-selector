// Business Logic




// User Interface Logic

$(document).ready(function(){
  $("form#language").submit(function(event) {
    const age = parseInt($("input#age").val());
    const hat = $("input:radio[name=hat]:checked").val();

    if ((age>18) && (hat === "beanie")) {
      alert("Beanie is checked");
    } 
      
    event.preventDefault();
  })
});