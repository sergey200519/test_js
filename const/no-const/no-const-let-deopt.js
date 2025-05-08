let c = 10;

function outer() {
    return function inner() {
        c++;
        return c + 5;
    };
}

for (let i = 0; i < 1e9; i++) {
    outer();
}
