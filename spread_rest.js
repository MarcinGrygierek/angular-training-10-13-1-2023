// Kopiowanie tablicy
const tab = [1, 2, 3, 4, 5];
const tab_copy = tab; // skopiowanie referencji!
const tab_copy_ok = [...tab];
const tab_mixed = [1, 2, 3, ...tab, 4, 5, 6];
const tab_2 = [10, 11, 12];
const merged = [...tab, ...tab_2];

// kopiowianie obiektów
const obj = { a: 10, b: 100 }
const obj_copy = { ...obj };

const nested_obj = { a: 10, b: { value: 1000 } };

// głęboka kopia
const nested_obj_copy = {
    ...nested_obj,
    b: {
        ...nested_obj.b
    }
}

// rest operator - zmienna ilość parametrów 
function foo(...args) {
    console.log(args); //args to tablica zawierająca parametry
}