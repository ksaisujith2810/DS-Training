function strCount(a, b) {
    // Delare and Assign
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            // reassigned
            count = count + 1
        }
    }
    return count
}
// invoke the function
console.log(strCount('hello', 'o'));

// reusable
console.log(strCount('hello', 'l'));
console.log(strCount('', 'z'));

/*  h    e    l    l    o
    0    1    2    3    4

    1)i=0;0<5
    h===o - false
    i++

    2)i=1;1<5
    e===o - false
    i++

    3)i=2;2<5
    l===o - false
    i++

    4)i=3;3<5
    l===o - false
    i++

    5)i=4;4<5
    o===o - true
    i++

    6)i=5;5<5 false
    comes out of the loop   
*/