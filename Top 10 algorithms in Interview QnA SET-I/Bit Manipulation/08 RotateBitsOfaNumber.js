// Rotate Bits Of a Number
let INT_BITS = 32
  
// Function to left 
// rotate n by d bits 
function leftRotate(n, d){
        // In n<<d, last d bits are 0. 
    // To put first 3 bits of n at  
    // last, do bitwise or of n<<d 
    // with n >>(INT_BITS - d)  
    return (n << d)|(n >> (INT_BITS - d)) 
    // return n << d
} 
  

  
// Function to right 
// rotate n by d bits 
function rightRotate(n, d){
    // In n>>d, first d bits are 0. 
    // To put last 3 bits of at  
    // first, do bitwise or of n>>d 
    // with n <<(INT_BITS - d)  
    return (n >> d)|(n << (INT_BITS - d)) & 0xFFFFFFFF // 001 | 10000 << 30 & 0xFFFFFFFF
} 
  

let n = 16;
let d = 2;
console.log("Left Rotation of",n,"by" ,d,"is", leftRotate(n, d));
  
console.log("Right Rotation of",n,"by" ,d,"is", rightRotate(n, d)); 