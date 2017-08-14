function set5() {
    function first() {
        alert('first type');

    }
    first();
    var second = function() {
        alert('second type');

    };
    second();

    (function() {
        alert('second mod type');

    })();
    var firstFunc = new Function('', "alert('obj style');");
    firstFunc();
}

function set6() {

    var f = (a, b) => a + b;
    alert(f(1, 2));
    alert(f(1, f(2, 3)));

    var person = {
        firstName: 'John',
        lastName: 'Doe',
        fullName: () => person.firstName + " " + person.lastName

    };

    console.log(person.fullName());


}

function set7() {
    function test(arg1, arg2) {
        console.log(arg1);
        console.log(arg2);
        console.log(arguments);
    }

    test(1, 2, 3, 4);

}

function set8() {
    function calc(opcode) {
        return function(op1, op2) {

            switch (opcode) {
                case '+':
                    return op1 + op2;
                case '-':
                    return op1 - op2;
                default:
                    return Number.NaN;

            }
        };

    }
    var eq1 = calc('+');
    console.log(eq1(1, 2));
    var eq2 = calc('-');
    console.log(eq2(2, 3));
    console.log(eq1(eq1(1, 2), eq2(2, 3)));

    function person(first, last) {
        return function full(action) {
            return action + " " + first + " " + last;

        };

    }
    var pers = person("John", "Doe");
    console.log(pers("Hi"));
    console.log(pers("Kill"));



}

function set9() {
    var data = [1, 2, 3];


    data.forEach(function(val, index, dataArr) {
        dataArr[index] = val * 2;

    });

    console.log(data);


    function calc(operation) {
        return function(val, index, dataArr) {
            dataArr[index] = operation(dataArr[index], val);
        };

    }

    data = [1, 2, 3];
    data.forEach(calc((a, b) => a * b));
    console.log(data);

}

function set10() {

    function fibonacci() {
        var elems = [0, 1];
        return function calc(numElems) {
            if (numElems < elems.length) {
                return elems.slice(0, elems.length);
            }
            else {
                for (var i = elems.length; i < numElems; i++) {
                    elems[i] = elems[i - 1] + elems[i - 2];
                }
            }
            return elems;
        };
    }
    
    var fib = fibonacci();
    console.log(fib(10));

    function initFib() {
        var vals = [0, 1];

        function calc(num) {
            if (num in vals) {
                return vals[num];
            }
            else return vals[num] = calc(num - 1) + calc(num - 2);
        }
        return function(num) {
            calc(num);
            return vals.splice(0, num - 1);
        };

    }

    var fib = initFib();
    console.log(fib(10));

}
