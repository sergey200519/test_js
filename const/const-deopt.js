const c = 6;

const fun = (i) => () => {
    return c + i;
}


for (var i = 0; i < 1e9; i++) {
    fun(i);
}