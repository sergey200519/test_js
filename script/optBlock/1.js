function fun2(n) {
    var summ = 0
    for (var i = 0; i < n; i++) {
        summ += i
    }
    return summ
}

% NeverOptimizeFunction(fun2);
console.log(fun2(500000))