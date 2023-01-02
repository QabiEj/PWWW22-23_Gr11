function capitalize_inputs(str) { //function to capitalize inputs
  return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function placeOrder() { //function for placing an order
  //get inputs from form
  var name = capitalize_inputs($("input#name").val());
  var food = $("#food-item").val();
 
  var drinks = [];
  $.each($('input[name="drinks"]:checked'),
      function() {
          drinks.push($(this).val());
      });
  var number = $("#food-number").val();
  var Cost; 
  if (food === "Crispy Veg Burger" || food === "Crispy Chicken Burger" || food === "Cheeseburger") {
     
          Cost = 2.50;
      
  } 
  else if (food === "Cheesecake") {
      
          Cost = 2.90;    
  } 
  
  else if (food === "Beef Burger") {
      
          Cost = 2.75;   
  }
  else if(food==="Rasberry Cake"){
        Cost = 3.00; 
  }
  else if(food==="Tiramisu"){
    Cost = 3.10; 
}
else if(food==="Salmon Burger" || food==="Apple Crip"){
    Cost = 3.20; 
}
else if(food==="Peanut Butter Explosion"){
    Cost = 3.50; 
}
else if(food==="Lamb Burger"){
    Cost = 3.70; 
}
else if(food==="Cherry Pie"){
    Cost = 4.00; 
}


 
  var checkboxes = $('input[name="drinks"]:checked').length; //get number of checkboxes checked
  if (checkboxes <= 3) { //limit number of checkboxes allowed to not more than 3
         if(checkboxes == 1){
          var drinkCost = 1.50;}
          if(checkboxes == 2){
            var drinkCost = 3.00;}
            if(checkboxes == 3){
                var drinkCost = 4.50;}
                if(checkboxes == 0){
                    var drinkCost = 0.00;}
      
      $("input[type='checkbox']:not(:checked)").prop({ //disable unchecked boxes
          disabled: true
      });
      $('#placeorder').prop('disabled', true); //deactivate button after order is made to prevent client from changing order once the order is placed
      $("#yourorder").show();
      var price = (Cost + drinkCost);
      var totalPrice = (price * number);
      $(".salutation").text("Hey" + " " + name + ". Here's your order:");
    
      $(".number").append('<tr><td id="number">' + number);
    
      $(".food-item").append('<tr><td id="food-item">' + food);
      $(".Total1").append('<tr><td id="Total1">' + totalPrice);
      arrayTotal.push(totalPrice); //create an array for all total prices
      if (drinks == "") {
          $(".drinks").append('<tr><td id="drinks">' + "-");
      }
      if (drinks != "") {
          $(".extra-drinks").append('<tr><td id="extra-drinks">' + drinks);
      }
      $(".name").text(name);
  } else {
      document.getElementById("pizza-toppings-help").innerHTML = "Please select a maximum of 3!";
      document.getElementById("pizza-toppings-help").style.cssText = 'color:red !important' //overrides previous color styling
  }
}

function makeDelivery() {
  $("#deliveryConfirmation").show();
  var location = capitalize_inputs($("input#location").val()); //get delivery details
  var phone = $("input#phone").val();
  $(".location").text(location);
  $(".phone").text(phone);
  $("#delivery").hide();
}

$(document).ready(function() {
  $("#orders").submit(function(event) {
      event.preventDefault();
      placeOrder();
  });
  $("#deliveryDetails").submit(function(event) {
      event.preventDefault();
      makeDelivery();
  });
});

function cancelOrders() {
  location.reload(); //reload contents of page to original status
}

var arrayTotal = []; //global array used to store all total prices for each order

function deliveryOptions() {
  $("#deliveryOptions").show();
  $("#orderDetails").hide();
  document.getElementById("orders").reset(); //reset form
  $('#placeorder').prop('disabled', false); //enable place order button
  var checkoutTotal = 0;
  arrayTotal.forEach(function(index) {
      checkoutTotal = checkoutTotal + index;
  });
  $(".totalPick").text(checkoutTotal);
  var checkoutTotalDel = checkoutTotal + 2.00; //add 2 euro to checkout total when delivery is chosen
  $(".totalDel").text(checkoutTotalDel);
}

function pickUp() {
  $("#pickUpConfirmation").show();
  $("#yourorder").hide();
}

function deliver() {
  $("#delivery").show();
  $("#yourorder").hide();
}

function reloadPage() {
  location.reload(); //reload contents of page to original status
}

function clearTextarea() {
  $("#messageForm").reset(); //reset textarea inputs
}

function addOrder() {
  $('#placeorder').prop('disabled', false); //enable button
  $("input[type='checkbox']").prop({ //enable checkboxes
      disabled: false
  });
  $("input[type='checkbox']").prop({ //uncheck previously checked checkboxes
      checked: false
  });
} 