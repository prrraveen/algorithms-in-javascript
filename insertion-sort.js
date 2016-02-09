function Solution(A){
    for(var j = 1;j < A.length; j++){
        var key = A[j];
        i = j-1;
        console.log(j)
        while(i >= 0 && A[i] > key)
        {
            console.log('i ='+i)
            A[i+1] = A[i]
            i--;
        }
        A[i+1] = key
    }
    return A
}
a = [5,2,4,6,1,3]
console.log(Solution(a))
