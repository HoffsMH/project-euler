function leastCommonMultiple(min, max) {
    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }


    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }

    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}

function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}


// console.log(gcd(240, 321));
console.log(leastCommonMultiple(1, 40));
