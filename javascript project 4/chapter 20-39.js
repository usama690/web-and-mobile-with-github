//                              chapter 21-25 start ........................



// question no 1 
// var first_name = prompt("Enter first name");
// var last_name = prompt("Enter last name");
// var full_name = first_name +" "+ last_name ;
// alert("Hello "+ full_name + " Welcome here!");

// question no 2 

// var mobile_phone = prompt("Enter favourite mobile phone name");
// var len = mobile_phone.length;
// document.write("<br>"+"My favourite phone is : "+mobile_phone+"<br>"+"length of string : "+len);

// question no 3 

// var string = "Pakistani";
// var index = string.indexOf("n");
// document.write("<br>"+"String: "+string+"<br>"+"index of 'n': "+index);

// // question no 4

// var string1 = "Hello World";
// var index1 = string1.lastIndexOf("l");
// document.write("<br>"+"String: "+string1+"<br>"+"index of 'l': "+index1);

// // question no 5 

// var string ;
// var char = string.charAt(3);
// document.write("<br>"+"String: "+string+"<br>"+"index of '3': "+char);

// // question no 6 
// var first_name = prompt("Enter first name");
// var last_name = prompt("Enter last name");
// var fullname = first_name.concat(" "+last_name);
// document.write ("<br>"+"Hello "+ fullname + " Welcome here!");

// question no 7

// var city = "Heyderabad";
// var replace = city.replace("Heyder","Islam");
// document.write("<br>"+"City: "+city+"<br>"+"After replacement: "+replace);

// question no 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace1 = message.replace("and","&")
// document.write("<br>"+"before replace: "+message+"<br>"+"After replacement: "+replace1);

// question no 9


// var string_number = "472";
// var type_convert = parseInt(string_number);
// document.write("<br>"+"Value: "+string_number+"<br>"+"Type: "+(typeof string_number)+"<br>"+"Value: "+type_convert+"<br>"+"Type: "+ (typeof type_convert))

// question no 10

// var nameinput = prompt("Enter value to convert to uppercase");
// var capital =  nameinput.toUpperCase(); 
// document.write("<br>"+"User input: "+nameinput+"<br>"+"Upper Case: "+capital);

// question no 11

// var nameinput2 = prompt("Enter value to convert to titlecase");
// var title_case = nameinput2[0].toUpperCase()+nameinput2.slice(1,100);
// document.write("<br>"+"User input: "+nameinput2+"<br>"+"Title Case: "+title_case);

// question no 12

// var num = 35.36;
// var result = num.toString();
// var final_result = result.replace(result ,"3536") ;
// document.write("<br>"+"Number: "+num+"<br>"+"Result: "+final_result);

// question no 13

// var user_input = prompt("Please enter a input ");
// var store = user_input.length;
// for (var i = 0; i < store; i++) {
//     if (user_input.slice(i, i + 2) === "!") {
//         ("Please enter a valid username");
//         console.log("Please enter a valid username");
//         break;
//     }
// }

// question no 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var ar = prompt("Welcome to our bakery", "please enter to item to generate")
// var convert = ar.toLowerCase();
// for (var j = 0; j < A.length; j++) {
//     console.log(A[j]);
//     if (ar === A[j]) {
//         document.write("<br>" + ar + " is availlable at index " + j + " in our bakery")
//         break;
//     }
//     else {
//         document.write("<br>" + "We are sorry." + ar + " is not availlable in our bakery")
//         break;

//     }
// }

// question no 14

// passwrod = prompt("Please enter a password. for example : 'cmd123'. it starts only with a alphabet and at least 6 charcters long ")
// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var numarr = [0, 1, 2, 3, 4, 5,6]
// if ((!nums.includes(parseInt(passwrod.charAt(0)))) && (passwrod.length >= 6) ) {
//     alert("Congratulations! your password has been created")
// }
// else {
//     alert("please enter a valid password")
// }


// question no 16

// var university = "University of Karachi";
// var convert_toarray = university.split("");
// document.write("<br>"+convert_toarray.join("<br>"));
// console.log(convert_toarray);


// question no 17

// var pak = "pakistan";
// pak_result = pak.charAt(7)
// document.write("<br>" + "User input: " + pak + "<br>" + "Last character of input: " + pak_result);


// question no 18

// var para = "the quick brown fox jumps over the lazy dog"
// var word = "the"
// var para_split = para.split(" ")
// count = 0
// for (var l = 0; l < para_split.length; l++) {
//     if (word === para_split[l]) {
//         count++;
//     }
// }
// document.write("<br>" + "Text: " + para +"<br>"+" There are "+count+" occurences of word "+word)    
// console.log("<br>" +"times " + count)



//                              chapter 21-25 end ........................



//                              chapter 26-30 start ........................


// question no 1 



// var integer = 3.45124;
// var roundoff = Math.round(integer);
// var floor = Math.floor(integer);
// var ceil = Math.ceil(integer);
// document.write("number: "+integer+"<br>"+"round off value: "+ roundoff+"<br>"+"floor value: "+floor+"<br>"+"ceil value: "+ceil );


