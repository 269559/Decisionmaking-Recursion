// 1-Decision Making (if-else & switch): 

// Ticket Pricing's function using switch:
function pricing(age) {
    let price;
    switch (True) {
        case (age <= 12):
        price= $10;
            break;
        case (age >= 13 && age <= 17):
        price= $15;
            break;
        case (age >= 18):
        price= $20;
            break;
}
}


 // Function to set description according to the temperature status, using(if-else):
function weatherDescription (Temp) {   
  if (temperature <= 0) {
    return "Bundle up, it's freezing cold !";
} else if (temperature > 0 && temperature < 10) {
    return "Chilly weather ahead !";
} else if (temperature >= 10 && temperature < 20) {
    return "Cool weather, perfect for a stroll.";
} else if (temperature >= 20 && temperature < 30) {
    return "Warm and pleasant day !";
} else {
    return  "Hot day ahead, stay hydrated !";
}

};

//2-Recursion way:

//Fibonacci Sequence:
function fibbonacci(n) {
if(n=0) {
    return 0;
}else if (n=1) { 
    return 1 ;
}else{
    return fibbonacci(n-1) + fibbonacci(n-2);
}
}
//Palindrome Checker:
function palindrome(str) {
    let check = "";

    for (let i = str.length - 1; i >= 0; i--) {
        check += str[i];
    }

    if (check === str) {
        return true;
    } else {
        return false;
    }
}
