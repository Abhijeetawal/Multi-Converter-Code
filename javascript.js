function farehnitecelcius() {
   var fahrenheit = (document.conversion.values.value * 9 / 5) + 32;
   document.getElementById("p").innerHTML  = "YOUR ANSWER =  " + fahrenheit + "F";
}

function celciustofarehnite() {
   var celsius = (document.conversion.values.value - 32) * 5 / 9;
   document.getElementById("p").innerHTML= "YOUR ANSWER =  "+ celsius + "C";
}

function feetmeters() {
   var meters = (document.conversion.values.value) / 3.281;
   document.getElementById("p").innerHTML = "YOUR ANSWER =  "+ meters + " Meters";
}

function metersfeet() {
   var feet = (document.conversion.values.value) * 3.28084;
   document.getElementById("p").innerHTML = "YOUR ANSWER =  "+ feet + " ft";
}

function centiinches() {
   var centimeter = (document.conversion.values.value) * 2.54;
   document.getElementById("p").innerHTML = "YOUR ANSWER =  "+ centimeter + " Cm";
}

function inchescenti() {
   var inches = (document.conversion.values.value) / 2.54;
   document.getElementById("p").innerHTML = "YOUR ANSWER =  " + inches + " Inch";
}

function kilopounds() {
   var kg = (document.conversion.values.value) / 2.205;
   document.getElementById("p").innerHTML= "YOUR ANSWER =  "+ kg + " Kg";
}

function poundskilo() {
   var pound = (document.conversion.values.value) * 2.205;
   document.getElementById("p").innerHTML=  " YOUR ANSWER =  "+ pound + " Pounds";
}
function refresh2  (){
   document.getElementById("p").innerHTML ="";
   document.getElementById("abhi").focus()
   
}
