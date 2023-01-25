let P;
let r;
let t;
let si;
let R;

// validtion

(function Prompt() {
    principal()
    rate()
    time()
    // N()
    alert('final si:' + final())

    // final()

    function rate() {
        r = parseFloat(prompt('annual interest rate:'));
        if (Math.sign(r) === -1 || Math.sign(r) === 0) {
            alert("Invalid input");
            rate();
        }
    }

    function time() {
        t = parseFloat(prompt('time(in years)'));
        if (Math.sign(t) === -1 || Math.sign(t) === 0) {
            alert("Invalid input");
            time();
        }
    }
    function principal() {
        P = parseFloat(prompt('Initial principal balance: '));
        if (Math.sign(P) === -1 || Math.sign(P) === 0) {
            alert("Invalid input");
            principal();
        }
    }
    // function N() {
    //     n = parseFloat(prompt('Number of times the intrest is compounded annually: '));
    //     if (Math.sign(n) === -1 || Math.sign(n) === 0) {
    //         alert("Invalid input");
    //         N();
    //     }
    // }

    function final() {
        R = parseFloat(r / 100);
        x = (1 + (R / 12))
        v = 12 * t
        si = parseFloat(P * (Math.pow(x, v))).toFixed(2);
        return si;
    }
}
)();