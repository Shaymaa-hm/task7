function calcMeters(event){
  event.preventDefault();

  var inputElement = document.getElementById("inches");

  var inches = inputElement.value;

  console.log(inches*0.0254)

  var calculatedmeters=inches*0.0254
  var meters=document.getElementsByClassName("meters")
  meters[0].textContent=inches+" inches = " + calculatedmeters + " meters"
}

