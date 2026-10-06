// Function in TypeScript
function fnc(value:string):void{
    console.log("hello");
    
}
function fnc1(a:number,b:number):number{
    return a+b
    
}
//  Optional Parameter ?
function fnc2(name:string, age?:number):void{
    console.log(name,age);
}
// Default Parameter
function fnc3(name:string='user'):void{
    console.log(name);    
}

// rest premeter
function fun4(...agr:number[]):number[]{
return agr;
}
console.log(fun4(1,2,3,4,5,6));


// arrow fun 
let fun5 = (age:string):void => {console.log(age);
}

// Function Overloading ⭐

function funn(value:string):string;
function funn1(value:number):number;

function getval(value:string| number) {
    return value;
}
console.log(getval('sameer'));
console.log(getval(25));

// real life use case 
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string) {
    return (a as any) + (b as any);
}




// function sameer(value:string, cb:(arg:string)=>void) {
//     cb('sameer')
    
    
// }

// sameer('naam',(arg:string)=>{
//     console.log(arg);
    
// })


// function overloding