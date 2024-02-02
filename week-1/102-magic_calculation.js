// Write the Python function def magic_calculation(a, b, c): that does exactly the same as the following Python bytecode:

//   3           0 LOAD_FAST                0 (a)
//               3 LOAD_FAST                1 (b)
//               6 COMPARE_OP               0 (<)
//               9 POP_JUMP_IF_FALSE       16

//   4          12 LOAD_FAST                2 (c)
//              15 RETURN_VALUE

//   5     >>   16 LOAD_FAST                2 (c)
//              19 LOAD_FAST                1 (b)
//              22 COMPARE_OP               4 (>)
//              25 POP_JUMP_IF_FALSE       36

//   6          28 LOAD_FAST                0 (a)
//              31 LOAD_FAST                1 (b)
//              34 BINARY_ADD
//              35 RETURN_VALUE

//   7     >>   36 LOAD_FAST                0 (a)
//              39 LOAD_FAST                1 (b)
//              42 BINARY_MULTIPLY
//              43 LOAD_FAST                2 (c)
//              46 BINARY_SUBTRACT
//              47 RETURN_VALUE
// tips - ByteCode



//SOLUTION===========


function magic_calculation(a, b, c) {
    if (a < b) {
        return c;
    } else if (c > b) {
        return a + b;
    } else {
        return a * b - c;
    }
}

// Disassemble and display the bytecode
const { code } = require('util').inspect(magic_calculation, { showHidden: true, depth: null });
console.log(code);
