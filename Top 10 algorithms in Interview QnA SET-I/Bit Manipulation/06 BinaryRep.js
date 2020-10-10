// function BinaryRep(n){
//     let i; 
//     let arr = []
//     for (i = 1 << 30; i > 0; i = Math.floor(i / 2)) {
//         (n & i)? arr.push("1"): arr.push("0"); 
        
//     }
//     console.log(arr);
// }

// recursively
function BinaryRep(n){
    if (n > 1){
        BinaryRep(n >> 1) 
    }     
    console.log(n & 1) 
}

// BinaryRep(2); 
// BinaryRep(1); 
BinaryRep(10); 

