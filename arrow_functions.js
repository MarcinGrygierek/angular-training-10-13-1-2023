const foo = (a, b) => {
    return a + b;
}

const foo_2 = (a, b) => a + b;

// problem z thisem - funkcja strzałkowa nie tworzy własnego kontekstu
const foo_3 = {
    hello: function() {
        console.log(this);
    }
}

const foo_4 = {
    hello: () => {
        console.log(this);
    }
}

foo_3.hello() // jako this dostaniemy obiekt foo_3
foo_4.hello() // jako this Window