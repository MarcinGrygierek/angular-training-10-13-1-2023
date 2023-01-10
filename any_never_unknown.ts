// funkcja nigdy nic nie zwróci - więc typ never
const foo = () => {
    throw Error('error')
}

const bar = (a: number) => {
    if(a > 10) foo();
    return a * a;
}

// any
let a: any = 10;
a = true;

// unknown
let b: unknown;
b = 'Lorem ipsum';
b = 1231;

interface User {
    name: string;
}

const asd = 'string' as unknown as User;