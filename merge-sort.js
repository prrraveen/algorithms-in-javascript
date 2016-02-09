//A = [5,4,7,8,1,2,45,54,2,3,9];
////A = [1,2,3,4,5,6,7,8];
//function merge_sort(list){
//    var len = list.length;
//    if(len <= 1)
//        return;
//    var left = list.slice(0,len/2);
//    var right = list.slice(len/2,len);
//    merge_sort(list = left);
//    merge_sort(list = right);
//    console.log('before'+left)
//    console.log('before'+right)
//    merge(list,left,right);
//    console.log('after'+left)
//    console.log('after'+right)
//
//    return list;
//}
//
//function merge(list,left,right){
//    var i = j = k = 0;
//    while(i < left.length && j < right.length){
//        if(left[i] < right[j]){
//            A[k] = left[i];
//            k++;
//            i++;
//        }else{
//          A[k] = right[j];
//            k++;
//            j++;
//        }
//    }
//}
//
//console.log(merge_sort(A));




function calling(){
    var arr = [1,2]
    console.log(arr); //prints [1,2]
    called(arr);
    console.log(arr); //prints [1,2,3,4],but I was expecting [5,6]

}

function called(arr){
    arr.push(3)
    arr.push(4)
    arr = [5,6]
}

calling()