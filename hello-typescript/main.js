var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2;
var pi = 4;
var numeros = [1, 2, 3, 4];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES 2015

var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
