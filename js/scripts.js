
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
      if ((animal === "hedgehog" || animal === "dog")) {
      $("form#language").hide();
      $("div#ruby").show();
      } else if (animal === "boa") {
        $("form#language").hide();
        $("div#python").show();
      } 
    }

    if (hat === "snap") {
      if ((animal === "dog" || animal === "boa")) {
        $("form#language").hide();
        $("div#javascript").show();
      } else if (animal === "hedgehog") {
        $("form#language").hide();
        $("div#ruby").show();
      }
    }
    
    if (hat === "fedora") {
      if ((animal === "hedgehog" || animal === "boa")) {
        $("form#language").hide();
        $("div#python").show();
      } else if (animal === "dog") {
        $("form#language").hide();
        $("div#javascript").show();
      }
    }
    
    if (name === "") {
      alert("Please enter your name")
    }
    event.preventDefault();
  })
});