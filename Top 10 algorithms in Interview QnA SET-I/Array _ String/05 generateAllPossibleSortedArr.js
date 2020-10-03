function generateAllPossibleSortedArr(A, B, C,  i,  j,  m,  n, len,  flag){
    if (flag) // Include valid element from A 
	{ 
		// Print output if there is at least one 'B' in output array 'C' 
		if (len) 
            console.log(C); // len+1 
            

		// Recur for all elements of A after current index 
		for (let k = i; k < m; k++) 
		{ 
			if (!len) 
			{ 
				/* this block works for the very first call to include 
                    the first element in the output array */
                C[len] = A[k]; 
				// don't increment lem as B is included yet 
				generateAllPossibleSortedArr(A, B, C, k+1, j, m, n, len, !flag); 
			} 
			else	 /* include valid element from A and recur */
			{ 
				if (A[k] > C[len]) 
				{   
                    C = [];
                    C[len+1] = A[k];
                    C = []
					generateAllPossibleSortedArr(A, B, C, k+1, j, m, n, len+1, !flag); 
				} 
			} 
		} 
	} 
	else /* Include valid element from B and recur */
	{ 
		for (let l = j; l < n; l++) 
		{ 
			if (B[l] > C[len]) 
			{   
                C[len+1] = B[l]; 
				generateAllPossibleSortedArr(A, B, C, i, l+1, m, n, len+1, !flag); 
			} 
		} 
	} 
}

let A = [10, 15, 25];
let B = [1, 5, 20, 30];
let n = A.length; 
let m = B.length; 
let C = [];
console.log(generateAllPossibleSortedArr(A, B, C, 0, 0, m, n, 0, true));
