
export default function loop(): void {
    whileLoop()
    doWhile()
    forLoop()
    forInArrayLoop()
    forInObjectLoop()
    forOfArrayLoop()
    forOfMapLoop()
    forOfSetLoop()
    forOfStringLoop()
    symbolIterator()
}
function whileLoop() {
    console.log(`0.------while-loop --------`);
    let x: number = 1;
    let result: number = 0;
    while(x <= 100) {
        result += x;
        x++;
    }
    console.log(`1부터 100까지의 합 : ${result}`);
}

function doWhile() {
    console.log(`1.------doWhile-loop --------`);
    let count: number = 0
    let total: number = 0
    do {
        count++;
        total += count;
    } while(count !== 100);
    console.log(`1부터 100까지의 합 : ${total}`)
}

function forLoop() {
    console.log(`2.------forLoop-loop --------`);
    let total: number = 0;
    for(let i: number = 1; i <= 100; i++) {
        total += i;
    }
    console.log(`1부터 100까지의 합 : ${total}`);
}

function forInArrayLoop() {
    console.log(`3.------forInArrayLoop-loop --------`);
    const arr: object = ["a","b","c","d","e"];
    for(let i in arr){
        console.log(i, arr[i])
    }

}

function forInObjectLoop() {
    console.log(`4.------forInObjectLoop-loop --------`);
    let fruits = {"a":"apple", "b":"banana", "c":"cherry"}
    for(let i in fruits){
        console.log(i, fruits[i])
    }
}

function forOfArrayLoop() {
    console.log(`5.------forOfArrayLoop-loop --------`);
    for(const i of [1,2,3]){
        console.log(i);
    }
}

function forOfMapLoop() {
    console.log(`6.------forOfMapLoop-loop --------`);
    let map = new Map([["a", 1],["b", 2]]);
    map.set("a", 3);
    for(let i  of map) {
        console.log(i);
    }
}

function forOfSetLoop() {
    console.log(`7.------forOfSetLoop-loop --------`);
    let set = new Set([["a","b","c","d","e"]]);
    for (let i of set) {
        console.log(i);
    }
}

function forOfStringLoop() {
    console.log(`8.------forOfStringLoop-loop --------`);
    for(let i of "Hello"){
        console.log(i);
    }
}

function symbolIterator() {
    console.log(`9.------symbolIterator-loop --------`);
    let arr = [1,2]
    let obj = arr[Symbol.iterator]();
    console.log(`1.${typeof obj}`);
    console.log(`2.${obj.next()}`);
    console.log(`3.${obj.next()}`);
    console.log(`4.${obj.next()}`);
}
