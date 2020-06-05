// Business Logic




// User Interface Logic

$(document).ready(function(){
  $("form#language").submit(function(event) {
    const age = parseInt($("input#age").val());
    const hat = $("input:radio[name=hat]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const coffee = $("#coffee").val();
    const fruit = $("#fruit").val();

    if (hat === "beanie") {
      if (animal === "hedgehog") {
      $("form#language").hide();
      $("div#ruby").show();
      } else if (coffee === "sweet") {
        $("form#language").hide();
        $("div#ruby").show();
      } else if ()
    }

    else {
      alert("it didn't work")
    }
      
    event.preventDefault();
  })
});