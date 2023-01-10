const tab = [1, 2, 3, 4, 5];
const tab2 = ['Marcin', 30, 'Gliwice'];

type userName = string;
type userAge = number;
type userCity = string;

const userData: [userName, userAge, userCity] = ['Marcin', 30, 'Gliwice']

interface UserSimple {
    name: string;
    surname: string;
    city: string;
}


interface User {
    name: string;
    surname: string;
    age?: number;
}

const user: UserSimple = {
    name: 'Marcin',
    surname: 'Grygierek',
    city: 'Gliwice'
}

const simple: User = {...user, age: 120};
console.log(simple);
