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
num.value =Math.sqrt(num.value).toFixed(4) 
}

function num_square(){
var num=document.getElementById("num") 
num.value = ((num.value)**2).toFixed(4) 
}

function num_log(){
var num=document.getElementById("num") 
num.value = Math.log(num.value).toFixed(4) 
}
function num_sin(){
 var num=document.getElementById("num") 
num.value = Math.sin(num.value).toFixed(4) 
}
function num_cos(){
var num=document.getElementById("num") 
num.value = Math.cos(num.value).toFixed(4) 
}
function num_tan(){
var num=document.getElementById("num") 
num.value = Math.tan(num.value).toFixed(4) 
}

function num_pi(){
var num=document.getElementById("num") 
num.value += 3.14
}

function num_exp(){
var num=document.getElementById("num") 
num.value +=(Math.exp(num.value)).toFixed(4) 
}

function num_ln(){
var num=document.getElementById("num") 
num.value =Math.log(num.value).toFixed(4) 
}

function num_del(){
var num=document.getElementById("num") 
num.value = num.value.substring(0, num.value.length - 1)
}

function num_rad(){
var num=document.getElementById("num")
num.value = ((num.value) * (0.017444)).toFixed(4) 
}

function num_factorial(){
var num=document.getElementById("num")
var flags = 1
for (var i=1; i<=num; i++) {
flags = flags*i
}
num.value = flags
}
