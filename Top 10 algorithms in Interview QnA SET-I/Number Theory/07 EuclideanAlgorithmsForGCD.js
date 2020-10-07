function uclideanAlgorithmsForGCD(a, b, x, y) {
    // // get gcd method 1
    // function gcd(a, b) 
    // { 
    //     if (a == 0) 
    //         return b; 
    //     return gcd(b % a, a); 
    // } 
  
    // get gcd method 2
    function gcdExtended(a, b, x, y)  
    {  
        // Base Case  
        if (a == 0)  
        {  
            x = 0;  
            y = 1;  
            return b;  
        }  
        
        // To store results of recursive call  
        let x1 = 1;
        let y1 = 1; 
        let gcd = gcdExtended(b%a, a, x1, y1);  
    
        // Update x and y using results of  
        // recursive call  
        x = y1 - Math.floor(b/a) * x1;  
        y = x1;  
    
        return gcd;  
    } 

    return gcdExtended(a, b, x, y)

}

// // gcd method 1
// function gcd(a,b){
//     if(a < b){
//         return gcd(b, a);
//     } else if(a%b === 0){
//         return b;
//     } else {
//         return gcd(b, a%b)
//     }
// }




// console.log(gcd(2,4));
// console.log(gcd(36,60));
// console.log(gcd(1,15));
// console.log(gcd(100,50));
// console.log(gcd(2,6));
// console.log(gcd(10,15));
// console.log(gcd(35,10));
// console.log(gcd(31,2));

let a = 10;
let b = 15;
let x, y;
// optimize solution 
console.log(uclideanAlgorithmsForGCD(a,b,x,y));
