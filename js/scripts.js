// Business Logic




// User Interface Logic

$(document).ready(function(){
  $("form#language").submit(function(event) {
    const age = parseInt($("input#age").val());
    alert(age);

    // event.preventDefault();
  });
});