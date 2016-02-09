/**
 * Created by ubu12 on 8/2/16.
 */
/**
 * Maximum Subarry problem
 *
 * */

A = [31,    -41,    59,     26,     -53,    58,     97,     -93,    -23,    84];

function maxSubArray(A){
    if(A.length==1){
        return 0;
    }
    var mid = A.length/2;
    var left = A.slice(0,mid);
    var right = A.slice(mid);
    maxSubArray(left);
    maxSubArray(right);

    reget_mid_max(A)
}

maxSubArray(A=A);