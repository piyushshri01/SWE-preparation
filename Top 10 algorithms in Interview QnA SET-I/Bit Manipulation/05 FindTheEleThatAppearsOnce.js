// O(n)
function FindTheEleThatAppearsOnce(arr) {
    let cnt = [];
    for(let i = 0; i < 64; i++){
        cnt[i] = 0;
    }
    for(let i = 0; i < arr.length; i++){
        let j = 0;
        let no = arr[i];
        while(no > 0) {
            cnt[j] += (no&1);
            j++;
            no = (no >> 1);
        }
        // console.log(arr[i], cnt);
    }

    // Take mode of cnt arr
    let res = 0;
    let p = 1;
    for(let i = 0; i < 64; i++){
        res+= (cnt[i]%3) * p;
        p = p<<1; // p = p * 2;
    }
    return res;
}
console.log(FindTheEleThatAppearsOnce([12, 1, 12, 3, 12, 1, 1, 2, 3, 3]));
console.log(FindTheEleThatAppearsOnce([10, 20, 10, 30, 10, 30, 30]));


// O(n)
function getSingle(arr){
    let ones = 0
    let twos = 0
      
    for (let i = 0; i < arr.length; i++){
        // one & arr[i]" gives the bits that 
        // are there in both 'ones' and new 
        // element from arr[]. We add these 
        // bits to 'twos' using bitwise OR 
        twos = twos | (ones & arr[i]) 
          
        // one & arr[i]" gives the bits that 
        // are there in both 'ones' and new 
        // element from arr[]. We add these 
        // bits to 'twos' using bitwise OR 
        ones = ones ^ arr[i] 
          
        // The common bits are those bits  
        // which appear third time. So these 
        // bits should not be there in both  
        // 'ones' and 'twos'. common_bit_mask 
        // contains all these bits as 0, so 
        // that the bits can be removed from 
        // 'ones' and 'twos' 
        common_bit_mask = ~(ones & twos) 
          
        // Remove common bits (the bits that  
        // appear third time) from 'ones' 
        ones &= common_bit_mask 
          
        // Remove common bits (the bits that 
        // appear third time) from 'twos' 
        twos &= common_bit_mask 
    }

    return ones
} 
 
console.log(getSingle([12, 1, 12, 3, 12, 1, 1, 2, 3, 3]));
console.log(getSingle([10, 20, 10, 30, 10, 30, 30]));
