
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
    alert('final si:' + final())

    function rate() {
        r = parseFloat(prompt('annual interest rate:'));
        if (Math.sign(r) === -1 || Math.sign(r) === 0) {
            alert("Invalid input");
            rate();
        }
        R = parseFloat(r / 100);
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
    function final() {
        si = parseFloat(P * R * t);
        return si;
    }
}
)();