solution = function(A){
	console.log("orignal" + A)
	for(var i =0 ; i < A.length -1;i++){
		console.log('i is='+i)
		for(var j = i+1 ; j < A.length; j++){
			console.log(A[j] +'<'+A[i])
			if(A[j] < A[i])
			{	
				var temp = A[i]
				A[i] = A[j]
				A[j] = temp
			}
		console.log('here comes the sun.tadA..' + A)
		}
	}
	return A
}
console.log(solution([5,3,1,1,4]))
