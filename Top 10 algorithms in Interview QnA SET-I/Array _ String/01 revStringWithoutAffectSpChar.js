function isAlphabet(str, idx){
    return ((str.charCodeAt(idx) >= 65 && str.charCodeAt(idx) <= 90) || (str.charCodeAt(idx) >= 97 && str.charCodeAt(idx) <= 122))
        
}
function revStringWithoutAffectChar(str){
    let i = 0;
    let j = str.length-1;
    let temp;
    let res = str.split("");
    while(i < j){
        if(!isAlphabet(str, i)){
            i++;
        } 
        else if(!isAlphabet(str, j)){
            j--;
        } else {
            temp = res[i];
            res[i] = res[j];
            res[j] = temp;
            i++;
            j--;
        }
    }
    return res.join('')
}

let str = "a,b$c";
console.log(revStringWithoutAffectChar(str));
