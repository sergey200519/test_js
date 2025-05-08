const fun = () => {
    variable++;
}
var variable = 10;


for (var i = 0; i < 1e9; i++) {
    fun();
}
% NeverOptimizeFunction(fun);
% NeverOptimizeFunction(variable);