// //  question no 2 


// var neginteger = -2.673;
// var negroundoff = Math.round(neginteger);
// var negfloor = Math.floor(neginteger);
// var negceil = Math.ceil(neginteger);
// document.write("<br> <br>"+"number: "+neginteger+"<br>"+"round off value: "+ negroundoff+"<br>"+"floor value: "+negfloor+"<br>"+"ceil value: "+negceil );


// //  question no 3 

// var absolute_value = -4;
// var my_value = Math.abs(absolute_value)
// document.write("<br> <br>"+"The absolute value of "+absolute_value+" is "+my_value);


// //  question no 4 


// var dice_value = Math.random()*4 + 1;
// var dice_value2 = Math.floor(dice_value);
// var dice_value3 = Math.random()*6 + 1;
// var dice_value4 = Math.ceil(dice_value3);
// document.write("<br> <br>"+"random dice value: "+dice_value2);
// document.write("<br>"+"random dice value: "+dice_value4);

// //  question no 5 

// var head = Math.ceil(Math.random()*1)
// var tails = Math.ceil(Math.random()*2)
// document.write("<br> <br>"+head+"<br>"+"random coin value: "+"Heads"+"<br>"+tails+"<br>"+"random coin value: "+"Tails");


// //  question no 6 

// var random_num = Math.floor((Math.random()*100+1)-1)
// document.write("<br> <br>"+"random number between 1 and 100: "+random_num);


//  question no 7

// user_weight =    prompt("Enter your weight. for example: 50,50kgs,50.2kgs,50.2 kilograms");
// // parse_weight = parseInt(user_weight.charAt(0,4))
    
// document.write("<br> <br>"+"The weight of user is" + user_weight );


// question no 8 

// random_input = +prompt("Please enter a number between 1 and 10")
// user_random = Math.floor(Math.random()*9)

// if (random_input === user_random ){
//     alert("Congratulation! you are correct.")
// }
// else if (random_input > user_random){
//     alert(" Sorry! try again")
// }

// else if (random_input < user_random){
//     alert(" Sorry! try again")
// }

// else {
//     alert("Please enter correct value")
// }

    
              // chapter 31- 32 start ......................... 
              
              
              // question no 1 
              
//               var current_date = new Date();
//               document.write("<br>"+current_date );
              
// // question no 2 

// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// alert("Current month: "+mlist[current_date.getMonth()])

// // question no 3 
// // method 1 
// // var d = new Date();
// // var dayName = d.toString().split(' ')[0];
// // alert("Current day: "+dayName)

// // method 2 
// var current_date = new Date();
// day_list = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var dayName = day_list[current_date.getDay()];
// alert("Current day: "+dayName)


// // question no 4 

// // var dayName = d.toString().split(' ')[0];
// // if (dayName === "Sat" || dayName === "Sun"){
//     //     alert("It's Fun day")
//     // }
    
//     // question no 5 
//     var d = new Date();
//     var date = d.toString().split(' ')[2];
//     if (date < 16 ){
//         alert("First fifteen days of the month")
//     }
//     else{
//         alert("Last days of the month")
//     }
    
//     // question no 6 
    
//     dob = new Date("Jan 1, 1970");
//     var dobmili = dob.getTime();
//     var today = new Date();
//     var todaymili = today.getTime();
//     var diff = todaymili - dobmili;
//     var todaymin = (diff/60)
//     document.write("<br> <br>"+ "Current Date: "+ d+"<br>"+"Elapsed milliseconds since January 1, 1970: "+todaymili+"<br>"+"Elapsed milliseconds since January 1, 1970: "+todaymin)
    
//     // question no 7 
    
//     var time_inampm = d.getHours();
//     if (time_inampm > 0 && time_inampm < 12 ){
//         alert("It's PM")
//     }
//     else {
//         alert("It's AM")
//     }
    
//     // question no 8 
    
//     later_date = new Date("Dec 31 2020")
//     document.write("<br> <br> "+"Later Date: "+later_date);
    
//     // question no 9 
    
//     today_date = new Date("June 20, 2020");
//     past_date = new Date ("June 18, 2015")
//     date_result =today_date.getTime() - past_date.getTime()
//     date_reslut2 = date_result/(1000*60*60*24);
//     document.write("<br>"+date_reslut2+" days have passed since 1st Ramadan, 2015")
    
//     // question no 10 
    
//     ref_date = new Date("Dec 5, 2015");
//     beg_date = new Date ("Jan 1, 2015");
//     result_refbegdate = ref_date.getTime() - beg_date.getTime();
//     result_refbegdate2= result_refbegdate/(1000*60);
//     document.write("<br>"+" On refrence date: "+ref_date+"<br>"+result_refbegdate2+" seconds had passed since begining of 2015");
    
//     // question no 11 
    
