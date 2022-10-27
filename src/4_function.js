function add(a, b) {
    return a + b;
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { X: a, y: b };
}
console.log('empty', position());
console.log('One param', position(42));
console.log('two params:', position(10, 15));
