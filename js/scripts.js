// Business Logic




// User Interface Logic

$(document).ready(function(){
  $("form#language").submit(function(event) {
    const name = $("input#name").val();
    const hat = $("input:radio[name=hat]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const coffee = $("#coffee").val();
    const fruit = $("#fruit").val();

    $("#ruby-name").prepend(name + ", ");
    $("#python-name").prepend(name + ", ");
    $("#java-name").prepend(name + ", ");

    if (hat === "beanie") {
      if ((animal === "hedgehog" || animal === "boa")) {
      $("form#language").hide();
      $("div#ruby").show();
      } else if (coffee === "sweet") {
        $("form#language").hide();
        $("div#ruby").show();
      } 
    }

    else {
      alert("it didn't work")
    }
    
    
    

  
    event.preventDefault();
  })
});