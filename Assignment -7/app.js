// function c(){
// var numb=document.getElementById("num") 
// alert( numb.value )
// }



function Clear(){
var num=document.getElementById("num") 
num.value="" 
}


function num(arg){
var num=document.getElementById("num") 
num.value +=arg
}

function equal(){
var num=document.getElementById("num") 
num.value =eval(num.value)
}

function num_sqroot(){
var num=document.getElementById("num") 
num.value =Math.sqrt(num.value)
}

function num_square(){
var num=document.getElementById("num") 
num.value = (num.value)**2
}

function num_log(){
var num=document.getElementById("num") 
num.value = Math.log(num.value)
}
function num_sin(){
 var num=document.getElementById("num") 
num.value = Math.sin(num.value)
}
function num_cos(){
var num=document.getElementById("num") 
num.value = Math.cos(num.value)
}
function num_tan(){
var num=document.getElementById("num") 
num.value = Math.tan(num.value)
}

function currentDate(){
var day=Date()
day=day.slice(15,20)
var date=new Date()
hour=date.getHours()
if(hour>0  &&  hour<=12){
 document.getElementById("num").innerHTML  = day+" am"
}
else{
document.write(day+" pm")
}
}
// currentDate()