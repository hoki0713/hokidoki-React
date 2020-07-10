export default function operator(): void {
    console.log("----- 산술 연산자 -----");
    console.log(`10 ** 3 : ${10 ** 3}`);
    console.log("------ 부정 연산자 -------");
    console.log(`!"hello": ${!"hello"}, !!"hello": ${!!"hello"}`);
    console.log(`!0 : ${!0}, !!0: ${!!0}, !1: ${!1}, !2: ${!2}`);
    console.log(`!true: ${!true}, !!true: ${!!true}`);
}

export function destructure() {
    console.log(`------ 객체 구조분해 ------`);
    const {a, b, ...c} = {a: 10, b: 20, c: 30, d:40};
    console.log(`${a}`);
    console.log(`${b}`);
    console.log(`${c}`);

    console.log(`------ 배열 구조분해 ------`);
    const numbers = ["a","b","c","d","e"];
    const [num1, num2] = numbers;
    console.log(` [num1, num2] : ${num1}, ${num2}`);
    let [ , ,num3,num4,] = numbers;
    console.log(`[ , ,num3,num4] : ${num3}, ${num4}`);
    [num4, num3] = [num3, num4];
    console.log(`[num4, num3] = [num3, num4] : ${num3}, ${num4}`);

    console.log(`------ 함수 배열 구조분해 ------`);

    fn([100, "hello"]);

    function fn([a, b]: [number, string]) {
        console.log(`함수배열 내부${a}`);
        console.log(`함수배열 내부${b}`);
    }

    console.log(`------ 함수 객체 구조분해 ------`);
    printProfile({name: "hojeong"});
    printProfile({name: "유관순", nation: "미국"});
    function printProfile({name, nation="Korea"}={name:""}){
        console.log(name, nation);
    }

    console.log(`------ 사용자 타입 객체 구조분해 ------`);
    type Custom = {
        a: string,
        b: number
    };
    function fruit({a, b}: Custom): void {
        console.log(a,b);
    }
    fruit.defaultProps = {
       a: "사과",
       b: 1000
    };

    const x:Custom = {
        a:"배",
        b: 2000
    };
    fruit({a:"사과", b:1000});

}
export function spread() {
    console.log(`--- 스프레드 연산자 ----`);
    // 배열 합치기
    let arr: number[] = [1,2]
    let arr2: number[] = [...arr,3,4];
    console.log(`배열 1번 형태 ${arr2}`)

    // 배열 디스트럭쳐링
    let [a, ...rest]: [number, number, number, number] = [1,2,3,4];
    console.log(`배열 2번 형태 ${a}`);
    console.log(`배열 3번 형태 ${rest}`);
    console.log(`배열 4번 형태 ${rest[0]}`);
}


