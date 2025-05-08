const fun = () => {
    variable++;
}
let variable = 10;


for (let i = 0; i < 1e9; i++) {
    fun();
}
% NeverOptimizeFunction(fun);
% NeverOptimizeFunction(variable);