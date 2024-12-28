//Spread Operator - Expand into individual elemnts
let a = [1,2,3,4,5];
let b = a;
b[2] = 10;
console.log(a);

//Normally, it takes the value not the address whereas in array the address is taken instead of values.
//Here, we edit only b array but it also it automatically edit for a also. So we use Spread Operator i.e, 3 dots - ...

let c = [1,2,3,4,5];
let d = [6,7,8,9,10];
let x = [...c,...d]; //Concadination
console.log(x);

//Rest Operator - Multiple elements into one
function SE(a1,a2,a3,...v) //The remaining values is taken to v, all others belong to a1,a2 and a3.
{
    console.log(a1,a2,a3);
    console.log(v);
}
SE(1,2,3,456,7);

//Deconstruction Operator - Array is destructured and given to segments
let x1 = [1,3,5,7,9];
let [z1,z2,z3,...z4] = x1;
console.log(z1);
console.log(z2);
console.log(z3);
console.log(z4);
console.log(x1);