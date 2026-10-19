// // // // function add(a: number, b: number) {
// // // //     //console.log(a+b);
// // // // }
// // // import { CheckboxControlValueAccessor } from "@angular/forms"
// // // // //add(5,2);
// // // // let x: string
// // // // let y: boolean
// // // // let marks: number[] = [1, 2, 3]
// // // // let marks1: Array<number>
// // // // marks1 = [4, 5, 6]
// // // // //console.log(marks1[2]);
// // // // let d = 7
// // // // let z: [number, number, string]
// // // // z = [3, 4, "yo"]
// // // // let c: any
// // // // c = 5;
// // // // c = "xz"
// // // // function greet(name: string): string {
// // // //     return `Hello ${name}`
// // // // }
// // // // console.log(greet("Chamod"))
// // // // interface User {
// // // //     name: string,
// // // //     age?: number
// // // // }
// // // // function processUser(user: User) {
// // // //     return `${user.name} ${user.age}`
// // // // }
// // // // let user1: User = { name: "chamod" }
// // // // console.log(processUser(user1))
// // // // // interface User2{
// // // // //     name:string
// // // // // }
// // // // function study(firstName: string, lastName?: string) {
// // // //     if (lastName) {
// // // //         console.log(`${firstName} ${lastName}`)
// // // //     }
// // // //     else {
// // // //         console.log(`${firstName}`)
// // // //     }
// // // // }
// // // // study("Deshan","Kan")
// // // // let x:number
// // // // x=7;
// // // // var y:string
// // // // y="Bus"
// // // // console.log(x)
// // // // console.log(y)
// // // // if (true) {
// // // //     let x: number
// // // //     x = 7;
// // // //     var y: string
// // // //     y = "Bus"
// // // // }
// // // // console.log(x)
// // // //     console.log(y)
// // // const y=5
// // // enum Direction{
// // //     SOUTH,EAST,WEST,NORTH
// // // }
// // // function checkDirection(direction:Direction){
// // // console.log(`${direction}`)
// // // console.log(`${Direction[direction]}`)
// // // }
// // // checkDirection(Direction.EAST)
// // // type userName=string
// // // let firstname:userName
// // // let firstName="hi"
// // // console.log(firstName)
// // // let id:number|string
// // // id="hi"
// // // console.log(id)
// // // type ID=number|string
// // // let id1:ID
// // // id1="hi"
// // // console.log(id)
// // type User = { firstName: string,lastName:string }
// // let user1:User={firstName:"hi",lastName:"hu"}
// // function check(user:User){
// //     console.log(`${user.firstName} ${user.lastName}`)
// // }
// // check(user1)
// // interface User1 {
// // name: string,
// // age: number
// //  }
// //  let user2:User1={name:"hi",age:1}
// //  let x:string
// //  x="hi"
// //--anonymus function---
// const greet=function (name:string):void{
//     console.log(`${name}`)
// }
// greet("hello hi")
//------arrow function--------
const check = function add(x, y) {
    console.log(x + y);
};
check(100, 100);
const add = (x, y) => {
    return x + y;
};
const add1 = (x, y) => x + y;
const add2 = () => 2;
console.log(add1(10, 7));
const add3 = (x, y = 7) => x + y;
function addy(x) {
    let total = 0;
    for (const value of x) {
        total += value;
    }
    return total;
}
;
//console.log(addy([1,3,5]))
function retry(x) {
    let tot = 0;
    x.forEach((value) => {
        tot += value;
    });
    return tot;
}
console.log(retry([2, 4, 6]));
export {};
