
// var obj1 = new Object();
// var obj2 = {}

// obj1 = {
//     name:"Simon",
//     age:"20",
//     email:"15631@cma.com",
//     contact:{
//         phone:"12345648",
//         addon:"asdadwaf"
//     }

// }

// console.log(obj1.name);
// console.log(obj1["contact"]["phone"])

// var a = new Array()
// var b = []

// b = ["axe","pixel","creeper"];

// b.push("sheep");
// // b.pop();
// b.unshift("shit");

// a[0] = "dog";
// a[1] = "cat";
// a[5] = "tiger";

// console.log(a[3]);


// console.log(b);
// for (let i in b)
// {
//     console.log(b[i]);
// }

// function sum(){
//     let sum = 0;
//     for (let i =0,j=arguments.length;i<j;i++)//无上限取实参
//     {
//         sum += arguments[i]
//     }
//     return sum;

// }

// let ret = sum(4,5,6,7);

// console.log(ret);

function makeAdder(a)
{
    return function(b){
        return a+b;
    }
}

var x = makeAdder(5);

console.log(x(6));