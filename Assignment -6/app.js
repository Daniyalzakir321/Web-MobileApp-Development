// Name : M.Daniyal Zakir
// Roll No: WM5912
// Email: daniyalzakir03@gmail.com
// Assignment-6: JavaScript 18-Chapters Practice


// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CHAPTER NO: 21-25 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

// Task  : 1.
// var first_name=prompt("Enter First Name"), last_name=prompt("Enter Last Name")
// var fullName=first_name+" "+last_name
// document.write("Hello! "+fullName)


// Task  : 2.
// var mobile=prompt("Enter Your Favourite Mobile Name")
// document.write("My favourite phone is: "+mobile+ "<br> Length of string: "+mobile.length )


// Task  : 3.
// var c="Pakistani"
// document.write("String: "+c+ "<br> Index of 'n': "+ c.indexOf("n"))


// Task  : 4.
// var c="Hello World"
// document.write("<br>String: "+c+ "<br> Last index of 'l': "+ c.lastIndexOf("l"))


// Task  : 5.
// var c="Pakistani"
// document.write("<br> String: "+c+ "<br> Character at index 3: "+ c.charAt(3))


// Task  : 6.
// var first_name=prompt("Enter First Name"), last_name=prompt("Enter Last Name")
// document.write("Hello! "+ first_name.concat(" "+last_name))


// Task  : 7.
// var c="Hyderabad"
// var a=c.replace("Hyder","Islam")
// document.write("<br> City: "+c+ "<br> After replacement: "+ a)


// Task  : 8.
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var a=message.replace(/and/g,"&")
// document.write("<br> Before: "+message+ "<br> After replacement: "+ a)


// Task  : 9.
// var a="472"
// var b=Number(a)
// var c=typeof(b)
// document.write("<br> Value: " +a+ "<br>Type: "+c)
// var a=472
// var b=a.toString()
// var c=typeof(b)
// document.write("<br> Value: " +a+ "<br>Type: "+c)


// Task  : 10.
// var user_input=prompt("Enter Input & It Will Convert to Capital/Upper Case")
// var cap=user_input.toUpperCase()
// document.write("<br> User Input: " +user_input+ "<br>Upper case: "+cap)


// Task  :11. 
// var user_input=prompt("Enter String & It Will Converted to Title Case")
// var words = user_input.split(" ")
// var title = ""s
// for (var key of words) {
// var start = key[0].toUpperCase()
// var end = key.slice(1)
// title = title + start + end + " "
// }
// document.write("<br> User Input: " +user_input+ "<br>Title Case: "+title)


// Task  : 12.
// var num=35.36
// var b=num.toString()
// var c=b.replace(".","") 
// document.write("<br> Number: " +num+ "<br>Result: "+c)


// Task  : 13. 
// var user = prompt("Enter The Username")
// for (var i=0; i<user.length; i++) 
// {
// var  ascii = user.charCodeAt(i)
// if (ascii===33 || ascii===44 || ascii===46 || ascii===64) 
// {
// alert("Please enter a valid username")
// break
// }
// }


// Task  : 14.
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var item = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?").toLowerCase()
// for (var i=0; i<A.length; i++)
// {
// if(item==A[i]){
// document.write(item+" is available in our bakery")
// break
// }
// }
// if(notFound){
// document.write("We are sorry, "+item+" is not available in our bakery")
// }


// Task  : 15.
// var password = prompt("Enter Your Password")
// var character_code=  /^[0-9a-zA-Z]+$/
// if(password.length > 6) {
//     if(password.match(character_code)) 
//     { 
//     document.write(" The password is correct: " + password)
//     } 
//     else{
//     document.write(" Please enter a valid password! " + password) 
//     }
// }
// else{
// document.write(" Please enter a valid password! " + password) 
// }


// Task  : 16.
// var university = "University of Karachi"
// var b= university.split("")
// document.write("Before: "+ b+"<br>")
// var c= b.join("<br>")
// document.write("After: <br>"+ c+"<br>")


// Task  : 17.
// var input=prompt("Enter String")
// var b=input.charAt(input.length-1)
// document.write("User input: " +input+" <br>Last character of input: "+ b)


// Task  : 18.
// var input="The quick brown fox jumps over the lazy dog".toLowerCase()
// var flag=0
// for(var i=0; i<input.length; i++)
// {
// if(input.slice(i,i+3)==="the"){
// flag++
// }
// }
// document.write("Text: " +input+" <br>There are "+flag+ " occurrence(s) of word 'the'")







// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CHAPTER NO: 26-30 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

// Task  : 1.
// var input=Number(prompt("Enter Positive Integers"))
// document.write("Number: "+input+"<br>Round Off Value: "+Math.round(input)+"<br> Floor Value: "+Math.floor(input)+"<br>Ceil Value: "+Math.ceil(input))


