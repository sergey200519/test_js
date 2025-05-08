console.time("Execution Time");
function write(item, value) {
    item.textContent = value;
}
function doSome(n) {
    var p1 = 5_000_000;
    var p2 = 0;
    var p3 = 0;

    while (p3++ < p1) {
        p2 += n;
    }
}

const value = doSome(1);
const item = document.querySelector(".text");
write(item, value);


console.timeEnd("Execution Time");
