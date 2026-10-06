// genric function

// function log<land>(val:land){
//     console.log(val);
    
// }
// log("samir")

// genric interface

// interface loda<land>{
//     name:land;
//     age:number;
// }

// function chut(obj:loda<string>){
//     obj.name
// }
// chut({name:"sauda",age:14})

class land<chut>{
constructor(public key:chut){


}
}
let l1 = new land<number>(300)
let l2 = new land<string>("rupy")

console.log(l1,l2);

// modul improt {file name ,another file name}/from
// modul defoult file name /from xyz 

// type asserction 
// let a:any = 25;
// let b:unknown = "sameer";
// let age = a as number;
// let namee = <string>b;
// console.log(a,b);
// non-null assertion oprater
// let aa:null|undefined|string;
// aa= 'bhanchod';
// aa!