import hello, {goodbye, birthday, calculate_add} from './hello'
import jsTypes, {tsType, symbolType, tupleType} from "./jsTypes";
import operator, {destructure, spread} from "./operator";
import loop from "./loop";

let menu: number = 11
let name, profile, message: string = "";
switch (menu) {
    case 0:
        name = "홍길동";
        message = goodbye(name);
        console.log(message);
        break;
    case 1 :
        name = "홍길동";
        message = hello(name);
        console.log(message);
        break;
    case 2:
        name = "김유신";
        let year: number = 2002;
        profile = JSON.stringify(birthday(name, year));
        console.log(profile);
        break;
    case 3:
        const num1: number = 10
        const num2: number = 30
        let addResult: number = calculate_add(num1, num2)
        console.log(`덧셈결과: ${addResult}`)
        break;
    case 4:
        jsTypes();
        break;
    case 5:
        tsType();
        break;
    case 6:
        symbolType();
        break;
    case 7:
        tupleType();
        break;
    case 8:
        operator();
        break;
    case 9:
        destructure();
        break;
    case 10:
        spread();
        break;
    case 11:
        loop();
        break;

    default:
        console.log("존재하지 않은 케이스 입니다.");
        break;

}