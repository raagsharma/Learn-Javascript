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
// challenge 2
var johnteamG1=89;
var johnteamG2=120;
var johnteamG3=103;
var johnteamavg= (johnteamG1+johnteamG2+johnteamG3)/2;
console.log(johnteamavg);


var markteamG1=116;
var markteamG2=94;
var markteamG3=123;
var markteamavg=(markteamG1+markteamG2+markteamG3)/2;
console.log(markteamavg);

if(johnteamavg>markteamavg){
 console.log('john wins the basketball match with scores'+ johnteamavg);
}
else if(markteamavg>johnteamavg)
{
    console.log('mark wins the basketball match with scores'+ markteamavg );

}
else{
    console.log('there is a draw');
}


//FUNCTIONS


function calculateAge(birthyear){
    return 2018-birthyear;
}
var ageJohn=calculateAge(1990);
var ageMark=calculateAge(1998);
var ageMike=calculateAge(1969);


console.log(ageJohn,ageMark,ageMike);

function yearuntilRetirement(year,firstname){

    var age=calculateAge(year);
    var retirement=65-age;
    if(retirement>0){
    console.log(firstname +' retires in '+ retirement + ' years');
}else
{console.log(firartname+ ' retired already ');}

}

yearuntilRetirement(1990, 'John');
yearuntilRetirement(1998,'Mark');
yearuntilRetirement(1969,'Mike');

//function declaration

//function whatDoYouDo(job,firstname){}

//function expression
var whatDoYouDo=function(job, firstname){
    switch(job){
        case 'teacher':
            return firstname + '  teaches coding in school';
        case 'driver':
            return firstname +' drives uber';
            case 'designer':
                return firstname +' designs beautiful websites';
                default:
                    return firstname + ' does something else';
    }
}

console.log(whatDoYouDo('teacher',' John'));
console.log(whatDoYouDo('driver','Mike'));
console.log(whatDoYouDo('designer','Mark'));

//arrays

//initialization of new array
var names=['John', 'Mark','Jane'];
var years=new Array('1990','1969','1948');

console.log(names[2]);
console.log(names.length);

//mutate array data
names[1]='ben';
names[names.length]='Mary';
console.log(names);

//different type of data
var john=['John','Smith',1990,'designer',false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer')=== -1? 'john is not a designer':'john is a designer';
console.log(isDesigner);

//challenge 3

function tipCalculator(bill){
    var percentage;
    if(bill<50){
        percentage=.2;

    }else if(bill>=50 && bill<200)
    {
percentage=.15;
    }else{
        percentage=.1;
    }
    return percentage*bill;
}
var bills=[124,48,168];
var tips=[tipCalculator(bills[0]),
           tipCalculator(bills[1]),
        tipCalculator(bills[2])];

        var finalvalues=[bills[0]+tips[0],
                        bills[1]+tips[1],
                    bills[2]+tips[2]];      

                    

                    console.log(tips,finalvalues);



/******** objects */

//object literal
var john={
    firstname:'john',
    lastname:'smith',
    birthyear: 1990,
    family:['jane','mark','bob','emily'],
    job:'teacher',
    isMarried: false


};

console.log(john.firstname);
console.log(john['lastname']);
var x='birthyear';
console.log(john[x]);

john.job='designer';
john['isMarried']=true;
console.log(john);

//new object syntax
var jane=new Object();
jane.firstname='jane';
jane.birthyear=1969;
jane['lastname']='smith';
console.log(jane);