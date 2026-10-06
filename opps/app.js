"use strict";
// constructor
// class car{
//     constructor(public name: string,public model: string,public year: number, public winpro: boolean){}
// }
// let verna = new car ("verna","pertrol",2025,true)
// verna.name = 'bmw'
// console.log(verna);
// let i20 = new car ('i20','pertrol',2026,false)
// console.log(i20);
// constructor with privet 
// class strudent{
//     constructor (private name:string, private age:number){}
//     changing(nn:string){
//         this.name = nn;
//     }
// }
// let stu1 =new strudent('sameer',26);
// console.log(stu1);
// stu1.changing('gada') 
// console.log(stu1);
// get set  
class strudent {
    _naam;
    age;
    constructor(_naam, age) {
        this._naam = _naam;
        this.age = age;
    }
    get naam() {
        return this._naam;
    }
    set naam(value) {
        this._naam = value;
    }
}
let stu = new strudent('sameer', 25);
console.log(stu);
stu.naam = 'gour';
console.log(stu);
