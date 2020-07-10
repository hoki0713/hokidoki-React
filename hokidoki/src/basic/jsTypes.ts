import {type} from "os";

export default function jsTypes(): void {
    console.log("------JavaScript Types------");
    /*
    * Types의 종류
    * boolean, number, string, undefined, null, JSON, array, function, Symbol
    * */
    const myBoolean = true;
    console.log(`boolean: ${typeof myBoolean}`);
    const myNumber = 1;
    console.log(`number: ${typeof myNumber}`);
    const myString = "1";
    console.log(`string: ${typeof myString}`);
    let myUndefined;
    console.log(`undefined: ${typeof myUndefined}`);
    const myNull = null;
    console.log(`null: ${typeof myNull}`);
    const myJson = {a : 'a'};
    console.log(`json: ${typeof myJson}`);
    const myArray = [1,2,3];
    console.log(`array: ${typeof myArray}`);
    const myFunction = (a) => a;
    console.log(`function: ${typeof myFunction}`);
}

export function tsType(): void {
    /* let basket: any = 10;
    basket = true;
    basket = "TV";
    console.log(basket);

    const arr: string[] = ["a", "b", "c"];
    console.log(arr);
    for(let i in arr) {
       console.log(arr[i]);
    }
    const arr2: Array<string> = ["d", "f"];
    for(let i in arr2) {
        console.log(arr2[i]);
    }*/
    console.log(`----enum-----`);
    enum WeekDay {
        Mon = 0, Tue = 1, Wed=2, Thu=Tue+Wed
    }
    const thu2: number = 10 * 2;
    enum WeekDay2 {
        Mon = 10, Tue = 11, Wed = 10 << 2, Thu = thu2
    }

    enum WeekDay3 {
        Mon = "Monday", Tue="Tuesday"
    }
    console.log(`1. ${JSON.stringify(WeekDay)}`);
    console.log(`2. ${JSON.stringify(WeekDay2)}`);
    console.log(`3. ${JSON.stringify(WeekDay3)}`);

    console.log(`4. Mon = ${WeekDay.Mon}, Tue=${WeekDay["Tue"]}, Wed=${WeekDay.Wed}`);
    console.log(`5. 0 = ${WeekDay[0]}, 1 = ${WeekDay[1]}, 3=${WeekDay.Wed}`);
    console.log(`6. ${typeof WeekDay}`);
    console.log(`7. ${typeof WeekDay.Mon}, ${typeof WeekDay3.Mon}`);
    console.log(`8. ${typeof WeekDay[0]}, ${WeekDay[0]}`);

    const myDay: WeekDay = 50;
    console.log(`9. ${typeof myDay}, ${myDay}`);
    const myDay2: WeekDay3 = WeekDay3.Mon;
    console.log(`10. ${typeof myDay2}, ${myDay2}`);
}

export function symbolType(): void {
    const hello = Symbol("hello");
    const hello2 = Symbol("hello");
    // @ts-ignore
    console.log(hello === hello2);
    console.log(hello, hello2);
    console.log(typeof hello);
    console.log(typeof hello2);

    console.log(`------ Symbol 2 ------`);
    const uniqueKey = Symbol();
    let obj = {}
    obj[uniqueKey] = 1234
    console.log(obj)

}

export function tupleType(): void {
    let x: [string, number];
    x = ["tuple", 100];
    console.log(typeof x, typeof x[0], typeof x[1]);
    console.log(x[0].substr(0,2), x[1].toFixed(2));

    let x2: [string, number, string, boolean] = ["tuple", 3, "tuple2", true];
    console.log(x2);
}