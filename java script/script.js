var firstname='john';
console.log(firstname);
var job;
console.log(job);

var firstname='john';
var age=28;
console.log(firstname+' '+ age);

//variable coercion//
var job,isMarried;
job='teacher';
isMarried='false';
console.log(firstname+'is a '+ age+'years old'+ job +'.Is he married?'+ isMarried);

// variable mutuation
age='twenty eight';
job='drver';

alert(firstname+'is a'+'yeras old'+ job +'. Is he married?'+ isMarried);
var lastname=prompt('What is his last name?');
console.log(firstname+' '+ lastname);

//basic operators//
var now,yearJohn,yearMark;
now=2020;
yearJohn=now-28;
yearMark= now-23;
console.log(yearJohn);
console.log(now*2);
console.log(now+2);
console.log(now/2);


//logical operators//
var agejohn,ageMark;
ageJohn=28;
ageMark=33;
var johnOlder=ageJohn<ageMark;
console.log(johnOlder);

//type of operator//
console.log(typeof johnOlder);
console.log(typeof ageJohn);

//order precedence//
var now=2020;
var yearJohn=1989;
var fullage=18;
var isFullage=now-yearJohn>=isFullage;
console.log(isFullage);


//grouping
var ageJohn=now-yearJohn;
ageMark=35;
var average=(ageJohn+ageMark)/2;
console.log(average);

//mutiple assignments
var x,y;
x=y=(3+5) * 4-6;
console.log(x,y);

x +=10;
console.log(x);
x*=2;
console.log(x);

//challenge 1 comparing BMI
var massjohn=75;
var heightjohn= 1.85;

var massmark=85;
var heightmark=1.75;

var BMImark= massmark/(heightmark*heightmark);

var BMIjohn= massjohn/(heightjohn*heightjohn);

console.log(BMImark);
console.log(BMIjohn);

var maxBMI= BMImark>BMIjohn;
console.log('Is Mark\s BMI more than john\s BMI?'+maxBMI);

//if else statement
var firstname= 'john';
var civilstatus= 'single';
if(civilstatus==='married')
{console.log(firstname +'is married!');
    }
else{ console.log('will be marrying soon!!!');}

//ternary operator
var firstname='john';
var age= 14;
age>=18?console.log('john drinks beer'):console.log('john drinks juice');

var drink=age>=18?'beer':'juice';

//switch statement
var job='teacher';
switch(job){

    case'teacher':
    console.log(firstname+'teaches student how to code');
    break;

    case'driver':
    console.log(firstname+'drives uber.');
    break;

    case'chef':
    console.log(firstname+'works at restaurant.');
    break;

    default:
        console.log('does something else.')
        break;
        


}


