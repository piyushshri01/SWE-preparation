function incredibleHulk(n){
    let jumpCount = 0;
    while(n > 0){
        jumpCount += (n&1)
        n = n >> 1;
    }
    return jumpCount;
}

console.log(incredibleHulk(13));