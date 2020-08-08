// //........................................ chapter 38 to 42.............................. 
// // quesiton no 1 
// function power(x, y) {
//     if (y === 0) {
//         return 1;
//     }
//     else if (y % 2 === 0) {
//         return power(x, y / 2) * power(x, y / 2)
//     }
//     else {
//         return x * power(x, y / 2) * (x, y / 2)
//     }
// }
// result = power(2, 3);
// document.write(result + '<br>')


// // quesiton no 2 

// function leap_year(year) {
//     if (year % 2 === 0) {
//         document.write("this year is leap")
//     }
//     else {
//         document.write("This year is not leap")
//     }
// }
// leap_year(2020)


// // quesiton no 3 

// // side1= +prompt("Please Enter first side ")
// // side2= +prompt("Please Enter second side ")
// // side3= +prompt("Please Enter third side ")
// //     let s = (side1 +side2 + side3)
// //     let areavalue = (s * (s-side1) * (s - side2) * (s-side3))
// // document.write("<br>"+"The area of triangle is " + areavalue)

// // question no 4 

// // function marks(a,b,c){
// //     var obt = a + b + c
// //     function average() {
// //         var avr = a+b+c/3
// //         return avr
// //     }
// //     function percent(){
// //         per = (obt/300 * 100)
// //         return per
// //     }
// //     res1= average()
// //     res2 =percent()
// //     document.write("<br>" + "the average is " + res1 + " the percentage is " + res2 + "%" )
// // }
// // marks(50,50,50)


// // // question no 5 

// // function indexof() {
// //     var str = "now" ;
// //     var index_var = str.indexOf("o");
// //     document.write("<br>"+"The index of " + str + " 'o' is " + index_var)
// // }
// // indexof()


// // // question no 6 

// // function hasVowels(stri) {
// //     let word = stri.toLowerCase()
// //     if (/[aeiou]/.test(word)) {
// //         document.write("<br>"+true) 
// //     }
// //     else {
// //         document.write("<br>"+false)  
// //     }
// // }

// // hasVowels("It Is not a game")


// // // question no 7 

// // function FindOccurences() {
// //     let vowel = "Please read this application and give me gratuity";
// //     var chars = vowel.toLowerCase().split("")
// //     var count = 0 
// //     for (let i = 0; i < chars.length -1; i++) {
// //         var char = chars[i];
// //         var next = chars[i + 1]
// //         if (isCorrectCharachter(char) && isCorrectCharachter(next)) {
// //             count++
// //         }
// //     }
// //     return count;
// // }

// // function isCorrectCharachter(char) {
// //     switch (char) {
// //         case 'a':
// //         case 'e':
// //         case 'i':
// //         case 'o':
// //         case 'u':
// //             return true
// //         default:
// //             return false
// //     }
// // }


// // var found = FindOccurences()
// // document.write("<br>"+found)

// // // question no 8 

// // var cities = +prompt("Enter the distance between two cities in km")
// // function distance() {
// //     // var cities = +prompt("Enter the distance between two cities in km")
// //     var cal_met = cities * 1000
// //     document.write("<br>"+"The distance in between two cities in meter is "+cal_met)
// // }
// // function distanceFeet(){
// //     var cal_feet =  cities * 3280.84
// //     document.write("<br>"+"The distance in between two cities in feet is "+cal_feet)
// // }
// // function distanceInches(){
// //     var cal_inches =  cities * 39370.1
// //     document.write("<br>"+"The distance in between two cities in inches is "+cal_inches)
// // }
// // function distanceCentimeters(){
// //     var cal_centi =  cities * 100000  
// //     document.write("<br>"+"The distance in between two cities in centimeters is "+cal_centi)
// // }
// // distance()
// // distanceFeet()
// // distanceInches()
// // distanceCentimeters()


// // question no 9 


// // question no 10

// function currency() {
//     inp = +prompt("Enter the Amount")
//     cal_hund = inp / 100
//     cal_50 = ((inp % 100) / 50)
//     cal_10 = (((inp % 100) % 50) / 10)
//     cal_still = (((inp % 100) % 50) % 10)

//     document.write("<br>" + "Required notes of 100 is : " + cal_hund)
//     document.write("<br>" + "Required notes of 50 is : " + cal_50)
//     document.write("<br>" + "Required notes of 10 is : " + cal_10)
//     document.write("<br>" + "Required notes of still remaining is : " + cal_still)
// }
// currency()

//........................................ chapter 38 to 42 end.............................. 


//........................................ chapter 43 to 48 start.............................. 


function box() {
    alert("why you are clicking ?")
}

// function img() {
//     alert("Thanks For Purchasing a phone from us")
//     document.getElementsByTagName("body").style.background-color = "transparent";
// }

function myDelete(r) {
    i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);

}
let inc = 0 ;
function ClickMe() {
    inc +=1;
    document.getElementById("increase").innerHTML = inc;
}

function DecMe() {
    inc -=1;
    document.getElementById("decrease").innerHTML = inc;
}
// ---------------------------------------------Chapter 49-52 start----------------------------------------

function getData() {
    const form = document.getElementById("myform")
    form.onsubmit= function(e) {
        e.preventDefault();
        const myresult = document.getElementById("items")
        myresult.innerHTML = form.username.value;
        this.reset();
    };
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function getformdata() {
      const data = document.getElementById("latestform")
      data.onsubmit = function e() {
          e.preventDefault();
          const mydata = document.getElementById("myitems")
          mydata.innerHTML = form.name.value
          this.reset();
      }
  }

// ---------------------------------------------Chapter 49-52 end----------------------------------------




// ---------------------------------------------DOM start----------------------------------------


var id = document.getElementById('main-content')
id2 = id.children
console.log(id2)

var myclass = document.getElementsByClassName('render')
var myclass2 = myclass.innerHTML;
console.log(myclass2)


// var dom1 = document.getElementById('firstName').value ='Muhammad Usama';
// var dom2 = document.getElementById('lastName').value ='Nawaz';
// var dom3 = document.getElementById('email').value ='nawazmuhammadusama@gmail.com';


// question no 2 

var type = document.getElementById('form-content').nodeType;
console.log(type)

var type2 = document.getElementById('lastName').childNodes
console.log(type2)

var type3 = document.getElementById('main-content').firstChild
console.log(type3)

var type4 = document.getElementById('main-content').lastChild
console.log(type4)

var type5 = document.getElementById('lastName').nextSibling
var type6 = document.getElementById('lastName').previousSibling
console.log(type5,type6)

var type7 = document.getElementById('email').parentNode
var type8 = document.getElementById('email').nodeType

console.log(type7 , type8)






// ---------------------------------------------DOM end----------------------------------------



