// for current year
var now = new Date();
var year = now.getFullYear(year)
document.getElementById("year").innerText = year

// orignal statement clear 1
document.getElementById("clearOne").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}

// output result clear 2

document.getElementById("clearTwo").onclick = function () {
    document.getElementById("output").innerHTML = ""
}

// clear all 
document.getElementById("clearAll").onclick = function() {
    document.getElementById("output").innerHTML = ""
    document.getElementById("statement").innerHTML = ""
}

// concatenation some string
let strings ="let firstString = prompt('enter your first string')<br>let lastString = prompt('enter your second string')<br>let fullString =  firststring + lastString "
function concatenate() {
    let firstString = prompt('enter your first string')
    let secondString = prompt('enter your second string')
    let fullString =  firstString + secondString
    console.log(fullString) 

    document.getElementById('statement').innerHTML = fullString
    document.getElementById('output').innerHTML = fullString
}

// ASK NAME FROM USER 
function asknamefromuser() {
    let firstName = prompt('Enter your First Name')
    let secondName = prompt('Enter Your Second Name')
    let Name = firstName+" "+secondName
    let fullName = "Welcome!"+" "+firstName+" "+secondName+"!"
    alert(fullName)
    document.getElementById('statement').innerHTML = Name
    document.getElementById('output').innerHTML = fullName
}

// comparison operator 
function comparison() {
    let num1 = prompt('Enter 1st number')
    let num2 = prompt('Enter 2nd number')
    // let nums = num1 ; num2
    if (num1 !== 00 && num2 !== 00) {
        if (num1 > num2) {
            document.getElementById('statement').innerText = "(num1 > num2)"
            document.getElementById('output').innerHTML = 'Number 1 is greater'
        }
        else if (num1 < num2) {
            document.getElementById('statement').innerHTML = "(num1 < num2)"
            document.getElementById('output').innerHTML = 'Number 2 is greater'
        }
        else if (num1 == num2) {
            document.getElementById('statement').innerHTML = "(num1 == num2)"
            document.getElementById('output').innerHTML = 'both number are equal'
        }
    }
    else {
        alert('please enter a number')
        return
    }
}

// if else if 

function ifElse() {
    let marks = prompt('Please Enter Marks')
    console.log(marks)
    if (marks > 90) {
        document.getElementById('statement').innerHTML = marks
        document.getElementById('output').innerHTML = "You Got A Grade"
    }
    else if (marks > 80) {
        document.getElementById('statement').innerHTML = marks
        document.getElementById('output').innerHTML = "You Got B Grade"
    }
    else if (marks > 70) {
        document.getElementById('statement').innerHTML = marks
        document.getElementById('output').innerHTML = "You Got C Grade"
    }
    else if (marks > 60) {
        document.getElementById('statement').innerHTML = marks
        document.getElementById('output').innerHTML = "You Got D Grade"
    }
    else {
            document.getElementById('output').innerHTML = "You Got F Grade"
        
    }

}

// testing set of conditions 
function testingCondition(){

    marks = prompt('Please Enter Marks')
    if (marks > 90) {
        document.getElementById('statement').innerHTML = "(marks > 90)"
        document.getElementById('output').innerHTML = "You Got A Grade"
    }
    else if (marks > 80) {
        document.getElementById('statement').innerHTML = "(marks > 80)"
        document.getElementById('output').innerHTML = "You Got B Grade"
    }
    else if (marks > 70) {
        document.getElementById('statement').innerHTML = "(marks > 70)"
        document.getElementById('output').innerHTML = "You Got C Grade"
    }
    else if (marks > 60) {
        document.getElementById('statement').innerHTML = "(marks > 60)"
        document.getElementById('output').innerHTML = "You Got D Grade"
    }
    else {
        {
            document.getElementById('output').innerHTML = "You Got F Grade"
        }
    }
}

//  nestedStatement 

function nestedStatement() {
    age = prompt('Enter Your Age')
    if (age >= 18) {
        weight = prompt('enter your weight')
        if (weight > 70) {
            alert('you are fatty')
            document.getElementById('statement').innerHTML = "Age="+age+"<br> weight="+weight;
            document.getElementById('output').innerHTML = 'you are fatty'
        }
        else {
            alert('You are young')
            document.getElementById('statement').innerHTML="Age="+age+"<br> weight="+weight;
            document.getElementById('output').innerHTML = 'you are Young'
        }
    }
    else {
        alert('you are baby')
        document.getElementById('statement').innerHTML="(age < 18)"
        document.getElementById('output').innerHTML = 'you are baby'
    }
}

// login 

function login() {
    loginUserName = "usman"
    password = "123"
    Name = prompt('Enter User Name')
    pass = prompt('Enter Password')
    if (Name == loginUserName && pass == password) {
        document.getElementById('statement').innerHTML ="UserName = 'usman'<br>password = '123'"
        document.getElementById('output').innerHTML = "<p><span style='color :green ; font-size: 20 px;'>Sucessfull </span> Login</p>"
    }
    else {
        document.getElementById('statement').innerHTML ="User Name="+Name+"<br> Password="+pass;
        document.getElementById('output').innerHTML = "<p>Login <span style='color:red ; font-size: 20 px;'> Failed </span></p>"
        alert("login Failed! Please enter                                                                        UserName = 'usman'  &   password = '123' ")
    }
}

// let string0=prompt('enter string');
// let string1=prompt('enter the string');
// let total=string0 + string1;
// console.log(total)