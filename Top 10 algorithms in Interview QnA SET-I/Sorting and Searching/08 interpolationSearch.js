function interpolationSearch(arr, x) { 
    // Find indexes of two corners 
    let lo = 0;
    let hi = (arr.length - 1); 
    let pos;
    
    // Since array is sorted, an element present 
    // in array must be in range defined by corner 
    while (lo <= hi && x >= arr[lo] && x <= arr[hi]) 
    {         

        if (lo == hi) 
        { 
            if (arr[lo] == x) return lo; 
            return -1; 
        } 
        
        // Probing the position with keeping 
        // uniform distribution in mind. 
            
        pos = Math.floor(lo + (((hi-lo) / (arr[hi]-arr[lo]))*(x - arr[lo])));
    
        // Condition of target found 
        if (arr[pos] == x) 
            return pos; 
    
        // If x is larger, x is in upper part 
        if (arr[pos] < x) 
            lo = pos + 1; 
    
        // If x is smaller, x is in the lower part 
        else
            hi = pos - 1; 
    } 
    return -1; 
}

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 
    24, 33, 35, 42, 47];
let x = 18;
console.log(interpolationSearch(arr, x));