
export default function hello(name: string):string {
    return `안녕 ${name}`;
}

export function goodbye(name: string):string {
    return `잘가 ${name}`;
}

export function birthday(name: string, birthyear: number): object {
    const profile: object = {
        name: name,
        age: new Date().getFullYear()-birthyear
    }
    return profile;
}

export function calculate_add(num1: number, num2: number): number {
    return num1+num2;
}