var c = 10;

function outer() {
    return c + 5;
}

for (let i = 0; i < 1e9; i++) {
    outer(i);
}
