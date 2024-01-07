// Question # 1
document.write("<h3>Question # 1 :Write a function that displays current date & time in your browser </h3>")

document.write("answer" + "<br>")

function dateTime() {
    var now = new Date()
    document.write(now);
}
dateTime()


// Question # 2
document.write("<h3>Question # 2 :Write a function that takes first & last name and then it greets the user using his full name </h3>")

document.write("answer" + "<br>")

function fullName() {
    var firstName = prompt("enter your first name")
    var lastName = prompt("enter your first name")
    var fullName = ("hello" + " " + firstName + " " + lastName)
    document.write(fullName)
}
fullName()



// Question # 3
document.write("<h3>Question # 3 : Write a function that adds two numbers (input by user) and returns the sum of two numbers. </h3>")

document.write("answer" + "<br>")

function num() {
    var EnterNum1 = +prompt("enter your first Number")
    var EnterNum2 = +prompt("enter your second Number")
    var sum = (EnterNum1 + EnterNum2)
    document.write(sum)
    return sum
}
num()



// Question # 4
document.write("<h3>Question # 4 :  Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser </h3>")

document.write("answer" + "<br>")

function calculator(num1, oper, num2) {

    var num1 = +prompt("Enter You Number-1 for Desired")
    var oper = prompt("Enter You Operator(-,+,*,/) for Desired")
    var num2 = +prompt("Enter You Number-2 for Desired")

    if (oper == "+") {
        document.write(num1 + num2)
    } else if (oper == "-") {
        document.write(num1 - num2)
    } else if (oper == "*") {
        document.write(num1 * num2)
    }
    else if (oper == "/") {
        document.write(num1 / num2)
    }

}
calculator()



// Question # 5
document.write("<h3>Question # 5 :  Write a function that squares its argument. </h3>")


document.write("answer" + "<br>")

function square(number) {

    document.write(number * number)
    return (number * number);
}
square(prompt("Enter Number For Square"))


// Question # 6
document.write("<h3>Question # 6 :   Write a function that computes factorial of a number.</h3>")


document.write("answer" + "<br>")


// Question # 7
document.write("<h3>Question # 7 :   Write a function that take start and end number as inputs & display counting in your browser.</h3>")


document.write("answer" + "<br>")

function counting (){
var startNum = prompt("Enter Number for start counting" )
var endNum = prompt("Enter Number for end counting" )

    for (var i = startNum; i <= endNum; i++) {
        document.write (i + "<br>"  )

    }

}
counting()



// Question # 8
document.write("<h3>Question # 8 : Write a nested function that computes hypotenuse of a right angle triangle. <br>  Take base and perpendicular as inputs. <br> Outer function : calculateHypotenuse() <br> Inner function: calculateSquare() </h3>")


document.write("answer" + "<br>")




// Question # 9
document.write("<h3>Question # 9 :Write a function that calculates the area of a rectangle.A = width * heightPass width and height in following manner:i. Arguments as valueii. Arguments as variables</h3>")



document.write("answer" + "<br>")

var height = prompt("Enter number for calculates the area height of a rectangle.");
var width = prompt("Enter number for calculates the area width of a rectangle.");

function area(height, width) {
    return height * width;
}
function argument(height, width) {
    return 2 * (height + width);
}
document.writeln("your area height is" + height + "<br>")
document.writeln("your area width is" + width + "<br>")
document.writeln('The area of your rectangle is ' + area(height, width) + "<br>");
document.writeln('The argument of your rectangle is ' + argument(height, width));



// Question # 10
document.write("<h3>Question # 10 :Write a JavaScript function that checks whether a passed string is palindrome or not <br> A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. ?</h3>")


document.write("answer" + "<br>")






// Question # 11
document.write("<h3>Question # 11 : Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. <br> EXAMPLE STRING : 'the quick brown fox'<br> EXPECTED OUTPUT : 'The Quick Brown Fox' ?</h3>")


document.write("answer" + "<br>")

document.write("answer" + "<br>")

function uppercase(str) {
    var array = str.split(' ');
  
    var newarray = [];
  
    for (var i = 0; i < array.length; i++) {
      newarray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
  
    return newarray.join(' ');
  }
  
  document.write(uppercase("the quick brown fox")); 
  


// Question # 12
document.write("<h3>Question # 12 : Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. <br> EXAMPLE STRING : 'Web Development Tutorial'<br> EXPECTED OUTPUT : 'Development'</h3>")


document.write("answer" + "<br>")



// Question # 13
document.write("<h3>Question # 13 : Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. <br> Sample arguments : 'JSResourceS.com', 'o'</h3>")

document.write("answer" + "<br>")



// Question # 14
document.write("<h3>Question # 14 : The Geometrizer <br> Create 2 functions that calculate properties of a circle, using the definitions here.<br> Create a function called calcCircumference:<br> • Pass the radius to the function.<br> • Calculate the circumference based on the radius, and output 'The circumference is NN'. <br> Create a function called calcArea: <br> • Pass the radius to the function. <br> • Calculate the area based on the radius, and output 'The area is NN'. <br><br>  Circumference of circle = 2πr <br> Area of circle = πr2</h3>")


document.write("answer" + "<br>")
