// //chapter no14 //

// var skillsReq = "HTML/CSS"
// var eduReq = "BSCS"
// var cityReq = "KARACHI"
// var skills = prompt("enter your skills");
// var edu = prompt("enter your education");
// var city = prompt("enter your city");
// if (skills == skillsReq) {
//     if (edu == eduReq) {
//         if (city == cityReq) {
//             alert("kal sa ajo...")

//         } else {
//             alert("phala idr awo")
//         }

//     } else {
//         alert("parh kr awo")
//     }
// } else {
//     alert("sikh kr awo")
// }
// CHAPTER NO 15 ARRAYS//
// students.push("akhan","smit");
// students.shift();

// students.unshift("nabeel")
// students.splice(2,0,"grapes","mango")
// var students = ["kashif","danyal","ali","raj"];
// var copy = students.slice(0,3);                      //copy karta ha
// console.log(copy)

// var home =[1,2,9,5,3,45,6,7,];  // setting mn la ata ha
// home.sort()
// console.log(home)

// var home =["danyal","khan"];   //  array convert to variable
// var r=home.join("&")
// console.log(r)

// var home = "danyal-khan-jameel"    //variable convert to array
//  var r=home.split("-")
//   console.log(r)

// var home =["kashif","danyal","ali","raj"];    //array reverse
//    var r=home.reverse();
//    console.log(r)

// for(var i=1; i<=10; i++){                    // print table for loop                     
//     document.write("2x"+i+ "="+2*i+"<br />")
// }
// var home =["kashif","danyal","ali","raj"];
// for(var i=0; i< home.length; i++){
//          document.write("<h1>"+home[i]+"<h1/>")
//      }

var home = ["kashif", "danyal", "ali", "raj"];
var user = prompt("what is your city");
var flag = "ni"
for (var i = 0; i < home.length; i++) {
    if (user == home[i]) {
        flag = "hn";
        break;
    }
}
if (flag == "hn") {
    alert("true")
} else {
    alert("false")
}



