// Task  : 2.
// var input=Number(prompt("Enter Negative Integers"))
// document.write("Number: "+input+"<br>Round Off Value: "+Math.round(input)+"<br> Floor Value: "+Math.floor(input)+"<br>Ceil Value: "+Math.ceil(input))


// Task  : 3.
// var input= -4
// document.write("The absolute value of "+input+" is "+Math.abs(input))


// Task  : 4.
// document.write("Random dice value: "+Math.floor(  (Math.random()*6) +1) )
// document.write("<br>Random dice value: "+Math.floor(  (Math.random()*6) +1) )


// Task  : 5.
// var toss=(Math.random()*2) +1
// var toss=Math.floor(toss)
// if (toss==1){
// document.write(toss+ "<br>Random coin value: Heads" )
// }
// else{
// document.write(toss+ "<br>Random coin value: Tails" )
// }


// Task  : 6.
// document.write("Random number between 1 and 100: "+Math.floor( (Math.random()*100) +1 )  )


// Task  : 7.
// var weight=prompt("Enter Your Weight In Kilograms")
// weight=weight.replace("kgs","")
// weight=weight.replace("kg","")
// weight=weight.replace("kilograms","")
// weight=weight.replace("kilogram","")
// document.write("The weight of users is "+ weight+" kilograms")


// Task  : 8.
// var game=Number(prompt("Enter a number between 1 to 10"))
// var a=Math.floor( (Math.random()*10) +1 )
// if(game===a)
// {
// alert("Congratulations, You Won ")
// }
// else{
// alert("Try Again! ")
// }






// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CHAPTER NO: 31-34 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

// Task  : 1.
// document.write(Date())


// Task  : 2.
// var months=["January" , "February" , "March" , "April", "May","June", "July", "August", "September", "October","November", "December"]
// var month=new Date()
// month=month.getMonth()
// month_word=months[month]
// alert("Current month is: "+month_word)


// Task  : 3.
// var day=Date()
// var day=day.slice(0,3)
// alert("Today is "+day)


// Task  : 4.
// var day=new Date()
// day= day.getDay()
// if(day==0 || day==6)
// {
// document.write("It's Fun Day ")    
// }
// else{
// document.write("Today is Not Sat or Sun")    
// }


// Task  : 5.
// var date= new  Date()
// date=date.getDate()
// if(date < 16){
// document.write("First fifteen days of the month "+date)
// }
// else{
// document.write("Last days of the month "+date)
// }


// Task  : 6.
// var date=new Date()
// document.write("Current Datte: "+date)
// document.write("<br>Elapsed milliseconds since January 1, 1970 :  "+date.getTime())
// document.write("<br>Elapsed minutes since January 1,1970 :  "+date.getTime() / (1000*60))


// Task  : 7.
// var date=new Date()
// hour=date.getHours()
// if(hour>0  &&  hour<=12){
// document.write("Its AM ")
// }
// else{
// document.write("Its PM ")
// }


// Task  : 8.
// var date=new Date("Dec 31, 2020")
// document.write("Later date: "+ date)


// Task  : 9.
// var start=new Date("June 18, 2015")
// start=start.getTime()
// var end=new Date()
// end=end.getTime()
// var diff=end-start
// document.write( Math.floor( diff/(1000*60*60*24) ) +" days have passed since 1st Ramadan, 2015")


// Task  : 10.
// var start=new Date("Jan 1, 2015")
// start=start.getTime()
// var end=new Date("Dec 5, 2015")
// end_ref_date=end.getTime()
// var diff=end_ref_date-start
// document.write("On reference date "+ end +", "+ Math.floor( diff/1000 ) +" seconds had passed since beginning of 2015")


// Task  :11.
// var date=new Date()
// document.write("Current date: "+ date)
// var get_hour=date.getHours()
// date.setHours(get_hour-10)
// document.write("<br>One hour ago, it was: " +date)


// Task  : 12.
// var date=new Date()
// document.write("Current date: "+ date)
// var year=date.getFullYear()
// date.setFullYear(year-100)
// document.write("<br>100 years back, it was: " +date)



// Task  : 13.
// var age=prompt("Enter Your Age")
// document.write("Your age is: "+ age)
// var date=new Date()
// var year=date.getFullYear()
// document.write("<br>Your birth year is: " +(year-age))


// Task  : 14.
// document.write(" <h1> K-Electric Bill </h1>  ")
// document.write("Customer Name: <b> ABC Customer </b>")
// document.write("<br> Month: <b> February </b>")
// var units = 410
// var charges = 16
// var surcharges = 350
// document.write(`<br>  Number of units: <b>  ${units} </b> `)
// document.write(`<br>  Charges per unit: <b>  ${charges} </b> `)
// document.write(`<br><br>  Net Amount Payable (within Due Date): <b>  ${(charges * units).toFixed(2)} </b> `)
// document.write(`<br> Late Payment Surcharge: <b>  ${surcharges} </b> `)
// document.write(`<br> Gross Amount Payable (after Due Date): <b>  ${((charges * units) + surcharges).toFixed(2)} </b>`)







// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CHAPTER NO: 35-38 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

// Task  : 1.
// function dateTime(){
// document.write(Date())
// }
// dateTime()


// Task  : 2.
// function greets(){
// var first_name=prompt("Enter Your First Name")
// var last_name=prompt("Enter Your Last Name")
// alert("Hello! "+first_name+" "+last_name)
// }
// greets()


// Task  : 3.
// function add(){
// var num1=Number(prompt("Enter First Number"))
// var num2=Number(prompt("Enter Second Number"))
// alert(num1+num2)
// }
// add()


// Task  : 4. 
// function calculator(num1,num2,operator) {
//     if (operator == "+") {
//         alert(num1 + num2)
//     }
//     else if (operator == "-") {
//         alert(num1 - num2)
//     }
//     else if (operator == "*") {
//         alert(num1 * num2)
//     }
//     else if (operator == "/") {
//         alert(num1 / num2)
//     }
// }
// calculator(4,2,"+")


// Task  : 5.
// function square(arg){
//     document.write("Square of "+arg+" is "+arg**2)
// }
// square(5)


// Task  : 6.
// function factorial(num) {
//     var flag = 1
//     for (var i = 1; i <= num; i++) {
//         flag = flag * i
//     }
//     return flag
// }
// num = 5
// document.write("Factorial of " + num + " is " + factorial(num))


// Task  : 7.
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>")
//     }
// }
// counting(1, 100)


// Task  : 8.
// function calculateHypotenuse(base, per) {
//   var hypotenuse= calculateSquare(base) + calculateSquare(per) 
//    hypotenuse=Math.sqrt(hypotenuse)
//    return hypotenuse.toFixed(2)

//    function calculateSquare(number) {
//     return number**2 }
// }
// var base = Number(prompt("Enter Base Value Of Triangle: "))
// var per  = Number(prompt("Enter Perpendicular Value Of Triangle: "))
// document.write("Base value: " + base)
// document.write("<br> Perpendicular value: " + per)
// document.write("<br> Hypotenuse is: "+ calculateHypotenuse(base, per))


// Task  : 9.
// function area(width, height){
//    var Area=width*height
//     document.write("Width: "+ width)
//     document.write("<br> Height: "+ height)
//     document.write("<br> Area: "+Area)
// }
// var height=10
// area(10,height)


// Task  : 10.
// function palindrome(p) {
//     for (var a=0; a < p.length; a+=1) {
//         if (p[a] !==p[p.length - 1 - a]) {
//             document.write("No")
//             break }
//         else {
//             document.write("Yes")
//             break }
//     }
// }
// palindrome("madam")


// Task  :11.
// function titlecase(arg) {
//     var words = arg.split(" ")
//     var title = ""
//     for (var key of words) {
//         var start = key[0].toUpperCase()
//         var end = key.slice(1)
//         title = title + start + end + " "
//     }
//     document.write("EXAMPLE STRING: " +arg)
//     document.write("<br>EXPECTED OUTPUT : "+title)
// }
// titlecase("the quick brown fox")


// Task  : 12.
// function longestword(arg) {
//     var words = arg.split(" ")
//     var word = words[0]
//     for (var key of words) {
//         if (key.length > word.length) {
//             word = key }
//     }
//     document.write("EXAMPLE STRING: " +arg)
//     document.write("<br>EXPECTED OUTPUT: " + word)
// }
// longestword("Web Development Course")


// Task  : 13.
// function stringoccurance(arg1, arg2) {
//     var flag = 0
//     arg1 = arg1.toLowerCase()
//     arg2 = arg2.toLowerCase()
//     var occure = arg1.split("")
//     for (var key of occure) {
//         if (arg2 === key) {
//             flag++  }
//     }
//     document.write("EXAMPLE STRING: " + arg1)
//     document.write("<br>OUTPUT: " + arg2 + " occurrences: "+ flag +" time")
// }
// stringoccurance("JSResourceS.com", "o")


// Task  : 14.
// document.write("<h1>The Geometrizer</h1>")
// function calcCircumference(radius) {
//     var circumference =Math.PI * radius * 2
//     document.write("Circumference of circle is: "+ circumference.toFixed(2) )
// }
// function calcArea(radius) {
//     var area =Math.PI * (radius**2)
//     document.write("<br> Area of circle is: "+ area.toFixed(2) )
// }
// var radius = Number(prompt("Enter The Radius of Circle"))
// calcCircumference(radius)
// calcArea(radius)