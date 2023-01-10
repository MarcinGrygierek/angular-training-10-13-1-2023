// destrukturyzacja obiektu
const user = {
    name: 'Marcin',
    lastName: 'Grygierek',
    address: {
        city: 'Gliwice'
    }
}

// const name = user.name;
// const lastName = user.lastName;
// const city = user.address.city;

const { name, lastName, address: { city } } = user;

// destrukturyzacja tablicy
const arr = [1, 2, 3, 4, 5, 6];
const [el1, ...rest] = arr; // tablica rest będzie zawierać wsyzstkie elementy oprócz pierwszego