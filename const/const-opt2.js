const fun = (i) => {
    const c = 6;
    const fun2 = () => {
        return c + i;
    }
    fun2();
}


for (var i = 0; i < 1e9; i++) {
    fun(i);
}