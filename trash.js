// Тест производительности с var и let
console.time('var loop');
function fun1() {
    var b = a;
}
var a = 10;

for (var i = 0; i < 1_000_000_000; i++) {
    fun1();
}
console.timeEnd('var loop');

console.time('let loop');
function fun2() {
    let b = a;
}
let b = 10;

for (let i = 0; i < 1_000_000_000; i++) {
    fun2();
}
console.timeEnd('let loop');
