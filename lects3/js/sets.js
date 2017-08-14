function set1() {
    function fib(memberNr) {

        var prev = 1;
        var cur = 1;
        if (memberNr < 1) {
            return 0;
        }
        else if (memberNr == 1) {
            return 1;
        }
        else {
            for (var i = 2; i < memberNr; i++) {
                [prev, cur] = [cur, cur + prev];

            }
            return cur;

        }

    }
    console.log(fib(6));

}

function set2() {
    function* genDemo() {

        for (var i = 0; i < 3; i++) {
            yield i;

        }

    }
    var f = genDemo();
    console.log(f.next());
    console.log(f.next());
    console.log(f.next());
    console.log(f.next());

}
