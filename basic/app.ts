let naam:string = 'sameer';
let age:number = 22;
console.log(naam,age);
let istrue:boolean= true;


let arr:number[] = [2,3,4,6,7];
let skill:string[] = ['js','ts'];
let user:[string,number] = ['sameer',22]

let user2:{
    naam:string,
    age:number
} = {
    naam:'sameeer',
    age:22
};

// any
let data:any = 10;
// Why does any exist?

// Because it disables TypeScript's type checking and can allow runtime errors.

let naam1:unknown = 'sameer'
naam1 = 256
naam1 = true

let n:null= null;
// i naver assine a vlue couz i give null type
let nn= null
// i assine a null value 


// interface 

interface user1{
    naam:string,
    age:number,
    city:string,
    gender?:boolean
}
interface admin extends user1{
    admin:boolean
}

function abcd (obj:admin){
console.log(obj.admin,obj.naam,obj.age,obj.city,obj.gender);

}
abcd({admin:true,naam:'sam',age:22,city:"roorkee",})

// alianses 

type str = string;
type user2 ={
    s:str
}

let naam3:str= 'sameer';


