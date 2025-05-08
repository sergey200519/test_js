console.time("Execution Time");

function doSome(n) {
    var p1 = 5_000_000;
    var p2 = 0;
    var p3 = 0;

    while (p3++ < p1) {
        p2 += n;
    }
    
    document.querySelector(".text").textContent = p2;
}

doSome(1);



console.timeEnd("Execution Time");