//     date_object = new Date();
//     date_object2 = new Date(2020, 5, 20, 2, 48, 0, 0);
//     date_objresult = date_object.getHours() - date_object2.getHours();
//     document.write("<br>"+"Current date: "+date_object+"<br>"+date_objresult+"hour ago, it was"+date_object2);
    
//     // question no 12 
    
//     year_back = new Date(1920,5,20,3,58,0,0);
//     year_result = date_object.getFullYear() - year_back.getFullYear();
//     document.write("<br>"+"Current date: "+date_object+"<br>"+year_result+" years back, it was "+year_back)
    
//     // question no 13 
    
//     // dob_age = new Date(prompt("Enter your age "));
//     // dob_today = new Date("June 20, 2020");
//     // dob_past = new Date(dob_age).getFullYear 
//     // dob_result = dob_today - dob_past
//     // document.write("<br>"+dob_result)
    
    
//     // question no 14 
    
//     customer_name = prompt("Enter your name :")
//     units = +prompt("Enter number of units")
//     mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//     current_month = mlist[d.getMonth()];
//     charges_unit = 16
//     Net_amount = (16 *units)
//     fine = 350
//     gross_amount = Net_amount + fine
    
//     document.write("<br> <br>"+"K-Electric Bill".bold())
//     document.write("<br> <br>"+"Customer Name: "+ customer_name+"<br>"+"Month: "+current_month+"<br>"+"Number of units: "+units+"<br>"+"Charges per unit: "+ charges_unit+"<br>"+"Net amount Payable (with in due date):"+Net_amount+"<br>"+"Late payment subcharge: "+fine+"<br>"+"Gross amount payable (after due date): "+gross_amount)
    
    
    
                          // chapter 31- 32 end ......................... 



// question no 1 

// function datetime() {
//     b = new Date();
//     document.write("<br> <br>"+b)
// }

// datetime()

// // question no 2 

// function greets(a,b) {
//     meet = a + b
//     document.write("<br> <br>"+meet)
// }
// greets("Hello"," Muhammad Usama");

// question no 3 

function calculator(num1,num2,operator){
    if (operator === "+"){
        return (num1 + num2)
    }
    else if (operator === "-"){
        return (num1 - num2)
    }
    else if (operator === "*"){
        return (num1 * num2)
    }
    else if (operator === "/"){
        return(num1 / num2)
    }
    else {
        return ("Please enter correct value")
    }
}
var my_calcul = calculator(2,2,"+")
document.write("<br>"+my_calcul)

// question no 5 

function squares(num1 , num2){
    return (num1 ** num2)
}
my_square = squares(2 ,3 )
document.write("<br>"+my_square)


function factorial(n){
    if (n === 1 ){
        return (1)
    }
    else {
        return n * factorial(n-1)
    }
}
my_factor = factorial(3)
document.write("<br>"+my_factor)

// question no 7 
              //  incomplete ..................
// function count(num1,num2){
//     for (var i = 0; i < 11;  i++){
//         return (i)
//     }
// }
// my_count = count(0,11) ;
// // document.write("<br>"+)
// console.log("<br>"+my_count)
// document.write(count(1,11))

// var out ;
// var num3 ;
// function test(out,num3){
//     for(var i=out;i<= num3;i++){
//         out = out + i + "<br>";
//     }
//     return out;
//     }

// my_count = test(1,5)
// // console.log(my_count)
// document.write("<br>"+my_count)

// question no 8 
function calculatehypotenuse(base,perpendicular){
    let bs_perp = base + perpendicular
    function calculatesquare(){
        bs_perp = Math.sqrt((base*base)+(perpendicular * perpendicular))
    }
    calculatesquare();
    return bs_perp
}

my_hypotneuse = calculatehypotenuse(3,4)
document.write("<br>"+my_hypotneuse)

// question no 9 

function area(width,height){
    let calarea = width *height
    return calarea
}

my_calarea = area(2,4)
document.write("<br>"+my_calarea)


// question no 10 

function palindrome (stringpalindrome) {
    if (stringpalindrome === stringpalindrome.split('').reverse().join('')){
        alert(stringpalindrome+" is palindrome")
    }
    else {
        alert(stringpalindrome+ " is not palindrome")
    }
}
palindrome("madam")

// question no 11 

// function capitalize_first_letter(parameter){
//      a = parameter.split(" ");
//     a[0]= (a[0].toUpperCase());
//     for(var y=1 ; y<a.length; y++){
//         if (a[y] === " "){
//             a[y+1]= (a[y+1].toUpperCase())
//         }
//         ++y
//     }
// }
// var cap = capitalize_first_letter("the quick brown fox");
// alert(cap)


// question no 14 

function calcCircumference(rad){
    circumference = (2 * 3.142)*(rad)
    document.write("<br>"+"The Circumference is"+circumference)
    function calcArea(rad){
        circlearea = (3.142) * (rad ** rad)
        document.write("<br>"+"The Area is"+circlearea)
    }
    calcArea(rad)
}
calcCircumference(3)
