const c = 6;

const fun = (i) => {
    const fun2 = () => {
        const fun3 = () => () => {
            return c + i;
        }
        fun3();
    }
    fun2();
}


for (var i = 0; i < 1e9; i++) {
    fun(i);
}